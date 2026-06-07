import {
  Navigate,
} from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const AdminRoute = ({
  children,
}: Props) => {

  const user =
    JSON.parse(
      localStorage.getItem("user") || "{}"
    );

  if (user.role !== "Admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AdminRoute;