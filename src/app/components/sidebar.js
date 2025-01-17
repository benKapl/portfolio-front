"use client"
import { useRouter } from "next/navigation"

export const Sidebar = ({ title, sections }) => {
    const router = useRouter()

    const handleNavigation = () => {
        // router.push(section.route)
        router.push("/about/bio")

    }

    const tabs = sections.map((section, i) => (
        <div 
            key={i} 
            className="flex justify-start items-center"
            onClick={() => router.push(section.route)}
            >
            <span>O</span>
            <h2>{section.displayName}</h2>
        </div>
    ))




    return (
        <div className="flex flex-col justify-start items-start">
            <h1>{title}</h1>
            <div className="flex flex-col">{tabs}</div>
        </div>
    )


}