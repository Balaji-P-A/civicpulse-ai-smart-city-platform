import { Outlet } from "react-router-dom";

export default function AuthorityLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-700 text-white p-4">
        CivicPulse – Authority Dashboard
      </header>
      <Outlet />
    </div>
  );
}
