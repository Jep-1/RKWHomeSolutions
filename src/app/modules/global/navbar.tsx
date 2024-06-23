'use client'
import logo from "@/app/media/LogoWHITE.png"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [menu, openMenu] = useState(false);

    const handleMenuClick = () => {
        if (!menu) {
            openMenu(true);
        }
        else {
            openMenu(false);
        }
    }
    return (<>
        <div className="bg-slate-500 h-24 relative flex flex-row z-50 w-full">
            <div className="w-1/2">
                <a href="/"><Image src={logo} alt="Logo for RKW Home Solutions" className="max-h-24 w-auto sm:ml-10 ml-3" /></a>
            </div>
            <div className="w-1/2 h-full hidden lg:flex  flex-col justify-center text-white">
                <ul className="flex flex-row gap-5 justify-end mr-5 ">
                    <a href="/"><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-200 ">Home</li></a>
                    <a href="/about"><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-200">About Us</li></a>
                    <a href="/services"><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-200">Services</li></a>
                    <a href="/contact" ><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-200">Contact</li></a>
                </ul>
            </div >
            <div className=" flex lg:hidden flex-row-reverse mr-8 w-1/2 items-center text-3xl">
                <a className={`hover:cursor-pointer transition-transform duration-500`} onClick={handleMenuClick}>
                    <hr className={`${menu ? 'rotate-45 translate-y-2' : 'rotate-0'} transition-transform duration-500 bg-white rounded-[99px] w-[25px] h-1 m-1 relative border-white`} />
                    <hr className={`${menu ? 'opacity-0 ' : 'opacity-100'} transition-all relative duration-200 bg-white rounded-[99px] w-[25px] h-1 m-1 border-white`} />
                    <hr className={`${menu ? '-rotate-45 -translate-y-2' : 'rotate-0'} transition-all duration-500 bg-white rounded-[99px] w-[25px] h-1 m-1 relative border-white`} />
                </a>
            </div>
        </div >
        <div className={`w-screen top-[79px] fixed overflow-hidden z-[45]`}>
            <ul className={`${menu ? 'translate-y-0' : '-translate-y-full'} h-fit duration-500 transition-transform flex lg:hidden flex-col justify-start items-center text-white bg-slate-400 font-semibold`}>
                <a href="/"><li className={` w-screen hover:cursor-pointer items-center h-20 flex flex-col justify-center   hover:text-gray-600 duration-150 ease-in-out`}>Home</li></a>
                <a href='/about'><li className={` w-screen hover:cursor-pointer h-20 flex flex-col items-center justify-center   hover:text-gray-600 duration-150 ease-in-out`}>About</li></a>
                <a href='/services'><li className={` w-screen hover:cursor-pointer h-20 flex flex-col items-center justify-center   hover:text-gray-600 duration-150 ease-in-out`}>Services</li></a>
                <a href="/contact"><li className={` w-screen hover:cursor-pointer h-20 flex flex-col items-center justify-center   hover:text-gray-600 duration-150 ease-in-out`}>Contact</li></a>
            </ul>
        </div>
    </>)
}