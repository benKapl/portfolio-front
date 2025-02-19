import clsx from "clsx"

export default function Bio() {

    // Styles

    // const testStyle = "border border-solid border-red-200"
    const container = "flex-1 flex-col h-auto w-full justify-start items-start mx-4 mt-8 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const content = "text-white m-2 "

    return (
        <section className={container}>
            <h1 className={clsx(titleStyle, "sticky top-0 text-3xl ml-2 mt-2")}>Bio</h1>
            <div className={content}>
                <p>Je m&apos;appelle Benjamin et ceci est ma bio</p>
                <p>Youloulou je cueille des pommes</p>
            </div>
        </section>
    )
}