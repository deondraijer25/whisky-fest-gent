// scripts/switch_gent_to_2027.js
// Voer dit script uit na zondagavond 4 oktober 2026 om alles met 1 commando over te zetten naar 2027.

const API_KEY = 'pit-150d6114-ac2c-4cf7-9d5c-ffc20499c790';
const SCHEMA_KEY = 'custom_objects.festival_tickets';
const LOCATION_ID = '1OZ9uxIBFoxwbheVC5iN';
const BASE_URL = 'https://services.leadconnectorhq.com';
const fs = require('fs');
const path = require('path');

const ghlUpdates = [
  {
    id: '6abb9786cde13de34a119388', // Entree Vrijdagavond
    properties: {
      date_label: 'Vrijdag 1 Okt 2027',
      time_label: '19:00 - 23:00 uur',
      ticket_description: 'Beleef de opening van het Gents Whisky Festival 2027 in de sfeervolle historische hallen van De Oude Vismijn. € 38,50 early bird tot 1 januari.'
    }
  },
  {
    id: '6abb97868634ebafa93abbd1', // Entree Zaterdagmiddag
    properties: {
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '13:00 - 17:00 uur',
      ticket_description: 'De populaire zaterdagmiddagsessie in De Oude Vismijn Gent. € 38,50 early bird tot 1 januari.'
    }
  },
  {
    id: '6abb9787fc8d6456cfdf96be', // Entree Zaterdagavond
    properties: {
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '19:00 - 23:00 uur',
      ticket_description: 'Sfeervolle zaterdagavondproeverij met internationale en Belgische distilleerders. € 38,50 early bird tot 1 januari.'
    }
  },
  {
    id: '6abba1e80735a7a1a04936a9', // Entree Zondagmiddag
    properties: {
      date_label: 'Zondag 3 Okt 2027',
      time_label: '13:00 - 17:00 uur',
      ticket_description: 'Gemoedelijke zondagmiddagsessie in De Oude Vismijn Gent. € 38,50 early bird tot 1 januari.'
    }
  },
  {
    id: '6abb978edaed730a5a0433d1', // Dada Tour Vrijdag
    properties: {
      date_label: 'Vrijdag 1 Okt 2027',
      time_label: '18:00 - 19:30 uur',
      ticket_description: 'Wandel mee vanaf De Oude Vismijn naar de nabijgelegen Dada Chapel distilleerderij voor een intieme rondleiding inclusief proeverij.'
    }
  },
  {
    id: '6abb978f1eb866bf2b8779e0', // Dada Tour Zaterdag
    properties: {
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '11:00 - 12:30 uur',
      ticket_description: 'Ochtendrondleiding bij Dada Chapel Distilleerderij inclusief mini-tasting voorafgaand aan de festivalbeurs.'
    }
  },
  {
    id: '6abb978ea456c2a4ec18a856', // Bootje Zaterdag 12:00
    properties: {
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '12:00 - 13:00 uur',
      ticket_description: 'Geniet van een unieke boottocht over de historische Gentse binnenwateren onder het genot van 4 bijzondere drams.'
    }
  },
  {
    id: '6abb978e1eb866bf2b8779dd', // Bootje Zaterdag 18:30
    properties: {
      date_label: 'Zaterdag 2 Okt 2027',
      time_label: '18:30 - 19:30 uur',
      ticket_description: 'Sfeervolle avondrondvaart over de verlichte historische Gentse grachten met whiskyproeverij.'
    }
  },
  {
    id: '6abb978d69fb0a4bfd17f990', // Botteling
    properties: {
      title: 'Festival Botteling: Dada Chapel Gentse Special 2027',
      date_label: 'Afhalen Festival (1-3 okt 2027)',
      time_label: 'Hele dag',
      ticket_description: 'De officiële exclusieve festivalbotteling van het Gents Whisky Festival 2027. Een 7 jaar oude single cask gerijpt op nieuw Limousin eiken (Limousin Virgin Oak Cask 7 jaar). Gelimiteerde oplage van 50 genummerde flessen.'
    }
  }
];

async function runSwitch() {
  console.log('=== Start switch naar Gent 2027 ===');

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
        console.log(`✓ GHL record ${item.id} bijgewerkt naar 2027`);
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
    brandContent = brandContent.replace(/2, 3 en 4 Oktober 2026/g, '1, 2 en 3 Oktober 2027');
    fs.writeFileSync(brandFile, brandContent, 'utf8');
    console.log('✓ brand.config.ts bijgewerkt naar 2027');
  }

  // 3. Update ticketsGent.ts in Gent
  const ticketsFile = path.resolve(__dirname, '../src/data/ticketsGent.ts');
  if (fs.existsSync(ticketsFile)) {
    let tContent = fs.readFileSync(ticketsFile, 'utf8');
    tContent = tContent.replace(/Vrijdag 2 Okt 2026/g, 'Vrijdag 1 Okt 2027');
    tContent = tContent.replace(/Zaterdag 3 Okt 2026/g, 'Zaterdag 2 Okt 2027');
    tContent = tContent.replace(/Zondag 4 Okt 2026/g, 'Zondag 3 Okt 2027');
    tContent = tContent.replace(/Gentse Special 2026/g, 'Gentse Special 2027');
    tContent = tContent.replace(/Whisky Festival 2026/g, 'Whisky Festival 2027');
    tContent = tContent.replace(/1\. Entrees 2026/g, '1. Entrees 2027');
    fs.writeFileSync(ticketsFile, tContent, 'utf8');
    console.log('✓ ticketsGent.ts bijgewerkt naar 2027');
  }

  console.log('\n=== Switch naar 2027 voltooid! Voer nu `npm run build` uit. ===');
}

runSwitch();
