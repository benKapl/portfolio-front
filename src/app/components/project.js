import Image from "next/image";
import Link from "next/link";
import clsx from "clsx"

export const Project = ({ name, description, demoUrl, website, repo, stack }) => {

    const lines = description.FR.split("\n");

    const container = "flex flex-col w-full h-auto px-6 py-3 bg-inherit "
    const titleStyle = "text-slate-300 font-bold"
    const mainContent = "flex w-full h-auto justify-start items-center"
    const textContent= "text-white"
    const stacksContainer = ""
    const linksContainer = ""

    return (
        <div className={container}>
            <h2 className={clsx(titleStyle)}>{name.FR}</h2>
            <div className={mainContent}>
                <Image src={demoUrl} alt={`Demo ${name}`} width={300} height={100}/>
                <div className={textContent}>
                    {lines.map((data, i) => {
                        let lastLine = lines[lines.length - 1]
                        let htmlLine = <p key={i}>{data}</p>
                        if (data != lastLine) { return <>{htmlLine}<br/></>} // If not lastline, add a return
                        return htmlLine
                     })}
                </div>
            </div>
            <div className={stacksContainer}></div>
            <div className={linksContainer}></div>
        </div>
    )
}