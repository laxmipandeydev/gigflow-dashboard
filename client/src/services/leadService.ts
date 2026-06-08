import axios from "axios";

const API =
  "https://gigflow-dashboard-eulr.onrender.com/api/leads";

export const fetchLeads = async () => {
  const response = await axios.get(API);

  return response.data;
};