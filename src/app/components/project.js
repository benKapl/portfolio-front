import clsx from "clsx"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { CustomLink } from "./link";
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
    const mainContent = "flex flex-col md:flex-row justify-start flex-start md:items-center w-full h-auto gap-4 mr-4"
    const imageContainer = "flex-shrink-0 w-[250px] md:w-[250px] lg:w-[400px]"
    const presentation= "flex flex-1 flex-col text-white text-justify"
    const descLinkStyle = "text-blue-500 underline"
    const linksContainer = "flex flex-start items-center gap-4 mt-6 "
    const separator = "w-full h-1 mt-4 bg-slate-800";


    return (
        <div className={container}>
            <h2 className={clsx(titleStyle)}>{name.FR}</h2>
            <div className={stacksContainer}>{stackNames}</div>
            <div className={mainContent}>
                <div className={imageContainer}>
                    <Image src={demoUrl} alt={`Demo ${name}`} width={400} height={400}/>
                </div>
                <div className={presentation}>
                    {lines.map((data, i) => {
                        let lastLine = lines[lines.length - 1]
                        let htmlLine = <p key={i} dangerouslySetInnerHTML={{ __html: data.replace(/<a /g, `<a class="${descLinkStyle}" target="_blank" `) }}></p>
                        if (data != lastLine) { return <>{htmlLine}<br/></>} // If not lastline, add a return
                        return htmlLine
                     })}

                    <div className={linksContainer}>
                        {website != "" &&   // display website only if exists
                            <CustomLink 
                                href={website} 
                                icon={faArrowUpRightFromSquare} 
                                color="text-pink-500">
                                Website
                            </CustomLink>}
                        <CustomLink 
                            href={repo} 
                            icon={faGithub} 
                            color="text-cyan-300"> 
                            Code
                        </CustomLink>

                    </div>
                </div>
            </div>
            <div className={separator}></div>
        </div>
    )
}