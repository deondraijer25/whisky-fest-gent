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
  edition: 'Editie 2026',
  datesText: '2, 3 en 4 Oktober 2026',
  datesShort: '2-4 Okt 2026',
  domain: 'https://whisky-fest-gent.vercel.app',
  localPort: 4332,

  colors: {
    primary: '#1E3A8A',         // Gent Royal Blue
    primaryHover: '#172554',
    accent: '#FF6500',          // Gent Orange
    accentLight: '#FF8A00',
    bgParchment: '#FAF7F2',     // Warm vintage cotton paper
    bgSand: '#EAF2F8',          // Light blue-tinted paper
    bgPaperCard: '#FCFAF7',
    textCharcoal: '#0F172A',    // Gent Deep Dark Blue
    textMuted: '#334155',       // Muted blue-grey
    border: '#CBD5E1',
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
    announcementBar: 'Sluit je aan bij duizenden whiskyliefhebbers in Gent – Bestel vandaag nog je tickets!',
    tramTitle: 'Gentse Whiskytram',
    tramDesc: 'Rondrit door historisch Gent in een klassieke tram inclusief deskundig geleide proeverij van 4 topdrams.',
    floorplanTitle: 'Plattegrond De Oude Vismijn Gent',
    metaTitle: 'Gents Whisky Festival | De Oude Vismijn Gent',
    metaDescription: 'Bezoek het meest toonaangevende whiskyfestival van België in De Oude Vismijn Gent. Bestel nu direct uw entreekaarten.'
  }
};
