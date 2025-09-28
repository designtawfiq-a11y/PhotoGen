import streamlit as st
import replicate
import os

# Set up page
st.set_page_config(page_title="📸 AI Photo Studio", layout="wide")
st.title("📸 AI Photo Studio")
st.write("Turn your ideas into **stunning AI-generated photography**. Type a prompt below and let AI do the rest.")

# Replicate API key (must be set in Hugging Face / Streamlit secrets)
if "REPLICATE_API_TOKEN" not in os.environ:
    st.warning("⚠️ Please set your Replicate API token in the environment.")
else:
    os.environ["REPLICATE_API_TOKEN"] = os.environ["REPLICATE_API_TOKEN"]

# Prompt input
prompt = st.text_area("📝 Describe your photo idea:", 
                      "A realistic street photo of a cyclist in Tokyo at night, neon reflections")

# Generate button
if st.button("🎨 Generate Photo"):
    if prompt.strip() == "":
        st.error("Please enter a prompt.")
    else:
        with st.spinner("✨ Generating your photo... please wait."):
            try:
                output = replicate.run(
                    "stability-ai/stable-diffusion:db21e45b",  # Stable Diffusion model
                    input={
                        "prompt": prompt,
                        "image_dimensions": "512x512"
                    }
                )
                st.image(output[0], caption="Generated AI Photo", use_column_width=True)
            except Exception as e:
                st.error(f"Generation failed: {e}")

st.markdown("---")
st.caption("🚀 Built with [Streamlit](https://streamlit.io) + [Replicate API](https://replicate.com)")