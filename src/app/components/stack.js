
import clsx from "clsx"
import Image from "next/image"

export const Stack = ({ name, logo_url, level, isLevelDisplayed }) => {

    const container = "border border-yellow-500 bg-inherit flex justify-start items-center h-full w-full text-white"
    const titleStyle = "text-slate-300 font-bold";
    const content =""

    return (
        <div className={container}>

            <Image src={`/images/logos/${logo_url}`} width={50} height={50} alt={name} className="" />
            <div className={content}>
                <p className={clsx(titleStyle, "text-xl")}>{name}</p>
                <p className="">Stars</p>
            </div>
        </div>
    )

}