import Framing from "@/app/media/framing.jpeg"

export default function AboutPageHero() {

    return (<>
        <div className="h-[45vh] flex flex-col justify-center items-center relative" style={{
            backgroundImage: `url(${Framing.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="h-[45vh] w-full bg-slate-500 absolute z-20 opacity-50" />
            <h1
                className="text-center sm:text-7xl text-5xl p-14 z-30 text-white font-bold"
                style={{
                    textShadow: "0px 5px 15px gray"
                }}
            >
                About Us
            </h1>
        </div>
    </>)
}