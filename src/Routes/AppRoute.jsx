import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MyLayout from "../components/MyLayout";
import Navbar from "../components/Navbar/Navbar";
import Dasboard from "../pages/Dasboard/Dasboard";

function AppRoute() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <MyLayout />
          </>
        }
      >
        <Route path="*" element={<Navigate to="/surah/1" replace />} />
        <Route path="surah/:id" element={<Dasboard id={1}/>} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
