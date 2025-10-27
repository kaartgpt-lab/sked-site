import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import Membership from "../components/home/Membership";
import USP from "../components/home/USP";
import Cities from "../components/home/Cities";
import AppSection from "../components/home/AppPreview";
import Join from "../components/Contact";

export default function Landing() {
  useEffect(() => {
    const ids = ["about", "membership", "cities", "app", "join"];
    ids.forEach((id) =>
      console.assert(!!document.getElementById(id), `#${id} missing`)
    );
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 font-sans selection:bg-neutral-300/40">
      <Header />
      <Hero />
      <Welcome />
      <Membership />
      <USP />
      <Cities />
      <AppSection />
      <Join />
      <Footer />
    </div>
  );
}
