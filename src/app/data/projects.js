export const projects = [
    {
        id: "gator",
        name: {
            FR: "Gator (CLI)",
            EN: "",
        },
        description: {
            FR: "Second projet en Go, Gator est un agré-'gator' de flux RSS en CLI qui permet à différents utilisateurs de s'abonner à des flux et de sauvegarder à intervalles régulier les nouveaux articles dans une base de données Postgres hébergée localement.\nGator utilise les librairies Goose pour les migrations et SQLC pour la génération de code typé sécurisé à partir de requêtes SQL.",
            EN: "",
        },
        year: "2025",
        isFavorite: true,
        image: "/images/gator_brand.png",
        website: "",
        repo: "https://github.com/benKapl/gator",
        stack: [
            "go",
            "sql",
            "postgresql",  
        ]
    },
    {
        id: "pokedex-cli",
        name: {
            FR: "Pokedex (REPL)",
            EN: "",
        },
        description: {
            FR: "Premier développement Go, ce Pokedex permet d'explorer le monde des Pokémons et de les collectionner... sans quitter son terminal.\nCe fut un bon exercice de mise en pratique des requêtes HTTP en Go, avec la création d'un client HTTP et la mise en place d'un système de caching.",
            EN: "",
        },
        year: "2025",
        isFavorite: true,
        image: "/gifs/demo_pokedex-cli.gif",
        website: "",
        repo: "https://github.com/benKapl/pokedex-cli",
        stack: [
            "go",
        ]
    },
    {
        id: "grimoire",
        name: {
            FR: "Grimoire",
            EN: "",
        },
        description: {
            FR: "Grimoire est un journal numérique pour développeuse et développeurs, permettant de prendre des notes et de les mettre en forme, d'écrire du code et de l'exécuter. A la manière d'Obsidian, il est possible de catégoriser ses notes et les liers les unes aux autres.\nJ'ai conçu et développé ce projet en tant que lead avec une équipe de 4 développeurs dans le cadre de mon cursus au sein de la Capsule. On l'a développé en 9 jours.",
            EN: "",
        },
        year: "2024",
        isFavorite: true,
        image: "/gifs/demo_grimoire.gif",
        website: "https://www.mongrimoire.dev/",
        repo: "https://github.com/benKapl/grimoire-frontend",
        stack: [
            "js",
            "nodejs",
            "react",
            "nextjs",
            "expressjs",
            "mongodb",
            "redux",
            "tailwind",
        ]
    },
    {
        id: "maze-solver",
        name: {
            FR: "Maze Solver",
            EN: "",
        },
        description: {
            FR: "Cette interface graphique génère un labyrinthe aléatoire et le résout automatiquement. Je l'ai développé dans le cadre de mon apprentissage des fondamentaux du développement backend via la plateforme <a href='https://boot.dev'>boot.dev</a>.\nCodé en Python avec la librairie native tkinter, le projet utilise le paradigme de la Programmation Orientée Objet et un algorithme récursif (DPS).",
            EN: "",
        },
        year: "2024",
        isFavorite: true,
        image: "/gifs/demo_maze-solver.gif",
        website: "",
        repo: "https://github.com/benKapl/maze_solver",
        stack: [
            "python",
        ]
    },
]