from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from src.models.content import db, Homepage, Feature, ContactSubmission, SiteSettings
import json

content_bp = Blueprint('content', __name__)

# Homepage Content API
@content_bp.route('/homepage', methods=['GET'])
@cross_origin()
def get_homepage():
    try:
        homepage = Homepage.query.first()
        if homepage:
            return jsonify({
                'success': True,
                'data': homepage.to_dict()
            }), 200
        else:
            # Return default content if none exists
            default_content = {
                'heroTitle': 'SmartGuard AI: Protezione Intelligente. Semplificata.',
                'heroSubtitle': 'La prossima generazione di sicurezza, alimentata dall\'intelligenza artificiale per anticipare e neutralizzare le minacce prima che colpiscano.',
                'heroCtaText': 'Richiedi una Demo',
                'problemSectionTitle': 'Il Problema della Sicurezza Tradizionale',
                'problemSectionContent': 'Le soluzioni di sicurezza tradizionali reagiscono alle minacce dopo che si sono già manifestate.',
                'solutionSectionTitle': 'La Soluzione SmartGuard AI',
                'solutionSectionContent': 'SmartGuard AI trasforma l\'approccio alla sicurezza digitale con l\'intelligenza artificiale.'
            }
            return jsonify({
                'success': True,
                'data': default_content
            }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@content_bp.route('/homepage', methods=['POST', 'PUT'])
@cross_origin()
def update_homepage():
    try:
        data = request.get_json()
        
        homepage = Homepage.query.first()
        if not homepage:
            homepage = Homepage()
            db.session.add(homepage)
        
        homepage.hero_title = data.get('heroTitle', homepage.hero_title)
        homepage.hero_subtitle = data.get('heroSubtitle', homepage.hero_subtitle)
        homepage.hero_cta_text = data.get('heroCtaText', homepage.hero_cta_text)
        homepage.problem_section_title = data.get('problemSectionTitle', homepage.problem_section_title)
        homepage.problem_section_content = data.get('problemSectionContent', homepage.problem_section_content)
        homepage.solution_section_title = data.get('solutionSectionTitle', homepage.solution_section_title)
        homepage.solution_section_content = data.get('solutionSectionContent', homepage.solution_section_content)
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'data': homepage.to_dict()
        }), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

# Features API
@content_bp.route('/features', methods=['GET'])
@cross_origin()
def get_features():
    try:
        limit = request.args.get('limit', type=int)
        features_query = Feature.query.filter_by(is_active=True).order_by(Feature.order_index)
        
        if limit:
            features_query = features_query.limit(limit)
        
        features = features_query.all()
        
        if not features:
            # Return default features if none exist
            default_features = [
                {
                    'id': 1,
                    'title': 'Rilevamento Proattivo',
                    'shortDescription': 'L\'AI analizza pattern anomali per identificare minacce in tempo reale, anticipando gli attacchi prima che possano causare danni.',
                    'iconUrl': '/icons/eye-circuit.png'
                },
                {
                    'id': 2,
                    'title': 'Difesa Adattiva',
                    'shortDescription': 'Il sistema apprende e si adatta costantemente a nuove vulnerabilità, migliorando continuamente le sue capacità di protezione.',
                    'iconUrl': '/icons/shield-network.png'
                },
                {
                    'id': 3,
                    'title': 'Privacy by Design',
                    'shortDescription': 'Sicurezza senza compromessi sulla privacy dei tuoi dati, con crittografia end-to-end e controllo totale delle informazioni.',
                    'iconUrl': '/icons/privacy-lock.png'
                }
            ]
            return jsonify({
                'success': True,
                'data': default_features
            }), 200
        
        return jsonify({
            'success': True,
            'data': [feature.to_dict() for feature in features]
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@content_bp.route('/features', methods=['POST'])
@cross_origin()
def create_feature():
    try:
        data = request.get_json()
        
        feature = Feature(
            title=data['title'],
            short_description=data['shortDescription'],
            detailed_description=data.get('detailedDescription'),
            icon_url=data.get('iconUrl'),
            benefits=json.dumps(data.get('benefits', [])) if data.get('benefits') else None,
            order_index=data.get('orderIndex', 0)
        )
        
        db.session.add(feature)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'data': feature.to_dict()
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@content_bp.route('/features/<int:feature_id>', methods=['PUT'])
@cross_origin()
def update_feature(feature_id):
    try:
        feature = Feature.query.get_or_404(feature_id)
        data = request.get_json()
        
        feature.title = data.get('title', feature.title)
        feature.short_description = data.get('shortDescription', feature.short_description)
        feature.detailed_description = data.get('detailedDescription', feature.detailed_description)
        feature.icon_url = data.get('iconUrl', feature.icon_url)
        feature.order_index = data.get('orderIndex', feature.order_index)
        feature.is_active = data.get('isActive', feature.is_active)
        
        if data.get('benefits'):
            feature.benefits = json.dumps(data['benefits'])
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'data': feature.to_dict()
        }), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@content_bp.route('/features/<int:feature_id>', methods=['DELETE'])
@cross_origin()
def delete_feature(feature_id):
    try:
        feature = Feature.query.get_or_404(feature_id)
        db.session.delete(feature)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Feature deleted successfully'
        }), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

# Contact Form API
@content_bp.route('/contact', methods=['POST'])
@cross_origin()
def submit_contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['firstName', 'lastName', 'email', 'subject', 'message', 'privacyAccepted']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({
                    'success': False,
                    'error': f'Campo obbligatorio mancante: {field}'
                }), 400
        
        if not data['privacyAccepted']:
            return jsonify({
                'success': False,
                'error': 'È necessario accettare la Privacy Policy'
            }), 400
        
        contact = ContactSubmission(
            first_name=data['firstName'],
            last_name=data['lastName'],
            email=data['email'],
            company=data.get('company'),
            phone=data.get('phone'),
            subject=data['subject'],
            message=data['message'],
            privacy_accepted=data['privacyAccepted']
        )
        
        db.session.add(contact)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Richiesta inviata con successo! Ti contatteremo presto.',
            'data': contact.to_dict()
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@content_bp.route('/contact', methods=['GET'])
@cross_origin()
def get_contacts():
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        status = request.args.get('status')
        
        query = ContactSubmission.query
        if status:
            query = query.filter_by(status=status)
        
        contacts = query.order_by(ContactSubmission.created_at.desc()).paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        return jsonify({
            'success': True,
            'data': [contact.to_dict() for contact in contacts.items],
            'pagination': {
                'page': page,
                'pages': contacts.pages,
                'per_page': per_page,
                'total': contacts.total
            }
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

# Site Settings API
@content_bp.route('/settings', methods=['GET'])
@cross_origin()
def get_settings():
    try:
        settings = SiteSettings.query.all()
        settings_dict = {setting.key: setting.value for setting in settings}
        
        return jsonify({
            'success': True,
            'data': settings_dict
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@content_bp.route('/settings', methods=['POST'])
@cross_origin()
def update_settings():
    try:
        data = request.get_json()
        
        for key, value in data.items():
            setting = SiteSettings.query.filter_by(key=key).first()
            if setting:
                setting.value = str(value)
            else:
                setting = SiteSettings(key=key, value=str(value))
                db.session.add(setting)
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Impostazioni aggiornate con successo'
        }), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

