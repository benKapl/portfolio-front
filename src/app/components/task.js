"use client";
import clsx from "clsx";

export const Task = ({ name }) => {
    const taskStyle = "px-3 py-1 rounded-lg bg-gray-800 text-gray-300 text-xs sm:text-sm hover:bg-gray-700 transition";
    return (
        <span className={clsx(taskStyle)}>{name}</span>
    );
};
