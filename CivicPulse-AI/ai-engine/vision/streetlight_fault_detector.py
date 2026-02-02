class StreetlightFaultDetector:
    def detect(self, image_path: str) -> dict:
        return {
            "detected": True,
            "confidence": 0.75
        }
