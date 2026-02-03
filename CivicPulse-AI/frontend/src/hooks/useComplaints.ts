import { submitComplaint } from "../services/complaint.service";

export function useComplaints() {
  const createComplaint = async (payload: any) => {
    await submitComplaint(payload);
  };

  return { createComplaint };
}
