import React from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route
          path="*"
          element={
            <>
              <Dasboard />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoute;
