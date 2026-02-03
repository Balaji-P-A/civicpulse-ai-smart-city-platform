import { api } from "./api.client";

export const submitComplaint = (data: any) =>
  api.post("/complaints", data);
