# SmartClassify — Model Change Log

---

## Version 2.0.0 — (2025-10-30)
### Overview
Major upgrade introducing multilingual classification and improved bias handling.

**Changes:**
- Added German and Spanish language support 🇩🇪 🇪🇸  
- Improved accuracy on short messages (+3.5%)  
- Integrated explainability endpoint (`/explain`)  
- Reduced model latency from 180ms → 140ms  

**Deprecations:**
- Removed `/predict-legacy` endpoint  

**Evaluation:**
| Metric | Previous | Current |
|:--------|:---------:|:---------:|
| Accuracy | 92.4% | 95.9% |
| F1 Score | 90.8% | 93.1% |

---

## Version 1.2.1 — (2025-06-15)
**Changes:**
- Added confidence threshold control (`min_confidence`)  
- Improved billing/technical classification distinction  
- Minor performance improvements  

---

## Version 1.0.0 — (2024-12-01)
**Initial release**  
- English-only support  
- Base Transformer model (BERT fine-tuned)  
- Categories: billing, technical_issue, general_query  
