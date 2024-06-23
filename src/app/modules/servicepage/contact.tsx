import { FaArrowRight } from "react-icons/fa6";

export default function ServicePageContact() {

    return (<>
        <div className="min-h-[30vh] w-full  text-black flex flex-col items-center justify-center gap-5 p-3">
            <h1 className="text-4xl text-center">Ready to get started?</h1>
            <p className="text-xl text-center">Get in touch with us so we can assist you with your next project!</p>
            <a href="/contact" className="border-2 border-slate-900 rounded-md px-3 py-2 flex flex-row justify-center items-center  hover:-translate-y-2 transition-all duration-200">Contact Us <FaArrowRight className="ml-2" /></a>
        </div>
    </>)
}