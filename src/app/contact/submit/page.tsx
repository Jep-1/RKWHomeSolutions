import Navbar from "@/app/modules/global/navbar"
import Footer from "@/app/modules/global/footer"
import { FaArrowTurnUp } from "react-icons/fa6"


export default function submitPage() {

    return (<>
        <Navbar />
        <div className="h-[75vh] flex flex-col justify-center items-center gap-3">
            <h1 className="text-xl text-center">Thank you for your submission. Please allow us 1-2 business days to respond!</h1>
            <a href="/" className="border-2 border-slate-900 rounded-md px-5 py-2 flex flex-row items-center justify-center gap-2 hover:-translate-y-2 transition-all duration-150">Return <FaArrowTurnUp /></a>
        </div>
        <Footer />
    </>)
}