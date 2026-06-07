import axios from "axios";

const API =
  "http://localhost:5000/api/auth";

export const loginUser = async (
  email: string,
  password: string
) => {
  const response = await axios.post(
    `${API}/login`,
    {
      email,
      password,
    }
  );

  return response.data;
};

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {

  const response = await axios.post(
    `${API}/register`,
    {
      name,
      email,
      password,
      role,
    }
  );

  return response.data;
};
export const getEmployees =
  async () => {

    const response =
      await axios.get(
        `${API}/employees`
      );

    return response.data;
};
export const createEmployee =
  async (
    name: string,
    email: string,
    password: string,
    role: string
  ) => {

    const response =
      await axios.post(
        `${API}/employees`,
        {
          name,
          email,
          password,
          role,
        }
      );

    return response.data;
};
export const updateEmployee =
  async (
    id: string,
    name: string,
    role: string
  ) => {

    const response =
      await axios.put(
        `${API}/employees/${id}`,
        {
          name,
          role,
        }
      );
    return response.data;
};
export const deleteEmployee =
  async (id: string) => {

    const response =
      await axios.delete(
        `${API}/employees/${id}`
      );

    return response.data;
};
export const resetPassword =
  async (
    id: string,
    password: string
  ) => {

    const response =
      await axios.put(
        `${API}/employees/reset-password/${id}`,
        {
          password,
        }
      );

    return response.data;
};