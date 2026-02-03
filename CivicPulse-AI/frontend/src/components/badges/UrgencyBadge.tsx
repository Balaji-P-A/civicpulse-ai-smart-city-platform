type Props = {
  score: number;
};

export default function UrgencyBadge({ score }: Props) {
  const color =
    score > 80 ? "bg-red-600" : score > 50 ? "bg-orange-500" : "bg-green-600";

  return (
    <span className={`px-2 py-1 text-white rounded`}>
      Urgency: {score}
    </span>
  );
}
