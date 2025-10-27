import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CityPage } from "./pages/City";
import Landing from "./pages/Landing";
import MeetupPage from "./pages/Meetup";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/city/:cityName" element={<CityPage />} />
      <Route path="/city/:cityName/meetup/:meetupId" element={<MeetupPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
