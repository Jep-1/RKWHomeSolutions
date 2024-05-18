import Image from "next/image";
import ServiceCard from "./ServiceCard";
import placeholder from "@/app/media/placeholder.png";

export default function ServiceList() {

    const image1 = <Image alt="placeholder" src={placeholder} width={550}/>


    const title1 = "From top to bottom";
    const title2 = "Top notch customer service"

    const desc1 = "Talk about how he can repair you chimney down to your patio. ";
    const desc2 = "Talk about how they leave the place clean, thorough with their work and such"


    return (<>
        <div className="h-screen p-5">
            <ServiceCard image={image1} title={title1} desc={desc1} reverse={false}/>
            <ServiceCard image={image1} title={title2} desc={desc2} reverse={true}/>
        </div>
    </>)
}