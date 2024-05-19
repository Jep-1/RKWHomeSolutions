import PartnersCard from "./partnerscard";
import placeholder from "@/app/media/550placeholder.png";
import Image from "next/image";

export default function AboutPagePartners() {

    const image1 = <Image src={placeholder} alt="Placeholder" height={250} />

    return (<>
        <div className="w-full p-14 flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl font-bold text-slate-700">Our Partners</h1>
            <hr className="border-2 border-slate-500 rounded-full w-[145px]"></hr>
            <div className="w-3/4 h-fit flex flex-row justify-center items-center gap-5 flex-wrap">
            <Image src={placeholder} alt="Placeholder" height={225} className="rounded-[50px]"/>
            <Image src={placeholder} alt="Placeholder" height={225} className="rounded-[50px]"/>
            <Image src={placeholder} alt="Placeholder" height={225} className="rounded-[50px]"/>
            <Image src={placeholder} alt="Placeholder" height={225} className="rounded-[50px]"/>
            <Image src={placeholder} alt="Placeholder" height={225} className="rounded-[50px]"/>

            </div>
        </div>
    </>)
}