import clsx from "clsx"
import { stackCategories } from "@/app/data/stacks"
import { StackCategory } from "@/app/components/stackCategory";

export default function StackPage() {

    // Styles
    const container = "bg-inherit flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-8 w-[90%] overflow-y-auto"
    const titleStyle = "text-slate-300 font-bold"
    const categoriesContainer = "flex flex-wrap h-100 w-auto m-4 gap-4"

    return (
        <section className={container}>
            <div className="sticky top-0 pl-6 py-4 bg-inherit h-18 w-full"> {/*Fixes the title at the top*/}
                <h1 className={clsx(titleStyle, "text-3xl")}>Stack</h1>
            </div>
            <div className={categoriesContainer}>
                {stackCategories.map((data, i) => {
                    return <StackCategory key={i} id={data.id} name={data.name.FR}/>
                })}
            </div>
        </section>
        )
}