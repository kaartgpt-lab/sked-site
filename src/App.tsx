import Header from "./components/Header";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import MembershipDetails from "./components/MembershipDetails";
import CommunityAndApp from "./components/CommunityAndApp";
import Communities from "./components/Communities";
import ApplyForm from "./components/ApplyForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-zinc-900 bg-white">
      <Header />
      <Intro />
      <Hero />
      <MembershipDetails />
      <CommunityAndApp />
      <Communities />
      <ApplyForm />
      <Footer />
    </div>
  );
}
