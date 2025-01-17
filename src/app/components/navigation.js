"use client";
import clsx from "clsx";
import Link from"next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();

    const tabStyle = "w-1/3 h-full flex justify-center items-center hover:bg-slate-900 hover:text-yellow-500 hover:font-bold"
    const currentTabStyle = "bg-slate-900 text-yellow-500 font-bold"

    return (
        <nav className="flex justify-around items-center h-full">
            <Link href="/" className={clsx(tabStyle, pathname === "/" && currentTabStyle)} >
                Hello
            </Link>
            <Link href="/about/bio" className={clsx(tabStyle, pathname.startsWith("/about") && currentTabStyle)}>
                About
            </Link>
            <Link href="/projects" className={clsx(tabStyle, pathname === "/projects" && currentTabStyle)}>
                Projects
            </Link>
        </nav>
    )
}