export const urgencyColorMap = (score: number) => {
  if (score > 80) return "red";
  if (score > 50) return "orange";
  return "green";
};
