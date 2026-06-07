import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import { registerUser } from "../services/authService";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [role, setRole] =
    useState("Sales User");

  const [loading, setLoading] =
    useState(false);

  const handleRegister = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      toast.error(
        "Passwords do not match"
      );

      return;
    }

    const strongPassword =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

    if (!strongPassword.test(password)) {

      toast.error(
        "Password must contain uppercase, number & special character"
      );

      return;
    }

    try {

      setLoading(true);

      await registerUser(
        name,
        email,
        password,
        role
      );

      toast.success(
        "Account created successfully"
      );

      navigate("/login");

    } catch (error) {

      toast.error(
        "Registration failed"
      );

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-2xl bg-white rounded-[40px] p-10 shadow-sm">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#0f172a]">
            Create Account
          </h1>

          <p className="text-gray-500 text-xl mt-4">
            Start managing your leads smarter today.
          </p>

        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full px-6 py-5 rounded-2xl bg-[#f4f7f6] outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full px-6 py-5 rounded-2xl bg-[#f4f7f6] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full px-6 py-5 rounded-2xl bg-[#f4f7f6] outline-none"
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
            className="w-full px-6 py-5 rounded-2xl bg-[#f4f7f6] outline-none"
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full px-6 py-5 rounded-2xl bg-[#f4f7f6] outline-none"
          >
            <option>
              Sales User
            </option>

            <option>
              Admin
            </option>

          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-black text-white text-xl font-medium"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

        </form>

        <p className="text-center mt-8">

          Already have an account?

          <Link
            to="/login"
            className="font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;