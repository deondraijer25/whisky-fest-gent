// src/data/standhoudersGent.ts
// Officiële standhouders dataset voor Gents Whisky Festival (De Oude Vismijn Gent)

export interface ExhibitorItem {
  id: string;
  name: string;
  category: 'scotch' | 'world' | 'independent' | 'irish' | 'belgian' | 'catering';
  brands: string[];
  description: string;
  isNotOnMap?: boolean;
}

export const EXHIBITORS_GENT: ExhibitorItem[] = [
  { id: "1", name: "Dada Chapel Distillery", category: "belgian", brands: ["Dada Chapel Rye", "Gentse Single Cask", "Vodka & Gin"], description: "Lokale Gentse biologische distilleerderij met innovatieve vatrijpingen." },
  { id: "2", name: "The Nectar", category: "independent", brands: ["The Daily Dram", "Signatory Vintage", "Edradour", "Kilchoman"], description: "Grootste onafhankelijke importeur en bottelaar van premium whisky's in België." },
  { id: "3", name: "Campari Belgium", category: "scotch", brands: ["Glen Grant", "Wild Turkey", "Russell's Reserve", "Bowmore"], description: "Prestigieuze Schotse single malts en authentieke Amerikaanse bourbons." },
  { id: "4", name: "Moët Hennessy Belux", category: "scotch", brands: ["Glenmorangie", "Ardbeg", "Woodinville"], description: "Iconische Highland elegantie van Glenmorangie en ongetemde Islay rook van Ardbeg." },
  { id: "5", name: "Bacardi-Martini Belux", category: "scotch", brands: ["Aberfeldy", "Aultmore", "Craigellachie", "Royal Brackla", "Dewar's"], description: "The Last Great Malts of Scotland en uitzonderlijke single cask expressies." },
  { id: "6", name: "Pernod Ricard Belgium", category: "scotch", brands: ["The Glenlivet", "Aberlour", "Redbreast", "Midleton"], description: "Toonaangevende Speyside klassiekers en Ierse Single Pot Still meesterwerken." },
  { id: "7", name: "Beam Suntory Belux", category: "world", brands: ["Laphroaig", "Bowmore", "Yamazaki", "Hakushu", "Hibiki", "Maker's Mark"], description: "Schotse Islay iconen gecombineerd met verfijnde Japanse kunst van The House of Suntory." },
  { id: "8", name: "De Molenberg / Gouden Carolus", category: "belgian", brands: ["Gouden Carolus Single Malt", "Molenberg Specials"], description: "Gerenommeerde Belgische whisky gestookt uit het moutbeslag van Gouden Carolus Tripel." },
  { id: "9", name: "Filliers Distillery", category: "belgian", brands: ["Filliers Single Malt 10Y", "Filliers Barrel Aged"], description: "Historische Belgische meesterdistilleerders met decennialange traditie in graandistillaten." },
  { id: "10", name: "Bresser & Timmer", category: "independent", brands: ["Gordon & MacPhail", "Benromach", "Cadenhead"], description: "Zeldzame en historische single casks van 's werelds oudste onafhankelijke bottelaars." },
  { id: "NP1", name: "Gentse Chocolaterie & Patisserie", category: "catering", brands: ["Artisanale Chocolade", "Whisky Truffels"], description: "Ambachtelijke Belgische chocolade en exclusieve whiskybonbons.", isNotOnMap: true },
  { id: "NP2", name: "Gentse Kaasmakers", category: "catering", brands: ["Gentse Oudenaarde Kaas", "Proefplateaus"], description: "Luxe kaasplateaus speciaal samengesteld voor whisky food pairings.", isNotOnMap: true }
];
