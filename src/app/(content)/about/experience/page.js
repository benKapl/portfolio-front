import clsx from "clsx"
import { Company } from "@/app/components/company"
import { companies } from "@/app/data/experiences";

export default function Experience() {

    // Styles

    // const testStyle = "border border-solid border-red-200"
    const container = "bg-inherit flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-8 w-[90%] overflow-y-auto"
    const titleStyle = "text-slate-300 font-bold"
    const allExpContainer = "flex bg-inherit flex-col h-10 w-auto mx-4 gap-2"

    return (
        <section className={container}>
            <div className="sticky top-0 pl-6 py-4 bg-inherit h-18 w-full"> {/*Fixes the title at the top*/}
                <h1 className={clsx(titleStyle, "text-3xl")}>Expériences</h1>
            </div>
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