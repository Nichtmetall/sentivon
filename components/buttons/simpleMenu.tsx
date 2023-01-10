import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment, useState } from "react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function SimpleMenu(props: { title: any; items: any; }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover className="relative" >
            {({ open }) => (
                <>
                    <Popover.Button className={classNames(isOpen ? 'rotate-icon' : '', 'group hover:bg-gray-200 button-layout inline-flex items-center text-base font-medium outline-none',)} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >
                        <span>{props.title}</span>
                        <ChevronDownIcon className={'ml-2 h-4 w-4'} aria-hidden="true" />
                    </Popover.Button>
                    <Transition as={Fragment} enter="transition ease-out duration-300" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-200" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" show={isOpen}>
                        <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 pt-5 px-2 w-screen max-w-xs sm:px-0 shadow-lg">
                                <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                                        {props.items.map((item: any) => (
                                            <Link key={item.title} href={item.href} className="-m-3 p-3 flex showicon rounded-md hover:translate-x-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                                <div className="w-full">
                                                    <p className="text-base font-medium text-gray-900 dark:text-white">{item.title}</p>
                                                </div>
                                                <div className="flex h-full items-center icontoshow pl-3">
                                                    <ChevronRightIcon width={18} height={18} />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </div>
                    </Transition>
                </>
            )}
        </Popover>
    )

}