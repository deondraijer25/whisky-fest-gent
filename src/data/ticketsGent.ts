// src/data/ticketsGent.ts
// Officiële dataset voor Gents Whisky Festival 2027 (De Oude Vismijn Gent • 1 & 2 Oktober 2027)

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
  // 1. Entrees 2027 (De Oude Vismijn Gent • 1 & 2 Oktober 2027)
  // =========================================================================
  {
    id: "6abb9786cde13de34a119388",
    row: 1,
    title: "Entree Vrijdagavond",
    price: 39.5,
    date: "Vrijdag 1 Okt 2027",
    time: "19:00 - 23:00 uur",
    day: "vrijdag",
    daypart: "avond",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "De Oude Vismijn Gent",
    capacity: 550,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "€ 39,50 early bird tot 1 januari (daarna € 42,50)",
    description: "Beleef de opening van het Gents Whisky Festival 2027 in de sfeervolle historische hallen van De Oude Vismijn. Entreeticket vrijdagavond 19.00 tot 23.00 (na 1 jan naar 42,50).",
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
    id: "6abb97868634ebafa93abbd1",
    row: 2,
    title: "Entree Zaterdagmiddag",
    price: 39.5,
    date: "Zaterdag 2 Okt 2027",
    time: "13:00 - 17:00 uur",
    day: "zaterdag",
    daypart: "middag",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "De Oude Vismijn Gent",
    capacity: 550,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "€ 39,50 early bird tot 1 januari (daarna € 42,50)",
    description: "De populaire zaterdagmiddagsessie in De Oude Vismijn Gent. Entreeticket zaterdagmiddag 13.00 tot 17.00 (na 1 jan naar 42,50).",
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
    id: "6abb9787fc8d6456cfdf96be",
    row: 3,
    title: "Entree Zaterdagavond",
    price: 39.5,
    date: "Zaterdag 2 Okt 2027",
    time: "19:00 - 23:00 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "De Oude Vismijn Gent",
    capacity: 550,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "€ 39,50 early bird tot 1 januari (daarna € 42,50)",
    description: "Sfeervolle zaterdagavondproeverij met internationale en Belgische distilleerders. Entreeticket zaterdagavond 19.00 tot 23.00 (na 1 jan naar 42,50).",
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
  // 2. Officiële Festival Botteling 2027 (De Oude Vismijn Gent)
  // =========================================================================
  {
    id: "6abb978d69fb0a4bfd17f990",
    row: 5,
    title: "Dada Chapel Gentse Special",
    price: 95,
    date: "Afhalen Festival (1-2 okt 2027)",
    time: "Hele dag",
    day: "all",
    daypart: "all",
    category: "botteling",
    categoryName: "Festival Botteling",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Festival Slijterij",
    capacity: 75,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    status: "popular",
    statusText: "Populair",
    extra: "Limousin Virgin Oak Cask 7 jaar",
    description: "Officiële Dada Chapel Gentse Whisky Festival Special. Een 7 jaar oude single cask gerijpt op nieuw Limousin eiken (Limousin Virgin Oak Cask 7 jaar). Gelimiteerde oplage.",
    ambassadorName: "Festival Selectie Panel",
    ambassadorTitle: "Cask Committee",
    ambassadorBio: "Exclusief gestookt en geselecteerd voor het Gents Whisky Festival.",
    tastingLineup: ["70cl Fles Cask Strength", "Genummerd Herkomstcertificaat"]
  },

  // =========================================================================
  // 3. Specials Gent: Bootjes & Distilleerderij Bezoek (Direct Bestelbaar)
  // =========================================================================
  {
    id: "6abb978ea456c2a4ec18a856",
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
    extra: "Rondvaart Gent - Whisky Bootje - afvaart 12.00 uur",
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
    id: "6abb978e1eb866bf2b8779dd",
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
    extra: "Rondvaart Gent - Whisky Bootje - afvaart 18.30 uur",
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
    id: "6abb978edaed730a5a0433d1",
    row: 8,
    title: "Rondleiding door Dada Chapel Distilleerderij",
    price: 15,
    date: "Vrijdag 1 Okt 2027",
    time: "18:00 - 19:30 uur",
    day: "vrijdag",
    daypart: "avond",
    category: "warehouse",
    categoryName: "Distilleerderij Bezoek",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Melden bij entree-deur",
    capacity: 20,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Rondleiding door Dada Chapel Distilleerderij",
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
    id: "6abb978f1eb866bf2b8779e0",
    row: 9,
    title: "Rondleiding door Dada Chapel Distilleerderij",
    price: 15,
    date: "Zaterdag 2 Okt 2027",
    time: "11:00 - 12:30 uur",
    day: "zaterdag",
    daypart: "ochtend",
    category: "warehouse",
    categoryName: "Distilleerderij Bezoek",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Melden bij entree-deur",
    capacity: 20,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Ochtendrondleiding bij Dada Chapel Distilleerderij",
    description: "Ochtendrondleiding bij Dada Chapel Distilleerderij inclusief mini-tasting voorafgaand aan de festivalbeurs. Melden bij entree-deur De Oude Vismijn.",
    ambassadorName: "Dada Chapel Distiller",
    ambassadorTitle: "Distillery Host",
    ambassadorBio: "Neemt u mee langs de koperen ketels en het rijpingsmagazijn.",
    tastingLineup: [
      "Vatmonster direct uit het vat",
      "Roggemout distillaat",
      "Limited Edition Botteling"
    ]
  }
];
