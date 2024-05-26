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
    user_id = db.Column(db.String, db.ForeignKey('users.id'), nullable=False)
    prompt = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    response = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False)

    def __init__(self, user_id, prompt, image_url, response):
        print("INIT DB")
        self.id = str(uuid.uuid4())
        self.user_id = user_id
        self.prompt = prompt
        self.image_url = image_url
        self.response = response
        self.created_on = datetime.now()

    def toDict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}


class Bookmark(db.Model):
    __tablename__ = "bookmarks"

    id = db.Column(db.String, primary_key=True)
    history_id = db.Column(db.String, ForeignKey('history.id'), nullable=False)
    user_id = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False)

    history = relationship("History", backref="bookmarks")

    def __init__(self, history):
        print("INIT DB")
        self.id = str(uuid.uuid4())
        self.history_id = history.id
        self.user_id = history.user_id
        self.created_on = datetime.now()

    def toDict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}


class Trending(db.Model):
    __tablename__ = "trending"

    id = db.Column(db.String, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False)

    def __init__(self, title, image_url, content):
        print("INIT DB")
        self.id = str(uuid.uuid4())
        self.title = title
        self.image_url = image_url
        self.content = content
        self.created_on = datetime.now()

    def toDict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}
