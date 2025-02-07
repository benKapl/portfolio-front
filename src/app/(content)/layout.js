"use client";
// import clsx from "clsx";
import { usePathname} from "next/navigation";
import { useState, useEffect } from "react";
import { ComputerNavigation, MobileNavigation } from "../components/navigation";
import { Sidebar } from "../components/sidebar";
import { Socials } from "../components/footer";
import { aboutSections, projectsSections } from "../data/tabs";

export default function ContentLayout({ children }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // const getSocials = fetch()

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  let sidebarTitle
  let sidebarSections
  
  // Use pathname to determine the content of the Sidebar
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
    <div className="flex flex-col h-screen w-screen"> {/* APP CONTAINER*/}

    {isMobile ? <MobileNavigation /> : <ComputerNavigation />} {/* HEADER CONTAINING NAV BAR*/}

    <div className="bg-slate-900 flex flex-1 justify-start items-center overflow-hidden">  {/* MIDDLE CONTAINER*/}
      {pathname !== "/" && // Show Sidebar only if page is not "/"
      (<aside className="bg-slate-800 text-white w-48 h-full">
        <Sidebar 
          title={sidebarTitle}
          sections={sidebarSections}
          />
        </aside>)}
      {children}
    </div>  
    <footer className="h-14 relative z-10 bg-slate-700">  {/* FOOTER WITH SOCIALS */}
      <Socials />
    </footer>
  </div>
  );
}
