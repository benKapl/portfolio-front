"use client";
import { usePathname} from "next/navigation";
import { Navigation } from "../components/navigation";
import { About } from "../components/sidebars/about";
import { Projects } from "../components/sidebars/projects";

export default function ContentLayout({ children }) {
  const pathname = usePathname()
  // console.log(typeof pathname)

  return (
    <div className="flex flex-col h-screen"> {/* APP CONTAINER*/}
      <header className="bg-slate-700 text-slate-300 p-4 text-center">
        <Navigation />
      </header>
      <div className="bg-slate-900 flex h-full justify-evenly items-center">  {/* MIDDLE CONTAINER*/}
        {pathname !== "/" && // Show only if page != Home
        (<aside className="bg-slate-300 h-full">
            {pathname.startsWith("/about") && <About />}
            {pathname.startsWith("/projects") && <Projects />}
          </aside>)}
        {children}
      </div>  
      <footer className="bg-slate-700  text-white p-4 text-center">
        Ceci est un footer
      </footer>
    </div>
  );
}
