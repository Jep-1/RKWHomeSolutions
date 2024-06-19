'use client'
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import Accordion from "../global/accordion";

export default function ListOfServices() {
    const FrenchDrainsDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const DecksDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const PlaygroundDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const PatiosDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const BrickPointingDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const ChimneyDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const FramingDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const SheetRockDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const PaintingDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const FirePitsDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const RestorationDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const FlooringDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";
    const WindowsDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.";

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
            <h1 className="text-5xl text-white">Full list of services</h1>
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