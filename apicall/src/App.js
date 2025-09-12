import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ must import
import Api from "./api.js";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
