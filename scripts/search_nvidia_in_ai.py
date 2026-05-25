import os
import re

root_dir = r"c:\Users\Hp\Downloads\eledralabs-landing-page-2.0-main\eledralabs-landing-page-2.0-main"
root_index = os.path.join(root_dir, "index.html")

if os.path.exists(root_index):
    with open(root_index, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(r'id="ai".*?</section>', content, re.DOTALL)
    if match:
        print("=== AI SECTION CONTENT ===")
        sect_content = match.group(0)
        # Find all nvidia references inside
        nvidia_matches = list(re.finditer(r'nvidia', sect_content, re.IGNORECASE))
        print(f"Total 'nvidia' matches in AI section: {len(nvidia_matches)}")
        for m in nvidia_matches[:10]:
            start = max(0, m.start() - 60)
            end = min(len(sect_content), m.end() + 60)
            print(f"  Match: ...{sect_content[start:end]}...")
    else:
        print("AI section not found")
else:
    print("File not found")
