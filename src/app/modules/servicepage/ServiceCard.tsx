interface props {
    image: any,
    title: string,
    desc: string,
    reverse: boolean,
}

export default function ServiceCard({ image, title, desc, reverse }: props) {


    return (<>
        <div className="flex flex-row w-full justify-evenly items-center p-5 ">
            <div className={`flex ${reverse ? 'xl:flex-row-reverse flex-col' : 'xl:flex-row flex-col'} xl:w-3/4 justify-evenly xl:items-start items-center`}>
                <div className="xl:w-1/2 m-5">
                    {image}
                </div>
                <div className="flex flex-col xl:w-1/2 gap-8">
                    <h1 className="text-5xl xl:text-start text-center">{title}</h1>
                    <hr className="border-2 border-slate-500 rounded-full xl:w-3/4 w-full"></hr>
                    <p className="text-[20px] font-normal">{desc}</p>
                </div>
            </div>
        </div>
    </>)
}