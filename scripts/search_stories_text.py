import os
import re

root_dir = r"c:\Users\Hp\Downloads\eledralabs-landing-page-2.0-main\eledralabs-landing-page-2.0-main"
root_index = os.path.join(root_dir, "index.html")

if os.path.exists(root_index):
    with open(root_index, "r", encoding="utf-8") as f:
        content = f.read()

    # Search for all matches of Customer Stories
    matches = list(re.finditer(r'Customer Stories', content))
    print(f"Total Customer Stories matches: {len(matches)}")
    for i, m in enumerate(matches):
        print(f"Match {i+1} at index {m.start()}:")
        print(content[m.start()-200:m.start()+200])
else:
    print("File not found")
