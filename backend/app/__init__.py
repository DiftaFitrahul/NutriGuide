from flask import Flask
from app.config import Config
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from os import environ

app = Flask(__name__)

app.config.from_object(Config)

bcrypt = Bcrypt(app)
db =SQLAlchemy(app)
migrate = Migrate(app, db)

from app.accounts.views import accounts_bp

app.register_blueprint(accounts_bp)

