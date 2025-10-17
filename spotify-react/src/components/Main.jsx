import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LibraryPage from "../pages/LibraryPage";

const Main = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage pb-5 mb-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
      </Routes>
    </main>
  );
};

export default Main;