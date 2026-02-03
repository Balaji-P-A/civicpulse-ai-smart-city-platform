export default function ReportIssue() {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Report an Issue</h1>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Describe the problem"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
}
