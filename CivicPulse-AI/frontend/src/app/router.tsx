import { createBrowserRouter } from "react-router-dom";
import CitizenLayout from "../layouts/CitizenLayout";
import AuthorityLayout from "../layouts/AuthorityLayout";
import AdminLayout from "../layouts/AdminLayout";

import ReportIssue from "../pages/citizen/ReportIssue";
import TrackStatus from "../pages/citizen/TrackStatus";
import HeatmapView from "../pages/authority/HeatmapView";
import UserManagement from "../pages/admin/UserManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CitizenLayout />,
    children: [
      { path: "", element: <ReportIssue /> },
      { path: "track", element: <TrackStatus /> },
    ],
  },
  {
    path: "/authority",
    element: <AuthorityLayout />,
    children: [{ path: "heatmap", element: <HeatmapView /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ path: "users", element: <UserManagement /> }],
  },
]);
