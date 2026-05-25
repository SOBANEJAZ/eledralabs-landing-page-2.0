import os
import re

root_dir = r"c:\Users\Hp\Downloads\eledralabs-landing-page-2.0-main\eledralabs-landing-page-2.0-main"
root_index = os.path.join(root_dir, "index.html")

if os.path.exists(root_index):
    with open(root_index, "r", encoding="utf-8") as f:
        content = f.read()

    # Search for customer-stories section
    match = re.search(r'<section[^>]*id="customer-stories"[^>]*>', content)
    if match:
        print(f"Found ID: {match.group(0)}")
    else:
        print("Not found ID customer-stories")
else:
    print("File not found")
