class UrgencySignalExtractor:
    def extract(self, text: str) -> dict:
        signals = {
            "time_sensitive": False,
            "safety_related": False
        }

        keywords_time = ["immediately", "today", "urgent", "now"]
        keywords_safety = ["accident", "child", "hospital", "school"]

        text = text.lower()
        if any(k in text for k in keywords_time):
            signals["time_sensitive"] = True
        if any(k in text for k in keywords_safety):
            signals["safety_related"] = True

        return signals
