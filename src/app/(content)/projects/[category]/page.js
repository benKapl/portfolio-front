// "use client";
import clsx from "clsx"
// import { usePathname} from "next/navigation";
import { Project } from "@/app/components/project"
import { projects } from "@/app/data/projects";

export default async function ProjectPage({params}) {

  const { category } = await params

  let filteredProjects
  !isNaN(Number(category)) ?  // Checks that category IS a number
    filteredProjects = projects.filter(data => data.year == category) : // Filter project based on year
    filteredProjects = projects.filter(data => data.isFavorite === true);   // If url is not year, retrieve favorites


  // Styles
  const container = "bg-inherit flex-1 flex-col h-auto w-full justify-start items-start ml- mb-16 max-w-5xl"
  const titleStyle = "text-slate-300 font-bold"
  const projectsContainer = "flex bg-inherit flex-col h-auto w-auto mx-6 gap-2"

  return (
      <section className={container}>
          <div className="sticky top-0 pt-6 pb-4 pl-6 bg-inherit h-18 w-full z-30"> {/*Fixes the title at the top*/}
              <h1 className={clsx(titleStyle, "text-3xl")}>{category === "pinned" ? "Favoris" : category}</h1>
          </div>
          <div className={projectsContainer}>
            {filteredProjects.map(data => {
              return (<Project
                  key={data.id}
                  name={data.name}
                  description={data.description}
                  demoUrl={data.image}
                  website={data.website}
                  repo={data.repo}
                  stack={data.stack}
                  />)})}
          </div>
      </section>
    )
}