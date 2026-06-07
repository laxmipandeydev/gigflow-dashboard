import { useEffect, useState } from "react";
import { fetchLeads } from "../services/leadService";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import AddLeadModal from "../components/leads/AddLeadModal";


const Leads = () => {
  const user =
JSON.parse(
  localStorage.getItem("user") || "{}"
);

const role =
user.role;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [editingLead, setEditingLead] = useState<any>(null);

const [leads, setLeads] = useState<any[]>([]);

useEffect(() => {
  const loadLeads = async () => {
    try {
      const data = await fetchLeads();

      setLeads(data);
    } catch (error) {
      console.log(error);
    }
  };

  loadLeads();
}, []);


  const filteredLeads = leads.filter((lead: any) => {

  const matchesSearch =
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    lead.status === statusFilter;

  return matchesSearch && matchesStatus;
});



  const handleDeleteLead = (email: string) => {
    const updatedLeads = leads.filter(
      (lead:any) => lead.email !== email
    );

    setLeads(updatedLeads);
    toast.success("Lead deleted");
  };
  const handleAddLead = (newLead: {
  id: number;
  name: string;
  email: string;
  status: string;
  source: string;
}) => {
  setLeads([newLead, ...leads]);
};

const handleUpdateLead = (updatedLead: any) => {

  const updatedLeads = leads.map((lead:any) =>
    lead.id === updatedLead.id
      ? updatedLead
      : lead
  );

  setLeads(updatedLeads);
  toast.success("Lead added successfully");
  setEditingLead(null);
};
  return (
    <DashboardLayout>

      <div className="space-y-8 w-full">

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Leads Management
            </h1>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Manage, track and organize all your leads.
            </p>

          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-6 py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition"
          >
            + Add Lead
          </button>

        </div>

        {/* FILTERS */}

        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-md">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <input
  type="text"
  placeholder="Search by name or email"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="border border-gray-200 rounded-2xl px-4 py-3 outline-none"
/>

            <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="border border-gray-200 rounded-2xl px-4 py-3 outline-none"
>
  <option>All</option>
  <option>Qualified</option>
  <option>Contacted</option>
  <option>New</option>
  <option>Lost</option>
</select>

            <select className="border border-gray-200 rounded-2xl px-4 py-3 outline-none">
              <option>Source</option>
              <option>Instagram</option>
              <option>Website</option>
              <option>Referral</option>
            </select>

            <select className="border border-gray-200 rounded-2xl px-4 py-3 outline-none">
              <option>Sort By</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>

          </div>

        </div>

        {/* LEADS TABLE */}

        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-md overflow-hidden">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">
              Recent Leads
            </h2>

            <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl text-sm sm:text-base font-medium w-full sm:w-auto">
              Export CSV
            </button>

          </div>

          {/* MOBILE CARDS */}

          <div className="space-y-4 lg:hidden">

           {filteredLeads.map((lead: any) => (

              <div
                key={lead._id}
                className="bg-[#f8fbfa] border border-gray-100 rounded-2xl p-4 flex flex-col gap-3"
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

                    <p className="text-xs text-gray-400">
                      Status
                    </p>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      {lead.status}
                    </span>

                  </div>

                  <div>

                    <p className="text-xs text-gray-400">
                      Source
                    </p>

                    <p className="text-sm">
                      {lead.source}
                    </p>

                  </div>

                </div>
                <button
  onClick={() => {
    setEditingLead(lead);
    setIsModalOpen(true);
  }}
  className="bg-gray-100 text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition mr-3"
>
  Edit
</button>
                {
  role === "Admin" && (
    <button
      onClick={() => handleDeleteLead(lead.email)}
      className="bg-red-100 text-red-600 px-4 py-2 rounded-xl hover:bg-red-200 transition"
    >
      Delete
    </button>
  )
}

              </div>
            ))}

          </div>

          {/* DESKTOP TABLE */}

          <div className="hidden lg:block overflow-x-auto">

            <table className="w-full min-w-[700px]">

              <thead>

                <tr className="border-b border-gray-200 text-left">

                  <th className="pb-5 text-sm sm:text-base lg:text-xl">
                    Name
                  </th>

                  <th className="pb-5 text-sm sm:text-base lg:text-xl">
                    Email
                  </th>

                  <th className="pb-5 text-sm sm:text-base lg:text-xl">
                    Status
                  </th>

                  <th className="pb-5 text-sm sm:text-base lg:text-xl">
                    Source
                  </th>

                  <th className="pb-5 text-sm sm:text-base lg:text-xl">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredLeads.map((lead : any) => (

                  <tr
                    key={lead._id}
                    className="border-b border-gray-100 hover:bg-[#f8fbfa] transition-all duration-200"
                  >

                    <td className="py-6 text-sm sm:text-base lg:text-xl">
                      {lead.name}
                    </td>

                    <td className="py-6 text-sm sm:text-base lg:text-xl">
                      {lead.email}
                    </td>

                    <td className="py-6">

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm lg:text-base">
                        {lead.status}
                      </span>

                    </td>

                    <td className="py-6 text-sm sm:text-base lg:text-xl">
                      {lead.source}
                    </td>

                    <td className="py-6">
                      <button
  onClick={() => {
    setEditingLead(lead);
    setIsModalOpen(true);
  }}
  className="bg-gray-100 text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition mr-3"
>
  Edit
</button>
                      {
  role === "Admin" && (
    <button
      onClick={() => handleDeleteLead(lead.email)}
      className="bg-red-100 text-red-600 px-4 py-2 rounded-xl hover:bg-red-200 transition"
    >
      Delete
    </button>
  )
}

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* PAGINATION */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">

          <p className="text-gray-500">
            Showing 1–4 of 24 leads
          </p>

          <div className="flex items-center flex-wrap gap-3">

            <button className="px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-100">
              Prev
            </button>

            <button className="px-4 py-2 rounded-xl bg-black text-white">
              1
            </button>

            <button className="px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-100">
              2
            </button>

            <button className="px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-100">
              Next
            </button>

          </div>

        </div>

      </div>

      <AddLeadModal
  isOpen={isModalOpen}
  onClose={() => {
    setIsModalOpen(false);
    setEditingLead(null);
  }}
  onAddLead={handleAddLead}
  onUpdateLead={handleUpdateLead}
  editingLead={editingLead}
/>

    </DashboardLayout>
  );
};

export default Leads;