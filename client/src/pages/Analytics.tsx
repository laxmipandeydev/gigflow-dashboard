import DashboardLayout from "../layouts/DashboardLayout";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a]">
            Analytics Overview
          </h1>

          <p className="text-gray-500 mt-3">
            Track lead performance and conversion trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-md">
            <p className="text-gray-500">
              Total Leads
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-3">
              120
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md">
            <p className="text-gray-500">
              Qualified
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-3">
              45
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md">
            <p className="text-gray-500">
              Converted
            </p>

            <h2 className="text-4xl font-bold text-purple-600 mt-3">
              20
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md">
            <p className="text-gray-500">
              Lost
            </p>

            <h2 className="text-4xl font-bold text-red-600 mt-3">
              10
            </h2>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Performance Summary
          </h2>

          <p className="text-gray-600">
            This dashboard provides an overview of lead generation,
            qualification, conversion performance and lost opportunities.
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Analytics;