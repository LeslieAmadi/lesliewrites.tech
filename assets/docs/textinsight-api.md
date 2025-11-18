# TextInsight API — Overview

The TextInsight API allows developers to generate concise, human-like summaries of long text documents.  
It uses a Transformer-based summarisation model fine-tuned on news, technical, and academic datasets.

**Base URL:**
https://api.textinsight.ai/v1/

**Authentication:**
Use your API key in the request header.
Authorization: Bearer <your_api_key>

**Example Use Cases:**
- News apps that summarise long articles  
- Customer support tools that condense chat transcripts  
- Educational tools that summarise study notes
- 
Why this works: It gives purpose, usage, and security details in under 10 lines.


Step 2: API Endpoints

Every endpoint should include:

Endpoint name and HTTP method

Parameters

Example request

Example response

Here’s how to write it for /summarise:

## POST /summarise

### Description
Creates a summary of the input text using AI-powered natural language understanding.

### Request Body
| Field | Type | Required | Description |
|:------|:------:|:-----------:|:-------------|
| `text` | string | ✅ | The text to summarise |
| `length` | string | ❌ | Target length (`short`, `medium`, or `long`) |

### Example Request
```bash
POST https://api.textinsight.ai/v1/summarise
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "text": "Artificial intelligence is transforming the way organisations handle data...",
  "length": "medium"
}

Example Response
{
  "summary": "AI is revolutionising data management by automating analysis and improving decisions.",
  "confidence": 0.92,
  "model_version": "v1.2.1"
}


---

## Step 3: Errors and Edge Cases

AI APIs often fail differently than standard APIs — e.g. **input too long, low confidence, or model timeout**.  
Here’s how you’d document them:

```markdown
## Error Codes

| Code | Type | Description |
|:------|:------:|:-------------|
| 400 | Bad Request | Input text is missing or invalid |
| 413 | Payload Too Large | Input exceeds 10,000 characters |
| 429 | Rate Limit Exceeded | Too many requests — try again later |
| 500 | Model Error | AI model failed to generate output |
| 503 | Service Unavailable | Model temporarily offline |

Best practice: Use clear, consistent error language and give actionable guidance.

 Step 4: Example Usage in Code

Developers love quick-start examples. Here’s one in Python:

## Quickstart (Python)

```python
import requests

url = "https://api.textinsight.ai/v1/summarise"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
data = {"text": "AI helps companies automate customer service."}

response = requests.post(url, json=data, headers=headers)
print(response.json())


---

## Step 5: Markdown Template (Copy to VS Code)

Let’s put everything together in one file you can add to your portfolio:  
**File:** `/ai-docs/textinsight-api.md`

```markdown
# TextInsight API — Developer Documentation

## Overview
The TextInsight API provides AI-powered text summarisation for developers who need concise and accurate content reduction.

Base URL: `https://api.textinsight.ai/v1/`  
Authentication: Bearer token required

---

## Endpoint: POST /summarise
Creates a summary from raw text input.

### Parameters
| Name | Type | Description |
|:------|:------:|:-------------|
| text | string | Text to summarise |
| length | string | Summary length: short, medium, or long |

### Example Request
```bash
curl -X POST "https://api.textinsight.ai/v1/summarise" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $API_KEY" \
-d '{"text":"AI helps automate processes","length":"short"}'
Example Response
{
  "summary": "AI automates business processes.",
  "confidence": 0.95
}

Error Codes

| Code | Message     | Description            |
| :--- | :---------- | :--------------------- |
| 400  | Bad Request | Invalid text input     |
| 429  | Rate Limit  | Too many requests      |
| 500  | Model Error | Internal model failure |

Quickstart in Python
import requests

headers = {"Authorization": "Bearer YOUR_API_KEY"}
data = {"text": "AI saves time on support tickets."}
res = requests.post("https://api.textinsight.ai/v1/summarise", json=data, headers=headers)
print(res.json())

Support

Email: support@textinsight.ai

Docs: https://textinsight.ai/docs

Version: v1.0.0


---

**Your Task Now:**
1. Create `textinsight-api.md` inside `/ai-docs/`
2. Paste the content above.
3. Save and preview it in Markdown preview mode (`Cmd + Shift + V` on Mac).

---

Would you like me to show you next **how to convert this AI API doc into a polished, downloadable PDF** (Lesson 18.2), or continue straight to **Lesson 19: AI Ethics and Bias Documentation**?
