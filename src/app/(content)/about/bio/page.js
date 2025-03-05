import clsx from "clsx"

export default function Bio() {

    // Styles

    const container = "bg-inherit flex-1 flex-col h-auto w-full justify-start items-start mx-4 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const content = "text-white m-2 "

    return (
        <section className={container}>
            <div className="sticky top-0 pt-6 pb-4 pl-6 bg-inherit h-18 w-full z-30"> {/*Fixes the title at the top*/}
                <h1 className={clsx(titleStyle, "text-3xl h-full")}>Bio</h1>
            </div>
            <div className={content}>
                <p>Je m&apos;appelle Benjamin et ceci est ma bio</p>
                <p>Youloulou je cueille des pommes</p>
            </div>
        </section>
    )
}