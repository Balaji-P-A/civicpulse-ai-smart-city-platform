type Props = {
  headers: string[];
  rows: string[][];
};

export default function DataTable({ headers, rows }: Props) {
  if (rows.length === 0) {
    return <TableEmpty />;
  }

  return (
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          {headers.map(h => (
            <th key={h} className="border p-2 text-left">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="border p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TableEmpty() {
  return (
    <div className="p-4 text-center text-gray-500">
      No data available
    </div>
  );
}
