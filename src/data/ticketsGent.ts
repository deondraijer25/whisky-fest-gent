// src/data/ticketsGent.ts
// Officiële dataset voor Gents Whisky Festival 2027 (De Oude Vismijn Gent)

export interface TicketItem {
  id: string;
  row: number;
  title: string;
  price: number;
  date: string;
  time: string;
  day: 'vrijdag' | 'zaterdag' | 'zondag' | 'all';
  daypart: 'ochtend' | 'middag' | 'avond' | 'all';
  category: 'entree' | 'botteling' | 'warehouse' | 'masterclass' | 'trail' | 'tram' | 'vatenmaken';
  categoryName: string;
  bookingType: string;
  location: string;
  capacity: number;
  sold: number;
  isSoldOut: boolean;
  isLowStock: boolean;
  status?: 'sold-out' | 'limited' | 'popular' | 'selling-fast' | 'comingsoon';
  statusText?: string;
  extra?: string;
  description?: string;
  ambassadorName?: string;
  ambassadorTitle?: string;
  ambassadorBio?: string;
  tastingLineup?: string[];
}

export const TICKETS_GENT: TicketItem[] = [
  // =========================================================================
  // 1. Entrees 2027 (De Oude Vismijn Gent)
  // =========================================================================
  {
    id: "gent-entree-vrijdagavond",
    row: 1,
    title: "Entree Vrijdagavond",
    price: 42.5,
    date: "Vrijdag 1 Okt 2027",
    time: "19:00 - 23:00 uur",
    day: "vrijdag",
    daypart: "avond",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "De Oude Vismijn Gent",
    capacity: 500,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "€ 38,50 early bird tot 1 januari",
    description: "Beleef de opening van het Gents Whisky Festival 2027 in de sfeervolle historische hallen van De Oude Vismijn.",
    ambassadorName: "Gents Festival Team",
    ambassadorTitle: "Festival Host",
    ambassadorBio: "Ons team staat klaar om u te verwelkomen in het hart van historisch Gent.",
    tastingLineup: [
      "Officieel Glencairn festival proefglas",
      "Talloze gratis te proeven drams op de beursvloer",
      "Compleet festivalboekje met alle standhouders en plattegrond",
      "4 uur onbeperkt toegang tot alle beurseilanden en stands"
    ]
  },
  {
    id: "gent-entree-zaterdagmiddag",
    row: 2,
    title: "Entree Zaterdagmiddag",
    price: 42.5,
    date: "Zaterdag 2 Okt 2027",
    time: "13:00 - 17:00 uur",
    day: "zaterdag",
    daypart: "middag",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "De Oude Vismijn Gent",
    capacity: 500,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "€ 38,50 early bird tot 1 januari",
    description: "De populaire zaterdagmiddagsessie in De Oude Vismijn Gent.",
    ambassadorName: "Gents Festival Team",
    ambassadorTitle: "Festival Host",
    ambassadorBio: "Ons team staat klaar om u te verwelkomen in het hart van historisch Gent.",
    tastingLineup: [
      "Officieel Glencairn festival proefglas",
      "Talloze gratis te proeven drams op de beursvloer",
      "Compleet festivalboekje met alle standhouders en plattegrond",
      "4 uur onbeperkt toegang tot alle beurseilanden en stands"
    ]
  },
  {
    id: "gent-entree-zaterdagavond",
    row: 3,
    title: "Entree Zaterdagavond",
    price: 42.5,
    date: "Zaterdag 2 Okt 2027",
    time: "19:00 - 23:00 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "De Oude Vismijn Gent",
    capacity: 500,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "€ 38,50 early bird tot 1 januari",
    description: "Sfeervolle zaterdagavondproeverij met internationale en Belgische distilleerders.",
    ambassadorName: "Gents Festival Team",
    ambassadorTitle: "Festival Host",
    ambassadorBio: "Ons team staat klaar om u te verwelkomen in het hart van historisch Gent.",
    tastingLineup: [
      "Officieel Glencairn festival proefglas",
      "Talloze gratis te proeven drams op de beursvloer",
      "Compleet festivalboekje met alle standhouders en plattegrond",
      "4 uur onbeperkt toegang tot alle beurseilanden en stands"
    ]
  },
  {
    id: "gent-entree-zondagmiddag",
    row: 4,
    title: "Entree Zondagmiddag",
    price: 42.5,
    date: "Zondag 3 Okt 2027",
    time: "13:00 - 17:00 uur",
    day: "zondag",
    daypart: "middag",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "De Oude Vismijn Gent",
    capacity: 500,
    sold: 0,
    isSoldOut: true,
    isLowStock: false,
    status: "comingsoon",
    statusText: "Binnenkort",
    extra: "€ 38,50 early bird tot 1 januari",
    description: "Gemoedelijke zondagmiddagsessie. Wordt geactiveerd zodra de verkoop van de overige sessies gevorderd is.",
    ambassadorName: "Gents Festival Team",
    ambassadorTitle: "Festival Host",
    ambassadorBio: "Ons team staat klaar om u te verwelkomen in het hart van historisch Gent.",
    tastingLineup: [
      "Officieel Glencairn festival proefglas",
      "Talloze gratis te proeven drams op de beursvloer",
      "Compleet festivalboekje met alle standhouders en plattegrond",
      "4 uur onbeperkt toegang tot alle beurseilanden en stands"
    ]
  },

  // =========================================================================
  // 2. Specials Gent: Dada Chapel Botteling, Bootjes & Distilleerderij Bezoek
  // =========================================================================
  {
    id: "gent-botteling-dada-chapel",
    row: 5,
    title: "Festival Botteling: Dada Chapel Gentse Special 2027",
    price: 95,
    date: "Afhalen Festival",
    time: "Hele dag",
    day: "all",
    daypart: "all",
    category: "botteling",
    categoryName: "Festival Botteling",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Festival Slijterij",
    capacity: 50,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    status: "popular",
    statusText: "Populair",
    extra: "Limousin Virgin Oak Cask 7 jaar",
    description: "De officiële exclusieve festivalbotteling van het Gents Whisky Festival 2027. Een 7 jaar oude single cask gerijpt op nieuw Limousin eiken (Limousin Virgin Oak Cask 7 jaar). Gelimiteerde oplage van 50 genummerde flessen.",
    ambassadorName: "Festival Selectie Panel",
    ambassadorTitle: "Cask Committee",
    ambassadorBio: "Exclusief geselecteerd voor de editie van De Oude Vismijn in Gent.",
    tastingLineup: ["70cl Fles Cask Strength", "Genummerd Herkomstcertificaat"]
  },
  {
    id: "gent-special-bootje-zaterdag-1200",
    row: 6,
    title: "Rondvaart Gent - Whisky Bootje",
    price: 19.5,
    date: "Zaterdag 2 Okt 2027",
    time: "12:00 - 13:00 uur",
    day: "zaterdag",
    daypart: "middag",
    category: "tram",
    categoryName: "Whisky Bootje",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Melden bij entree-deur",
    capacity: 50,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Rondvaart over de Gentse grachten met proeverij",
    description: "Geniet van een unieke boottocht over de historische Gentse binnenwateren onder het genot van 4 bijzondere drams. Melden bij entree-deur De Oude Vismijn.",
    ambassadorName: "Gentse Bootkapitein & Gids",
    ambassadorTitle: "Schipper & Sommelier",
    ambassadorBio: "Combineert historische stadsverhalen over Gent met ambachtelijke whisky.",
    tastingLineup: [
      "Welkomstdram aan boord",
      "Graslei Special Single Malt",
      "Korenlei Cask Finish",
      "Finish Dram bij aanmeren"
    ]
  },
  {
    id: "gent-special-bootje-zaterdag-1830",
    row: 7,
    title: "Rondvaart Gent - Whisky Bootje",
    price: 19.5,
    date: "Zaterdag 2 Okt 2027",
    time: "18:30 - 19:30 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "tram",
    categoryName: "Whisky Bootje",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Melden bij entree-deur",
    capacity: 50,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Avondrondvaart over de Gentse grachten met proeverij",
    description: "Sfeervolle avondrondvaart over de verlichte historische Gentse grachten met whiskyproeverij. Melden bij entree-deur De Oude Vismijn.",
    ambassadorName: "Gentse Bootkapitein & Gids",
    ambassadorTitle: "Schipper & Sommelier",
    ambassadorBio: "Combineert historische stadsverhalen over Gent met ambachtelijke whisky.",
    tastingLineup: [
      "Welkomstdram aan boord",
      "Graslei Special Single Malt",
      "Korenlei Cask Finish",
      "Finish Dram bij aanmeren"
    ]
  },
  {
    id: "gent-special-dada-tour-vrijdag",
    row: 8,
    title: "Rondleiding Dada Chapel Distilleerderij",
    price: 15,
    date: "Vrijdag 1 Okt 2027",
    time: "18:00 - 19:30 uur",
    day: "vrijdag",
    daypart: "avond",
    category: "warehouse",
    categoryName: "Distilleerderij Bezoek",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Melden bij entree-deur",
    capacity: 15,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Exclusief kijkje achter de schermen bij Dada Chapel",
    description: "Wandel mee vanaf De Oude Vismijn naar de nabijgelegen Dada Chapel distilleerderij voor een intieme rondleiding inclusief proeverij. Melden bij entree-deur De Oude Vismijn.",
    ambassadorName: "Dada Chapel Distiller",
    ambassadorTitle: "Distillery Host",
    ambassadorBio: "Neemt u mee langs de koperen ketels en het rijpingsmagazijn.",
    tastingLineup: [
      "Vatmonster direct uit het vat",
      "Roggemout distillaat",
      "Limited Edition Botteling"
    ]
  },
  {
    id: "gent-special-dada-tour-zaterdag",
    row: 9,
    title: "Rondleiding Dada Chapel Distilleerderij",
    price: 15,
    date: "Zaterdag 2 Okt 2027",
    time: "11:00 - 12:30 uur",
    day: "zaterdag",
    daypart: "ochtend",
    category: "warehouse",
    categoryName: "Distilleerderij Bezoek",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Melden bij entree-deur",
    capacity: 15,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Exclusief kijkje achter de schermen bij Dada Chapel",
    description: "Ochtendrondleiding bij Dada Chapel Distilleerderij inclusief mini-tasting voorafgaand aan de festivalbeurs. Melden bij entree-deur De Oude Vismijn.",
    ambassadorName: "Dada Chapel Distiller",
    ambassadorTitle: "Distillery Host",
    ambassadorBio: "Neemt u mee langs de koperen ketels en het rijpingsmagazijn.",
    tastingLineup: [
      "Vatmonster direct uit het vat",
      "Roggemout distillaat",
      "Limited Edition Botteling"
    ]
  },

  // =========================================================================
  // 3. Masterclasses Gent 2027 (4 bevestigde sessies)
  // =========================================================================
  {
    id: "gent-mc-bowmore-zaterdag",
    row: 10,
    title: "Bowmore Single Malt Masterclass",
    price: 20,
    date: "Zaterdag 2 Okt 2027",
    time: "19:30 - 20:15 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "MC-ruimte (De Oude Vismijn)",
    capacity: 35,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Teddy Joseph Global Brand Ambassador (ENG)",
    description: "Exclusieve Bowmore Islay proeverij onder leiding van Global Ambassador Teddy Joseph.",
    ambassadorName: "Teddy Joseph",
    ambassadorTitle: "Global Brand Ambassador (ENG)",
    ambassadorBio: "Internationaal gerenommeerd Bowmore ambassadeur met diepgaande kennis over de legendarische No. 1 Vaults.",
    tastingLineup: [
      "Bowmore 12 Years Old",
      "Bowmore 15 Years Old Dark Oyster",
      "Bowmore 18 Years Old Deep & Complex",
      "Bowmore Cask Strength Single Cask"
    ]
  },
  {
    id: "gent-mc-jura-zondag",
    row: 11,
    title: "Jura Island Single Malt Masterclass",
    price: 20,
    date: "Zondag 3 Okt 2027",
    time: "12:15 - 13:00 uur",
    day: "zondag",
    daypart: "middag",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "MC-ruimte (De Oude Vismijn)",
    capacity: 35,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Line-up: Jura 12Y Sherry, Jura Perspective, Jura 15Y Manzanilla, Jura 18Y",
    description: "Reis mee naar het afgelegen eiland Jura en ontdek 4 uitzonderlijke expressies.",
    ambassadorName: "Jura Brand Ambassador",
    ambassadorTitle: "Island Malt Specialist",
    ambassadorBio: "Vertelt het verhaal van het piepkleine eiland met 200 inwoners en 1 legendarische distilleerderij.",
    tastingLineup: [
      "Jura 12Y Sherry Oloroso",
      "Jura Perspective (NAS)",
      "Jura 15Y Manzanilla Cask Finish",
      "Jura 18Y Red Wine Cask Finish"
    ]
  },
  {
    id: "gent-mc-laphroaig-zondag",
    row: 12,
    title: "Laphroaig Islay Masterclass",
    price: 20,
    date: "Zondag 3 Okt 2027",
    time: "13:45 - 14:30 uur",
    day: "zondag",
    daypart: "middag",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "MC-ruimte (De Oude Vismijn)",
    capacity: 35,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Teddy Joseph Global Brand Ambassador (ENG)",
    description: "De onmiskenbare turf- en medicinale tonen van Laphroaig onder leiding van Teddy Joseph.",
    ambassadorName: "Teddy Joseph",
    ambassadorTitle: "Global Brand Ambassador (ENG)",
    ambassadorBio: "Brengt de rauwe kustlijn en turfgeheimen van Islay tot leven.",
    tastingLineup: [
      "Laphroaig 10 Years Old",
      "Laphroaig Quarter Cask",
      "Laphroaig Càirdeas Festival Editie",
      "Laphroaig 10Y Cask Strength"
    ]
  },
  {
    id: "gent-mc-suntory-zondag",
    row: 13,
    title: "The House of Suntory Masterclass",
    price: 20,
    date: "Zondag 3 Okt 2027",
    time: "15:00 - 15:45 uur",
    day: "zondag",
    daypart: "middag",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "MC-ruimte (De Oude Vismijn)",
    capacity: 35,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Michael Yona Costa – Brand Ambassador Suntory Global Spirits (ENG)",
    description: "Meesterlijke Japanse blend- en distilleerkunst van The House of Suntory met Michael Yona Costa.",
    ambassadorName: "Michael Yona Costa",
    ambassadorTitle: "Brand Ambassador Suntory (ENG)",
    ambassadorBio: "Erkend kenner van de filosofie van Tsukuriwake en meesterlijke Japanse harmonie.",
    tastingLineup: [
      "Yamazaki 12 Years Old",
      "Hakushu Distiller's Reserve",
      "Hibiki Japanese Harmony",
      "Suntory Chita Single Grain"
    ]
  }
];
