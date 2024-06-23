import placeholder from "@/app/media/placeholder.png"
import Image from "next/image"
import ServiceCard from "../servicepage/ServiceCard"
import fullservice from "@/app/media/fullservice.jpg"
import quality from "@/app/media/quality.jpg"


export default function AboutPageStory() {

    const image1 = <Image src={fullservice} alt="Placeholder image" width={550} />
    const image2 = <Image src={quality} alt="Full" width={550} />

    const title1 = "Full Service Home Improvement"

    const desc1 = "At RKW Home Solutions, we pride ourselves on delivering top-notch home improvement services with a commitment to quality and customer satisfaction. Our experienced team uses premium materials and innovative techniques to ensure every project exceeds expectations and enhances the beauty and functionality of your home. Trust us to bring your vision to life with precision and care."

    const title2 = "Quality and Commitment"

    const desc2 = "We are dedicated to delivering exceptional craftsmanship and unparalleled customer service. We use only the finest materials and adhere to the highest standards to ensure every project meets and exceeds our clients' expectations. Our commitment to quality and integrity is the cornerstone of everything we do."
    return (<>
        <div className="xl:h-screen p-5">
            <ServiceCard image={image1} reverse={false} desc={desc1} title={title1} />
            <ServiceCard image={image2} reverse={true} desc={desc2} title={title2} />
        </div>
    </>)
}