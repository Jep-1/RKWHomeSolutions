import Hammer from "@/app/media/hammer.jpg"

export default function ServicePageHero() {

    return (<>
        <div className="h-[45vh] flex flex-col justify-center items-center relative" style={{
            backgroundImage: `url(${Hammer.src})`,
            backgroundPositionX: '-150px',
            backgroundPositionY: '-300px',
            backgroundSize: '135%'
        }}>
            <div className="h-[45vh] w-full bg-slate-500 absolute z-20 opacity-50" />
            <h1
                className="text-center sm:text-7xl text-5xl p-14 z-30 text-white font-bold"
                style={{
                    textShadow: "0px 5px 15px gray"
                }}
            >
                What We Do
            </h1>
        </div>
    </>)
}