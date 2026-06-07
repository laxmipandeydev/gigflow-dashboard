const leads = [
  {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    status: "Qualified",
    source: "Instagram"
  },
  {
    name: "Priya Mehta",
    email: "priya@gmail.com",
    status: "Contacted",
    source: "Website"
  },
  {
    name: "Aman Verma",
    email: "aman@gmail.com",
    status: "New",
    source: "Referral"
  }
];

function LeadTable() {
  return (
    <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 overflow-x-auto shadow-md">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Recent Leads
        </h2>

        <button className="bg-black text-white px-5 py-3 rounded-2xl">
          Export CSV
        </button>
      </div>

      <table className="w-full min-w-[700px]">

        <thead>
          <tr className="text-left border-b border-gray-200">
            <th className="pb-4">Name</th>
            <th className="pb-4">Email</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Source</th>
          </tr>
        </thead>

        <tbody>

          {leads.map((lead, index) => (
            <tr
              key={index}
              className="border-b border-gray-100"
            >
              <td className="py-5">{lead.name}</td>
              <td>{lead.email}</td>
              <td>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                  {lead.status}
                </span>
              </td>
              <td>{lead.source}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;