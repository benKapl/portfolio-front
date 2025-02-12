"use client";
import clsx from "clsx";
import Image from "next/image";
import moment from "moment";
import "moment/locale/fr";
import { Task } from "@/app/components/task";
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
    const titleStyle = "text-slate-300 font-bold";
    const jobTitleContainer = "flex justify-start items-center w-full mb-2";
    const dateContainer = "flex justify-between items-center w-40";
    const dateStyle = "text-yellow-400 ";
    const tasksContainer = "flex justify-start items-center gap-2 flex-wrap";
    const stackContainer = "flex justify-start items-center gap-2 flex-wrap";
    // const toolsContainer = "flex justify-start items-center gap-2 flex-wrap";

    const startDate = moment(start).format("MMM YYYY");
    const fStartDate = startDate.charAt(0).toUpperCase() + startDate.slice(1);
    const endDate = moment(end).format("MMM YYYY");
    const fEndDate = endDate.charAt(0).toUpperCase() + endDate.slice(1);

    // Match languages props with stacks logo url
    const langLogos = stacks.filter(data => languages.includes(data.id)).map((data, i) => {
        return <Image key={i} src={`/images/logos/${data.logo}`} alt={`Logo ${data.name}`} width={40} height={40}/>
    })

    return (
        <div className={container}>
            <div className={jobTitleContainer}>
                <div className={dateContainer}>
                    <p className={dateStyle}>{fStartDate}</p>
                    <p className={titleStyle}> - </p>
                    <p className={dateStyle}>{fEndDate}</p>
                </div>
                <h3 className={clsx("text-slate-300 text-2xl italic ml-8")}>{title.FR}</h3>
            </div>
            <div className={tasksContainer}>
                {tasks.FR.map((task, index) => (
                    <Task key={index} name={task} />
                ))}
            </div>
            <div className={stackContainer}>
                {langLogos}
            </div>
            <div className={stackContainer}></div>
        </div>
    );
};