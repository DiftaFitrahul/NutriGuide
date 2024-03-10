from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
migrate = Migrate()


def create_app_db(app):
    db.init_app(app)
    jwt = JWTManager(app)
    migrate.init_app(app, db)
