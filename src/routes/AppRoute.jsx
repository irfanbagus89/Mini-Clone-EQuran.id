import { Routes, Route, Navigate } from "react-router-dom";
import SurahDetail from "../pages/SuratDetail";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/surah/:id" element={<SurahDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
