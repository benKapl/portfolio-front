import Image from "next/image"
import Link from "next/link";
import clsx from "clsx"
import moment from "moment";
export default function Experience() {

    // Styles
    const container = "border border-solid border-red-100 flex flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-4 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const allExpContainer = "border border-solid border-red-200 flex flex-col h-full w-auto m-4"
    const oneExpContainer = "flex flex-col flex-start w-full"
    const companyContainer = "flex flex-col flex-start"
    const jobContainer = ""
    const skillsContainer = ""

    const startDate = new Date(2023, 8, 11)
    const endDate = new Date(2024, 4, 21)


    return (
        <section className={container}>
            <h1 className={clsx(titleStyle, "text-3xl")}>Experiences MOFO</h1>
            <div className={allExpContainer}>
            {/* Component ? */}
                <div className={oneExpContainer}>
                    <div className={companyContainer}>
                        <div className="flex flex-start items-center">
                            <Link href="https://www.pitchy.fr" passHref target="_blank">
                                <Image src="/images/logos/logo_pitchy.svg" alt="Logo Pitchy" width={100} height={20}/>
                            </Link>
                            <h1 className={clsx(titleStyle, "text-2xl ml-8")}></h1>
                        </div>
                        <p className="text-slate-300 mt-2">Solutions web et mobile de création vidéo autonome pour les salariés de grands groupes.</p>
                    </div>
                    <div className={jobContainer}>
                        <div></div>
                    </div>
                    <div className={skillsContainer}>
                    </div>

                </div>

            </div>
        </section>
        )
} 