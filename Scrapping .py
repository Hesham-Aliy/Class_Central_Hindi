#!/usr/bin/env python
# coding: utf-8

# In[1]:


import requests
from bs4 import BeautifulSoup


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

# Make a GET request to the website
response = requests.get('https://www.classcentral.com', headers=headers)

if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Translate the page content to Hindi
    #translator = Translator.translate(dest='hi')
    page_content = soup.prettify()
    

    # Save the translated content to a file
    with open("index.html", "w", encoding='utf-8') as file:
        file.write(page_content)

    print("Translated content saved to index.html")
else:
    print('Failed to retrieve page')


# In[ ]:




