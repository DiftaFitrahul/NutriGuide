from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, create_refresh_token, set_access_cookies, set_refresh_cookies
from werkzeug.security import generate_password_hash
from app.accounts.models import User
from app.db import db


accounts_bp = Blueprint("accounts", __name__)


@accounts_bp.route('/register', methods=["POST"])
def register():
    data = request.get_json()
    password = data['password']
    email = data['email']

    user = User.query.filter(User.email == email).first()
    print(user)
    if user is None:
        print("Berhasil")
        user = User(email=email, password=password)

        db.session.add(user)
        db.session.commit()
        print("Berhasil 2")
        access_token = create_access_token(identity=email)
        # refresh_token = create_refresh_token(identity=user.email)

        response = jsonify(message="Succes register")
        set_access_cookies(response, access_token)
        # set_refresh_cookies(response, refresh_token)

        return response, 200

    else:
        print("Makan tuh")
        return jsonify(message="Data sudah ada."), 400


@accounts_bp.route('/login', methods=['POST'])
def login():
    data = request.get__json()
