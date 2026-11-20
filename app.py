
import os

from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)

CORS(app, resources={
    r"/chat": {
        "origins": ["https://tadeaschwalek25.github.io"]
    }
})

app.config["MAX_CONTENT_LENGTH"] = 32 * 1024

GROQ_API_KEY = os.environ.get("GROQ_API_KEY")
GROQ_MODEL = os.environ.get("GROQ_MODEL", "openai/gpt-oss-20b")

client = OpenAI(
    api_key=GROQ_API_KEY,
    base_url="https://api.groq.com/openai/v1"
) if GROQ_API_KEY else None

INSTRUCTIONS = """
Jsi AI technická podpora TechSupport.

Pomáháš uživatelům řešit libovolné technické problémy.

Může jít například o:
- Počítače a notebooky
- Mobily a tablety
- Windows a další operační systémy
- Software a aplikace
- Internet a Wi-Fi
- Tiskárny a další zařízení
- Elektroniku a technické vybavení

PRAVIDLA:
- Odpovídej česky.
- Buď přátelský, trpělivý a srozumitelný.
- Vysvětluj postup krok za krokem.
- Nepoužívej zbytečně složité odborné výrazy.
- Pokud potřebuješ další informace, zeptej se uživatele.
- Nevymýšlej si fakta.
- Upozorni na rizika, pokud by postup mohl poškodit zařízení nebo data.
- Nikdy nežádej hesla, PIN ani platební údaje.

Odpovědi formátuj přehledně.
"""

@app.get("/")
def home():
    return "TechSupport Backend is running"

@app.get("/health")
def health():
    return jsonify({
        "status": "ok",
        "groq_key": bool(GROQ_API_KEY),
        "groq_model": bool(GROQ_MODEL)
    })

@app.post("/chat")
def chat():
    data = request.get_json(silent=True) or {}

    message = (data.get("message") or "").strip()
    email = (data.get("email") or "").strip()

    if not message:
        return jsonify({"error": "Napiš svůj technický problém."}), 400

    if len(message) > 2000:
        return jsonify({"error": "Dotaz je příliš dlouhý."}), 400

    if not GROQ_API_KEY or client is None:
        return jsonify({"error": "Na serveru chybí GROQ_API_KEY."}), 500

    try:
        response = client.chat.completions.create(
            model=GROQ_MODEL,
            messages=[
                {"role": "system", "content": INSTRUCTIONS},
                {"role": "user", "content": message}
            ],
            temperature=0.5
        )

        reply = response.choices[0].message.content or ""

        return jsonify({"reply": reply.strip()})

    except Exception as error:
        print("Groq API error:", repr(error))
        return jsonify({
            "error": "Nepodařilo se vytvořit odpověď. Zkus to prosím znovu."
        }), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=port)
