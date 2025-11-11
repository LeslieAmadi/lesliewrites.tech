# SmartClassify — Model Card

## Model Overview
SmartClassify is a fine-tuned Transformer model built on the BERT architecture.  
It classifies customer support messages into predefined categories, helping teams route tickets efficiently.

## Intended Use
- Automating customer support triage  
- Analysing incoming user messages  
- Routing tickets to correct departments  

## Not Intended For
- Legal, medical, or financial advice  
- Automated high-stakes decision-making  

## Training Data
- 100,000 anonymised support messages  
- Sources: Zendesk Corpus + synthetic examples  

## Evaluation Metrics
| Metric | Score |
|:--------|:------:|
| Accuracy | 92.4% |
| F1 Score | 90.8% |
| Latency | 150ms |

## Ethical Considerations
- Avoid use with sensitive or private data  
- Ongoing bias testing across dialects  

## Limitations
- English only  
- Struggles with sarcasm or mixed-topic inputs  

---
