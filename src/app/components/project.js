import clsx from "clsx"
import Image from "next/image";
// import Link from "next/link";
import { stacks } from "../data/stacks";
import { Bullet } from "./bullet";

export const Project = ({ name, description, demoUrl, website, repo, stack }) => {
    const stackNames = stacks.filter(data => stack.includes(data.id)).map((data, i) => {
            return <Bullet key={i} name={data.name}/>
        })
    const lines = description.FR.split("\n");

    const container = "flex flex-col w-full h-auto px-6 py-3 bg-inherit gap-4"
    const titleStyle = "text-2xl text-yellow-500 font-bold"
    const stacksContainer = "flex justify-start items-center gap-4 flex-wrap"
    const mainContent = "flex flex-wrap w-full h-auto justify-start items-center gap-4"
    const imageContainer = "flex-shrink-0 w-400px"
    const textContent= "text-white flex-1 text-justify min-w-96"
    const linkStyle = "text-blue-500 underline"
    const linksContainer = ""

    return (
        <div className={container}>
            <h2 className={clsx(titleStyle)}>{name.FR}</h2>
            <div className={stacksContainer}>{stackNames}</div>
            <div className={mainContent}>
                <div className={imageContainer}>
                    <Image src={demoUrl} alt={`Demo ${name}`} width={400} height={150}/>
                </div>
                <div className={textContent}>
                    {lines.map((data, i) => {
                        let lastLine = lines[lines.length - 1]
                        let htmlLine = <p key={i} dangerouslySetInnerHTML={{ __html: data.replace(/<a /g, `<a class="${linkStyle}" target="_blank" `) }}></p>
                        if (data != lastLine) { return <>{htmlLine}<br/></>} // If not lastline, add a return
                        return htmlLine
                     })}
                </div>
            </div>
            <div className={linksContainer}></div>
        </div>
    )
}