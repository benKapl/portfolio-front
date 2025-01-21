"use client";
import clsx from "clsx";
import { usePathname} from "next/navigation";
import { useState, useEffect } from "react";
import { ComputerNavigation, MobileNavigation } from "../components/navigation";
import { Sidebar } from "../components/sidebar";
import { aboutSections, projectsSections } from "../utils/tabContents";

export default function ContentLayout({ children }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  let sidebarTitle
  let sidebarSections
  
  // Determine the content of the Sidebar
  const pathname = usePathname()
  let pathKey

  if (pathname.startsWith("/about")) pathKey = "about";
  else if (pathname.startsWith("/projects")) pathKey = "projects";
  else pathKey = "";

  switch (pathKey) {
    case ("about"):
      sidebarTitle = "About"
      sidebarSections = aboutSections
      break
    case ("projects"):
      sidebarTitle = "Projects"
      sidebarSections = projectsSections
  } 

  return (
    <div className="flex flex-col h-screen"> {/* APP CONTAINER*/}

      {isMobile ? <MobileNavigation /> : <ComputerNavigation /> } {/* HEADER CONTAINING NAV BAR*/}

      <div className="bg-slate-900 flex h-full justify-evenly items-center">  {/* MIDDLE CONTAINER*/}
        {pathname !== "/" && // Show only if page != Home
        (<aside className="bg-slate-800 text-white w-48 h-full">
          <Sidebar 
            title={sidebarTitle}
            sections={sidebarSections}
            />
          </aside>)}
        {children}
      </div>  
      <footer className="bg-slate-700  text-white p-4 text-center">
        Ceci est un footer
      </footer>
    </div>
  );
}
