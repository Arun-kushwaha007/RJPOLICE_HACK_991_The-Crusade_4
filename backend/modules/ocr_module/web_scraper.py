import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin
os.chdir('OCR')
try:
    os.mkdir('data/fir_pdfs')
except:
    pass
url = 'https://home.rajasthan.gov.in/content/homeportal/en/acbdepartment/Fir-by-year.html'

response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

links = soup.find_all('a')
url_base = 'https://home.rajasthan.gov.in/'

i = 0

for link in links:
    if('.pdf' in link.get('href',[])):
        # print(link.get('href'))
        try:
            response = requests.get(link.get('href'))
        except:
            response = requests.get(urljoin(url_base, link.get('href')))

        pdf = open('data/fir_pdfs/pdf_'+str(i)+'.pdf', 'wb')
        pdf.write(response.content)
        pdf.close()
        # print('File ',i,' downloaded')
        i+=1

print('All files downloaded')