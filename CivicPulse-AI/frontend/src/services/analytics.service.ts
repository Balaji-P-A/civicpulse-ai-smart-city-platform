import { api } from "./api.client";

export const fetchAnalytics = () =>
  api.get("/analytics");
