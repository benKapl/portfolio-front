import clsx from "clsx"
import { Company } from "@/app/components/company"
import { companies } from "@/app/data/experiences";

export default function Experience() {


    // Styles
    const testStyle = "border border-solid border-red-200"

    const container = "flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-8 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const allExpContainer = "flex flex-col h-full w-auto m-4 gap-4 overflow-y-auto"

    return (
        <section className={container}>
            <h1 className={clsx(titleStyle, "sticky top-0 text-3xl ml-2 mt-2")}>Expériences</h1>
            <div className={allExpContainer}>
                {companies.map((data) => {
                  return (<Company
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    logo={`/images/logos/${data.logo}`}
                    website={data.website}
                    description={data.description}
                    />)})}
            </div>
        </section>
        )
}