import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
    return (
        <div className="h-screen flex justify-center">
            <div className="w-screen top-0 flex items-center justify-center">
                <div className="flex items-start font-bold text-center">
                    <h1 className="text-9xl top-0 font-black">Overwatch. Is. Gay.</h1>
                </div>
            </div>
        </div>
    )
}