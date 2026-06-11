import Navbar from "../Components/Navbar";
import MetaHero from "../Sections/Meta/MetaHero";
import  MetaServices from "../Sections/Meta/MetaServices"
import MetaBenefits from "../Sections/Meta/MetaBenefits";
import MetaProcess from "../Sections/Meta/MetaProcess";
import MetaCTA from "../Sections/Meta/MetaCTA";
import Footer from "../sections/Footer";

export default function MetaMarketing() {
  return (
    <>
   <div id = "metamarketing">
       <Navbar />

      <main style={{ background: "#050505", minHeight: "100vh" }}>
        <MetaHero />
        <MetaServices />
        <MetaBenefits />
        <MetaProcess />
        <MetaCTA />
      </main>

      <Footer />
   </div>
    </>
  );
}