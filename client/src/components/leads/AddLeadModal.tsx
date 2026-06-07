import { useState } from "react";

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: any) => void;
onUpdateLead: (lead: any) => void;
editingLead: any;
}

const AddLeadModal = ({
  isOpen,
  onClose,
  onAddLead,
  onUpdateLead,
  editingLead,
}: AddLeadModalProps) => {

  const [formData, setFormData] = useState({
  name: editingLead?.name || "",
  email: editingLead?.email || "",
  status: editingLead?.status || "New",
  source: editingLead?.source || "Website",
});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

if (!formData.name || !formData.email) return;

if (editingLead) {

  onUpdateLead({
    ...editingLead,
    ...formData,
  });

} else {

  onAddLead({
    id: Date.now(),
    ...formData,
  });
}

setFormData({
  name: "",
  email: "",
  status: "New",
  source: "Website",
});

onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

      <div className="bg-white w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-2xl">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-[#0f172a]">
            Add New Lead
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 text-2xl"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none"
          />

          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value,
              })
            }
            className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none"
          >
            <option>Qualified</option>
            <option>Contacted</option>
            <option>New</option>
            <option>Lost</option>
          </select>

          <select
            value={formData.source}
            onChange={(e) =>
              setFormData({
                ...formData,
                source: e.target.value,
              })
            }
            className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none"
          >
            <option>Instagram</option>
            <option>Website</option>
            <option>Referral</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-2xl font-medium text-lg"
          >
             {editingLead ? "Update Lead" : "Add Lead"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddLeadModal;