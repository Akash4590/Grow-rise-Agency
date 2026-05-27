import Navbar from "../components/Navbar";
import SocialHero from "../Sections/socialmedia/Socialhero";
import SocialPlatforms from "../Sections/socialmedia/Socialplatforms";
import SocialBenefits from "../Sections/socialmedia/Socialbenefits";
import Socialprocess from "../Sections/socialmedia/Socialprocess";
import SocialCTA from "../Sections/socialmedia/SocialCTA";
import Footer from "../Sections/Footer"

export default function SocialMedia() {
  return (
    <div id="SocialMedia">
     <Navbar/>
      <SocialHero />
      <SocialPlatforms />
      <SocialBenefits />
      <Socialprocess/>
      <SocialCTA />
      <Footer />
    </div>
  );
}