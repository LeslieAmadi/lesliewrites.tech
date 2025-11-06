# Fintech Payments API Documentation

## Overview
The Payments API allows developers to integrate payment processing into their applications quickly and securely.

## Authentication
- Use Bearer token in Authorization header  
- Example: `Authorization: Bearer <token>`

## Endpoints

### POST /api/v1/payments
- **Description:** Create a new payment  
- **Request:**
```json
{
  "amount": 1000,
  "currency": "USD",
  "recipient_id": "user_12345"
}

Response:

{
  "payment_id": "pay_67890",
  "status": "success"
}


Error Codes

400 Bad Request: Missing required fields

401 Unauthorized: Invalid API key

500 Server Error: Unexpected issue

Notes

All amounts are in cents.

Ensure proper error handling for failed transactions.
