import Placeholder from "@/app/media/placeholder.png"
import Playground from "@/app/media/playground.jpg"
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function HomePageAbout() {

    const desc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const desc2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    return (<>
        <div className="h-screen flex flex-col justify-center items-center p-12 text-zinc-800">
            <div className="flex flex-row w-3/4">
                <div className="flex flex-col justify-center items-center">
                    <Image alt="Placeholder" src={Placeholder} className="w-[450px]" />
                    <h1 className="text-4xl p-5">About</h1>
                    <p className="w-2/3 text-xl p-5">{desc1}</p>
                    <a href="#" className="flex flex-row items-center justify-center text-slate-500 font-semibold">Learn More <GoArrowRight className="ml-1 text-xl" /></a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image alt="Placeholder" src={Playground} className="w-[450px]" />
                    <h1 className="text-4xl p-5">Our Services</h1>
                    <p className="w-2/3 text-xl p-5">{desc2}</p>
                    <a href="#" className="flex flex-row items-center justify-center text-slate-500 font-semibold">Learn More <GoArrowRight className="ml-1 text-xl" /> </a>
                </div>
            </div>
        </div>
    </>)
}