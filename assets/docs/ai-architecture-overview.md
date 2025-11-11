# Lesson 15: How AI Architectures Work Together

## Overview
Artificial Intelligence is not just one model — it’s a **system of multiple architectures**, each specialised for a different kind of problem.  
From **predicting numbers** to **understanding language** and **seeing the world**, these models work together like the organs of a digital brain.

---

## 1. Linear Models — The Foundation 🧩
### **Purpose:**
- Solve simple prediction and classification problems.

### **How They Fit In:**
Linear and Logistic Regression models are often used as **baselines** or **final decision layers** in complex systems.

### **Example:**
In an image recognition system, a CNN detects features (edges, colours, shapes),  
then a **logistic regression layer** decides: “Dog or Cat?”

---

## 2. Decision Trees — The Logic Builders 🌳
### **Purpose:**
- Make structured, rule-based decisions.
- Easy to interpret, fast to train.

### **How They Fit In:**
Used for **tabular data** (spreadsheets, metrics, or business data)  
and often serve as explainable components in larger pipelines.

### **Example:**
An e-commerce recommendation engine may use:
- CNNs for product image analysis  
- NLP for product descriptions  
- Decision Trees for final recommendation rules.

---

## 3. Neural Networks — The Pattern Learners 🧠
### **Purpose:**
- Learn relationships in data automatically.

### **How They Fit In:**
Form the **core engine** of most AI systems — they detect and learn patterns from massive datasets.

### **Example:**
In Tesla’s Autopilot:
- CNNs detect road signs and pedestrians.  
- Neural Networks predict steering and acceleration based on what’s seen.

---

## 4. CNNs — The Eyes of AI 👁️
### **Purpose:**
- Extract features from visual or spatial data.

### **How They Fit In:**
CNNs act as **front-end processors** for anything involving images or vision.

### **Example:**
In a medical AI tool:
- CNN analyses an MRI image.  
- A Neural Network classifies the tumour.  
- A Decision Tree explains the classification in human-readable terms.

---

## 5. RNNs — The Memory Keepers ⏳
### **Purpose:**
- Handle sequential or time-based data.

### **How They Fit In:**
RNNs (and their advanced forms, LSTMs and GRUs) power systems where **context over time** is important.

### **Example:**
In real-time translation:
- RNN reads a sentence word by word.  
- The context flows forward until meaning is complete.  
(Transformers later replaced this with more efficient attention mechanisms.)

---

## 6. Transformers — The Thinkers 🪄
### **Purpose:**
- Handle context in a non-sequential, parallel way.
- Understand relationships between words, images, or sounds.

### **How They Fit In:**
Transformers are now the **core of advanced AI systems** like ChatGPT, Gemini, and Claude.  
They replaced RNNs by introducing **self-attention**, enabling models to understand meaning across entire documents.

### **Example:**
When you ask ChatGPT a question:
1. A Transformer model breaks your text into tokens.  
2. It looks at how every word relates to every other word.  
3. It predicts the most contextually appropriate next word — again and again — to form full sentences.

---

## 7. How They Work Together — A Modern AI Pipeline ⚙️

| Layer | Model Type | Function | Example |
|:------|:------------|:----------|:----------|
| Input | CNN / Sensor | Detect visual or audio data | Camera feed |
| Processing | RNN / Transformer | Interpret sequence or language | Speech-to-text |
| Reasoning | Neural Network / Decision Tree | Make predictions | Command classification |
| Output | Linear Model | Generate human-friendly result | “Turn on the lights” |

---

## 8. Real-World Example — Virtual Assistant (e.g., Siri, Alexa)
| Component | AI Model | Description |
|:-----------|:----------|:-------------|
| **Speech Recognition** | RNN / Transformer | Converts voice to text |
| **Language Understanding** | Transformer | Understands intent |
| **Response Generation** | Transformer | Writes the response |
| **Voice Output** | CNN + Audio Synth | Produces natural-sounding speech |

---

## 9. Summary

| Model | Data Type | Strength |
|:------|:------------|:-----------|
| Linear Regression | Numeric | Simplicity & Speed |
| Decision Tree | Categorical | Interpretability |
| Neural Network | All | Adaptability |
| CNN | Visual | Feature Extraction |
| RNN | Sequential | Memory over time |
| Transformer | Text, Vision, Audio | Context & Intelligence |

---

## 10. Why This Matters
Understanding how these models fit together helps technical writers, developers, and AI teams document systems clearly and logically.

In a real company, you might describe:
- Which models are used  
- Why each was chosen  
- How data flows between them  

This forms the backbone of **AI architecture documentation** — one of the most in-demand writing skills today.

---

> “AI systems are not built — they’re orchestrated.  
> Every model plays its part in making machines more intelligent, more adaptive, and more human.”  
> — *Leslie Amadi, Technical Writer*
