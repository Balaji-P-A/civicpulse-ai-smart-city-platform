import { api } from "./api.client";

export const login = (data: any) =>
  api.post("/auth/login", data);

export const logout = () =>
  api.post("/auth/logout");
