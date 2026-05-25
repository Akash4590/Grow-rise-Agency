import Navbar from "../components/Navbar";
import SocialHero from "../Sections/socialmedia/Socialhero";
import SocialPlatforms from "../Sections/socialmedia/Socialplatforms";
import SocialBenefits from "../Sections/socialmedia/Socialbenefits";
// import SocialProcess from "../components/socialmedia/SocialProcess";
// import SocialCTA from "../components/socialmedia/SocialCTA";

export default function SocialMedia() {
  return (
    <div id="SocialMedia">
     <Navbar/>
      <SocialHero />
      <SocialPlatforms />
      <SocialBenefits />
      {/* <SocialProcess />
      <SocialCTA />
      <Footer /> */}
    </div>
  );
}