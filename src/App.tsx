import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkedClub from "./pages/SkedClub";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SkedClub />} />
    </Routes>
  </BrowserRouter>
);

export default App;
