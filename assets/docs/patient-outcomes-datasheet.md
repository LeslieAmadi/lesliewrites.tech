# Datasheet: Patient Outcomes Dataset

## 1. Motivation

This dataset was created to support research into predicting early signs of chronic illnesses using anonymised patient data. It enables fair, transparent, and traceable ML evaluation.

---

## 2. Dataset Composition

### 2.1 Features
- Demographics (age, sex)
- Clinical measurements (BMI, blood pressure, glucose)
- Medical history codes (ICD-10)
- Lab tests
- Lifestyle indicators

### 2.2 Records
- ~520,000 anonymised patient records  
- Collected across 7 medical centres  

### 2.3 Labels
- Binary: "high-risk" or "low-risk"  
- Label derived from clinician-confirmed diagnoses  

---

## 3. Collection Process

- All data collected through hospital EHR exports  
- Identifiers removed before researchers received the data  
- Aggregated monthly  
- Stored in secure research environment  

---

## 4. Preprocessing

- Schema standardisation  
- Outlier removal  
- Normalisation of numeric features  
- Missing value imputation  
- Encoding of categorical health codes  

---

## 5. Intended Uses

- ML model training for risk prediction  
- Clinical research  
- Algorithm benchmarking  
- Bias and fairness evaluation  

---

## 6. Out-of-Scope Uses

- Individual-level diagnosis  
- Real-time patient treatment  
- Insurance decision-making  

---

## 7. Ethical Considerations

- Potential demographic underrepresentation  
- Need for bias evaluation before deployment  
- Dataset not suitable for unsupervised clustering about patient identity  

---

## 8. Distribution

- Internal only  
- Access requires approval and compliance review  
- Retention period: 5 years  

---

## 9. Maintenance

- Updated annually  
- Deprecated entries flagged  
- Version history maintained in metadata  
