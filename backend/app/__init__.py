from app.accounts.views import accounts_bp, db
from flask import Flask
from app.config.config import Config
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta

app = Flask(__name__)

app.config.from_object(Config)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
app.config["JWT_TOKEN_LOCATION"] = [
    "cookies"]  # specifying the location of JWT
app.config["JWT_SECRET_KEY"] = "super-secret-key"
app.config["JWT_ACCESS_COOKIE_NAME"] = "Authorization"


db.init_app(app)
jwt = JWTManager(app)
migrate = Migrate(app, db)

app.register_blueprint(accounts_bp)
