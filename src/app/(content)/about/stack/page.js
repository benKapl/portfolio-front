import clsx from "clsx"
import { stackCategories } from "@/app/data/stacks"
import { StackCategory } from "@/app/components/stackCategory";

export default function StackPage() {

    // Styles
    const container = "bg-inherit flex-1 flex-col h-auto w-full justify-start items-start mx-4 mb-16"
    const titleStyle = "text-slate-300 font-bold"
    const categoriesContainer = "flex flex-wrap h-auto w-auto m-4 gap-4"

    return (
        <section className={container}>
            <div className="sticky top-0 pt-6 pb-4 pl-6 bg-inherit h-18 w-full z-30"> {/*Fixes the title at the top*/}
                <h1 className={clsx(titleStyle, "text-3xl h-full")}>Stack</h1>
            </div>
            <div className={categoriesContainer}>
                {stackCategories.map((data, i) => {
                    return <StackCategory key={i} id={data.id} name={data.name.FR}/>
                })}
            </div>
        </section>
    )
}