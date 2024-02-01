import NavbarComp from "./component/NavbarComp";
import HeroComp from "./component/HeroComp";
import AboutComp from "./component/AboutComp";
import SkillComp from "./component/SkillComp";
import BidangComp from "./component/BidangComp";
import PengalamanComp from "./component/PengalamanComp";
import ProjectComp from "./component/ProjectComp";
import ContactComp from "./component/ContactComp";
import FooterComp from "./component/FooterComp";

function App() {
  return (
    <div className="app">
      <NavbarComp />
      <HeroComp />
      <AboutComp />
      <SkillComp />
      <BidangComp />
      <PengalamanComp />
      <ProjectComp />
      <ContactComp />
      <FooterComp />
    </div>
  );
}

export default App;
