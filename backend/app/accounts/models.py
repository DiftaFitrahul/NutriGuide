from datetime import datetime
from werkzeug.security import generate_password_hash
from sqlalchemy import inspect
import uuid
from app.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.String, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    is_verified = db.Column(db.Boolean, nullable=False, default=False)

    def __init__(self, email, password, is_admin=False, is_verified=False):
        print("INIT DB")
        self.id = uuid.uuid4()
        self.email = email
        self.password = password
        self.created_on = datetime.now()
        self.is_admin = is_admin
        self.is_verified = is_verified

    def toDict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}
    
class History(db.Model):

    __tablename__ = "history"

    id = db.Column(db.String, primary_key=True)
    email = db.Column(db.String, db.ForeignKey('users.email'), nullable=False)
    prompt = db.Column(db.String, nullable=False)
    response = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False)

    def __init__(self, email, prompt, response):
        print("INIT DB")
        self.id = uuid.uuid4()
        self.email = email
        self.prompt = prompt
        self.response = response
        self.created_on = datetime.now()

    def toDict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}
