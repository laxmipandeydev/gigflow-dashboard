function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/50 backdrop-blur-2xl border-b border-white/30 px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">

      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Dashboard Overview
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <div className="hidden sm:flex items-center bg-white px-4 py-2 rounded-2xl border border-gray-100">
          <input
            type="text"
            placeholder="Search leads..."
            className="outline-none bg-transparent text-sm"
          />
        </div>

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-semibold">
          L
        </div>

      </div>
    </header>
  );
}

export default Navbar;