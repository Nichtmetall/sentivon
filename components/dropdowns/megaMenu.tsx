import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function MegaMenu(props: { footer?: any; hasFooter: any; title: any; items: any; }) {
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
                            <Popover.Panel className="absolute pt-5 px-2 z-10 left-1/2 -translate-x-1/2 transform w-screen max-w-2xl lg:max-w-3xl">
                                <div className="overflow-hidden rounded-sm shadow-lg">
                                    <div className={classNames(props.hasFooter ? 'rounded-t-md' : 'rounded-sm', "relative grid grid-cols-3 gap-6 bg-white px-5 py-6")}>
                                        {props.items.map((item: any) => (
                                            <Link key={item.title} href={item.href} className="-m-3 p-2 w-full flex showicon rounded-sm hover:translate-x-1 hover:bg-gray-100 items-start transition">
                                                <div className="flex-shrink-0 rounded-sm flex items-center justify-center text-primary-500">
                                                    <FontAwesomeIcon className="h-7 w-7" aria-hidden="true" icon={item.icon} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="flex items-center space-x-1">
                                                        <p className="text-base font-medium text-gray-900">{item.title}</p>
                                                        <div className="icontoshow">
                                                            <FontAwesomeIcon className="h-3 w-3" icon={faArrowRight} />
                                                        </div>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    {props.hasFooter &&
                                        <div className="p-5 rounded-b-md bg-gray-100 sm:p-8">
                                            <Link href="#" className="-m-3 p-3 rounded-sm showicon flex hover:translate-x-1 hover:bg-gray-200 transition">
                                                <div className="flex items-center w-full">
                                                    <div className="text-base font-medium text-gray-900 pr-2">{props.footer.title}</div>
                                                    <p className="text-sm text-gray-500">{props.footer.description}</p>
                                                </div>
                                                <div className="flex h-full items-center icontoshow pl-3">
                                                    <ChevronRightIcon width={18} height={18} />
                                                </div>
                                            </Link>
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