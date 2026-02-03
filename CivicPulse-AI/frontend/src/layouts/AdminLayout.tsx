import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="p-4 border-b border-slate-700">
        CivicPulse – Admin Console
      </header>
      <Outlet />
    </div>
  );
}
