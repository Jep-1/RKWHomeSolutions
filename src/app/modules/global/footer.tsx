import { FaFacebook, FaPhone, FaYelp, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiNextdoor } from "react-icons/si";

export default function Footer() {

    return (<>

        <div className=" h-44 bg-zinc-700 flex flex-row justify-center items-center w-full">
            <div className="flex flex-row justify-evenly items-center w-1/2">
                <div className="text-white flex flex-col justify-center items-start w-1/3">
                    <a href="tel:8452430653"><h3 className="flex flex-row items-center justify-center"> <FaPhone className="mr-2" /> (845) 243-0653 </h3></a>
                    <a href="mailto:rkwhomesolutions@gmail.com"><h3 className="flex flex-row items-center justify-center"> <MdEmail className="mr-2" /> rkwhomesolutions@gmail.com</h3></a>
                </div>

                <div className="flex flex-row text-3xl text-white gap-5 items-center justify-evenly w-1/3">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61559910320505"><FaFacebook /></a>
                    <a href="#"><FaYelp /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
                <div className="flex flex-row items-end justify-center w-1/3">
                    <div className="text-white flex flex-col gap-2 text-end w-full">
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="fit bg-zinc-900 flex flex-col justify-center items-center text-zinc-400 text-center text-[12px]">
            <h3 >A SwiftWeb Studios Site.</h3>
            <a target="_blank" href="https://www.swiftwebstudios.com/">swiftwebstudios.com</a>
        </div>
    </>)
}