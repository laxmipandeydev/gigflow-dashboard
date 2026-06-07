const Topbar = () => {
  return (
    <header className="bg-[#f4f8f7] px-4 md:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100">

      <div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
          Dashboard Overview
        </h2>

        <p className="text-gray-500 mt-1 text-sm md:text-base">
          Track leads and sales performance.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search leads..."
          className="bg-white px-5 py-3 rounded-2xl border border-gray-100 outline-none w-full md:w-[280px]"
        />

        <div className="hidden md:flex w-12 h-12 rounded-full bg-black text-white items-center justify-center text-lg font-semibold">
          L
        </div>

      </div>

    </header>
  );
};

export default Topbar;