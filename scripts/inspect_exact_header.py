import os
import re

root_dir = r"c:\Users\Hp\Downloads\eledralabs-landing-page-2.0-main\eledralabs-landing-page-2.0-main"
root_index = os.path.join(root_dir, "index.html")

if os.path.exists(root_index):
    with open(root_index, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the header block
    match = re.search(r'<header.*?</header>', content, re.DOTALL)
    if match:
        print("=== CURRENT HEADER HTML ===")
        print(match.group(0))
    else:
        print("Header not found")
else:
    print("File not found")
