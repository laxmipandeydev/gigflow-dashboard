import axios from "axios";

const API = "http://localhost:5000/api/leads";

export const fetchLeads = async () => {
  const response = await axios.get(API);

  return response.data;
};