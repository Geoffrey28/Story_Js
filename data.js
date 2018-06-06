const trueTml = [
    {
        pnjText: {
              content: "Salut mon pote, c'est pas ce que t'as fumé hier, je suis bien réel. Si tu me vois, appuie sur la bulle grise en bas à gauche.",
              pnj: "assets/characters/bear1.png"
        },
        answers: [
            {
                content: "Je te vois !",
                data: 1
            },
            {
                content: "...",
                data: 2
            }
        ]
    },
    {
        pnjText:
        {
            content: "Ok c'était juste pour que tu vois comment ça marche, maintenant passons aux choses sérieuses. Je veux que tu retrouve mon Graal, c'est un objet très puissant et important. Un dénommé `NAME` me l'as volé, trouve le et reprend lui.",
            pnj: "assets/characters/bear3.png"
        },
        answers: [
            {
                content: "Je te suis!",
                data: 1
            },
            {
              content: "JAMAIS!",
              data: 1
            }
        ]
    },
    {
        pnjText:
        {
            content: "Toute façon t'as pas le choix! Habille toi et retrouve moi en centre-ville. ",
            pnj: "assets/characters/bear2.png"
        },
        answers: [
            {
                content: "hmm.. Ok, on se retrouve plus tard.",
                data: 1
            },
            {
              content: "Le laisser partir et rester dans sa chambre.",
              data: 2
            }
        ]
    },
    {
        pnjText:
        {
            content: "En ville",
            pnj: "assets/characters/bear2.png"
        },
        answers: [
            {
                content: "azerty",
                data: 1
            },
            {
              content: "qsdfgh",
              data: 2
            }
        ]
    }
];

const falseTml = [
    {},
    {
        pnjText:
        {
            content: "Encore un débile...",
            pnj: "assets/characters/bear4.png"
        },
        answers: [
            {
                content: "Ok Ok, j'ai compris..",
                data: 1
            },
            {
              content: "ALEEED! fo fer koi?",
              data: 2
            }
        ]
    },
    {},
    {
        pnjText:
        {
            content: "Une heure après que l'ours soit parti, tu entends un coup de feu derrière ta fenêtre.",
            pnj: ""
        },
        answers: [
            {
                content: "S'approcher de la fenêtre.",
                data: 2
            },
            {
              content: "Ne pas bouger",
              data: 2
            }
        ]
    }
];

const dieTml = [
    {},
    {
        pnjText:
        {
            content: "game over",
            pnj: "assets/characters/bear2.png"
        },
        answers: [
            {
                content: "",
                data: 1
            },
            {
              content: "",
              data: 2
            }
        ]
    },
    {},
    {
        pnjText:
        {
            content: "L'ours surgit devant toi énervé et se débarasse de toi mais.. on va censurer ça!",
            pnj: "assets/characters/bear2.png"
        },
        answers: [
            {
                content: "GAME OVER",
                data: 1
            },
            {
              content: "GAME OVER",
              data: 2
            }
        ]
    }
]
