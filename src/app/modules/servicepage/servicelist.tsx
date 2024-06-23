import Image from "next/image";
import ServiceCard from "./ServiceCard";
import toptobottom from "@/app/media/toptobottom.jpg"
import goodservice from "@/app/media/goodservice.jpg"

import placeholder from "@/app/media/placeholder.png";

export default function ServiceList() {

    const image1 = <Image alt="placeholder" src={toptobottom} width={550} />
    const image2 = <Image alt="placeholder" src={goodservice} width={550} />


    const title1 = "From top to bottom";
    const title2 = "Top notch customer service"

    const desc1 = "We offer a wide range of home improvement services to enhance the beauty, functionality, and value of your property. Our expert team specializes in installing French drains, building custom decks and playgrounds, designing patios, and providing meticulous brick pointing and chimney work. We also excel in framing, sheet rock installation, painting, fire pit construction, restoration projects, flooring, and window replacements, ensuring each project is completed to the highest standards.";
    const desc2 = "Our quality home improvement services are defined by meticulous attention to detail and a commitment to excellence. Our skilled team ensures every project is thorough, using the best materials and craftsmanship to deliver results that not only meet but exceed your expectations. Trust us to enhance your home with precision and care, from start to finish."


    return (<>
        <div className="h-screen p-5 m-5">
            <ServiceCard image={image1} title={title1} desc={desc1} reverse={false} />
            <ServiceCard image={image2} title={title2} desc={desc2} reverse={true} />
        </div>
    </>)
}