// scripts/switch_gent_to_2027.js
// Voer dit script uit om alles met 1 commando over te zetten naar Gent 2027 (1 & 2 Oktober 2027)

const API_KEY = process.env.GHL_API_KEY || 'pit-150d6114-ac2c-4cf7-9d5c-ffc20499c790';
const SCHEMA_KEY = 'custom_objects.festival_tickets';
const LOCATION_ID = '1OZ9uxIBFoxwbheVC5iN';
const BASE_URL = 'https://services.leadconnectorhq.com';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ghlUpdates = [
  {
    id: '6abb9786cde13de34a119388', // Entree Vrijdagavond
    properties: {
      title: 'Entree Vrijdagavond',
      date_label: 'Vrijdag 1 Okt 2027',
      time_label: '19:00 - 23:00 uur',
      price: 39.50,
      capacity: 550,
      is_sold_out: 'false',
      ticket_description: 'Entreeticket vrijdagavond 19.00 tot 23.00 (na 1 jan naar 42,50). Early bird voorverkoop 2027.'
    }
  },
  {
    id: '6abb97868634ebafa93abbd1', // Entree Zaterdagmiddag
    properties: {
      title: 'Entree Zaterdagmiddag',
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '13:00 - 17:00 uur',
      price: 39.50,
      capacity: 550,
      is_sold_out: 'false',
      ticket_description: 'Entreeticket zaterdagmiddag 13.00 tot 17.00 (na 1 jan naar 42,50). Early bird voorverkoop 2027.'
    }
  },
  {
    id: '6abb9787fc8d6456cfdf96be', // Entree Zaterdagavond
    properties: {
      title: 'Entree Zaterdagavond',
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '19:00 - 23:00 uur',
      price: 39.50,
      capacity: 550,
      is_sold_out: 'false',
      ticket_description: 'Entreeticket zaterdagavond 19.00 tot 23.00 (na 1 jan naar 42,50). Early bird voorverkoop 2027.'
    }
  },
  {
    id: '6abba1e80735a7a1a04936a9', // VIP Sessie Vrijdagmiddag (voorlopig verborgen gehouden conform e-mail klant)
    properties: {
      title: 'VIP sessie vrijdag middag',
      date_label: 'Vrijdag 1 Okt 2027',
      time_label: '13:00 - 17:00 uur',
      price: 72.50,
      capacity: 400,
      is_sold_out: 'true',
      status_badge: 'comingsoon',
      ticket_description: 'VIP sessie vrijdag middag van 13.00 tot 17.00. Inclusief een portie worst, portie kaas én 2 whisky-cocktails.'
    }
  },
  {
    id: '6abb978edaed730a5a0433d1', // Dada Tour Vrijdag
    properties: {
      title: 'Rondleiding door Dada Chapel Distilleerderij',
      date_label: 'Vrijdag 1 Okt 2027',
      time_label: '18:00 - 19:30 uur',
      price: 15.00,
      capacity: 20,
      is_sold_out: 'false',
      location: 'Melden bij entree-deur',
      ticket_description: 'Rondleiding door Dada Chapel Distilleerderij inclusief proeverij. Melden bij entree-deur.'
    }
  },
  {
    id: '6abb978f1eb866bf2b8779e0', // Dada Tour Zaterdag
    properties: {
      title: 'Rondleiding door Dada Chapel Distilleerderij',
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '11:00 - 12:30 uur',
      price: 15.00,
      capacity: 20,
      is_sold_out: 'false',
      location: 'Melden bij entree-deur',
      ticket_description: 'Ochtendrondleiding bij Dada Chapel Distilleerderij inclusief mini-tasting voorafgaand aan de festivalbeurs.'
    }
  },
  {
    id: '6abb978ea456c2a4ec18a856', // Bootje Zaterdag 12:00
    properties: {
      title: 'Rondvaart Gent - Whisky Bootje',
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '12:00 - 13:00 uur',
      price: 19.50,
      capacity: 50,
      is_sold_out: 'false',
      location: 'Melden bij entree-deur',
      ticket_description: 'Rondvaart Gent - Whisky Bootje - afvaart 12.00 uur. Geniet van een unieke boottocht over de historische Gentse binnenwateren met 4 drams.'
    }
  },
  {
    id: '6abb978e1eb866bf2b8779dd', // Bootje Zaterdag 18:30
    properties: {
      title: 'Rondvaart Gent - Whisky Bootje',
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '18:30 - 19:30 uur',
      price: 19.50,
      capacity: 50,
      is_sold_out: 'false',
      location: 'Melden bij entree-deur',
      ticket_description: 'Rondvaart Gent - Whisky Bootje - afvaart 18.30 uur. Sfeervolle avondrondvaart over de verlichte historische Gentse grachten met whiskyproeverij.'
    }
  },
  {
    id: '6abb978d69fb0a4bfd17f990', // Botteling
    properties: {
      title: 'Dada Chapel Gentse Special',
      date_label: 'Afhalen Festival (1-2 okt 2027)',
      time_label: 'Hele dag',
      price: 95.00,
      capacity: 75,
      is_sold_out: 'false',
      location: 'Festival Slijterij',
      ticket_description: 'Dada Chapel Gentse Whisky Festival Special. Exclusieve single cask Limousin Virgin Oak 7 jaar.'
    }
  }
];

async function runSwitch() {
  console.log('=== Start switch naar Gent 2027 (1 & 2 Okt 2027) ===');

  // 1. Update GHL
  for (const item of ghlUpdates) {
    const url = `${BASE_URL}/objects/${SCHEMA_KEY}/records/${item.id}?locationId=${LOCATION_ID}`;
    try {
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Version': '2021-07-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ properties: item.properties })
      });
      if (res.ok) {
        console.log(`✓ GHL record ${item.id} (${item.properties.title}) bijgewerkt naar 2027`);
      } else {
        console.error(`Fout bij updaten ${item.id}:`, res.status, await res.text());
      }
    } catch (e) {
      console.error(`Network error op ${item.id}:`, e.message);
    }
  }

  // 2. Update brand.config.ts in Gent
  const brandFile = path.resolve(__dirname, '../src/config/brand.config.ts');
  if (fs.existsSync(brandFile)) {
    let brandContent = fs.readFileSync(brandFile, 'utf8');
    brandContent = brandContent.replace(/25e Editie \(2026\)/g, '26e Editie (2027)');
    brandContent = brandContent.replace(/2, 3 en 4 Oktober 2026/g, '1 en 2 Oktober 2027');
    brandContent = brandContent.replace(/1, 2 en 3 Oktober 2027/g, '1 en 2 Oktober 2027');
    brandContent = brandContent.replace(/announcementBar: .*,/g, "announcementBar: 'Officiële voorverkoop 2027 geopend! Boek nu met € 39,50 Early Bird voordeel.',");
    fs.writeFileSync(brandFile, brandContent, 'utf8');
    console.log('✓ brand.config.ts bijgewerkt naar 2027 (1 & 2 Oktober 2027)');
  }

  console.log('\n=== Switch script gereed! ===');
}

runSwitch();
