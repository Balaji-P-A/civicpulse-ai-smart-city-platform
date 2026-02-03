type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ChartContainer({ title, children }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
