import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f6]">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-6 md:px-16 py-6">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-bold">
            G
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#0f172a]">
              GigFlow
            </h1>

            <p className="text-gray-500">
              Smart CRM Dashboard
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="px-6 py-3 rounded-2xl border border-gray-300 font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-6 py-3 rounded-2xl bg-black text-white font-medium"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="px-6 md:px-16 py-20">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-6">
              AI Powered CRM Platform
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#0f172a]">
              Manage Leads Smarter with GigFlow
            </h1>

            <p className="text-gray-600 text-xl mt-8 leading-relaxed">
              Track leads, analyze performance, manage sales pipelines, and grow your business using one modern dashboard.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/register"
                className="px-8 py-4 rounded-2xl bg-black text-white text-lg font-medium hover:scale-105 transition-all"
              >
                Start Free
              </Link>

              <Link
                to="/login"
                className="px-8 py-4 rounded-2xl border border-gray-300 text-lg font-medium hover:bg-white transition-all"
              >
                Live Demo
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-[40px] p-8 shadow-sm">

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-[#f4f7f6] rounded-3xl p-6">
                <p className="text-gray-500">
                  Total Leads
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  1.2K
                </h2>
              </div>

              <div className="bg-[#f4f7f6] rounded-3xl p-6">
                <p className="text-gray-500">
                  Conversion
                </p>

                <h2 className="text-5xl font-bold mt-4 text-green-500">
                  64%
                </h2>
              </div>

              <div className="bg-[#f4f7f6] rounded-3xl p-6 col-span-2">
                <p className="text-gray-500">
                  Top Source
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  Instagram Leads
                </h2>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;