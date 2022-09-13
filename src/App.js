import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ItemPage from "./pages/ItemPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;