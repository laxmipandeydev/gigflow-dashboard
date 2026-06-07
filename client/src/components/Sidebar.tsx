
import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  House,
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut
} from "lucide-react";

function Sidebar() {
  const navigate =
  useNavigate();

const handleLogout = () => {

  localStorage.removeItem(
    "token"
  );

  localStorage.removeItem(
    "user"
  );

  navigate("/login");
};
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[260px] xl:w-[280px] bg-white/70 backdrop-blur-2xl border-r border-white/40 p-6 flex-col">

      <div>
        <div className="w-14 h-14 rounded-2xl bg-black text-white shadow-xl shadow-black/20 flex items-center justify-center text-2xl font-bold">
          G
        </div>

        <h2 className="text-2xl font-bold mt-6 text-gray-900">
          GigFlow
        </h2>

        <p className="text-gray-500 mt-2">
          Smart CRM Dashboard
        </p>
      </div>

      <nav className="mt-12 space-y-3">
        
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

        <Link
  to="/analytics"
  className="w-full text-gray-700 hover:bg-gray-100 transition rounded-2xl px-5 py-4 flex items-center gap-3 text-lg"
>
  <BarChart3 size={22} />
  Analytics
</Link>

        <button className="w-full flex items-center gap-4 text-gray-700 hover:bg-white px-5 py-4 rounded-2xl transition-all">
          <Settings size={20} />
          Settings
        </button>
      <button
  onClick={handleLogout}
  className="w-full text-red-600 hover:bg-red-50 transition rounded-2xl px-5 py-4 flex items-center gap-3 text-lg mt-4"
>
  <LogOut size={22} />
  Logout
</button>
      </nav>

    </aside>
  );
}


export default Sidebar;