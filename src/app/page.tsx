import Footer from "./modules/global/footer";
import Navbar from "./modules/global/navbar";
import HomePageAbout from "./modules/homepage/about";
import HomePageHero from "./modules/homepage/hero";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePageHero />
      <HomePageAbout />
      <Footer />
    </div>
  );
}
