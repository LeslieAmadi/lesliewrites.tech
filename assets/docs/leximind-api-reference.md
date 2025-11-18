# API Reference: POST /v1/predict-diagnosis

## Overview

This endpoint generates a risk prediction score for chronic disease likelihood using the LexiMind ML model.

---

## 1. Endpoint

**POST** `/v1/predict-diagnosis`  
Content-Type: `application/json`  
Authentication: `Bearer <token>`

---

## 2. Request Body

```json
{
  "patient_id": "12345",
  "age": 52,
  "sex": "female",
  "bmi": 27.3,
  "blood_pressure": 134,
  "glucose": 92,
  "symptoms": ["fatigue", "shortness_of_breath"]
}

Field Descriptions

| Field          | Type    | Description                   |
| -------------- | ------- | ----------------------------- |
| patient_id     | string  | Anonymous internal identifier |
| age            | integer | Age in years                  |
| sex            | string  | "male" / "female"             |
| bmi            | number  | Body mass index               |
| blood_pressure | number  | Systolic value                |
| glucose        | number  | Fasting glucose level         |
| symptoms       | array   | List of reported symptoms     |


3. Response
200 OK
{
  "risk_score": 0.78,
  "risk_level": "high",
  "model_version": "1.9",
  "explanations": {
    "top_positive": ["blood_pressure", "age"],
    "top_negative": ["glucose"]
  }
}

400 Bad Request

Missing fields

Invalid data types

401 Unauthorized

Invalid token

4. Errors

| Code | Meaning           | Resolution             |
| ---- | ----------------- | ---------------------- |
| 4001 | Invalid schema    | Check JSON body        |
| 4002 | Missing fields    | Ensure required inputs |
| 5001 | Model unavailable | Retry later            |


5. Rate Limits

100 requests / minute

10,000 requests / day

6. Notes

Predictions are not diagnoses

Use in combination with clinical judgment