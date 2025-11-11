# Release Notes: Multilingual Chatbot Model v2.0
**Release Date:** 7 November 2025  
**Maintainer:** Leslie Amadi  
**Repository:** https://github.com/kiralymarguax/lesliewrites.tech  

---

## 🚀 Overview
This release introduces multilingual support and improved contextual understanding for the chatbot model.  
Version 2.0 replaces v1.3 and includes significant architectural, accuracy, and UX improvements.

---

## 🆕 New Features
- **Multilingual Inference:** Added support for German and Hungarian queries.  
- **Context Memory:** Improved response continuity in multi-turn conversations.  
- **API Stability:** Latency reduced by 15% using async FastAPI calls.

---

## 🧩 Improvements
| Area | Description | Result |
|:--|:--|:--|
| Training Data | Expanded dataset from 80k → 120k dialogues | Better response diversity |
| Model Evaluation | F1 score improved from 82% → 86% | Increased reliability |
| Deployment | Updated Dockerfile for faster startup | Easier production rollout |

---

## 🐛 Bug Fixes
- Fixed response repetition in long sessions.  
- Addressed memory overflow when batch size > 64.  
- Corrected translation inconsistencies in German text generation.  

---

## ⚠️ Known Issues
- Occasional delay with Hungarian inputs under high load.  
- Confidence scores fluctuate slightly for multilingual responses.

---

## 🗓️ Version History
| Version | Date | Summary |
|:--|:--|:--|
| 1.0 | Feb 2025 | Initial model (English only) |
| 1.3 | May 2025 | API launch with limited training data |
| **2.0** | **Nov 2025** | Multilingual, optimised model deployment |

---

## 📬 Contact
For questions or feedback:  
📧 **dr.leslieamadi@lesliewrites.tech**

---

*Prepared by Leslie Amadi, Technical Writer*  
*Part of the AI Technical Writing Learning Series (Lesson 25)*  
