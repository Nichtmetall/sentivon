import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex justify-center">
            <div className="h-screen w-screen top-0 flex items-center justify-center max-w-7xl">
                <div className="flex items-start flex-col font-bold w-4/5">
                    <div className="flex space-x-4">
                        <p className="text-primary-500 text-2xl font-normal">Die beste Agentur</p>
                        <Image src="/arrow.svg" height={50} width={60} alt={""} />
                    </div>
                    <p className="text-5xl font-black leading-tight">Wir sind deine Agentur für deine <span className="text-primary-500">20% mehr</span> Kunden</p>
                    <p className="py-4 text-lg font-light">Individuelle digitale Lösungen für jedes Unternehmen</p>
                    <div className="flex space-x-2">
                        <button className="button-primary-outline button-cta"><Link href="/services">Jetzt Vielfalt entdecken </Link></button>
                        <button className="button-secondary button-cta"><Link href="contact">Kontakt aufnehmen <FontAwesomeIcon className="h-4 w-4" icon={faArrowRight} /></Link></button>
                    </div>
                </div>
                <div className="flex items-center text-5xl font-bold w-full justify-center">
                    <Image src={"/luca.png"} alt={""} height={1000} width={300} />
                </div>
            </div>
        </div>
    )
}