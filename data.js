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
            content: "Ah enfin! t'en as mis du temps. Viens à l'écart, je suis habillé pour me fondre dans la masse mais quand même soyons prudent.",
            pnj: "assets/characters/bear5.png"
        },
        answers: [
            {
                content: "Vas-y, je t'écoute.",
                data: 1
            },
            {
              content: "Mais j'suis le seul à te voir!",
              data: 2
            }
        ]
    },
    {
        pnjText:
        {
            content: "`NAME` se trouve sur le toit de l'immeuble d'en face, il doit avoir mon Graal sur lui. Je te montre comment accéder au toit et tu t'occupe de récupérer mon précieux.",
            pnj: "assets/characters/bear5.png"
        },
        answers: [
            {
                content: "Qu'est-ce que tu sais sur lui?",
                data: 1
            },
            {
              content: "T'as une arme?",
              data: 3
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
    },
    {
        pnjText:
        {
            content: "TAIS TOI!!! INSOLENT!",
            pnj: "assets/characters/bear2.png"
        },
        answers: [
            {
                content: "C'est bon c'est bon, bref ...",
                data: 1
            },
            {
              content: "hm... La je comprends pourquoi ta besoin d'aide.",
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
            content: "PAF! un débile en moins!",
            pnj: "assets/characters/bear4.png"
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
    },
    {},
    {
        pnjText:
        {
            content: "L'ours surgit devant toi énervé et se débarasse de toi mais.. on va censurer ça!",
            pnj: "assets/characters/bear4.png"
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
    },
    {
        pnjText:
        {
            content: "...",
            pnj: "assets/characters/bear4.png"
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

const altTml = [
    {
        pnjText:
        {
            content: "C'est ça que je veux entendre! Mais attends un peu je travaille dessus la.",
            pnj: "assets/characters/bear4.png"
        },
        answers: [
            {
                content: "IN WORK...",
                data: 1
            },
            {
              content: "IN WORK...",
              data: 2
            }
        ]
    }
];

const badAltTml = [

];

const infiniteAltTml = [

];
