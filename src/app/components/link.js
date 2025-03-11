"use client"
import clsx from "clsx"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const CustomLink = ({ href, icon, color, children }) => {    

    const [isHovered, setIsHovered] = useState(false)

    const linkStyle = "flex w-auto justify-between items-center gap-2 px-3 py-1 rounded-sm hover:bg-gray-800 transition"
    const iconHoverStyle = "text-base transition-transform transform scale-125"

    return (
        <Link 
            className={clsx(linkStyle, color)} 
            href={href} passHref target="_blank"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <FontAwesomeIcon 
                icon={icon} 
                className={clsx(isHovered && iconHoverStyle)}/>
            <p>{children}</p>
        </Link>
    )
}