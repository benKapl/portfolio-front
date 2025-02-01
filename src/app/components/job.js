"use client";
import clsx from "clsx";
import moment from "moment";
import "moment/locale/fr";
import { Task } from "@/app/components/task";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const Job = ({
    category,
    title, 
    start, 
    end,
    tasks 
}) => {
    moment.locale("fr");

    const container = "mb-4";
    const titleStyle = "text-slate-300 font-bold";
    const jobContainer = "flex justify-start items-center w-full mb-2";
    const dateContainer = "flex justify-between items-center w-40";
    const dateStyle = "text-yellow-400 ";
    const skillsContainer = "flex justify-start items-center gap-2 flex-wrap";

    const startDate = moment(start).format("MMM YYYY");
    const fStartDate = startDate.charAt(0).toUpperCase() + startDate.slice(1);
    const endDate = moment(end).format("MMM YYYY");
    const fEndDate = endDate.charAt(0).toUpperCase() + endDate.slice(1);

    return (
        <div className={container}>
            <div className={jobContainer}>
                <div className={dateContainer}>
                    <p className={dateStyle}>{fStartDate}</p>
                    <p className={titleStyle}> - </p>
                    <p className={dateStyle}>{fEndDate}</p>
                </div>
                <h3 className={clsx("text-slate-300 text-2xl italic ml-8")}>{title.FR}</h3>
            </div>
            <div className={skillsContainer}>
                {tasks.FR.map((task, index) => (
                    <Task key={index} name={task} />
                ))}
            </div>
        </div>
    );
};