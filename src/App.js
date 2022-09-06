import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;