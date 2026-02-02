SEVERITY_KEYWORDS = {
    "high": ["accident", "danger", "injured", "collapse", "fire"],
    "medium": ["broken", "overflow", "blocked"],
    "low": ["delay", "dirty", "complaint"]
}

class SeverityEstimator:
    def estimate(self, text: str) -> int:
        text = text.lower()
        for word in SEVERITY_KEYWORDS["high"]:
            if word in text:
                return 3
        for word in SEVERITY_KEYWORDS["medium"]:
            if word in text:
                return 2
        return 1
