import { FaFacebook, FaPhone, FaYelp, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiNextdoor } from "react-icons/si";

export default function Footer() {

    return (<>

        <div className=" md:h-44 bg-zinc-700 flex flex-row justify-center items-center w-full">
            <div className="flex md:flex-row flex-col justify-evenly items-center lg:w-3/4 lg:p-0 p-5 w-full gap-5">
                <div className="flex flex-row md:items-end items-center justify-center w-1/3">
                    <div className="text-white flex flex-col gap-2 md:text-start md:items-start items-center text-center w-full">
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                </div>
                <div className="flex flex-row text-3xl text-white gap-5 items-center justify-evenly sm:w-1/3 w-full">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61559910320505"><FaFacebook /></a>
                    <a href="#"><FaYelp /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
                <div className="text-white md:text-end text-center flex flex-col justify-center md:items-end items-center md:w-1/3 w-full">
                    <a href="tel:8452430653"><h3 className="flex flex-row items-center justify-center">  (845) 243-0653 <FaPhone className="ml-2" /></h3></a>
                    <a href="mailto:rkwhomesolutions@gmail.com"><h3 className="flex flex-row items-center justify-center">  rkwhomesolutions@gmail.com <MdEmail className="ml-2" /></h3></a>
                </div>



            </div>
        </div>
        <div className="fit bg-zinc-900 flex flex-col justify-center items-center text-zinc-400 text-center text-[12px]">
            <h3 >A SwiftWeb Studios Site.</h3>
            <a target="_blank" href="https://www.swiftwebstudios.com/">swiftwebstudios.com</a>
        </div>
    </>)
}