import logo from "@/app/media/LogoWHITE.png"
import Image from "next/image"

export default function Navbar() {

    return (<>
        <div className="bg-slate-500 h-24 relative flex flex-row z-50 w-full">
            <div className="w-1/2">
                <Image src={logo} alt="Logo for RKW Home Solutions" className="max-h-24 w-auto ml-10" />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center text-white">
                <ul className="flex flex-row gap-5 justify-end mr-5 ">
                    <a href="/"><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-200 ">Home</li></a>
                    <a href="/about"><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-200">About Us</li></a>
                    <a href="/services"><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-200">Services</li></a>
                    <a href="/contact" ><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-200">Contact</li></a>
                </ul>
            </div >
        </div >
    </>)
}