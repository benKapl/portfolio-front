"use client";
import Link from"next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();

    const hoverStyle = "hover:bg-slate-900 hover:text-yellow-500"

    return (
        <nav className="flex justify-around">
            <Link href="/" className={`mr-4 ${hoverStyle}`}>
                Hello
            </Link>
            <Link href="/about/bio" className={`mr-4 ${hoverStyle}`}>
                About
            </Link>
            <Link href="/projects" className={`mr-4 ${hoverStyle}`}>
                Projects
            </Link>
        </nav>
    )
}