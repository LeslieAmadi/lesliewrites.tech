# Case Study: Improving Customer Support with an AI Chatbot

## Overview
A mid-sized SaaS company struggled with handling repetitive customer support queries. They implemented a **GPT-based AI chatbot** to automate responses and assist the support team.

## Problem Statement
Support tickets were increasing by 40% monthly, leading to delayed responses and reduced customer satisfaction.

## Approach
The team used a **fine-tuned GPT-3.5 model** trained on 10,000 anonymised chat transcripts.  
Data was cleaned using Python scripts and labelled by internal support specialists.  
The model was deployed via an **AWS Lambda API** connected to the company’s helpdesk system (Zendesk).

## Implementation Details
- **Framework:** Python (FastAPI)
- **Model:** OpenAI GPT-3.5 Turbo
- **Infrastructure:** AWS Lambda + DynamoDB
- **Integration:** Zendesk API
- **Monitoring:** Grafana dashboards for message latency and accuracy

## Results
| Metric | Before | After | Improvement |
|--------|---------|--------|-------------|
| Avg. response time | 2m 30s | 15s | 90% faster |
| Customer satisfaction (CSAT) | 76% | 91% | +15% |
| Support workload | 100% | 55% | 45% reduction |

## Lessons Learned
- Always **use anonymised** support data for fine-tuning.
- Regularly **retrain** the model to adapt to new FAQs.
- Implement a **fallback system** where humans can take over.

## Conclusion
The chatbot transformed customer support efficiency and morale.  
Future plans include multi-language support using GPT-4 and integration with voice assistants.

---

© 2025 Leslie Amadi | AI Technical Writing Portfolio
