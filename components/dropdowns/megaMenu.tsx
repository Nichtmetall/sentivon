import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function MegaMenu(props: {
    footeritems: any; footer?: any; hasFooter: any; title: any; items: any;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button className={classNames(isOpen ? 'rotate-icon' : '', 'group link-underline inline-flex items-center text-base font-medium outline-none',)} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >
                        <span>{props.title}</span>
                        <ChevronDownIcon className={'ml-2 h-4 w-4'} aria-hidden="true" />
                    </Popover.Button>
                    <Transition as={Fragment} enter="transition ease duration-500" enterFrom="opacity-0 translate-y-2" enterTo="opacity-100 translate-y-0" leave="transition ease duration-200" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" show={isOpen}>
                        <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                            <Popover.Panel className="absolute p-6 z-10 left-1/2 -translate-x-1/2 transform w-screen max-w-3xl">
                                <div className="overflow-hidden rounded-sm shadow-lg">
                                    <div className={classNames(props.hasFooter ? 'rounded-t-md' : 'rounded-sm', "relative grid grid-cols-2 gap-6 bg-white p-8")}>
                                        {props.items.map((item: any) => (
                                            <Link key={item.title} href={item.href} className="-m-3 px-3 py-5 w-full hover:translate-x-1 hover:bg-gray-100 flex showicon rounded-sm text-gray-500 hover:text-black items-start transition">
                                                <div className="flex-shrink-0 rounded-full flex items-center justify-center text-primary-500 bg-primary-100/50 p-3">
                                                    <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon={item.icon} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="flex items-center space-x-1">
                                                        <p className="text-base font-medium">{item.title}</p>
                                                        <div className="icontoshow">
                                                            <FontAwesomeIcon className="h-3 w-3" icon={faArrowRight} />
                                                        </div>
                                                    </div>
                                                    <p className="mt-1 text-sm">{item.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {props.hasFooter &&
                                        <div className="w-full p-5 rounded-b-md bg-gray-100 flex gap-2">
                                            {props.footeritems.map((item: any) => (
                                                <button className="button-secondary button-layout">
                                                    <Link href={item.href} >{item.title}</Link>
                                                    <FontAwesomeIcon className="h-3 w-3" icon={faArrowRight} />
                                                </button>
                                            ))
                                            }
                                        </div>
                                    }

                                </div>
                            </Popover.Panel>
                        </div>
                    </Transition>
                </>
            )}
        </Popover>
    )

}