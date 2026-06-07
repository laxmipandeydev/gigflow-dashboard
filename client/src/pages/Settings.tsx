import DashboardLayout from "../layouts/DashboardLayout";

const Settings = () => {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <div className="bg-white rounded-3xl p-8 shadow-md">

  <h2 className="text-2xl font-bold mb-6">
    Profile Information
  </h2>

  <div className="space-y-5">

    <div>
      <p className="text-gray-500">
        Full Name
      </p>

      <p className="text-xl font-semibold">
        {user.name}
      </p>
    </div>

    <div>
      <p className="text-gray-500">
        Email
      </p>

      <p className="text-xl font-semibold">
        {user.email}
      </p>
    </div>

    <div>
      <p className="text-gray-500">
        Role
      </p>

      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
        {user.role}
      </span>
    </div>

  </div>

</div>
        
      </div>
<div className="bg-white rounded-3xl p-8 shadow-md">

  <h2 className="text-2xl font-bold mb-6">
    Security
  </h2>

  <button className="bg-black text-white px-5 py-3 rounded-2xl">
    Change Password
  </button>

</div>
    </DashboardLayout>
  );
};

export default Settings;