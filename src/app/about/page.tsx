import AboutPageHero from "../modules/aboutpage/hero";
import AboutPagePartners from "../modules/aboutpage/partners";
import AboutPageStory from "../modules/aboutpage/story";
import Footer from "../modules/global/footer";
import Navbar from "../modules/global/navbar";

export default function AboutPage() {

    return (<>
        <Navbar />
        <AboutPageHero />
        <AboutPageStory />
        <AboutPagePartners />
        <Footer />
    </>)
}