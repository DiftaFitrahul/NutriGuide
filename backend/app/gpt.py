import openai
from app.config.config import Config

openai.api_key = Config.OPENAPI_KEY
client = openai

context = "You are an expert in food-related topics such as nutrition facts, food recommendations, recipes, and dietary advice."

def gpt(prompt):
    resp = client.chat.completions.create(
        model='gpt-3.5-turbo',
        messages=[
            {"role": "system", "content": context},
            {"role": "user", "content": prompt}
            ]
    )

    return resp.choices[0].message.content

def dall_e(gpt_content):
    dall_e_prompt = f"Create a realistic image of {gpt_content}"

    dall_e_response = client.images.generate(
        model="dall-e-2",
        prompt=dall_e_prompt,
        n=1,
        size="1024x1024"
    )

    # Extract the DALL-E image URL
    image_url = dall_e_response.data[0].url

    return image_url
    

def create_app_gpt(app):
    gpt.init_app(app)