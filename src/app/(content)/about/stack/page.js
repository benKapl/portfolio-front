import clsx from "clsx"
import { StackCategory } from "@/app/components/stackCategory";
import { companies } from "@/app/data/experiences";

export default function StackPage() {

    // Styles

    // const testStyle = "border border-solid border-red-200"
    const container = "bg-inherit flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-8 w-[90%] overflow-y-auto"
    const titleStyle = "text-slate-300 font-bold"
    const categoriesContainer = "flex flex-wrap h-96 w-auto m-4 gap-4"
    const categoryLayout = ""
    const stacksContainer ="" 
    const stackLayout = ""
    const stackContent =""


    return (
        <section className={container}>
            <div className="sticky top-0 pl-6 py-4 bg-inherit h-18 w-full"> {/*Fixes the title at the top*/}
                <h1 className={clsx(titleStyle, "text-3xl")}>Stack</h1>
            </div>
            <div className={categoriesContainer}>
                <StackCategory />
                <StackCategory />
                <StackCategory />
                <StackCategory />
                <StackCategory />




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