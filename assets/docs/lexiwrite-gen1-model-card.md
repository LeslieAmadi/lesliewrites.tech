# Model Card: LexiWrite Gen-1

## 1. Overview

**Model name:** LexiWrite Gen-1  
**Type:** Large language model (generative text model)  
**Primary use case:** Drafting and refining product copy, help articles, and simple emails.  
**Owners:** LexiTech AI Documentation Team  
**Version:** 1.0  

LexiWrite Gen-1 is a medium-sized generative model optimised for clear, concise written communication. It is intended for internal tooling and content workflows, not for direct end-user access without review.

---

## 2. Intended Use

### 2.1 Intended Users
- Technical writers  
- Product managers  
- Support team leads  
- UX writers  

### 2.2 Intended Use Cases
- Drafting first versions of:
  - FAQ entries
  - Help centre articles
  - Release note summaries
- Rewriting text for:
  - Clarity
  - Tone consistency
  - Brevity

### 2.3 Out-of-Scope Uses
LexiWrite Gen-1 **must not** be used for:
- Legal, medical, or financial advice  
- Safety-critical decisions  
- Generating harmful, hateful, or discriminatory content  
- Fully automated publishing without human review  

---

## 3. Model Details

- **Architecture:** Transformer-based language model  
- **Languages:** English (primary), partial support for German  
- **Context window:** 4,096 tokens  
- **Training data:** Mixture of:
  - Technical documentation samples
  - Public web text (filtered)
  - Product help centre content
  - Internal synthetic data

> Note: No customer-specific or private data was included in training.

---

## 4. Performance & Evaluation

### 4.1 Automatic Metrics
Evaluated on internal benchmarks:

- **Helpfulness score (human-rated):** 4.4 / 5  
- **Factual accuracy (non-domain):** ~82%  
- **Style adherence to “product voice” guide:** ~88%  

### 4.2 Human Evaluation
A panel of technical writers evaluated outputs on:

- Clarity  
- Conciseness  
- Correctness  
- Tone alignment  

LexiWrite Gen-1 performs best when:
- Provided with concrete instructions and examples  
- Asked to rewrite or edit existing text rather than invent new facts  

---

## 5. Risks & Limitations

### 5.1 Known Limitations
- May generate outdated or incorrect technical details  
- Can “hallucinate” APIs, parameters, or features that do not exist  
- Limited understanding of highly specialised domain content  

### 5.2 Mitigations
- Require human review before publishing  
- Provide the model with:
  - Up-to-date source documents
  - Clear product constraints
- Use short prompts with explicit instructions and examples  

---

## 6. Data & Privacy

- No live customer data is used at inference time by default  
- Logs can be enabled for quality monitoring; these must:
  - Exclude sensitive or personal data where possible  
  - Follow internal data retention policies  

---

## 7. Deployment & Monitoring

### 7.1 Access
- Access via internal API: `POST /v1/generate-copy`  
- Authentication: Service token (internal)  

### 7.2 Monitoring
- Track:
  - Error rates (5xx, timeouts)
  - Latency
  - Volume per integration
  - User feedback on suggestions  

### 7.3 Decommissioning
LexiWrite Gen-1 should be replaced or retrained when:
- Product voice guidelines change significantly  
- New regulations affect content generation  
- Evaluation scores fall below agreed thresholds  

---

## 8. Responsible Use Guidance

- Always review generated text before publishing  
- Do not present generated content as purely “authoritative”  
- Encourage users to:
  - Provide context
  - State the target audience
  - Specify desired tone (e.g. “supportive”, “neutral”)  
