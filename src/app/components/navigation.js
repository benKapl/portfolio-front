"use client";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from"next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export const ComputerNavigation = () => {
    const pathname = usePathname();

    const tabStyle = "w-1/3 h-full flex justify-center items-center text-xl hover:bg-slate-900 hover:text-yellow-500 hover:font-bold"
    const currentTabStyle = "bg-slate-900 text-yellow-500 font-bold"

    return (
        <header className="bg-slate-700 text-slate-300 h-16 text-center">
            <nav className="flex justify-around items-center h-full">
                <Link href="/" className={clsx(tabStyle, pathname === "/" && currentTabStyle)} >
                    Hello
                </Link>
                <Link href="/about/bio" className={clsx(tabStyle, pathname.startsWith("/about") && currentTabStyle)}>
                    À propos
                </Link>
                <Link href="/projects/pinned" className={clsx(tabStyle, pathname === "/projects" && currentTabStyle)}>
                    Projets
                </Link>
            </nav>
        </header>
    )
}

export const MobileNavigation = () => {

    const [isNavVisible, setIsNavVisible] = useState(false)

    const closeNav = () => {
        setIsNavVisible(false)
    }

    // Gestion du click extérieur
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeNav()
            }
        };

        // Ajoute un écouteur d'événement global
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        // Nettoie l'écouteur d'événement quand le composant est démonté
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavVisible]);
    // ..............

    const pathname = usePathname();

    const tabStyle = "w-full h-16 text-xl flex justify-center items-center hover:bg-slate-900 hover:text-yellow-500 hover:font-bold"
    const currentTabStyle = "bg-slate-900 text-yellow-500 font-bold"

    return (
        <header className="relative flex justify-center items-center bg-slate-700 text-slate-300 h-16 text-center">
            <FontAwesomeIcon 
                className='w-10 hover: cursor-pointer' 
                icon={faBars} 
                onClick={() => setIsNavVisible(!isNavVisible)}/>
            {isNavVisible && (
            <nav ref={navRef} className="absolute top-10 flex flex-col justify-start items-center w-4/5 bg-slate-800">
                <Link onClick={closeNav} href="/" className={clsx(tabStyle, pathname === "/" && currentTabStyle)} >
                    Hello
                </Link>
                <Link onClick={closeNav} href="/about/bio" className={clsx(tabStyle, pathname.startsWith("/about") && currentTabStyle)}>
                    About
                </Link>
                <Link onClick={closeNav} href="/projects" className={clsx(tabStyle, pathname === "/projects" && currentTabStyle)}>
                    Projects
                </Link>
            </nav>)}
            
        </header>
    )
}