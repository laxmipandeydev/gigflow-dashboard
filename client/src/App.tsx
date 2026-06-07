import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

import AdminRoute from "./routes/AdminRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";
function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />
      <Route path="/login" element={<Login />} />
      
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

      <Route
  path="/leads"
  element={
    <ProtectedRoute>
      <Leads />
    </ProtectedRoute>
  }
/>

      <Route
  path="/analytics"
  element={
    <ProtectedRoute>
      <AdminRoute>
        <Analytics />
      </AdminRoute>
    </ProtectedRoute>
  }
/>

      <Route
        path="/register"
        element={<Register />}
      />
      <Route
  path="/employees"
  element={
    <ProtectedRoute>
      <AdminRoute>
        <Employees />
      </AdminRoute>
    </ProtectedRoute>
  }
/>
<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;