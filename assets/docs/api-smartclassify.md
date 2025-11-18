# SmartClassify API Reference

## Endpoint
`POST /api/v1/smartclassify`

### Description
Classifies an input text into one of the categories:
- `billing`
- `technical_issue`
- `general_query`

### Request Example

```bash
POST /api/v1/smartclassify
Content-Type: application/json

{
  "text": "My account was charged twice this month."
}

Response Example
{
  "category": "billing",
  "confidence": 0.94
}

Response Fields
Field	Type	Description
category	String	Predicted class label
confidence	Float	Confidence score (0–1)
Error Codes
Code	Message	Description
400	Invalid Input	Text field missing
415	Unsupported Format	Non-UTF8 encoding
500	Server Error	Model unavailable