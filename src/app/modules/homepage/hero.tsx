import HeroImage from "@/app/media/houseplaceholder.jpg"
import Image from "next/image"

export default function HomePageHero() {

    const heroText = "Home improvement you can trust!"

    return (<>
        <div className="h-screen">
            <div className="h-full overflow-hidden flex flex-col justify-center relative items-center z-10"
                style={{
                    backgroundImage: `url(${HeroImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="bg-slate-500 h-full w-full z-20 absolute opacity-50" />
                <div className=" z-30 bg-transparent w-full flex flex-col justify-center items-center p-3">
                    <h1 className="sm:text-5xl text-3xl m-auto text-white text-center" style={{
                        textShadow: '0px 3px 7px #272727'
                    }}>{heroText}</h1>
                    <a href="/contact" className=" border-2 px-3 py-2 rounded-md text-white m-auto hover:cursor-pointer hover:-translate-y-2 transition-all duration-200 mt-5 text-xl shadow-xl">Contact Us</a>
                </div>
            </div>

        </div>
    </>)
}