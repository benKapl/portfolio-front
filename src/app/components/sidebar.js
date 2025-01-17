"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from "next/navigation"
import clsx from 'clsx';

export const Sidebar = ({ title, sections }) => {
    const router = useRouter()
    const pathname = usePathname()

    const tabStyle = "flex justify-start items-center w-full h-12 px-3 my-1 text-yellow-500 hover:cursor-pointer hover:text-white hover:bg-slate-900 hover:font-bold"
    const currentTabStyle = "text-white font-bold bg-slate-900"

    const tabs = sections.map((section, i) => (
        <div 
            key={i} 
            className={clsx(tabStyle, pathname === section.route && currentTabStyle)}
            onClick={() => router.push(section.route)}
            >
            <FontAwesomeIcon icon={faChevronRight} />
            <h2 className='ml-4 text-lg'>{section.displayName}</h2>
        </div>
    ))

    return (
        <div className="flex flex-col justify-start items-start w-full my-6">
            <h1 className='text-slate-300 text-2xl mb-4 px-4'>{title}</h1>
            <div className="flex flex-col w-full">{tabs}</div>
        </div>
    )


}