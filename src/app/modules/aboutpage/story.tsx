import placeholder from "@/app/media/placeholder.png"
import Image from "next/image"
import ServiceCard from "../servicepage/ServiceCard"


export default function AboutPageStory() {

    const image1 = <Image src={placeholder} alt="Placeholder image" width={550} />

    const title1 = "Title"

    const desc1 = "Desc"
    return (<>
        <div className="h-screen p-5">
            <ServiceCard image={image1} reverse={false} desc={desc1} title={title1} />
            <ServiceCard image={image1} reverse={true} desc={desc1} title={title1} />
        </div>
    </>)
}