import torch
import easyocr
import cv2
import os
import numpy as np
import glob
from translation import Translator

class OCR:
    def __init__(self, lang:str, gpu:bool=True):
        super().__init__()
        self.lang_codes = {
            'en': 'en_XX', #english
            'hi': 'hi_IN', #hindi
            'ar': 'ar_AR', #arabic
            'bn': 'bn_IN', #bengali
            'mr': 'mr_IN', #marathi
            'ta': 'ta_IN', #tamil
            'te': 'te_IN', #telugu
            'ur': 'ur_PK', #urdu
        }

        if lang not in self.lang_codes.keys():
            raise ValueError(f"Language not supported, please choose from {self.lang_codes.keys()}")
        
        self.translator = Translator()
        
        self.device = 'cpu' if not gpu else torch.device('cuda' if torch.cuda.is_available() else 'cpu')

        if self.device == 'cpu' and gpu:
            print("GPU not available, using CPU instead")
        self.lang = lang
        self.reader = easyocr.Reader([lang], gpu=True if self.device=='cuda' else False)
       
    def get_bbox(self, img)->np.array:
        """Get bounding box of text in image format (x_min, x_max, y_min, y_max)"""
        bbox = np.array(self.reader.detect(img)[0][0])
        return bbox

    def read_img(self, img_path)->np.array:
        """Read image and return image"""
        img = cv2.imread(img_path)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        return img
    
    def get_text(self, img, detail=0, tgt=None, to_be_translated:bool=False)->str:
        """return text from image"""
        if to_be_translated and tgt not in self.lang_codes.keys():
            raise ValueError("Please provide source and target language")
        
        text = self.reader.readtext(img, detail=detail)

        if to_be_translated:
            trans_text = [txt[0] for txt in [self.translator.translate(txt, self.lang_codes[self.lang], self.lang_codes[tgt]) for txt in text]]

        return text, trans_text

if __name__ == '__main__':
    import random
    ocr = OCR('hi', False)
    img_path = random.choice(glob.glob('data/fir_images_from_web/*.png'))
    print(img_path.split('/')[-1])   
    img = ocr.read_img(img_path)
    text, trans_text = ocr.get_text(img, detail=0, tgt='en', to_be_translated=True)
    print(trans_text)
    with open('OCR_/ocr_out.txt', 'w') as f:
        f.write(text)