import pdfkit
from pathlib import Path
import os
s = r"C:/Users/"
pdfkit.from_file(s+os.getlogin()+'/Downloads/CV.html','CV.pdf')
print("sukces")

