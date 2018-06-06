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
                content: "",
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
    }
];

const falseTml = [
    {},
    {
        pnjText:
        {
            content: "Encore un débile...",
            pnj: "assets/characters/bear2.png"
        },
        answers: [
            {
                content: "...",
                data: 1
            },
            {
              content: "Ton père",
              data: 2
            }
        ]
    },
    {
        pnjText:
        {
            content: "fais bellek",
            pnj: "assets/characters/bear2.png"
        },
        answers: [
            {
                content: "``courir``",
                data: 1
            },
            {
              content: "///",
              data: 2
            }
        ]
    }
];
