import Image from "next/image"
import Link from "next/link";
import clsx from "clsx"
import moment from "moment";
import "moment/locale/fr"

export default function Experience() {

    moment.locale("fr")

    // Styles
    const testStyle = "border border-solid border-red-200"

    const container = "flex flex-1 flex-col h-full w-full justify-start items-start mx-4 mt-8 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const allExpContainer = "flex flex-col h-full w-auto m-4"
    const companyContainer = "flex flex-col w-full rounded-2xl p-6 bg-inherit bg-opacity-100 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-800 hover:bg-opacity-80";
    const companyDefContainer = "flex flex-col flex-start"
    const jobContainer = "flex justify-start items-center w-full mb-2"
    const dateContainer="flex justify-between items-center w-40"
    const dateStyle = "text-yellow-400 "
    const skillsContainer = "flex justify-start items-center max-w-[900px] gap-2 flex-wrap"
    const skillStyle = "px-3 py-1 rounded-lg bg-gray-800 text-gray-300 text-xs sm:text-sm hover:bg-gray-700 transition";

    const startDate = moment([2023, 8, 11]).format("MMM YYYY")
    const fStartDate = startDate.charAt(0).toUpperCase() + startDate.slice(1);
    const endDate = moment([2024, 4, 21]).format("MMM YYYY")
    const fEndDate = endDate.charAt(0).toUpperCase() + endDate.slice(1);


    return (
        <section className={container}>
            <h1 className={clsx(titleStyle, "text-3xl mb-6")}>Expériences</h1>
            <div className={allExpContainer}>
            {/* Component ? */}
                <div className={companyContainer}>
                    <div className={companyDefContainer}>
                        <div className="flex flex-start items-center">
                            <Link href="https://www.pitchy.fr" passHref target="_blank">
                                <Image src="/images/logos/logo_pitchy.svg" alt="Logo Pitchy" width={100} height={20}/>
                            </Link>
                            <h2 className={clsx(titleStyle, "text-2xl ml-8 hidden")}>Pitchy</h2>
                        </div>
                        <p className="text-slate-300 my-2">Solutions web et mobile de création vidéo autonome pour les salariés de grands groupes.</p>
                    </div>
                    <div className={jobContainer}>
                        <div className={dateContainer}>
                            <p className={dateStyle}>{fStartDate}</p>
                            <p className={titleStyle}> - </p>
                            <p className={dateStyle}>{fEndDate}</p>
                        </div>
                        <h3 className={clsx("text-slate-300 text-2xl italic ml-8")}>Product Manager</h3>
                    </div>
                    <div className={skillsContainer}>
                        <span className={skillStyle}>Création de user stories</span>
                        <span className={skillStyle}>Gestion de roadmap </span>
                        <span className={skillStyle}>Suivi de sprints agiles </span>
                        <span className={skillStyle}>Entretiens utilisateurs </span>
                        <span className={skillStyle}>Tests fonctionnels </span>
                        <span className={skillStyle}>Analyse de données </span>

                    </div>

                </div>

            </div>
        </section>
        )
} 