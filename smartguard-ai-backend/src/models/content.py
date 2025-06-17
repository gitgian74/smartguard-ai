from src.models.user import db

class Homepage(db.Model):
    __tablename__ = 'homepage'
    
    id = db.Column(db.Integer, primary_key=True)
    hero_title = db.Column(db.String(200), nullable=False)
    hero_subtitle = db.Column(db.Text, nullable=False)
    hero_cta_text = db.Column(db.String(100), nullable=False)
    problem_section_title = db.Column(db.String(200), nullable=False)
    problem_section_content = db.Column(db.Text, nullable=False)
    solution_section_title = db.Column(db.String(200), nullable=False)
    solution_section_content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def to_dict(self):
        return {
            'id': self.id,
            'heroTitle': self.hero_title,
            'heroSubtitle': self.hero_subtitle,
            'heroCtaText': self.hero_cta_text,
            'problemSectionTitle': self.problem_section_title,
            'problemSectionContent': self.problem_section_content,
            'solutionSectionTitle': self.solution_section_title,
            'solutionSectionContent': self.solution_section_content,
            'createdAt': self.created_at.isoformat() if self.created_at else None,
            'updatedAt': self.updated_at.isoformat() if self.updated_at else None
        }

class Feature(db.Model):
    __tablename__ = 'features'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    short_description = db.Column(db.Text, nullable=False)
    detailed_description = db.Column(db.Text, nullable=True)
    icon_url = db.Column(db.String(500), nullable=True)
    benefits = db.Column(db.Text, nullable=True)  # JSON string
    order_index = db.Column(db.Integer, default=0)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'shortDescription': self.short_description,
            'detailedDescription': self.detailed_description,
            'iconUrl': self.icon_url,
            'benefits': self.benefits,
            'orderIndex': self.order_index,
            'isActive': self.is_active,
            'createdAt': self.created_at.isoformat() if self.created_at else None,
            'updatedAt': self.updated_at.isoformat() if self.updated_at else None
        }

class ContactSubmission(db.Model):
    __tablename__ = 'contact_submissions'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(200), nullable=False)
    company = db.Column(db.String(200), nullable=True)
    phone = db.Column(db.String(50), nullable=True)
    subject = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)
    privacy_accepted = db.Column(db.Boolean, nullable=False, default=False)
    status = db.Column(db.String(50), default='new')  # new, contacted, closed
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'email': self.email,
            'company': self.company,
            'phone': self.phone,
            'subject': self.subject,
            'message': self.message,
            'privacyAccepted': self.privacy_accepted,
            'status': self.status,
            'createdAt': self.created_at.isoformat() if self.created_at else None,
            'updatedAt': self.updated_at.isoformat() if self.updated_at else None
        }

class SiteSettings(db.Model):
    __tablename__ = 'site_settings'
    
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(100), unique=True, nullable=False)
    value = db.Column(db.Text, nullable=False)
    description = db.Column(db.String(500), nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def to_dict(self):
        return {
            'id': self.id,
            'key': self.key,
            'value': self.value,
            'description': self.description,
            'createdAt': self.created_at.isoformat() if self.created_at else None,
            'updatedAt': self.updated_at.isoformat() if self.updated_at else None
        }

