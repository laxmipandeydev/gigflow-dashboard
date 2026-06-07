import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";

import {
  getEmployees,
  createEmployee,
   updateEmployee,
    deleteEmployee,
    resetPassword,
} from "../services/authService";

const Employees = () => {

  const [employees, setEmployees] =
    useState<any[]>([]);
    const [showModal,
setShowModal] =
useState(false);

const [name,
setName] =
useState("");

const [email,
setEmail] =
useState("");

const [password,
setPassword] =
useState("");
const [showPassword,
setShowPassword] =
useState(false);
const [editModal,
setEditModal] =
useState(false);

const [selectedEmployee,
setSelectedEmployee] =
useState<any>(null);
const [role,
setRole] =
useState("Sales User");
const [resetModal,
setResetModal] =
useState(false);

const [newPassword,
setNewPassword] =
useState("");

const [confirmPassword,
setConfirmPassword] =
useState("");

  useEffect(() => {

    const loadEmployees =
      async () => {

        try {

          const data =
            await getEmployees();

          setEmployees(data);

        } catch (error) {

          console.log(error);

        }
      };

    loadEmployees();

  }, []);
  const handleCreateEmployee =
  async () => {

    if (
  name.trim() === ""
) {

  alert(
    "Enter employee name"
  );

  return;
}

    const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (
  !emailRegex.test(email)
) {

  alert(
    "Enter valid email address"
  );

  return;
}
const strongPassword =
/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

if (
 !strongPassword.test(
   password
 )
) {

 alert(
   "Password must contain uppercase, number and special character"
 );

 return;
}
    try {

      await createEmployee(
        name,
        email,
        password,
        role
      );

      const data =
        await getEmployees();

      setEmployees(data);

      setShowModal(false);

      setName("");
      setEmail("");
      setPassword("");
      setRole("Sales User");
setShowPassword(false);

    } catch (error: any) {

  alert(
    error.response?.data?.message
  );

  console.log(error);

}
};
const handleUpdateEmployee =
async () => {

  try {

    await updateEmployee(
      selectedEmployee._id,
      name,
      role
    );

    const data =
      await getEmployees();

    setEmployees(data);

    setEditModal(false);

  } catch (error) {

    console.log(error);

  }
};
const handleDeleteEmployee =
async (id: string) => {

  const confirmDelete =
    window.confirm(
      "Delete this employee?"
    );

  if (!confirmDelete) return;

  try {

    await deleteEmployee(id);

    const data =
      await getEmployees();

    setEmployees(data);

  } catch (error) {

    console.log(error);

  }
};
const handleResetPassword =
async () => {

  if (
    newPassword !==
    confirmPassword
  ) {

    alert(
      "Passwords do not match"
    );

    return;

  }

  try {

    await resetPassword(
      selectedEmployee._id,
      newPassword
    );

    alert(
      "Password Updated"
    );

    setResetModal(false);

    setNewPassword("");
    setConfirmPassword("");

  } catch (error) {

    console.log(error);

  }

};
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <h1 className="text-4xl font-bold">
            Employees
          </h1>

          <button
  onClick={() =>
    setShowModal(true)
  }
  className="bg-black text-white px-5 py-3 rounded-2xl"
>
  + Add Employee
</button>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="pb-4">
  Name
</th>

<th className="pb-4">
  Email
</th>

<th className="pb-4">
  Role
</th>

<th className="pb-4">
  Actions
</th>
              </tr>

            </thead>

            <tbody>

              {employees.map(
                (emp: any) => (

                  <tr
                    key={emp._id}
                    className="border-b"
                  >

                    <td className="py-4">
                      {emp.name}
                    </td>

                    <td>
                      {emp.email}
                    </td>

                   <td>
  {emp.role}
</td>

<td className="space-x-2">

  <button
  onClick={() => {

    setSelectedEmployee(emp);

    setName(emp.name);

    setRole(emp.role);

    setEditModal(true);

  }}
  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
>
  Edit
</button>

 <button
  onClick={() =>
    handleDeleteEmployee(
      emp._id
    )
  }
  className="bg-red-100 text-red-600 px-3 py-1 rounded-lg"
>
  Delete
</button>

  <button
  onClick={() => {

    setSelectedEmployee(
      emp
    );

    setResetModal(true);

  }}
  className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg"
>
  Reset Password
</button>

</td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>
{
  showModal && (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-3xl w-[450px] space-y-4">

        <h2 className="text-2xl font-bold">
          Add Employee
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        />

        <div className="relative">

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }
    placeholder="Password"
    value={password}
    onChange={(e) =>
      setPassword(
        e.target.value
      )
    }
    className="w-full border p-3 rounded-xl"
  />

  <button
    type="button"
    onClick={() =>
      setShowPassword(
        !showPassword
      )
    }
    className="absolute right-4 top-1/2 -translate-y-1/2"
  >
    👁
  </button>

</div>
<p className="text-sm text-gray-500">

Password must contain:
1 Uppercase letter,
1 Number,
1 Special Character

</p>

        <select
          value={role}
          onChange={(e) =>
            setRole(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        >

          <option>
            Sales User
          </option>

          <option>
            Admin
          </option>

        </select>

        <div className="flex gap-3">

          <button
            onClick={
              handleCreateEmployee
            }
            className="bg-black text-white px-5 py-3 rounded-xl"
          >
            Create
          </button>

          <button
  onClick={() => {

    setShowModal(false);

    setName("");
    setEmail("");
    setPassword("");
    setRole("Sales User");
    setShowPassword(false);

  }}
  className="bg-gray-200 px-5 py-3 rounded-xl"
>
  Cancel
</button>

        </div>

      </div>

    </div>

  )
}
{
  editModal && (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-3xl w-[450px] space-y-4">

        <h2 className="text-2xl font-bold">
          Edit Employee
        </h2>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        />

        <select
          value={role}
          onChange={(e) =>
            setRole(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        >
          <option>
            Sales User
          </option>

          <option>
            Admin
          </option>
        </select>

        <div className="flex gap-3">

          <button
            onClick={
              handleUpdateEmployee
            }
            className="bg-black text-white px-5 py-3 rounded-xl"
          >
            Save
          </button>

          <button
            onClick={() =>
              setEditModal(false)
            }
            className="bg-gray-200 px-5 py-3 rounded-xl"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  )
}
{
  resetModal && (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-3xl w-[450px] space-y-4">

        <h2 className="text-2xl font-bold">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        />

        <div className="flex gap-3">

          <button
            onClick={
              handleResetPassword
            }
            className="bg-black text-white px-5 py-3 rounded-xl"
          >
            Save
          </button>

          <button
            onClick={() =>
              setResetModal(false)
            }
            className="bg-gray-200 px-5 py-3 rounded-xl"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  )
}
    </DashboardLayout>
  );
};

export default Employees;