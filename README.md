# 📸 AI Photo Studio

Turn your ideas into **AI-generated photos** with Stable Diffusion.  
Built with **Streamlit** + **Replicate API** and deployable on **Hugging Face Spaces**.

## 🚀 Features
- Enter a text prompt → get a high-quality AI photo.
- Powered by [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion).
- Simple, clean Streamlit interface.
- Free deployment on Hugging Face Spaces.

## 🛠️ Installation (Local)
```bash
git clone https://github.com/your-username/ai-photo-studio.git
cd ai-photo-studio
pip install -r requirements.txt
streamlit run streamlit_app.py
```

## 🌐 Deployment on Hugging Face
1. Create a new **Space** on Hugging Face.  
2. Select **Streamlit** as SDK.  
3. Upload `streamlit_app.py`, `requirements.txt`, and `README.md`.  
4. Add your **Replicate API key** under **Settings → Secrets**.  

## 🔑 API Key Setup
You need a [Replicate](https://replicate.com/) account and API key.  
Set it in your environment:

```bash
export REPLICATE_API_TOKEN=your_api_key_here
```

Or add it as a **secret** on Hugging Face / Streamlit Cloud.

---
✨ Built with ❤️ + AI
