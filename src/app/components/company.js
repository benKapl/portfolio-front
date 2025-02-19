import Image from "next/image";
import Link from "next/link";
import clsx from "clsx"
import { Job } from "@/app/components/job"
import { jobs } from "../data/experiences";

// const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const Company = ({ id, name, logo, website, description }) => {

    const companyJobs = jobs.filter(data => (data.companyId == id)).map((data, index) => {
       return (<Job 
                key={index}
                category={data.category}
                title={data.title}
                start={data.startDate}
                end={data.endDate}
                tasks={data.tasks}
                languages={data.stack.languages}
                // tools={data.stack.tools}
                />)
    })

    const companyContainer = "flex flex-col w-full px-6 py-3 bg-inherit bg-opacity-100";
    const companyDefContainer = "flex flex-col flex-start ";
    const titleStyle = "text-slate-300 font-bold"

    return (
        <div className={companyContainer}>
            <div className={companyDefContainer}>
                <div className="flex flex-start items-center">
                    <Link href={website} passHref target="_blank">
                        <Image src={logo} alt={`Logo ${name}`} width={125} height={20}/>
                    </Link>
                    <h2 className={clsx(titleStyle, "text-2xl ml-8 hidden")}>{name}</h2>
                </div>
                <p className="text-slate-300 my-2">{description.FR}</p>
            </div>
            {companyJobs}
        </div>
    )
}