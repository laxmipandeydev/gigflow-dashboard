import {
  House,
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Menu,
  UserCog,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Sidebar = () => {
  const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

const role = user.role;
const [mobileOpen,
setMobileOpen] =
useState(false);
const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/login");
};
  return (
    <>
      {/* MOBILE TOPBAR */}

      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 z-50">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold">
            G
          </div>

          <h1 className="text-xl font-bold text-[#0f172a]">
            GigFlow
          </h1>

        </div>

        <button
  onClick={() =>
    setMobileOpen(
      !mobileOpen
    )
  }
  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
>
  <Menu size={20} />
</button>

      </div>
      {
  mobileOpen && (

    <div className="md:hidden fixed inset-0 bg-black/40 z-50">

      <div className="w-[260px] h-full bg-white p-6">

        <button
          onClick={() =>
            setMobileOpen(false)
          }
          className="mb-6 text-red-500 font-semibold"
        >
          Close ✕
        </button>

        <nav className="space-y-4">

          <Link
            to="/"
            onClick={() =>
              setMobileOpen(false)
            }
            className="flex items-center gap-3"
          >
            <House size={22} />
            Home
          </Link>

          <Link
            to="/dashboard"
            onClick={() =>
              setMobileOpen(false)
            }
            className="flex items-center gap-3"
          >
            <LayoutDashboard size={22} />
            Dashboard
          </Link>

          <Link
            to="/leads"
            onClick={() =>
              setMobileOpen(false)
            }
            className="flex items-center gap-3"
          >
            <Users size={22} />
            Leads
          </Link>

          {
            role === "Admin" && (

              <Link
                to="/analytics"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="flex items-center gap-3"
              >
                <BarChart3 size={22} />
                Analytics
              </Link>

            )
          }

          {
            role === "Admin" && (

              <Link
                to="/employees"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="flex items-center gap-3"
              >
                <UserCog size={22} />
                Employees
              </Link>

            )
          }

          {
            role === "Admin" && (

              <Link
                to="/settings"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="flex items-center gap-3"
              >
                <Settings size={22} />
                Settings
              </Link>

            )
          }

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-600"
          >
            <LogOut size={22} />
            Logout
          </button>

        </nav>

      </div>

    </div>

  )
}

      {/* DESKTOP SIDEBAR */}

      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-[260px] bg-white border-r border-gray-100 p-6 flex-col justify-between  overflow-y-auto">
        <div>

          <div className="flex items-center gap-3 mb-12">

            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              G
            </div>

            <div>

              <h1 className="text-3xl font-bold text-[#0f172a]">
                GigFlow
              </h1>

              <p className="text-gray-500 text-sm">
                Smart CRM Dashboard
              </p>

            </div>

          </div>

          <nav className="space-y-4">
<Link
  to="/"
  className="w-full text-gray-700 hover:bg-gray-100 transition rounded-2xl px-5 py-4 flex items-center gap-3 text-lg"
>
  <House size={22} />
  Home
</Link>
            <Link
  to="/dashboard"
  className="w-full hover:bg-[#111827] transition-all duration-300 hover:scale-[1.02] rounded-2xl px-5 py-4 flex items-center gap-3 text-lg font-medium"
>
  <LayoutDashboard size={22} />
  Dashboard
</Link>
            <Link
  to="/leads"
  className="w-full text-gray-700 hover:bg-gray-100 transition rounded-2xl px-5 py-4 flex items-center gap-3 text-lg"
>
  <Users size={22} />
  Leads
</Link>

{
  role === "Admin" && (

    <Link
      to="/analytics"
      className="w-full text-gray-700 hover:bg-gray-100 transition rounded-2xl px-5 py-4 flex items-center gap-3 text-lg"
    >
      <BarChart3 size={22} />
      Analytics
    </Link>

  )
}
       {
  role === "Admin" && (

    <Link
      to="/employees"
      className="w-full text-gray-700 hover:bg-gray-100 transition rounded-2xl px-5 py-4 flex items-center gap-3 text-lg"
    >
      <UserCog size={22} />
      Employees
    </Link>

  )
}     


            {
  role === "Admin" && (

    <Link
      to="/settings"
      className="w-full text-gray-700 hover:bg-gray-100 transition rounded-2xl px-5 py-4 flex items-center gap-3 text-lg"
    >
      <Settings size={22} />
      Settings
    </Link>

  )
}



          </nav>

        </div>
<button
  onClick={handleLogout}
  className="w-full text-red-600 hover:bg-red-50 transition rounded-2xl px-5 py-4 flex items-center gap-3 text-lg"
>
  <LogOut size={22} />
  Logout
</button>
      </aside>
    </>
  );
};

export default Sidebar;