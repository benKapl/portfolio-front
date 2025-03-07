"use client"
import clsx from "clsx";
import Image from "next/image";
import moment from "moment";
import "moment/locale/fr";
import { Bullet } from "@/app/components/bullet";
import { stacks } from "../data/stacks";

export const Job = ({
    // category,
    title, 
    start, 
    end,
    tasks,
    languages, 
}) => {
    moment.locale("fr");

    const container = "p-6 rounded-2xl transition-all transform hover:shadow-xl hover:bg-slate-800 hover:bg-opacity-80";
    const titleStyle = "text-slate-300 text-2xl font-bold";
    const jobTitleContainer = "flex flex-col md:flex-row justify-start items-start md:items-center w-full gap-2 mb-4 md:mb-2";
    const dateContainer = "flex justify-between items-center w-48";
    const dateStyle = "text-yellow-400 text-lg";
    const tasksContainer = "flex justify-start items-center gap-2 flex-wrap";
    const stackContainer = "mt-2 flex justify-start items-center gap-6 flex-wrap";
    // const toolsContainer = "flex justify-start items-center gap-2 flex-wrap";

    const startDate = moment(start).format("MMM YYYY");
    const fStartDate = startDate.charAt(0).toUpperCase() + startDate.slice(1);
    const endDate = moment(end).format("MMM YYYY");
    const fEndDate = endDate.charAt(0).toUpperCase() + endDate.slice(1);

    // Match languages props with stacks logo url
    const langLogos = stacks.filter(data => languages.includes(data.id)).map((data, i) => {
        return <Image key={i} src={`/images/logos/${data.logo}`} alt={`Logo ${data.name}`} width={35} height={35}/>
    })

    return (
        <div className={container}>
            <div className={jobTitleContainer}>
                <div className={dateContainer}>
                    <p className={dateStyle}>{fStartDate}</p>
                    <p className="text-slate-300 font-bold"> - </p>
                    <p className={dateStyle}>{fEndDate}</p>
                </div>
                <h3 className={clsx(titleStyle, "italic md:ml-8")}>{title.FR}</h3>
            </div>
            <div className={tasksContainer}>
                {tasks.FR.map((task, index) => (
                    <Bullet key={index} name={task} />
                ))}
            </div>
            {langLogos.length > 0 &&
            <div className={stackContainer}>
                {/* <p className=" ml-2 text-white">Stack : </p> */}
                {langLogos}
            </div>}
        </div>
    );
};