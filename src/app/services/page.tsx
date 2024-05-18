import Footer from "../modules/global/footer";
import Navbar from "../modules/global/navbar";
import ServicePageHero from "../modules/servicepage/ServicePageHero";
import ServicePageContact from "../modules/servicepage/contact";
import ServiceList from "../modules/servicepage/servicelist";

export default function ServicePage() {

    return (<>
        <Navbar />
        <ServicePageHero />
        <ServiceList />
        <ServicePageContact />
        <Footer />
    </>)
}