import clsx from "clsx"
// import { bio } from "@/app/data/bio"

export default function Bio() {

    // const bioLines = bio.FR.split("\n")

    // Styles

    const container = "bg-inherit flex-1 flex-col h-auto w-full justify-start items-start mx-4 w-[90%]"
    const titleStyle = "text-slate-300 font-bold"
    const content = "text-white m-4 space-y-4 leading-relaxed"
    const descLinkStyle = "text-yellow-500 underline"

    return (
        <section className={container}>
        <div className="sticky top-0 pt-6 pb-4 pl-6 bg-inherit h-18 w-full z-30"> {/*Fixes the title at the top*/}
            <h1 className={clsx(titleStyle, "text-3xl h-full")}>Bio</h1>
        </div>
        <div className={content}>
            <p>
            Après avoir passé quelques années dans la Tech à travailler en tant que Product Manager avec des développeurs, j&apos;ai dû me rendre à l&apos;évidence : j&apos;aime résoudre des problématiques techniques bien davantage que des problèmes utilisateurs. Alors que je me <a href="https://www.docstring.fr/" className={`${descLinkStyle}`}>formais à Python</a> pour faciliter mon travail de PM dans une squad data, je me suis découvert une profonde passion pour la programmation qui m&apos;a mené vers une reconversion complète dans l&apos;ingénierie logicielle, et plus spécifiquement le <a href="https://blog.boot.dev/backend/why-i-prefer-backend/" className={`${descLinkStyle} text-white`}>développement web backend</a>.
            </p>

            <p>
            Mon apprentissage s&apos;est fait progressivement mais deux cursus en particulier sortent du lot.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Boot.dev</h2>
            <p>
            Le premier est <a href="https://www.boot.dev/tracks/backend" className={`${descLinkStyle}`}>Boot.dev</a>, une plateforme d&apos;apprentissage complètement dédiée au développement backend. Le cursus s&apos;étend sur plus d&apos;un an et permet d&apos;apprendre par la pratique les outils et les notions fondamentales d&apos;abord nécessaires à la pratique du code, puis spécifiques au développement backend :
            </p>

            <p>
            Dans un premier temps on voit Git, le Shell, les paradigmes de programmation orientée objet et fonctionnelle, les structures de données, l&apos;algorithmie et la gestion de la mémoire en C.
            </p>
            <p>
            Une fois les fondamentaux acquis, on passe aux notions plus pratiques et avancées avec l&apos;apprentissage d&apos;un langage statiquement typé (Go), les bases de données relationnelles, les clients et serveurs http, les containers (Docker) et l&apos;architecture micro-service (Kubernetes).
            </p>

            <h2 className="text-2xl font-semibold mt-6">La Capsule</h2>
            <p>
            Le second est la formation de Développeur Fullstack Web et Mobile de l&apos;école <a href="https://lacapsule.academy" className={`${descLinkStyle}`}>La Capsule</a>. Celle-ci m&apos;a non seulement permis d&apos;obtenir un diplôme d&apos;équivalence bac+4, mais aussi et surtout d&apos;élargir mes connaissances et ma compréhension des pratiques du développement web modernes, par l&apos;apprentissage :
            </p>
            <ul className="list-disc list-inside space-y-2">
            <li>
                des langages fondamentaux du front (HTML, CSS, JavaScript)
            </li>
            <li>
                des frameworks, librairies, SGBD et outils modernes utilisés par les développeurs fullstack (React, Tailwind, NextJs, ExpressJs, React Native, MongoDB, Vercel)
            </li>
            <li>
                du travail collaboratif avec des développeurs, ayant mené à l&apos;aboutissement de <a href="https://github.com/benKapl/grimoire-frontend" className={`${descLinkStyle}`}>Grimoire</a>, un journal pour développeurs permettant d&apos;exécuter du code.
            </li>
            </ul>
        </div>
        </section>

    )
}