import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuran } from "../context/QuranContext";
import MainLayout from "../components/Layout/MainLayout";
import AyatDropdown from "../components/Ui/AyatDropdown";
import AudioPlayer from "../components/Audio/AudioPlayer";

const SurahDetail = () => {
  const { id } = useParams();
  const { fetchSurahDetail, selectedSurah, loading } = useQuran();
  const ayatRefs = useRef({});
  const [activeAyat, setActiveAyat] = useState(null);

  useEffect(() => {
    fetchSurahDetail(id);
  }, [id]);

  const scrollToAyat = (num) => {
    const el = ayatRefs.current[num];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveAyat(num);
    }
  };

  return (
    <MainLayout>
      {loading && <p>Loading...</p>}

      {selectedSurah && (
        <>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">
                {selectedSurah.namaLatin}
              </h1>
              <p className="text-gray-500">{selectedSurah.arti}</p>
            </div>

            <AyatDropdown
              ayatList={selectedSurah.ayat}
              onSelect={scrollToAyat}
            />
          </div>

          <AudioPlayer src={selectedSurah.audioFull["01"]} />

          <div className="space-y-6 mt-6">
            {selectedSurah.ayat.map((ayat) => (
              <div
                key={ayat.nomorAyat}
                ref={(el) => (ayatRefs.current[ayat.nomorAyat] = el)}
                className={`p-4 rounded-lg ${
                  activeAyat === ayat.nomorAyat
                    ? "bg-pink-100 dark:bg-gray-700"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                <p className="text-right text-2xl font-arabic mb-2 dark:text-white">
                  {ayat.teksArab}
                </p>
                <p className="italic text-gray-500">{ayat.teksLatin}</p>
                <p className="dark:text-gray-300">{ayat.teksIndonesia}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default SurahDetail;
