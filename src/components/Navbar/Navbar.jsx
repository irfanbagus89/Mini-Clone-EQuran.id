import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold text-pink-600">Quranku</h1>
      <button
        onClick={toggleDark}
        className="px-4 py-2 rounded-lg bg-pink-500 text-white"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </header>
  );
};

export default Navbar;
