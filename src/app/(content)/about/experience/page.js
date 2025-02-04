import clsx from "clsx"
import { Company } from "@/app/components/company"
import { companies } from "@/app/data/experiences";

export default function Experience() {

    const companiesBlocs = companies.map((data) => {
           return (<Company
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    logo={`/images/logos/${data.logo}`}
                    website={data.website}
                    description={data.description}
                    />)
        })

    // Styles
    const testStyle = "border border-solid border-red-200"

    const container = "flex flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-8 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const allExpContainer = "flex flex-col h-full w-auto m-4 gap-4"

    return (
        <section className={container}>
            <h1 className={clsx(titleStyle, "text-3xl mb-6")}>Expériences</h1>
            <div className={allExpContainer}>
                {companiesBlocs}
            </div>
        </section>
        )
} 