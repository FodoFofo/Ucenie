const recipes = [
  {
    id: 1,
    image: "",
    name: "Chlieb (Mix B)",
    ingredients: [
      {
        name: "múka Schar Mix B",
        quantity:"500 g"
      },
      {
        name: "vlažná voda",
        quantity:"450 ml"
      },
      {
        name: "olej (repkový alebo slnečnicový)",
        quantity:"40 g"
      }
      ,
      {
        name: "sušené alebo čerstvé droždie",
        quantity:"10 g alebo 21 g"
      },
      {
        name: "soli",
        quantity:"8 g"
      }
    ],
    procedure: "Do misy dáme soľ, olej a vodu, poptom pridáme zmes Schär Mix B Bread a droždie. Cesto vymiešame. Cesto v miske prikryjeme a necháme cca 45 min. odpočivať a teplom mieste (cca 22 - 28 °C). Potom cesto vyklopíme na papir na pečenie a z vytvarujeme z necho bochník a necháme ešte 30 min. kysnúť. Potom do rúry vložíme ohňuvzdornú misku a zohrejeme rúru (teplovzdušnú na 210°C alebo horný, spodný ohrev na 220°C). Po vykysnutí cesta potrieme bochník vodou, prípadne ho aj narežeme a vložíme ho do trúby, do misky nalejeme cca 1,5-2dl vody. Pečieme cca 50 min, a potom necháme chlieb vychladnúť na mriežke",
    tags: ["bezlepkový", "chlieb"],
    note: ""
  },
  {
    id: 2,
    image: "",
    name: "Pizza (Mix B)",
    ingredients: [
      {
        name: "múka Schar Mix B",
        quantity:"300 g"
      },
      {
        name: "sušené alebo čerstvé droždie",
        quantity:"6 g alebo 13 g"
      },
      {
        name: "olivový olej",
        quantity:"30 g"
      },
      {
        name: "vlažná voda",
        quantity:"225 ml"
      },
      {
        name: "soľ",
        quantity:"5 g"
      },
    ],
    procedure: "Zo všetkých ingrediencii vymiesime hladné cesto. Ak používame čerstvé droždie, rozpustíme ho najprv vo vode a potom vlejeme do múky a zamiešame. Prikryjeme ho a necháme 45min. kysnúť. Potom cesto preložíme na papier na pečenie, ktorý sme potreli olejom, poukladame naň paradajky, mozzarelu a ďalšie suroviny podľa výberu a pečieme na spodnej mriežke rúry približne 20-25 min. pri teplote 220 °C",
    tags: ["bezlepkový", "pizza"],
    note: ""
  },
  {
    id: 3,
    image: "",
    name: "Bezlepkové bagetky",
    ingredients: [
      {
        name: "vlažná voda",
        quantity:"250 ml"
      },
      {
        name: "droždie",
        quantity:"10 g"
      },
      {
        name: "cukor kryštálový",
        quantity:"1 PL"
      },
      {
        name: "Rolls mix Liana",
        quantity:"250 g"
      },
      {
        name: "KL soľ",
        quantity:"2/3"
      },
      {
        name: "olivový olej",
        quantity:"3 PL"
      },
    ],
    procedure: "Zmiešame približne 100 ml vody, droždie a cukor, necháme cca 10 minút vzísť. | Rolls mix, soľ, pripravený kvások a zvyšnú vodu miešame mixérom s hnetacími metličkami. Počas miešania pridáme olej. Cesto prikryjeme a necháme 30 minút kysnúť. | Vykysnuté cesto na naolejovanej podložke rozdelíme na 6 častí, zľahka vytvarujeme bagetky, ktoré uložíme do formy. Prikryjeme a necháme 25 minút podkysnúť. | Bagetky jemne narežeme a potrieme zmesou oleja a vody. Pečieme pri 230°C približne 19 minút.",
    tags: ["bezlepkový"],
    note: "Robil som, možno dať trochu menej vody, skúsiť 220 ml"
  },
  {
    id: 4,
    image: "",
    name: "Bezlepkový chlieb",
    ingredients: [
      {
        name: "Bread mix dark Liana",
        quantity:"500 g "
      },
      {
        name: "kryštálový cukor",
        quantity:"2 KL"
      },
      {
        name: "vlažná voda",
        quantity:"440 ml"
      },
      {
        name: "čerstvé droždie",
        quantity:"10 g"
      },
      {
        name: "soľ",
        quantity:"2 KL"
      },
      {
        name: "olej",
        quantity:"2 PL"
      },
      {
        name: "semienka ľanové, slnečnicové, sezamové, rasca mletá alebo celá",
        quantity:"podľa chuti"
      },
    ],
    procedure: "Pripravíme kvások z droždia, cukru a trochu vlažnej vody. Zamiešame a necháme nakvasiť cca 10 minút. | Do misky nasypeme Bread mix dark, soľ, pripravený kvások z droždia a zvyšnú vodu. Podľa chuti pridáme semienka, príp. chlebové korenie. Vymiesime mixérom s hnetacími metličkami cca 2 minúty. Nakoniec pridáme olej a miešame ešte 1 - 2 minúty. Prikryjeme potravinovou fóliou a necháme kysnúť 45 - 60 minút. | Podložku pomúčime ryžovou múkou a vyklopíme vykysnuté cesto. Cesto spracujeme na bochník. Ošatku alebo formu na kysnutie jemne pomúčime ryžovou múkou. Vypracovaný bochník vložíme do ošatky, zabalíme do mikroténového vrecka a necháme kysnúť na teplom mieste 45 minút. | Vykysnuté cesto preklopíme na papier na pečenie. Chlieb potrieme alebo postriekame zmesou 2 PL vody a 3 PL oleja. Narežeme, aby počas pečenia nepraskol a vložíme do vyhriatej misy alebo na vyhriaty plech. Prikryjeme, vložíme do rúry vyhriatej na 225°C a pečieme 40 minút s pokrievkou. | Chlieb postriekame vodou a dopečieme bez pokrievky 10 - 15 minút pri teplote 200°C. Ak pečieme na plechu použijeme záparu na prvých 10 minút pri 225°C a potom cca 40 minút pri 200°C bez zápary. Ihneď po upečení chlieb postriekame vodou a necháme na mriežke vychladnúť.",
    tags: ["bezlepkový", "chlieb"],
    note: "Robil som, trochu viac soli"
  },
];
  
export default recipes;