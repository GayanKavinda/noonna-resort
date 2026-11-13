import re
from pathlib import Path
t=Path(r"src\data\destinationDetailData.ts").read_text(encoding="utf-8")
# find all intel blocks
for m in re.finditer(r'intel: \{[\s\S]*?\n    \},', t):
    print('---')
    print(m.group(0))
    print('SLUG?')
