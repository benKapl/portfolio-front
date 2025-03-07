import Image from "next/image";
import Link from "next/link";
import clsx from "clsx"
import { Job } from "@/app/components/job"
import { jobs } from "../data/experiences";

// const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const Company = ({ id, name, logo, website, description }) => {

    const container = "flex flex-col w-full bg-inherit bg-opacity-100 mt-6";
    const companyContent = "flex flex-start items-center mx-10 mb-3";
    const logoContainer = "flex flex-start w-[200px] items-center"
    const companyDescription = "flex flex-1 text-slate-300 text-lg italic"
    const separator = "w-full h-1 mt-4 bg-slate-800";
    const zoomEffect="transform transition-transform duration-200 hover:scale-110"

    return (
        <div className={container}>
            <div className={companyContent}>
                <div className={logoContainer}>
                    <Link href={website} passHref target="_blank">
                        <Image className={zoomEffect} src={logo} alt={`Logo ${name}`} width={125} height={20}/>
                    </Link>
                    {/* <h2 className={clsx(titleStyle, "text-2xl ml-8 hidden")}>{name}</h2> */}
                </div>
                <div className={companyDescription}>
                    <p>{description.FR}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {jobs.filter(data => (data.companyId == id)).map((data, index) => {
                    return (<Job 
                        key={index}
                        category={data.category}
                        title={data.title}
                        start={data.startDate}
                        end={data.endDate}
                        tasks={data.tasks}
                        languages={data.stack.languages}
                        // tools={data.stack.tools}
                     />)})}
            </div>
            <div className={separator}></div>
        </div>
    )
}