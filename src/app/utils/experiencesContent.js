export const companies = [
  {
    id: "energisme",
    name: "Energisme",
    logo: "logo_energisme.png",
    website: "https://energisme.com/",
    description: {
      FR: "Solutions de suivi et d'optimisations énergétique de parcs immobilier et industriels.",
      EN: ""
    },
  },
  {
    id: "pitchy",
    name: "Pitchy",
    logo: "logo_pitchy.svg",
    website: "https://www.pitchy.fr",
    description: {
      FR: "Solutions web et mobile de création vidéo autonome pour les salariés de grands groupes.",
      EN: ""
    },
  }
]

export const jobs = [
  // ENERGISME
  {
    category: "product",
    companyId: "energisme",
    title: {
      FR: "Product Manager Data",
      EN: "Product Manager Data",
    },
    // description: {
    //   FR: "Responsable du développement de solutions techniques (construction d'ETLs) autour de la brique 'Data Collect'",
    //   EN: ""
    // },
    startDate: new Date(2023, 8, 11),
    endDate: new Date(2024, 4, 21),
    tasks: {
      FR: [
        "Rédaction de user stories",
        "Gestion de roadmap",
        "Suivi de sprints agiles",
        "Schéma techniques et fonctionnels",
        "Entretiens utilisateurs",
        "Tests fonctionnels",
        "Tests de non-régression ",
      ],
      EN: [
      ]
    },
    stack: {
      languages: [
        "Python",
        "SQL"
    ],
      tools: [
        "Notion",
        "Workbench",
        "ElasticSearch",
        "Apache Nifi"
      ]
    }
  },
  //PITCHY PM
  {
    category: "product",
    companyId: "pitchy",
    title: {
      FR: "Product Manager",
      EN: "Product Manager",
    },
    // description: {
    //   FR: "Responsable du développement de l'application Mobile Kannelle suite à on rachat par Pitchy en 2022",
    //   EN: ""
    // },
    startDate: new Date(2021, 6, 1),
    endDate: new Date(2023, 8, 3),
    tasks: {
      FR: [
        "Rédaction de user stories",
        "Gestion de roadmap",
        "Suivi de sprints agiles",
        "Maquettage et Prototypage",
        "Entretiens utilisateurs",
        "Tests fonctionnels",
        "Tests de non-régression ",
      ],
      EN: [
      ]
    },
    stack: {
      languages: [
        "SQL",
    ],
      tools: [
        "Notion",
        "Figma",
        "n8n",
      ]
    }
  },
  // PITCHY CSM
  {
    category: "account",
    companyId: "pitchy",
    title: {
      FR: "Client Success Manager",
      EN: "Client Success Manager",
    },
    // description: {
    //   FR: "J'ai démarré à l'origine chez Pitchy en tant que CSM. <br>Mon rôle était d'accompagner les clients et utilisateurs dans leur stratégie de communication par la vidéo",
    //   EN: ""
    // },
    startDate: new Date(2018, 11, 3),
    endDate: new Date(2021, 6, 1),
    tasks: {
      FR: [
        "Accompagnement client BtoB",
        "Animation de formations",
        "Tournages et montages vidéos",
      ],
      EN: [
      ]
    },
    stack: {
      languages: [
    ],
      tools: [
        "Notion",
        "n8n",
      ]
    }
  },

]

/** Categories :
 * - product
 * - development
 * - account */ 

/** Skills :
 * - Maquettage et Prototypage
 * - Rédaction de user stories
 * - Gestion de roadmap
 * - Suivi de sprints agiles
 * - Tests fonctionnels
 * - Tests de non-régression 
 * - "Schéma techniques et fonctionnels"
 */