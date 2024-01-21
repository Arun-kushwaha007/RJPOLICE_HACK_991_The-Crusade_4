import openai

from dotenv import load_dotenv
import os

# from config import *
load_dotenv()

openai.api_key = os.getenv('OPEN_API_KEY')

# N_RETRIES = 3

# @retry(stop=stop_after_attempt(N_RETRIES), wait=wait_exponential(multiplier=1, min=4, max=70))
def generate_fir(prompt:str, temperature:float=0.01):
    messages=[
        {
            "role": "system",
            "content":  """
        You have to generate a response based on text input from the user. The response needs to be formal and should follow the Indian Penal Code without any compromise.
        You have to guve proper sections which will be applicable to the collective statements of witnesses and follow the Indian penal code to the T.
        You cannnot use anyother law than Indian Penal Code.
        The response needs to be formal and must tell wether the section applicable is cognizable, give a proper short description of the section to the user, tell whether the offense is bailable or not.
        The format needs to match the following template and give output in json file.
           
            (i) *Act …………………………………. *Sections ……………………………………………...
            (ii) *Act …………………………………. *Sections ……………………………………………...
            (iii) *Act …………………………………. *Sections ……………………………………………...
            (iv) * Other Acts & Sections ………………………………………………………………………..
           
        """.strip()
        }
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-1106",
        messages=messages,
        temperature=0.4,
        max_tokens=1000,
    )

    return response.choices[0].message['content']

# if __name__ == '__main__':
    
    