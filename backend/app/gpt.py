import openai
from app.config.config import Config

openai.api_key = Config.OPENAPI_KEY
client = openai

def gpt(prompt):
    resp = client.chat.completions.create(
        model='gpt-3.5-turbo',
        messages=[{"role": "user", "content": prompt}]
    )

    return resp.choices[0].message.content

def create_app_gpt(app):
    gpt.init_app(app)