import { ComputerDesktopIcon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCode, faStore, faComments, faBullhorn, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export const Services = [
    { id: 0, title: 'Digital Consulting', description: 'Get a better', href: '#', icon: faComments, },
    { id: 1, title: 'Suchmaschinenoptimierung', description: 'Get a better', href: '#', icon: faGoogle, },
    { id: 3, title: 'Werbung', description: 'Get a better', href: '#', icon: faBullhorn, },
    { id: 2, title: 'Webentwicklung', description: 'Get a better', href: '#', icon: faLaptopCode, },
    { id: 5, title: 'E-Commerce', description: 'Get a better', href: '#', icon: faStore, },
]

export const Solutions = [
    { title: 'Webdesign', description: 'Get a better understanding of where your traffic is coming from.', href: '#', icon: ComputerDesktopIcon, },
    { title: 'Suchmaschinenoptimierung', description: 'Get a better understanding of where your traffic is coming from.', href: '#', icon: MagnifyingGlassIcon, },
    { title: 'E-Commerce', description: 'Get a better understanding of where your traffic is coming from.', href: '#', icon: ShoppingCartIcon, },
]

export const Company = [
    { title: 'Das sind wir!', href: '#'},
    { title: 'Datenschutzerklärung', href: '#'},
    { title: 'AGB', href: '#'},
]

export const FooterLinks = [
    { title: 'Impressum', href: 'impressum'},
    { title: 'Datenschutzerklärung', href: 'datenschutz'},
]