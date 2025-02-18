
import clsx from "clsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image"

export const Stack = ({ name, logo_url, level, isLevelDisplayed }) => {

    const stars = []
    for (let i = 0; i < 5; i++) {
        let style=""
        if (i >= level) { style="text-gray-500" }
        stars.push(
            <FontAwesomeIcon 
                className={clsx(style, "w-5")}
                icon={faStar} />
        )

    }

    const container = "bg-inherit flex justify-start items-center h-full w-full text-white"
    const titleStyle = "text-slate-300 font-bold";
    const content ="ml-3 flex flex-col h-full justify-between items-start"

    return (
        <div className={container}>

            <Image src={`/images/logos/${logo_url}`} width={50} height={50} alt={name} className="" />
            <div className={content}>
                <p className={clsx(titleStyle, "text-xl")}>{name}</p>
                <div className="flex justify-start">
                    {stars}
                </div>
            </div>
        </div>
    )

}