import clsx from "clsx";

export const Bullet = ({ name }) => {
    const bulletStyle = "px-3 py-1 rounded-lg bg-gray-800 text-gray-300";
    return (
        <span className={clsx(bulletStyle)}>{name}</span>
    );
};
