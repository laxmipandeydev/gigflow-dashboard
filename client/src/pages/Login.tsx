import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import toast from "react-hot-toast";

import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(
        email,
        password
      );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );
      localStorage.setItem(
  "role",
  data.user.role
);

      toast.success(
        "Login successful"
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        "Invalid email or password"
      );

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-2xl bg-white rounded-[40px] p-10 shadow-sm">

        {/* LOGO */}

        <div className="flex items-center gap-4 mb-10">

          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-bold">
            G
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#0f172a]">
              GigFlow
            </h1>

            <p className="text-gray-500">
              Smart CRM Platform
            </p>
          </div>

        </div>

        {/* HEADING */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#0f172a]">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-xl mt-4">
            Login to continue managing your leads.
          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          {/* EMAIL */}

          <div>

            <label className="block text-lg font-medium mb-3">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full px-6 py-5 rounded-2xl bg-[#f4f7f6] outline-none text-lg"
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label className="block text-lg font-medium mb-3">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full px-6 py-5 rounded-2xl bg-[#f4f7f6] outline-none text-lg"
            />

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-black text-white text-xl font-medium hover:scale-[1.01] transition-all"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

        </form>

        {/* REGISTER */}

        <p className="text-center text-gray-500 text-lg mt-8">

          Don't have an account?

          <Link
            to="/register"
            className="text-black font-semibold ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;