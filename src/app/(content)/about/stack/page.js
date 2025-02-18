import clsx from "clsx"
import { Company } from "@/app/components/company"
import { companies } from "@/app/data/experiences";

export default function Stack() {

    // Styles

    // const testStyle = "border border-solid border-red-200"
    const container = "flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-8 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const categoriesContainer = "flex flex-col h-full w-auto m-4 gap-4 overflow-y-auto"
    const categoryLayout = ""
    const stacksContainer ="" 
    const stackLayout = ""
    const stackContent =""


    return (
        <section className={container}>
            <h1 className={clsx(titleStyle, "sticky top-0 text-3xl ml-2 mt-2")}>Stack</h1>
            <div className={categoriesContainer}>
                




                {/* {companies.map((data) => {
                  return (<Company
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    logo={`/images/logos/${data.logo}`}
                    website={data.website}
                    description={data.description}
                    />)})} */}
            </div>
        </section>
        )
}