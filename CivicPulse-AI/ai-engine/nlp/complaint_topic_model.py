from transformers import pipeline

class ComplaintTopicModel:
    def __init__(self):
        self.classifier = pipeline(
            "zero-shot-classification",
            model="facebook/bart-large-mnli"
        )
        self.labels = [
            "Road Damage",
            "Water Supply",
            "Garbage / Waste",
            "Streetlight",
            "Public Transport",
            "School Infrastructure",
            "Drainage / Flooding"
        ]

    def classify(self, text: str) -> dict:
        result = self.classifier(text, self.labels)
        return {
            "category": result["labels"][0],
            "confidence": result["scores"][0]
        }
