import clsx from "clsx"
import { Company } from "@/app/components/company"
import { companies } from "@/app/data/experiences";

export default function ExperiencePage() {

    // Styles

    // const testStyle = "border border-solid border-red-200"
    const container = "bg-inherit flex-1 flex-col h-auto w-full justify-start items-start mx-4 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const allExpContainer = "flex bg-inherit flex-col h-auto w-auto mx-4 gap-2"

    return (
        <section className={container}>
            <div className="sticky top-0 pt-6 pb-4 pl-6 bg-inherit h-18 w-full z-30"> {/*Fixes the title at the top*/}
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