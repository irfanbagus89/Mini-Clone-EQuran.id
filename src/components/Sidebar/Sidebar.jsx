import { useQuran } from "../../context/QuranContext";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchBox from "../Ui/SearchBox";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { surahList, loading } = useQuran();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const filtered = surahList.filter((s) =>
    s.namaLatin.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          top-0 left-0 h-full w-72
          bg-white dark:bg-gray-800 p-4 overflow-y-auto
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile) */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-lg font-bold dark:text-white">Daftar Surat</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <h2 className="text-lg font-bold mb-4 dark:text-white hidden md:block">
          Daftar Surat
        </h2>

        <SearchBox value={query} onChange={setQuery} />

        {loading && <p className="text-gray-500 mt-4">Loading...</p>}

        <ul className="space-y-2 mt-4">
          {filtered.map((surah) => {
            const active = location.pathname === `/surah/${surah.nomor}`;
            return (
              <li key={surah.nomor}>
                <Link
                  to={`/surah/${surah.nomor}`}
                  onClick={() => setSidebarOpen(false)}
                  className={`block p-3 rounded-lg ${
                    active
                      ? "bg-pink-200 dark:bg-gray-700"
                      : "hover:bg-pink-100 dark:hover:bg-gray-700"
                  } dark:text-white`}
                >
                  <div className="font-semibold">{surah.namaLatin}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {surah.arti}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
