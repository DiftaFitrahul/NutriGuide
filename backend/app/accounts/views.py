from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, create_refresh_token, set_access_cookies, set_refresh_cookies

from app import bcrypt, db
from app.accounts.models import User



accounts_bp = Blueprint("accounts", __name__)


@accounts_bp.route('/register', methods= ["POST"])
def register():
    data = request.get_json()
    password = data['password']
    email = data['email']

    user = User.query.filter_by(email = email).first()
    if user is None:
        user = User(email= email, password= bcrypt.generate_password_hash 
                (password).decode('utf-8'))
        
        db.session.add(user)
        db.session.commit()
        access_token = create_access_token(identity={"email": email})
        response = jsonify({"msg":"register account succesfully"})
        set_access_cookies(response, access_token)
        return response, 200
    else:
        return jsonify(message="Unable to create user."), 400
        
    
    
        
        
