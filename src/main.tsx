import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import CafeAdminPage from "./CafePanel";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cafepanel" element={<CafeAdminPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
