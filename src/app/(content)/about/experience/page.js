import clsx from "clsx"
import { Company } from "@/app/components/company"

export default function Experience() {
    // Styles
    const testStyle = "border border-solid border-red-200"

    const container = "flex flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-8 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const allExpContainer = "flex flex-col h-full w-auto m-4"

    return (
        <section className={container}>
            <h1 className={clsx(titleStyle, "text-3xl mb-6")}>Expériences</h1>
            <div className={allExpContainer}>
            {/* Component ? */}
                <Company id="pitchy"/>
            </div>
        </section>
        )
} 