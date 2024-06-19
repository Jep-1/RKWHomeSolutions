'use client'

import { useState } from "react"
import { FaChevronUp } from "react-icons/fa6";

interface props {
    title: string,
    desc: string
}
export default function Accordion({ title, desc }: props) {

    const [open, setOpen] = useState(true);

    const openAccordion = () => {
        if (open) {
            setOpen(false);
        }
        else {
            setOpen(true);
        }
    }


    return (<>
        <div onClick={openAccordion} className="hover:cursor-pointer select-none">
            <div className={` bg-slate-200 p-3 w-full flex flex-row justify-start items-center border-slate-900`}>
                <p>{title}</p>
                <FaChevronUp className={`${open ? ' rotate-180' : ' rotate-0'} transition-all duration-200 ml-auto`} />
            </div>
            <div className=" overflow-hidden">
                <div className={` ${open ? '-translate-y-full h-0' : 'translate-y-0 h-full'} transition-all duration-200`}>
                    <p className={`p-3 bg-slate-200`}>{desc}</p>
                </div>
            </div>
        </div>
    </>)
}