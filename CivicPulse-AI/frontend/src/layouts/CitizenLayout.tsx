import { Outlet } from "react-router-dom";

export default function CitizenLayout() {
  return (
    <div className="min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        CivicPulse – Citizen Portal
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
