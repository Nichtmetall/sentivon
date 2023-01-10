import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'
import SimpleButton from '../buttons/simpleButton'
import MegaMenu from '../buttons/megaMenu'
import SimpleMenu from '../buttons/simpleMenu'
import { Company, Services, Solutions } from '../data'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const scrollPosition = useScrollPosition()


  return (
    <Popover className={classNames(scrollPosition > 0 ? 'shadow-lg bg-white dark:bg-gray-800 py-2' : 'shadow-none bg-none py-5', 'navbar-transition sticky top-0 z-20 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-md',)}>
      <div className="mx-auto max-w-7xl flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/" className="flex">
            <span className="sr-only">Sentivon</span>
            <Image width={20} height={20} className="h-8 w-auto sm:h-10" src="/logo.svg" alt="" />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-5">

          </Popover.Group>
          <div className="flex content-center items-center md:ml-12 space-x-5">
          </div>
          <div className='flex items-center md:ml-12 space-x-2'>
            <MegaMenu items={Services} title='Services' hasFooter={true} footer={{ title: "Alle Services", description: "Sieh dir hier alle unsere Serviceleistungen an" }} />
            <SimpleButton title="Unternehmen" href="#" />
            <SimpleMenu items={Company} title="Unternehmen" />
            <SimpleButton title="Kontakt" primary={true} href="#" />
          </div>
        </div>
      </div>
      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {Solutions.map((item) => (
                    <Link key={item.title} href={item.href} className="-m-3 p-3 flex items-center hover:bg-gray-50">
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.title}</div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</Link>
                <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Docs</Link>
                <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Enterprise</Link>
                {Services.map((item) => (
                  <Link key={item.title} href={item.href} className="text-base font-medium text-gray-900 hover:text-gray-700" >{item.title}</Link>
                ))}
              </div>
              <div className="mt-6">
                <Link href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign up</Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">Existing customer?{' '}
                  <Link href="#" className="text-indigo-600 hover:text-indigo-500">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}