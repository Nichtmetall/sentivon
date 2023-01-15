import Link from "next/link";
import { Services } from "../data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ServiceSection() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col space-y-10 max-w-7xl w-screen">
                <div className="flex justify-center">
                    <div className="flex items-center flex-col ">
                        <div className="flex">
                            <p className="text-primary-500 text-2xl font-normal">Unsere Kompetenzen</p>
                            <Image src="/arrow.svg" height={50} width={60} alt={""} />
                        </div>
                        <p className="text-4xl font-black leading-tight text-center">Damit bringen wir Sie ganz nach <span className="text-primary-500">oben</span></p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {Services.map((item: any) => (
                        <div className="primary-card">
                            <div>
                                <FontAwesomeIcon height={48} width={48} className="bg-primary-100 p-2" icon={item.icon} />
                            </div>
                            <div className="text-xl font-bold">
                                {item.title}
                            </div>
                            <div className="py-3 text-base">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}