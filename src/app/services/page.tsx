import Footer from "../modules/global/footer";
import Navbar from "../modules/global/navbar";
import ServicePageHero from "../modules/servicepage/ServicePageHero";
import ServicePageContact from "../modules/servicepage/contact";
import ListOfServices from "../modules/servicepage/listofservices";
import ServiceList from "../modules/servicepage/servicelist";

export default function ServicePage() {

    return (<>
        <Navbar />
        <ServicePageHero />
        <ServiceList />
        <ListOfServices />
        <ServicePageContact />
        <Footer />
    </>)
}