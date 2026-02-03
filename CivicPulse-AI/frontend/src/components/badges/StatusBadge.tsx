type Props = {
  status: "open" | "in_progress" | "resolved";
};

export default function StatusBadge({ status }: Props) {
  const color =
    status === "open"
      ? "bg-red-100 text-red-700"
      : status === "in_progress"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <span className={`px-2 py-1 rounded text-sm ${color}`}>
      {status.replace("_", " ")}
    </span>
  );
}
