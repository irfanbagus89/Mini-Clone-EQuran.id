import { useQuran } from "../../context/QuranContext";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import SearchBox from "../Ui/SearchBox";

const Sidebar = () => {
  const { surahList, loading } = useQuran();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const filtered = surahList.filter((s) =>
    s.namaLatin.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <aside className="w-72 bg-white dark:bg-gray-800 p-4 overflow-y-auto hidden md:block">
      <h2 className="text-lg font-bold mb-4 dark:text-white">Daftar Surat</h2>

      <SearchBox value={query} onChange={setQuery} />

      {loading && <p className="text-gray-500 mt-4">Loading...</p>}

      <ul className="space-y-2 mt-4">
        {filtered.map((surah) => {
          const active = location.pathname === `/surah/${surah.nomor}`;
          return (
            <li key={surah.nomor}>
              <Link
                to={`/surah/${surah.nomor}`}
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
  );
};

export default Sidebar;
