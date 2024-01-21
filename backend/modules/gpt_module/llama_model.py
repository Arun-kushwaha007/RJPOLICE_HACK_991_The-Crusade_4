# from backend.modules.ocr_module.config import *
# from transformers import GenerationConfig, LlamaForCasualGeneration, LlamaTokenizer
# import torch

# class LlamaModel:
#     def __init__(self,):
#         super().__init__()
#         self.tokenizer = LlamaTokenizer.from_pretrained(model_name, token = hugging_face_token)
#         self.model = LlamaForCasualGeneration.from_pretrained(model_name, token = hugging_face_token)
#         self.config = GenerationConfig.from_pretrained(model_name, token = hugging_face_token)
#         self.SYSTEM_PROMPT = """
#             You have to generate a response based on text input from the user. The response needs to be formal and should follow the Indian Penal Code without any compromise.
#             You have to give proper sections which will be applicable to the collective statements of witnesses and follow the Indian constitution to the T
#             You also need to use the local CrPC Laws from Indian Constitution for the locality in which the crime has occured.
#             The response needs to be formal and must tell wether the section applicable is cognizable, give a proper short description of the section to the user, tell whether the offense is bailable or not.
#             """.strip()
        

#     def format_prompt(self, prompt: str, system_prompt: str) -> str:
#         return f"""
#     {system_prompt}
#     {prompt}
#     """.strip()

#     def generate_response(self, prompt: str, max_new_tokens: int = 128) -> str: 
#         encoding = self.tokenizer(prompt, return_tensors="pt").to(self.model.device)
#         with torch.inference_mode(): 
#             outputs = self.model.generate(
#                 **encoding,
#                 max_new_tokens=max_new_tokens,
#                 temperature=1.0,
#                 generation_config=self.generation_config,
#             )
#         answer_tokens = outputs[:, encoding.input_ids.shape[1] :]
#         return self.tokenizer.decode(answer_tokens[0], skip_special_tokens=True)
    