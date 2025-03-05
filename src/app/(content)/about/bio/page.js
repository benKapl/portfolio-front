import clsx from "clsx"
import { bio } from "@/app/data/bio"

export default function Bio() {

    const bioLines = bio.FR.split("\n")

    // Styles

    const container = "bg-inherit flex-1 flex-col h-auto w-full justify-start items-start mx-4 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const content = "text-white m-4 "
    const descLinkStyle = "text-blue-500 underline"

    return (
        <section className={container}>
            <div className="sticky top-0 pt-6 pb-4 pl-6 bg-inherit h-18 w-full z-30"> {/*Fixes the title at the top*/}
                <h1 className={clsx(titleStyle, "text-3xl h-full")}>Bio</h1>
            </div>
            <div className={content}>
                {bioLines.map((data, i) => {
                        let lastLine = bioLines[bioLines.length - 1]
                        let htmlLine = <p key={i} dangerouslySetInnerHTML={{ __html: data.replace(/<a /g, `<a class="${descLinkStyle}" target="_blank" `) }}></p>
                        if (data != lastLine) { return <>{htmlLine}<br/></>} // If not lastline, add a return
                        return htmlLine
                     })}
            </div>
        </section>
    )
}