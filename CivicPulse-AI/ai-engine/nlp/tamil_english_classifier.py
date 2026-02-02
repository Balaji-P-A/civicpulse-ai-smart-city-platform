from langdetect import detect
from transformers import pipeline

class TamilEnglishClassifier:
    def __init__(self):
        self.translator = pipeline(
            "translation",
            model="Helsinki-NLP/opus-mt-ta-en"
        )

    def detect_language(self, text: str) -> str:
        try:
            return detect(text)
        except:
            return "unknown"

    def normalize(self, text: str) -> str:
        lang = self.detect_language(text)
        if lang == "ta":
            translated = self.translator(text)[0]["translation_text"]
            return translated
        return text
