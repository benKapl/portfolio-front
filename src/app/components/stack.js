import Image from "next/image"

export const Stack = ({ name, logo_url, level, isLevelDisplayed }) => {

    const container = "bg-yellow-500 flex justify-between items-center h-full w-full"
    const content =""

    return (
        <div className={container}>

            <div className="bg-green-500 w-12 h-12"></div>
            <div className={content}>
                <p className="">{name}</p>
                <p className="">Stars</p>
            </div>
        </div>
    )

}