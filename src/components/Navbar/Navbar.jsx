const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <h1 className="text-xl font-bold text-pink-600">Quranku</h1>
      </div>
    </header>
  );
};

export default Navbar;
