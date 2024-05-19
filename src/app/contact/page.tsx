import ContactPageHero from "../modules/contactpage/contacthero";
import Footer from "../modules/global/footer";
import Navbar from "../modules/global/navbar";
import ContactForm from "./contactform";

export default function ContactPage() {


    return (<>
        <Navbar />
        <ContactPageHero />
        <ContactForm />
        <Footer />
    </>)
}