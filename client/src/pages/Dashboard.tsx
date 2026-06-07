import DashboardLayout from "../layouts/DashboardLayout";
const Dashboard = () => {
  const role =
  localStorage.getItem("role");
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a]">
            Smart Leads Dashboard
          </h1>

          <p className="text-gray-500 text-sm md:text-lg mt-3">
            Manage and track your leads efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              title: "Total Leads",
              value: "1,248",
              growth: "+12%",
            },
            {
              title: "Qualified",
              value: "842",
              growth: "+8%",
            },
            {
              title: "Contacted",
              value: "312",
              growth: "+18%",
            },
            {
              title: "Lost Leads",
              value: "94",
              growth: "-2%",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl p-5 md:p-7 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/60 backdrop-blur-lg"
            >
              <p className="text-gray-500 text-xl">
                {card.title}
              </p>

              <div className="flex items-end justify-between mt-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a]">
                  {card.value}
                </h2>

                <span className="text-green-500 text-base md:text-xl font-medium">
                  {card.growth}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
  Recent Leads
</h2>

            {
  role === "Admin" && (

    <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl text-sm sm:text-base font-medium w-full sm:w-auto">
      Export CSV
    </button>

  )
}
          </div>

          <div className="hidden md:block overflow-x-auto">
          <div className="space-y-4">

  {[
    {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      status: "Qualified",
      source: "Instagram",
    },
    {
      name: "Priya Mehta",
      email: "priya@gmail.com",
      status: "Contacted",
      source: "Website",
    },
    {
      name: "Aman Verma",
      email: "aman@gmail.com",
      status: "New",
      source: "Referral",
    },
  ].map((lead) => (
    
    <div
      key={lead.email}
      className="bg-[#f8fbfa] border border-gray-100 rounded-2xl p-4 flex flex-col gap-3 md:hidden"
    >

      <div>
        <p className="text-xs text-gray-400">Name</p>
        <p className="font-semibold text-[#0f172a]">
          {lead.name}
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-400">Email</p>
        <p className="text-sm break-all">
          {lead.email}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Status</p>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
            {lead.status}
          </span>
        </div>

        <div>
          <p className="text-xs text-gray-400">Source</p>
          <p className="text-sm">
            {lead.source}
          </p>
        </div>
      </div>

    </div>
  ))}

</div>
</div>
</div>
</div>
</DashboardLayout>
);
};

export default Dashboard;