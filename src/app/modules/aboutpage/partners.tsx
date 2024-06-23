import homedepot from "@/app/media/homedepot.jpg"
import lowes from "@/app/media/lowes.png"
import menards from "@/app/media/menards.jpg"
import harbor from "@/app/media/habor freight.png"
import ace from "@/app/media/ace.png"
import Image from "next/image";

export default function AboutPagePartners() {

    return (<>
        <div className="w-full p-14 flex flex-col justify-center items-center gap-5 ">
            <h1 className="text-5xl text-center font-bold text-slate-700">Our Partners</h1>
            <hr className="border-2 border-slate-500 rounded-full w-[145px]"></hr>
            <div className="w-3/4 h-fit flex flex-row justify-evenly items-center gap-5 flex-wrap">
                <div className="max-h-[125px] max-w-[125px]">
                    <a href="https://www.homedepot.com/" target="_blank"><Image src={homedepot} alt="Placeholder" /></a>
                </div>
                <div className="max-h-[125px] max-w-[125px]">
                    <a href="https://www.lowes.com/" target="_blank"><Image src={lowes} alt="Placeholder" height={225} /></a>
                </div>
                <div className="max-h-[125px] max-w-[125px]">
                    <a href="https://www.menards.com/main/home.html" target="_blank"><Image src={menards} alt="Placeholder" height={225} /></a>
                </div>
                <div className="max-h-[125px] max-w-[125px]">
                    <a href="https://www.harborfreight.com/" target="_blank"><Image src={harbor} alt="Placeholder" height={225} /></a>
                </div>
                <div className="max-h-[125px] max-w-[125px]">
                    <a href="https://www.acehardware.com/" target="_blank"><Image src={ace} alt="Placeholder" height={225} /></a>
                </div>
            </div>
        </div>
    </>)
}