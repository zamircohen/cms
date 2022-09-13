import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import ItemPage from "./pages/ItemPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:id" element={<ItemPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;