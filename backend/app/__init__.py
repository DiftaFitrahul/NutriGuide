from app.accounts.views import accounts_bp
from flask import Flask
from app.config.config import Config
from datetime import timedelta
from app.db import create_app_db

app = Flask(__name__)

app.config.from_object(Config)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
app.config["JWT_TOKEN_LOCATION"] = ["cookies"]
app.config["JWT_SECRET_KEY"] = "super-secret-key"
app.config["JWT_ACCESS_COOKIE_NAME"] = "Authorization"
create_app_db(app)
app.register_blueprint(accounts_bp)
