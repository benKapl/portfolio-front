// "use client";
import clsx from "clsx"
// import { usePathname} from "next/navigation";
import { Project } from "@/app/components/project"
import { projects } from "@/app/data/projects";

export default async function ProjectPage({params}) {

  const { category } = await params

    // IMPORTANT : TROUVER UN MOYEN POUR FAIRE MATCHER LES PROJETS AVEC
    // LA CATÉGORIE DEFINIE DANS L'URL

    // Styles
    const container = "bg-inherit flex-1 flex-col h-auto w-full justify-start items-start mx-4 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const projectsContainer = "flex bg-inherit flex-col h-auto w-auto mx-4 gap-2"

    return (
        <section className={container}>
            <div className="sticky top-0 pt-6 pb-4 pl-6 bg-inherit h-18 w-full z-30"> {/*Fixes the title at the top*/}
                <h1 className={clsx(titleStyle, "text-3xl")}>{category}</h1>
            </div>
            <div className={projectsContainer}>
                <Project />
                {/* {projects.map((data) => {
                  return (<Project
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