from flask_mail import Mail


mail = Mail()

def create_app_mail(app):
    mail.init_app(app)