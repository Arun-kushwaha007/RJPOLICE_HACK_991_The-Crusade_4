from transformers import MBartForConditionalGeneration, MBart50TokenizerFast
import torch
import os

class Translator:
    def __init__(self):
        self.model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")
        self.tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")
        

    def translate(self, text, src, tgt):
        self.tokenizer.src_lang = src
        encoded_text = self.tokenizer(text, return_tensors="pt")
        generated_tokens = self.model.generate(
            **encoded_text,
            forced_bos_token_id=self.tokenizer.lang_code_to_id[tgt]
        )

        return self.tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)

"""
Translator->easyOCR,
Arabic (ar_AR)->Arabic(ar),
English (en_XX)->English(en),
Gujarati (gu_IN)-> ,
Hindi (hi_IN)->Hindi(hi),
Bengali (bn_IN)->Bengali(bn),
Malayalam (ml_IN)-> ,
Marathi (mr_IN)->Marathi(mr),
Tamil (ta_IN)->Tamil(ta),
Telugu (te_IN)->Telugu(te),
Urdu (ur_PK)->Urdu(ur)
"""