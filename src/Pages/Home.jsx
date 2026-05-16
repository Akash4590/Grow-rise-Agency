import Hero from "../sections/Hero";
import About from "../sections/About";
import PainPoints from "../sections/PainPoints";
import Services from "../sections/Services";
import Results from "../sections/Results";
import Testimonials from "../sections/Testimonials";
// import FAQ from "../sections/FAQ";
// import CTA from "../sections/CTA";
// import Footer from "../sections/Footer";

// Home page — combines all sections in order
function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PainPoints />
      <Services />
      <Results />
       <Testimonials />
      {/* <FAQ />
      <CTA />
      <Footer />  */}
    </main>
  );
}

export default Home;