import os
import re

root_dir = r"c:\Users\Hp\Downloads\eledralabs-landing-page-2.0-main\eledralabs-landing-page-2.0-main"
root_index = os.path.join(root_dir, "index.html")

if os.path.exists(root_index):
    with open(root_index, "r", encoding="utf-8") as f:
        content = f.read()

    # Find all image tags pointing to partners/ or nvidia or similar
    print("=== BRANDED IMG REFERENCES ===")
    img_refs = re.findall(r'<img[^>]*src="[^"]*(?:partners|nvidia)[^"]*"[^>]*>', content)
    print(f"Total branded images: {len(img_refs)}")
    for r in img_refs:
        print(r)
        
    print("\n=== VERIFY HUGGING FACE / GITHUB / SOCIALS ===")
    # Is there a Hugging Face or other company reference?
    huggingface_refs = re.findall(r'<[^>]*href="[^"]*huggingface[^"]*"[^>]*>|<[^>]*src="[^"]*huggingface[^"]*"[^>]*>', content)
    for hr in huggingface_refs:
        print(hr)
else:
    print("File not found")
