// src/config/brand.config.ts
// Centrale merk- en thema-inrichting voor Whisky Fest Gent

export interface BrandConfig {
  id: 'denhaag' | 'amsterdam' | 'gent';
  name: string;
  shortName: string;
  city: string;
  country: string;
  venue: string;
  venueShort: string;
  foundingYear: number;
  edition: string;
  datesText: string;
  datesShort: string;
  domain: string;
  whiskytixUrl?: string;
  localPort: number;
  
  colors: {
    primary: string;
    primaryHover: string;
    accent: string;
    accentLight: string;
    bgParchment: string;
    bgSand: string;
    bgPaperCard: string;
    textCharcoal: string;
    textMuted: string;
    border: string;
    borderDark: string;
    heroGradient: string;
    heroTintRadial: string;
  };

  address?: string;
  email?: string;
  featuredBrands?: string[];

  copy: {
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroTitleLine3: string;
    heroSubtitle: string;
    preloaderTitle: string;
    preloaderSubtitle: string;
    announcementBar: string;
    tramTitle: string;
    tramDesc: string;
    floorplanTitle: string;
    metaTitle: string;
    metaDescription: string;
  };
}

export const BRAND: BrandConfig = {
  id: 'gent',
  name: 'Gents Whisky Festival',
  shortName: 'Whisky Fest Gent',
  city: 'Gent',
  country: 'België',
  venue: 'De Oude Vismijn Gent',
  venueShort: 'De Oude Vismijn',
  foundingYear: 2004,
  edition: '26e Editie (2027)',
  datesText: '1 en 2 Oktober 2027',
  domain: 'https://whiskyfestival.be',
  whiskytixUrl: import.meta.env.PUBLIC_WHISKYTIX_URL || 'https://whiskytix-r1qq.vercel.app',
  localPort: 4332,
  address: 'Rekelingestraat 5, 9000 Gent, België',
  email: 'info@whiskyfestival.be',

  featuredBrands: [
    'Bowmore',
    'Laphroaig',
    'House of Suntory',
    'Dada Chapel',
    'Bruichladdich',
    'Kilchoman',
    'Glen Scotia',
    'Glencadam',
    'Loch Lomond',
    'Tomintoul'
  ],

  colors: {
    primary: '#1E3A8A',         // Gent Royal Blue
    primaryHover: '#172554',
    accent: '#caac8e',          // Gent Vintage Beige/Gold from logo
    accentLight: '#e4d5c4',
    bgParchment: '#FAF7F2',     // Warm vintage cotton paper
    bgSand: '#EAF2F8',          // Light blue-tinted paper
    bgPaperCard: '#FCFAF7',
    textCharcoal: '#0F172A',    // Gent Deep Dark Blue
    textMuted: '#334155',       // Muted blue-grey
    border: '#caac8e',
    borderDark: '#1E3A8A',
    heroGradient: 'linear-gradient(135deg, #091326 0%, #1E3A8A 35%, #172554 65%, #0B1528 100%)',
    heroTintRadial: 'radial-gradient(circle at 70% 50%, rgba(30, 58, 138, 0.15) 0%, rgba(9, 19, 38, 0.45) 100%)'
  },

  copy: {
    heroTitleLine1: 'Het meest geliefde',
    heroTitleLine2: 'whisky festival',
    heroTitleLine3: 'van België.',
    heroSubtitle: 'Beleef de magie van het meest toonaangevende whiskyfestival van België in de historische Oude Vismijn van Gent. Of u nu een beginnend proever bent of een doorgewinterde kenner, wij bieden een onvergetelijke ervaring.',
    preloaderTitle: 'GENTS WHISKY FESTIVAL',
    preloaderSubtitle: 'EST. 2004 • GENT',
    announcementBar: 'Officiële voorverkoop 2027 geopend! Boek nu met € 39,50 Early Bird voordeel.',
    tramTitle: 'Gentse Whisky Bootjes',
    tramDesc: 'Varende proeverij over de historische Gentse grachten inclusief deskundig geleide proeverij.',
    floorplanTitle: 'Plattegrond De Oude Vismijn Gent',
    metaTitle: 'Gents Whisky Festival | De Oude Vismijn Gent',
    metaDescription: 'Bezoek het meest toonaangevende whiskyfestival van België in De Oude Vismijn Gent. Bestel nu direct uw entreekaarten.'
  }
};
