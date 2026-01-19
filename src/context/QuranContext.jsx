import { createContext, useContext, useEffect, useState } from "react";
import { getSurahList, getSurahDetail, getTafsir } from "../api/equran";

const QuranContext = createContext();

export const QuranProvider = ({ children }) => {
  const [surahList, setSurahList] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [tafsir, setTafsir] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSurahList = async () => {
    try {
      setLoading(true);
      const data = await getSurahList();
      setSurahList(data);
    } catch (err) {
      setError("Gagal mengambil daftar surat");
    } finally {
      setLoading(false);
    }
  };

  const fetchSurahDetail = async (id) => {
    try {
      setLoading(true);
      const data = await getSurahDetail(id);
      setSelectedSurah(data);
    } catch (err) {
      setError("Gagal mengambil detail surat");
    } finally {
      setLoading(false);
    }
  };

  const fetchTafsir = async (id) => {
    try {
      setLoading(true);
      const data = await getTafsir(id);
      setTafsir(data);
    } catch (err) {
      setError("Gagal mengambil tafsir");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSurahList();
  }, []);

  return (
    <QuranContext.Provider
      value={{
        surahList,
        selectedSurah,
        tafsir,
        loading,
        error,
        fetchSurahDetail,
        fetchTafsir,
      }}
    >
      {children}
    </QuranContext.Provider>
  );
};

export const useQuran = () => useContext(QuranContext);
