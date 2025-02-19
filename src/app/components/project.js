import Image from "next/image";
import Link from "next/link";
import clsx from "clsx"

export const Project = ({ name, description, demo, website, repo, stack }) => {

    const container = "flex flex-col w-full h-auto px-6 py-3 bg-inherit "
    const titleStyle = "text-slate-300 font-bold"
    const mainContent = "flex w-full h-auto justify-start items-center"
    const textContent= "text-white"
    const stacksContainer = ""
    const linksContainer = ""

    return (
        <div className={container}>
            <h2 className={clsx(titleStyle)}>{name}</h2>
            <div className={mainContent}>
                <Image src={`/gifs/${demo}`} alt={`Demo ${name}`} width={300} height={100}/>
                <div className={textContent}>{description}</div>
            </div>
            <div className={stacksContainer}></div>
            <div className={linksContainer}></div>
        </div>
    )
}