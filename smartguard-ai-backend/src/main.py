import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db
from src.models.content import Homepage, Feature, ContactSubmission, SiteSettings
from src.routes.user import user_bp
from src.routes.content import content_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Enable CORS for all routes
CORS(app)

app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(content_bp, url_prefix='/api')

# uncomment if you need to use database
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
with app.app_context():
    db.create_all()
    
    # Initialize default data if tables are empty
    if not Homepage.query.first():
        default_homepage = Homepage(
            hero_title='SmartGuard AI: Protezione Intelligente. Semplificata.',
            hero_subtitle='La prossima generazione di sicurezza, alimentata dall\'intelligenza artificiale per anticipare e neutralizzare le minacce prima che colpiscano.',
            hero_cta_text='Richiedi una Demo',
            problem_section_title='Il Problema della Sicurezza Tradizionale',
            problem_section_content='Le soluzioni di sicurezza tradizionali reagiscono alle minacce dopo che si sono già manifestate. In un mondo digitale in rapida evoluzione, questo approccio reattivo non è più sufficiente.',
            solution_section_title='La Soluzione SmartGuard AI',
            solution_section_content='SmartGuard AI trasforma l\'approccio alla sicurezza digitale, passando da una strategia reattiva a una proattiva, utilizzando l\'intelligenza artificiale per anticipare e neutralizzare le minacce.'
        )
        db.session.add(default_homepage)
    
    if not Feature.query.first():
        default_features = [
            Feature(
                title='Rilevamento Proattivo',
                short_description='L\'AI analizza pattern anomali per identificare minacce in tempo reale, anticipando gli attacchi prima che possano causare danni.',
                icon_url='/icons/eye-circuit.png',
                order_index=1
            ),
            Feature(
                title='Difesa Adattiva',
                short_description='Il sistema apprende e si adatta costantemente a nuove vulnerabilità, migliorando continuamente le sue capacità di protezione.',
                icon_url='/icons/shield-network.png',
                order_index=2
            ),
            Feature(
                title='Privacy by Design',
                short_description='Sicurezza senza compromessi sulla privacy dei tuoi dati, con crittografia end-to-end e controllo totale delle informazioni.',
                icon_url='/icons/privacy-lock.png',
                order_index=3
            )
        ]
        for feature in default_features:
            db.session.add(feature)
    
    db.session.commit()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
