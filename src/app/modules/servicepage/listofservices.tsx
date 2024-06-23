'use client'
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import Accordion from "../global/accordion";

export default function ListOfServices() {
    const FrenchDrainsDesc = "Our team specializes in repairing and building French drains to effectively manage water drainage and prevent flooding. We ensure each installation is durable and efficient, protecting your property from water damage with expert precision.";
    const DecksDesc = "We expertly build and repair decks, creating beautiful and sturdy outdoor spaces for relaxation and entertainment. Our craftsmanship ensures each deck is durable, safe, and tailored to your specific needs and style.";
    const PlaygroundDesc = "We design and construct safe, fun, and durable playgrounds, providing children with an engaging outdoor play environment.";
    const PatiosDesc = "Our custom patios are built and repaired with precision, enhancing your outdoor living space with both functionality and aesthetic appeal.";
    const BrickPointingDesc = "Our expert brick pointing services restore the appearance and structural integrity of your brickwork, ensuring lasting durability and charm.";
    const ChimneyDesc = "We offer comprehensive chimney repair and maintenance services, ensuring safety, functionality, and longevity for your home’s chimney.";
    const FramingDesc = "Our skilled team provides precise and reliable framing services, forming the sturdy backbone for your construction or renovation projects.";
    const SheetRockDesc = "We install and repair sheet rock with meticulous attention to detail, delivering smooth, flawless walls and ceilings for your home.";
    const PaintingDesc = "Our professional painting services refresh and transform your space, offering high-quality finishes that enhance both interior and exterior aesthetics.";
    const FirePitsDesc = "We design and build custom fire pits, creating cozy and stylish outdoor gathering spots for your family and friends to enjoy.";
    const RestorationDesc = "Our restoration services bring new life to your home’s historic features, preserving its character while ensuring modern functionality.";
    const FlooringDesc = "We install and repair a wide range of flooring options, combining beauty and durability to suit your home’s style and needs.";
    const WindowsDesc = "Our window installation and repair services improve your home’s energy efficiency, comfort, and curb appeal with high-quality materials and workmanship.";

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
        <div className=" flex flex-col  min-h-[50vh] bg-slate-400 justify-center items-center p-3">
            <h1 className="text-5xl text-white text-center">Full list of services</h1>
            <div className="p-3 w-3/4">
                <ul className="bg-slate-200 rounded-md p-3">
                    <Accordion title="French Drains" desc={FrenchDrainsDesc} />
                    <Accordion title="Decks" desc={DecksDesc} />
                    <Accordion title="Playgrounds" desc={PlaygroundDesc} />
                    <Accordion title="Patios" desc={PatiosDesc} />
                    <Accordion title="Brick Pointing" desc={BrickPointingDesc} />
                    <Accordion title="Chimney" desc={ChimneyDesc} />
                    <Accordion title="Framing" desc={FramingDesc} />
                    <Accordion title="Sheet Rock" desc={SheetRockDesc} />
                    <Accordion title="Painting" desc={PaintingDesc} />
                    <Accordion title="Fire Pits" desc={FirePitsDesc} />
                    <Accordion title="Restoration" desc={RestorationDesc} />
                    <Accordion title="Flooring" desc={FlooringDesc} />
                    <Accordion title="Windows" desc={WindowsDesc} />
                </ul>
            </div>
        </div>
    </>)
}