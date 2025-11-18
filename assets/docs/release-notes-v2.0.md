# Release Notes — LexiMind AI Model v2.0

## Overview

LexiMind v2.0 is a major upgrade focused on performance improvements, reduced latency, improved fairness, and expanded coverage of clinical features.

Release date: 12 March 2025

---

## 1. What's New

### 1.1 Improved Accuracy
- +7% improvement in early detection of chronic kidney conditions  
- +5% improvement in diabetes progression prediction  
- Upgraded feature engineering pipeline  

### 1.2 Latency Reduction
- Median latency dropped from **230 ms → 140 ms**  
- Reduced cold-start latency by optimising model graph  

### 1.3 Expanded Input Coverage
- Added support for new lab test categories  
- Introduced medication timeline embeddings  

### 1.4 Updated Model Architecture
- Migrated from Transformer-XL to Hybrid Transformer + MLP mixer  
- Supports larger context window  

---

## 2. Fixes

- Corrected bug causing inconsistent outputs for extremely low BMI values  
- Fixed rounding issue in probability outputs  
- Resolved mismatch between inference model version and logged version ID  

---

## 3. Known Issues

- Reduced performance in patients aged 90+ due to limited samples  
- Occasional drift alerts during night-time batch processing  

---

## 4. Deprecations

- v1.0 model endpoints will be deprecated on **30 June 2025**  
- Old `riskScore` JSON key removed (use `risk_score`)  

---

## 5. Migration Guide

### 5.1 API Changes
Old:
POST /v1/predict
Response: {"riskScore": 0.82}
New:

POST /v2/predict
Response: {"risk_score": 0.82, "model_version": "2.0"}


### 5.2 Required Actions
- Update API endpoints  
- Update JSON key usage  
- Validate integration in staging  

---

## 6. Responsible Use

- Validate predictions whenever model performance may impact patient outcomes  
- Review model fairness dashboard monthly  
- Monitor drift alerts  

---

## 7. Contact

For integration support: ml-support@lexitech.ai  
