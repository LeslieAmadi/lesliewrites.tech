# 🖼 AI Image Caption Generator API Documentation  
*By Leslie Amadi | Last updated: November 2025*

---

## 🧠 Overview

The Image Caption Generator API allows developers to upload an image and receive a human-like description of what is shown in the image.

This is useful for:
- Accessibility (alt-text for visually impaired users)
- Social media captioning
- E-commerce product tagging
- Automatic metadata generation

---

## 🔐 Authentication

This API uses **Bearer Token Authentication**.

Include your API key in the header:

Authorization: Bearer YOUR_API_KEY

---

## 📍 API Endpoint

| Method | Endpoint |
|--------|----------|
| POST   | `https://api.lesliewrites.tech/v1/caption` |

---

## 📤 Request Format

### **Headers**
| Key | Value |
|-----|--------|
| Authorization | Bearer YOUR_API_KEY |
| Content-Type  | multipart/form-data |

### **Body (Form Data)**
| Field      | Type   | Required | Description |
|------------|--------|----------|-------------|
| image_file | File   | ✅ Yes    | The image file (JPEG, PNG) |
| language   | String | ❌ No     | Default = `"en"` |

---

## ✅ Example Request (cURL)

```bash
curl -X POST "https://api.lesliewrites.tech/v1/caption" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "image_file=@/Users/leslie/Desktop/cat.png"

📬 Response Example (Success - 200 OK)
{
  "caption": "A small ginger cat sleeping on a windowsill.",
  "confidence": 0.93,
  "language": "en"
}

⚠️ Error Responses
| Status Code           | Meaning                  | Example Response                           |
| --------------------- | ------------------------ | ------------------------------------------ |
| 400 Bad Request       | No image uploaded        | `{ "error": "image_file is required" }`    |
| 401 Unauthorized      | Missing or wrong API key | `{ "error": "Invalid API token" }`         |
| 415 Unsupported Media | Wrong file type          | `{ "error": "Only JPEG and PNG allowed" }` |
| 500 Server Error      | API failed               | `{ "error": "Unexpected error" }`          |


💡 Best Practices

✅ Use high-quality images
✅ Resize to max 5MB for speed
✅ Provide alternative text fallback if API fails
✅ Never expose your API key in front-end code

📎 Future Features

Multi-language captions (French, German, Japanese)

Object detection (identify items in the image)

Emotion-based captioning for human faces

