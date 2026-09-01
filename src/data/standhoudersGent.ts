// src/data/standhoudersGent.ts
// Officiële standhouders dataset voor Gents Whisky Festival (De Oude Vismijn Gent)
// Gebaseerd op het officiële draaiboek en de definitieve indeling van de organisatie

export interface ExhibitorItem {
  id: string;
  name: string;
  category: 'scotch' | 'world' | 'independent' | 'belgian' | 'catering' | 'organisation';
  brands: string[];
  description: string;
  isNotOnMap?: boolean;
  hall?: string;
}

export const EXHIBITORS_GENT: ExhibitorItem[] = [
  {
    id: "1",
    name: "Premium Spirits SRL",
    category: "scotch",
    brands: ["The GlenAllachie", "MacNair's Lum Reek", "Meikle Tòir Peated", "White Heather"],
    description: "Meesterblender Billy Walker presenteert de bekroonde Speyside single malts van The GlenAllachie en rokerige expressies van Meikle Tòir.",
    hall: "De Leie"
  },
  {
    id: "2",
    name: "Bacardi Martini Belgium BV",
    category: "scotch",
    brands: ["Aberfeldy", "Aultmore", "Craigellachie", "Royal Brackla", "Dewar's"],
    description: "The Last Great Malts of Scotland: ontdek karaktervolle single malts en zeldzame single cask vullingen van historische distilleerderijen.",
    hall: "De Leie"
  },
  {
    id: "3",
    name: "TWM Spirits BV",
    category: "world",
    brands: ["Waterford Terroir Whisky", "Cotswolds English Single Malt", "Teeling Irish Whiskey"],
    description: "Baanbrekende Ierse terroir-whisky van Waterford en ambachtelijke Engelse expressies van de Cotswolds Distillery.",
    hall: "De Leie"
  },
  {
    id: "4",
    name: "SMWS / Spirituoos GCV",
    category: "independent",
    brands: ["The Scotch Malt Whisky Society", "Single Cask Cask Strength Expressies"],
    description: "Drievoudige stand van The Scotch Malt Whisky Society: proef unieke, onafhankelijke single cask bottelingen rechtstreeks uit het vat.",
    hall: "De Markt"
  },
  {
    id: "5",
    name: "The Whisky House",
    category: "independent",
    brands: ["Zeldzame Vintage Bottelingen", "Exclusieve Single Casks", "Distillery Selects"],
    description: "Gespecialiseerde whiskyimporteur met een indrukwekkende selectie van zeldzame distillaatjaren en limited single cask edities.",
    hall: "De Leie"
  },
  {
    id: "6",
    name: "Diageo",
    category: "scotch",
    brands: ["Talisker", "Lagavulin", "Oban", "The Singleton", "Cardhu", "Mortlach"],
    description: "De legendarische Classic Malts of Scotland: van de maritieme rook van Talisker en Lagavulin tot de fruitige Speyside elegantie van The Singleton.",
    hall: "De Leie"
  },
  {
    id: "7",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "8",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "9",
    name: "La Martiniquaise Benelux",
    category: "scotch",
    brands: ["Glen Turner Single Malt", "Label 5", "Cutty Sark Blended Scotch"],
    description: "Traditionele Highland single malts van Glen Turner met speciale houtrijpingen in port- en sherryvaten.",
    hall: "De Lieve"
  },
  {
    id: "10",
    name: "Brugse Whisky BVBA Transvaal",
    category: "belgian",
    brands: ["Brugse Single Malt Selecties", "Transvaal Private Casks"],
    description: "Ambachtelijke West-Vlaamse whiskyspecialisten met passie voor authentieke graandistillaten en eigen vatselecties.",
    hall: "De Lieve"
  },
  {
    id: "11",
    name: "Alcobrands",
    category: "world",
    brands: ["Penderyn Welsh Single Malt", "Kavalan Taiwanese Single Malt", "Westward American Single Malt"],
    description: "Toonaangevende internationale wereldwhisky's: de unieke Faraday-stook van Penderyn en de subtropische prijswinnaars van Kavalan.",
    hall: "De Lieve"
  },
  {
    id: "12",
    name: "Cley Whisky",
    category: "world",
    brands: ["Cley Dutch Single Malt", "Cley Rye Whisky", "Cley Cask Strength"],
    description: "Ambachtelijke Nederlandse craft distilleerderij uit Rotterdam met handgestookte single malt en roggewhisky's op eikenhouten vaten.",
    hall: "De Lieve"
  },
  {
    id: "13",
    name: "Glengarry Bar – Verkoop whisky",
    category: "independent",
    brands: ["Glengarry Festival Selections", "Verkoop per Glas & Fles", "Zeldzame Open Flessen"],
    description: "De gezellige Glengarry whiskybar waar u bijzondere festivaldrams kunt proeven én direct een fles voor thuis kunt aanschaffen.",
    hall: "De Lieve"
  },
  {
    id: "14",
    name: "Glengarry Whisky Club",
    category: "independent",
    brands: ["Glengarry Club Bottelingen", "Whisky Tastings & Masterclasses", "Community Drams"],
    description: "De actieve Glengarry Whisky Club presenteert exclusieve clubbottelingen, tastings en informatie over lidmaatschap en evenementen.",
    hall: "De Lieve"
  },
  {
    id: "15",
    name: "Chocolatier Vandenbouhede uit Gent",
    category: "catering",
    brands: ["Artisanale Gentse Chocolade", "Whisky Pralines", "Cacao Food Pairings"],
    description: "Gerenommeerde Gentse meesterchocolatier met ambachtelijke creaties en speciale chocoladepairings afgestemd op whisky.",
    hall: "De Lieve"
  },
  {
    id: "16",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "17",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "18",
    name: "Waterloo Beers & Spirits",
    category: "belgian",
    brands: ["Waterloo Single Malt Whisky", "Waterloo Gin", "Artisanale Bieren"],
    description: "Historische Belgische distilleerderij van de befaamde Ferme de Mont-Saint-Jean in Waterloo met lokale graandistillaten.",
    hall: "De Markt"
  },
  {
    id: "19",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "20",
    name: "Young Charly",
    category: "independent",
    brands: ["Douglas Laing", "Big Peat", "Timorous Beastie", "Scallywag", "Rock Island"],
    description: "Karaktervolle Remarkable Regional Malts en onafhankelijke single cask bottelingen van het iconische Schotse familiebedrijf Douglas Laing.",
    hall: "De Markt"
  },
  {
    id: "21",
    name: "DaDa Chapel Distillery Gent",
    category: "belgian",
    brands: ["Dada Chapel Rye Whisky", "Gentse Single Cask", "Bratski Vodka", "Organic Gin"],
    description: "Lokale Gentse biologische distilleerderij aan het water met eigenzinnige rogge- en moutdistillaten en innovatieve vatrijpingen.",
    hall: "De Markt"
  },
  {
    id: "22",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "23",
    name: "Filliers Distillery",
    category: "belgian",
    brands: ["Filliers Single Malt 10Y", "Filliers Barrel Aged Genever", "Sunken Still"],
    description: "Eeuwenoude Belgische meesterdistilleerders met decennialange traditie en expertise in ambachtelijke graandistillaten en houtlagering.",
    hall: "De Markt"
  },
  {
    id: "24",
    name: "BV Munros",
    category: "independent",
    brands: ["Ardara Distillery", "The Legendary Silkie Irish Whiskey", "James Eadie Single Cask"],
    description: "Traditionele Ierse turfwhiskey van The Sliabh Liag Distillers en historische single cask heruitgaven van James Eadie.",
    hall: "De Markt"
  },
  {
    id: "25",
    name: "Cinoco",
    category: "scotch",
    brands: ["Benromach Speyside Single Malt", "Gordon & MacPhail", "Compass Box Whisky"],
    description: "Exclusieve Belgische verdeler van traditioneel handgestookte Speyside whisky van Benromach en baanbrekende blends van Compass Box.",
    hall: "De Leie"
  },
  {
    id: "26",
    name: "Old whisky Collection!",
    category: "independent",
    brands: ["Vintage Single Malts", "Zeldzame Gesloten Distilleerderijen", "Collector Drams"],
    description: "Unieke collectie van zeldzame historische bottelingen, gesloten Schotse distilleerderijen en memorabele proefglazen voor fijnproevers.",
    hall: "De Markt"
  },
  {
    id: "27",
    name: "Bruichladdich",
    category: "scotch",
    brands: ["The Classic Laddie", "Port Charlotte Heavily Peated", "Octomore", "The Botanist Gin"],
    description: "Vooruitstrevende Islay distilleerderij met 100% Schotse gerst, ongekoelde filtering en het legendarische turfkanon Octomore.",
    hall: "De Markt"
  },
  {
    id: "28",
    name: "Brown-Forman",
    category: "scotch",
    brands: ["The GlenDronach 12Y & 15Y", "Benriach The Original Ten", "Glenglassaugh Coastal Malt", "Woodford Reserve"],
    description: "De ultieme sherryvatgerijpte Highland malts van GlenDronach, creatieve expressies van Benriach en Kentucky Straight Bourbon van Woodford Reserve.",
    hall: "De Markt"
  },
  {
    id: "29",
    name: "Disaronno International B.V.",
    category: "scotch",
    brands: ["The Busker Triple Cask Irish Whiskey", "Glen Moray Speyside Single Malt"],
    description: "Toegankelijke en veelzijdige Ierse whiskey uit County Carlow en fruitige Speyside single malt gerijpt in wijn- en chardonnayvaten.",
    hall: "De Markt"
  },
  {
    id: "30",
    name: "Distilleerderij de Bronckhorst",
    category: "world",
    brands: ["Bronckhorst Dutch Single Malt", "Achterhoekse Graandistillaten"],
    description: "Kleine ambachtelijke stokerij uit de Achterhoek met passie voor lokaal geteeld graan en zorgvuldig geselecteerde eiken vaten.",
    hall: "De Markt"
  },
  {
    id: "31",
    name: "De Cort Distillery",
    category: "belgian",
    brands: ["De Cort Belgian Single Malt", "Pajottenland Grain Spirit", "De Cort Gin"],
    description: "100% circulaire en biologische boerderij-distilleerderij uit het Pajottenland, gedistilleerd in koperen Holstein ketels.",
    hall: "De Markt"
  },
  {
    id: "32",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "33",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "34",
    name: "Niet op plattegrond",
    category: "independent",
    brands: [],
    description: "Exposant niet aanwezig op de fysieke plattegrond.",
    isNotOnMap: true
  },
  {
    id: "35",
    name: "Beyond Jewels",
    category: "catering",
    brands: ["Luxe Whisky Glazen", "Handgemaakte Accessoires", "Whisky Sieraden"],
    description: "Exclusieve handgemaakte accessoires, gegraveerde Glencairn glazen en stijlvolle lifestyle items voor de whiskyliefhebber.",
    hall: "Brasserie"
  },
  {
    id: "36",
    name: "Stand 36 (In Voorbereiding)",
    category: "independent",
    brands: ["Binnenkort Bekend"],
    description: "Exposantpositie in voorbereiding voor het festivalweekend.",
    hall: "Brasserie"
  },
  {
    id: "37",
    name: "Stand 37 (In Voorbereiding)",
    category: "independent",
    brands: ["Binnenkort Bekend"],
    description: "Exposantpositie in voorbereiding voor het festivalweekend.",
    hall: "Brasserie"
  },

  // --- Faciliteiten & Buitenterrein ---
  {
    id: "O",
    name: "Festival Organisatie & Infodesk",
    category: "organisation",
    brands: ["Drams Verkoop", "Informatie & Vragen", "Masterclasses Boeken", "Glazenuitgifte", "Festival Botteling"],
    description: "Het centrale hart van het festival voor dram-munten, programmaboekjes, masterclass aanmeldingen, glazenuitgifte én de officiële festivalbotteling.",
    hall: "De Markt"
  },
  {
    id: "BAR",
    name: "Centrale Festivalbar",
    category: "organisation",
    brands: ["Gratis Bronwater", "Food & Drinks", "Koffie & Thee", "Gentse Bieren", "Frisdranken"],
    description: "Centraal gelegen bar voor spoelwater voor uw proefglas, warme en koude dranken, koffie en een selectie streekbieren.",
    hall: "Brasserie"
  },
  {
    id: "F1",
    name: "Foodtruck Meat the Grill",
    category: "catering",
    brands: ["Dry Aged Angus Burgers", "Slow Smoked Pulled Pork", "Artisan BBQ Bites"],
    description: "Buiten op het sfeervolle binnenkoer bereidt Meat the Grill stoere, rokerige vleesspecialiteiten die perfect samengaan met whisky.",
    hall: "Binnenkoer"
  },
  {
    id: "F2",
    name: "Foodtruck Mixed Worlds",
    category: "catering",
    brands: ["World Streetfood", "Vegan Tacos", "Curry Bowls", "Crispy Fingerfood"],
    description: "Verse, internationale streetfood gerechten en smaakvolle vegetarische opties op de historische binnenkoer.",
    hall: "Binnenkoer"
  }
];
