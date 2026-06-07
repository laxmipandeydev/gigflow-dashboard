import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
 return (
  <div className="min-h-screen bg-gradient-to-br from-[#eef7f5] via-[#f8fbfa] to-[#ecf5ff] flex">

    <Sidebar />

    <div className="flex-1 lg:ml-[280px] min-w-0">

      <Topbar />

      <main className="px-4 py-5 md:px-6 lg:px-8">
        {children}
      </main>

    </div>

  </div>
);
};

export default DashboardLayout;