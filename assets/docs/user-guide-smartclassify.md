
---

### **3️⃣ user-guide-smartclassify.md**

```markdown
# SmartClassify — User Guide

## What It Does
SmartClassify helps support teams automatically route customer messages into the right categories.

---

## Installation
```bash
pip install smartclassify


Basic Usage
from smartclassify import classify

result = classify("My internet is not working.")
print(result)


Output:

Category: technical_issue
Confidence: 0.89

Troubleshooting
Problem	Solution
ModuleNotFoundError	Install with pip install smartclassify
Low accuracy	Check text is English and grammatically correct
Support

Email: support@smartclassify.ai

Docs: https://smartclassify.ai/docs

Version: v1.0.0