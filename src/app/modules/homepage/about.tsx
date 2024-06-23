import Placeholder from "@/app/media/placeholder.png"
import Playground from "@/app/media/playground.png"
import AboutImage from "@/app/media/about.png"
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function HomePageAbout() {

    const desc1 = "With a dedication to craftsmanship and customer satisfaction, RKW Home Solutions specializes in transforming homes with quality renovations and repairs.";
    const desc2 = "From building and restoring to painting and flooring, RKW Home Solutions offers comprehensive home improvement services designed to enhance every corner of your living space.";

    return (<>
        <div className="h-screen flex flex-col justify-center items-center p-12 text-zinc-800">
            <div className="flex flex-row w-3/4">
                <div className="flex flex-col justify-center items-center">
                    <Image alt="Placeholder" src={AboutImage} className="w-[450px]" />
                    <h1 className="text-4xl p-5">About</h1>
                    <p className="w-2/3 text-xl p-5">{desc1}</p>
                    <a href="/about" className="flex flex-row items-center justify-center text-slate-500 font-semibold">Learn More <GoArrowRight className="ml-1 text-xl" /></a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image alt="Placeholder" src={Playground} className="w-[450px]" />
                    <h1 className="text-4xl p-5">Our Services</h1>
                    <p className="w-2/3 text-xl p-5">{desc2}</p>
                    <a href="/services" className="flex flex-row items-center justify-center text-slate-500 font-semibold">Learn More <GoArrowRight className="ml-1 text-xl" /> </a>
                </div>
            </div>
        </div>
    </>)
}