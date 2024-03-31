import os
from dotenv import load_dotenv

load_dotenv()

POSTGRES_URL = os.getenv("POSTGRES_URL")
POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PW = os.getenv("POSTGRES_PW")
POSTGRES_DB = os.getenv("POSTGRES_DB")

# MAIL_SERVER= os.getenv("MAIL_SERVER")
# MAIL_PORT= int(os.getenv("MAIL_PORT"))
# MAIL_USE_TLS= os.getenv("MAIL_USE_TLS")
# MAIL_USE_SSL= os.getenv("MAIL_USE_SSL")
# MAIL_USERNAME= os.getenv("MAIL_USERNAME")
# MAIL_PASSWORD= os.getenv("MAIL_PASSWORD")
# MAIL_DEFAULT_SENDER= os.getenv("MAIL_DEFAULT_SENDER")

DB_URL = 'postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(
    user=POSTGRES_USER, pw=POSTGRES_PW, url=POSTGRES_URL, db=POSTGRES_DB)


class Config(object):
    SQLALCHEMY_DATABASE_URI = DB_URL
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    # MAIL_SERVER = MAIL_SERVER
    # MAIL_PORT = MAIL_PORT
    # MAIL_USE_TLS = MAIL_USE_TLS
    # MAIL_USE_SSL = MAIL_USE_SSL
    # MAIL_USERNAME = MAIL_USERNAME
    # MAIL_PASSWORD = MAIL_PASSWORD
    # MAIL_DEFAULT_SENDER = MAIL_DEFAULT_SENDER
