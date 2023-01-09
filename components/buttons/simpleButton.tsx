import Link from "next/link";

export default function SimpleButton(props: any) {
    if (props.primary) {
        return (
            <button className="bg-primary-500 button-layout hover:bg-primary-500/80 dark:hover:bg-primary-500 text-white flex items-center justify-center"><Link href={props.href}>{props.title}</Link></button>
        )
    }
    else {
        return (
            <button className="hover:bg-gray-200 button-layout"><Link href={props.href}>{props.title}</Link></button>
        )
    }
}