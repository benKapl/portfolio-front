"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from "next/navigation"
import clsx from 'clsx';

export const Sidebar = ({ title, sections, closeSidebar }) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (route) =>{
        router.push(route)
        closeSidebar()
    }

    const container = "flex flex-col justify-start items-start h-full w-full mt-6"
    const titleStyle = "text-slate-300 text-2xl mb-4 px-4"
    const tabsContainer = "flex flex-col w-full"
    const tabStyle = "flex justify-start items-center w-full h-12 px-3 my-1 text-yellow-500 hover:cursor-pointer hover:text-white hover:bg-slate-900 hover:font-bold"
    const currentTabStyle = "text-white font-bold bg-slate-900"

    const tabs = sections.map((section, i) => (
        <div 
            key={i} 
            className={clsx(tabStyle, pathname === section.route && currentTabStyle)}
            onClick={() => handleClick(section.route)}
            >
            <FontAwesomeIcon className='w-2' icon={faChevronRight} />
            <h2 className='ml-4 text-lg'>{section.displayName}</h2>
        </div>
    ))

    return (
        <div className={container}>
            <h1 className={titleStyle}>{title}</h1>
            <div className={tabsContainer}>{tabs}</div>
        </div>
    )


}