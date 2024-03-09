from flask import Blueprint, flash, redirect, render_template, request, url_for, jsonify
from flask_jwt_extended import create_access_token, create_refresh_token, set_access_cookies, set_refresh_cookies

from app import bcrypt, db
from app.accounts.models import User



accounts_bp = Blueprint("accounts", __name__)


@accounts_bp.route('/register')
def register():
    data = request.get_json()
    password = data['password']
    email = data['email']

    user = User.query.filter_by(email = email).first()
    if user is None:
        user = User(email= email, password= bcrypt.generate_password_hash 
                (password).decode('utf-8'))
        
        
