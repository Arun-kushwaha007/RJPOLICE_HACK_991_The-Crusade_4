import os
from PyPDF2 import PdfReader
import glob
import numpy as np

class pdf2images:
    def __init__(self):
        super().__init__()

    def get_images_from_pdf(self, idx, pdf_path, output_folder:str=None, save_images_locally:bool=False):
        if save_images_locally:
            if output_folder is None:
                raise ValueError("output_folder must be specified if save_images_locally is True")           
            if not os.path.exists(output_folder):
                os.makedirs(output_folder)

        pdf_reader = PdfReader(pdf_path)
        pdf_images = []
        count = idx
        page = pdf_reader.pages[0]
        i=0
        for page in pdf_reader.pages:
            for image_file_object in page.images:
                pdf_images.append(image_file_object)
                if save_images_locally:
                    with open(os.path.join(output_folder, str(count)+'_'+str(i)+".png"), 'wb') as image_out:
                        image_out.write(image_file_object.data)
                i+=1
        count+=1
        return count, pdf_images
    
    def pdfs_to_images(self, pdf_paths, output_folder, save_images_locally:bool=False):
        idx=0
        pdf_images = []
        for pdf_path in pdf_paths:
            idx, images = self.get_images_from_pdf(idx = idx, pdf_path = pdf_path, output_folder = output_folder, save_images_locally = save_images_locally)
            pdf_images.append(images)
        return pdf_images

if __name__ == "__main__":
    # os.chdir('OCR_')
    # os.mkdir('data/fir_pdfs/extracted_images')
    pdf_paths = glob.glob(r"modules\ocr_module\data\fir_pdfs\*.pdf")
    print(pdf_paths)
    # pdf_paths = r"C:\\Users\\vishe\\Vishesh\\RJPOLICE_HACK_991_The-Crusade_4\backend\\modules\\ocr_module\data\\fir_pdfs\\0_0.pdf"
    pdf2images = pdf2images()
    pdf2images.pdfs_to_images(pdf_paths, output_folder='data/fir_pdfs/extracted_images', save_images_locally=True)