interface props {
    image: any,
    title: string,
    desc: string,
    reverse: boolean,
}

export default function ServiceCard({ image, title, desc, reverse }: props) {


    return (<>
        <div className="flex flex-row w-full justify-evenly items-center p-5">
            <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} w-3/4 justify-evenly`}>
                <div className="w-1/2">
                    {image}
                </div>
                <div className="flex flex-col w-1/2 gap-8">
                    <h1 className="text-5xl">{title}</h1>
                    <hr className="border-2 border-slate-500 rounded-full w-3/4"></hr>
                    <p className="text-2xl font-normal">{desc}</p>
                </div>
            </div>
        </div>
    </>)
}