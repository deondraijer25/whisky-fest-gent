document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",l=>{const a=l.target.closest(".btn-share-trigger"),c=document.querySelectorAll(".ticket-share-menu");if(a){l.stopPropagation();const p=a.closest(".ticket-share-wrapper"),t=p?p.querySelector(".ticket-share-menu"):null;c.forEach(d=>{d!==t&&d.classList.remove("active")}),t&&t.classList.toggle("active")}else l.target.closest(".ticket-share-menu")||c.forEach(p=>p.classList.remove("active"))});const Z=document.querySelectorAll(".portal-tab-trigger"),be=document.querySelectorAll(".portal-tab-pane");Z.forEach(l=>{l.addEventListener("click",()=>{const a=l.getAttribute("data-tab");Z.forEach(c=>c.classList.remove("active")),l.classList.add("active"),be.forEach(c=>{c.id===a?(c.classList.add("active"),c.style.display="block"):(c.classList.remove("active"),c.style.display="none")})})});const Q=document.getElementById("portal-welcome-email"),M=document.getElementById("portal-title-name"),G=document.getElementById("profile-input-name"),j=document.getElementById("profile-input-email"),z=document.getElementById("profile-input-phone"),H=document.getElementById("profile-input-whisky"),X=document.getElementById("receipt-res-no"),Y=document.getElementById("receipt-res-no-mob"),ee=document.getElementById("receipt-total"),te=document.getElementById("receipt-total-mob"),se=localStorage.getItem("wf_last_order");let e=null;if(se)try{e=JSON.parse(se)}catch(l){console.error("Failed to parse stored order:",l)}function U(l,a,c,p){const t=(l||"").toLowerCase();let d=c&&c.trim()&&c!=="Festivaldag"?c.trim():"",s=p&&p.trim()&&p!=="Regulier"?p.trim().replace(/–/g,"-"):"";if(!d||!s){const w=window.__LIVE_GHL_TICKETS__;if(Array.isArray(w)&&w.length>0){const m=t.replace(/[^a-z0-9]/g,""),r=w.find(i=>{const h=((i.properties||i).title||"").toLowerCase().replace(/[^a-z0-9]/g,"");return h&&m&&(h.includes(m)||m.includes(h))});if(r){const i=r.properties||r;!d&&i.date_label&&(d=i.date_label.trim()),!s&&i.time_label&&(s=i.time_label.trim().replace(/–/g,"-"))}}}d||(t.includes("vrijdag")?d="Vrijdag 2 oktober 2026":t.includes("zondag")?d="Zondag 4 oktober 2026":t.includes("zaterdag")?d="Zaterdag 3 oktober 2026":a==="botteling"||t.includes("botteling")?d="Festivaleditie (2-4 okt 2026)":d="Zaterdag 3 oktober 2026"),s||(a==="botteling"||t.includes("botteling")?s="AFHALEN BIJ INFODESK (STAND O)":t.includes("vip")?s="13:00 - 17:00 UUR":t.includes("avond")?s="19:00 - 23:00 UUR":s="13:00 - 17:00 UUR");let n="02",g="OKT";const o=d.toLowerCase();if(o.includes("vrijdag")||o.includes(" 2 ")||o.startsWith("2 ")||o.includes("2 okt"))n="02";else if(o.includes("zaterdag")||o.includes(" 3 ")||o.startsWith("3 ")||o.includes("3 okt"))n="03";else if(o.includes("zondag")||o.includes(" 4 ")||o.startsWith("4 ")||o.includes("4 okt"))n="04";else{const w=d.match(/\b([0-3]?\d)\b/);w&&(n=w[1].padStart(2,"0"))}o.includes("nov")?g="NOV":o.includes("jan")?g="JAN":g="OKT";let u="GWF",v="De Oude Vismijn, Gent";return a==="masterclass"||t.includes("masterclass")?(u="MC",v="De Oude Vismijn (MC-Ruimte)"):a==="bootjes"||a==="tram"||t.includes("boot")?(u="GWF",v="Steiger De Oude Vismijn",n="02-04"):a==="botteling"||t.includes("botteling")||t.includes("fles")?(u="FB",v=s.toLowerCase().includes("verzending")?"Verzending per Post (BE & NL)":"De Oude Vismijn (Infodesk Stand O)",n="02-04"):a==="warehouse"||a==="dada"||t.includes("dada")?(u="GWF",v="Dada Chapel Distilleerderij (Gent)"):t.includes("vip")?u="VIP":e&&e.isMember&&(u="WS"),!s.toUpperCase().includes("UUR")&&!s.toUpperCase().includes("POST")&&!s.toUpperCase().includes("INFODESK")&&!s.toUpperCase().includes("DAG")&&(s+=" UUR"),{date:d,time:s,day:n,month:g,watermark:u,location:v}}function A(){const l=oe();if(!l)return;const a=e&&e.name||l.name||(l.email?l.email.split("@")[0]:"Bezoeker"),c=e&&e.email||l.email||"";Q&&(Q.textContent=`Welkom in uw bezoeker omgeving · ${c}`),M&&(e.isMember?M.innerHTML=`Portaal van ${a} <span class="member-tag-badge">IWS Lid</span>`:M.innerHTML=`Portaal van ${a}`);const p=e&&e.resNumber||l.resNumber||"-",t=e&&e.totalPrice?`€ ${e.totalPrice.toFixed(2).replace(".",",")}`:"-";X&&(X.textContent=p),Y&&(Y.textContent=p),ee&&(ee.textContent=t),te&&(te.textContent=t),G&&(G.value=a),j&&(j.value=c),z&&(z.value=e&&e.phone||""),H&&(H.value=e.whiskyStyle||"Single Malt Scotch");const d=document.getElementById("btn-download-all-tickets");d&&(d.onclick=n=>{n.preventDefault();const g=(e?.resNumber||"").replace(/^#+/,"").trim()||"WF-2027-19302",o="gent";let u=`https://whiskytix-r1qq.vercel.app/api/orders/${encodeURIComponent(g)}/pdf?city=${encodeURIComponent(o)}`;const v=e?.tickets&&Array.isArray(e.tickets)&&e.tickets.length>0?e.tickets:e?.activeTickets&&Array.isArray(e.activeTickets)&&e.activeTickets.length>0?e.activeTickets:[];if(v.length>0){const w=v.map((m,r)=>({ticketCode:m.ticketCode?m.ticketCode.startsWith("#")?m.ticketCode:`#${m.ticketCode}`:`#${g}-${r+1}`,orderNumber:g,attendeeName:m.attendeeName||e.name||"Bezoeker",cityName:o,sessionTitle:/^[a-f0-9]{24}$/i.test(m.sessionTitle||m.title||"")?"Rondleiding Dada Chapel Distilleerderij":m.sessionTitle||m.title||"Festival Entreeticket",dateStr:m.dateStr||m.date||"",timeStr:m.timeStr||m.time||m.timeslot||"",itemNumber:`${r+1}/${v.length}`,ticketStatus:m.status||"valid"}));u+=`&tickets=${encodeURIComponent(JSON.stringify(w))}`}window.open(u,"_blank")});const s=document.getElementById("tickets-container");if(s&&(e.items||e.tickets||e.activeTickets||e.cancelledTickets||e.swappedTickets)){s.innerHTML="";const n=e.status==="cancelled"||e.tickets&&Array.isArray(e.tickets)&&e.tickets.length>0&&e.tickets.every(r=>r.status==="cancelled"),g=document.getElementById("receipt-status-badge"),o=document.getElementById("receipt-status-badge-mob");g&&(n?(g.textContent="Geannuleerd",g.className="status-badge cancelled"):(g.textContent="Betaald",g.className="status-badge paid")),o&&(n?(o.textContent="Geannuleerd",o.className="status-badge cancelled"):(o.textContent="Betaald",o.className="status-badge paid")),n&&(s.innerHTML+=`
            <div style="background:#FEE2E2;border:2px solid #EF4444;border-radius:10px;padding:1.25rem 1.5rem;margin-bottom:1.5rem;display:flex;align-items:flex-start;gap:1rem;box-shadow:3px 3px 0px rgba(185,28,28,0.3);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5" style="flex-shrink:0;margin-top:2px;"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              <div>
                <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:1.05rem;font-weight:800;color:#991B1B;margin:0 0 4px;">Bestelling Geannuleerd</h3>
                <p style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.875rem;color:#7F1D1D;margin:0;line-height:1.45;">
                  Bestelling <strong>${p}</strong> is geannuleerd en alle bijbehorende tickets zijn ongeldig gemaakt voor toegang tot het festival.
                </p>
              </div>
            </div>
          `);const u=e.tickets&&Array.isArray(e.tickets)&&e.tickets.length>0?e.tickets:null,v=u?u.filter(r=>(r.status==="valid"||r.status==="checked_in"||!r.status)&&!n):e.activeTickets&&Array.isArray(e.activeTickets)&&e.activeTickets.length>0&&!n?e.activeTickets:null,w=u?u.filter(r=>r.status==="swapped"):e.swappedTickets&&Array.isArray(e.swappedTickets)?e.swappedTickets:[],m=u?n?u:u.filter(r=>r.status==="cancelled"):e.cancelledTickets&&Array.isArray(e.cancelledTickets)?e.cancelledTickets:[];if(v&&v.length>0&&!n&&v.forEach((r,i)=>{const h=(r.ticketCode||`${e.resNumber||"GWF-2027-84387"}-${i+1}`).replace(/^#/,"").trim(),k=`#${h}`,E=r.attendeeName||a;let f=r.sessionTitle||r.title||"Festival Entreeticket";if(/^[a-f0-9]{24}$/i.test(f)){if(f==="6abb978f1eb866bf2b8779e0"||f==="6abb978edaed730a5a0433d1")f="Rondleiding Dada Chapel Distilleerderij";else if(f==="6abb978ea456c2a4ec18a856"||f==="6abb978e1eb866bf2b8779dd")f="Rondvaart Gent - Whisky Bootje";else if(Array.isArray(window.__LIVE_GHL_TICKETS__)){const K=window.__LIVE_GHL_TICKETS__.find(Le=>Le.id===f),ye=K?.properties?.title||K?.properties?.ticket_title||K?.title;ye&&(f=ye)}}const y=f.replace(/\s*(?:1[0-9]|2[0-3]):[0-5][0-9]\s*-\s*(?:1[0-9]|2[0-3]):[0-5][0-9]\s*(?:uur)?/gi,"").trim(),C=U(y,r.category||"",r.dateStr||r.date,r.timeStr||r.time||r.timeslot),x=C.time,_=C.date,L=`${_} • ${x}`,I=f.toLowerCase();let J=C.watermark,D=C.location,N="SCAN BIJ DE DEUR";I.includes("masterclass")?N="TOON BIJ DE MASTERCLASS ZAAL":I.includes("botteling")||I.includes("fles")?N=r.delivery==="shipping"||x.toLowerCase().includes("verzending")?"VERZONDEN":"AFHALEN BIJ INFODESK":I.includes("boot")||I.includes("tram")?N="TOON BIJ INSCHEPEN":I.includes("vip")&&(J="VIP");const P=r.status==="checked_in",Ie=!!r.replacedTicketCode||h.includes("-R"),Te=!!r.swapReason&&(r.swapReason.toLowerCase().includes("cadeau")||r.swapReason.toLowerCase().includes("handmatig")||r.swapReason.toLowerCase().includes("toegevoegd")),fe=`${window.location.origin}/ticket?id=${h}&title=${encodeURIComponent(y)}&name=${encodeURIComponent(E)}&time=${encodeURIComponent(x)}&date=${encodeURIComponent(_)}&orderNumber=${encodeURIComponent(e.resNumber||"")}`,$e=encodeURIComponent(`*Whisky Festival Gent 2026*
E-ticket: ${y}

Kaarthouder: ${E}
Datum: ${_}
Tijdslot: ${x}
Ticket Code: ${k}
Locatie: ${D}

Bekijk en download je officiële E-ticket:
${fe}`),Se=`
              <div class="ticket-envelope">
                <div class="ticket-stub-large">
                  <!-- Scanner Stub -->
                  <div class="ticket-right-stub">
                    <span class="scan-label">CONTROLE STUB</span>
                    <div class="qr-code-holder">
                      <img 
                        src="https://whiskytix-r1qq.vercel.app/api/tickets/${encodeURIComponent(h)}/qr.svg?city=gent&name=${encodeURIComponent(E)}&title=${encodeURIComponent(y)}" 
                        alt="Controle QR-Code ${k}" 
                        width="105" 
                        height="105" 
                        class="qr-code-img"
                        style="display:block; width:105px; height:105px; object-fit:contain; image-rendering:pixelated;"
                        loading="lazy"
                      />
                    </div>
                    <span class="scan-instructions">${N}</span>
                    <span class="scan-res-hash">${k}</span>
                  </div>

                  <!-- Clean Main Body -->
                  <div class="ticket-left-stub">
                    <div class="ticket-watermark">${J}</div>
                    
                    <!-- 1. Header Row -->
                    <div class="ticket-header-row">
                      <div class="ticket-title-block">
                        <h2 class="ticket-session-title">${y}</h2>
                        <p class="ticket-schedule-text">${L}</p>
                        ${Ie?`<span style="display:inline-block;margin-top:4px;font-size:0.72rem;font-weight:700;background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:4px;border:1px solid #FCD34D;">Vervangt ticket ${r.replacedTicketCode||"vorig ticket"}</span>`:""}
                        ${Te?'<span style="display:inline-block;margin-top:4px;font-size:0.72rem;font-weight:700;background:#E0E9FF;color:#1E3A8A;padding:2px 8px;border-radius:4px;border:1px solid #93C5FD;">Cadeau / Toegevoegd ticket</span>':""}
                      </div>
                      <div class="ticket-badges-block">
                        <span class="ticket-status-tag" style="${P?"background:#DCFCE7;color:#166534;border-color:#86EFAC;":""}">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          ${P?"Ingecheckt aan de Deur":I.includes("botteling")?r.delivery==="shipping"||x.toLowerCase().includes("verzending")?"Verzending Bevestigd":"Geldig Ophaalbewijs":"Geldig Toegangsbewijs"}
                        </span>
                        ${v.length>1?`<span class="ticket-qty-tag">Ticket ${i+1} van ${v.length}</span>`:""}
                      </div>
                    </div>

                    <!-- 2. Middle Row: 3-Column Meta Grid -->
                    <div class="ticket-meta-trio">
                      <div class="meta-col">
                        <span class="meta-col-label">Kaarthouder</span>
                        <strong class="meta-col-val">${E}</strong>
                      </div>
                      <div class="meta-col">
                        <span class="meta-col-label">Locatie</span>
                        <strong class="meta-col-val">${D}</strong>
                      </div>
                      <div class="meta-col">
                        <span class="meta-col-label">Ticket Code</span>
                        <strong class="meta-col-val font-mono">${k}</strong>
                      </div>
                    </div>

                    <!-- 3. Bottom Row: Action Buttons -->
                    <div class="ticket-actions-row">
                      <button type="button" class="btn-ticket-download-gold" onclick="window.open('https://whiskytix-r1qq.vercel.app/api/tickets/${encodeURIComponent(h)}/pdf?city=gent&name=${encodeURIComponent(E)}&title=${encodeURIComponent(y)}&time=${encodeURIComponent(x)}&date=${encodeURIComponent(_)}&orderNumber=${encodeURIComponent(e.resNumber||"")}', '_blank')">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        <span>Download E-Ticket (PDF)</span>
                      </button>

                      <div class="ticket-share-wrapper">
                        <button type="button" class="btn-ticket-share-white btn-share-trigger">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                          <span>Deel Ticket</span>
                        </button>
                        <div class="ticket-share-menu">
                          <a href="https://api.whatsapp.com/send?text=${$e}" target="_blank" rel="noopener noreferrer" class="share-option-link">
                            <span>Deel via WhatsApp</span>
                          </a>
                          <button type="button" class="share-option-link" onclick="navigator.clipboard.writeText('${fe}'); alert('✓ Directe ticket link gekopieerd!');">
                            <span>Kopieer Ticket Link</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;s.innerHTML+=Se}),w&&w.length>0){let r=`
            <div style="margin-top:2.5rem;margin-bottom:1rem;padding-top:1.5rem;border-top:2px dashed #E5E7EB;">
              <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.95rem;font-weight:800;color:#92400E;text-transform:uppercase;letter-spacing:0.05em;display:flex;align-items:center;gap:8px;margin:0 0 1rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                Omgeruilde Tickets (Niet meer geldig)
              </h3>
            </div>
          `;w.forEach(i=>{const h=(i.ticketCode||"").replace(/^#/,"").trim(),k=`#${h}`,E=i.attendeeName||a,y=(i.sessionTitle||i.title||"Festival Entreeticket").replace(/\s*(?:1[0-9]|2[0-3]):[0-5][0-9]\s*-\s*(?:1[0-9]|2[0-3]):[0-5][0-9]\s*(?:uur)?/gi,"").trim(),C=U(y,i.category||"",i.dateStr||i.date,i.timeStr||i.time||i.timeslot),x=i.swappedToTicketCode||"nieuw ticket";r+=`
              <div class="ticket-envelope" style="opacity:0.75;filter:grayscale(0.15);margin-bottom:1.25rem;">
                <div class="ticket-stub-large" style="border:2px dashed #D97706;">
                  <div class="ticket-right-stub" style="background:#FFFBEB;">
                    <span class="scan-label" style="color:#B45309;">ONGELDIG</span>
                    <div class="qr-code-holder" style="opacity:0.25;filter:blur(1px);position:relative;">
                      <img 
                        src="https://whiskytix-r1qq.vercel.app/api/tickets/${encodeURIComponent(h)}/qr.svg?city=gent&name=${encodeURIComponent(E)}&title=${encodeURIComponent(y)}" 
                        alt="Omgeruilde QR-Code ${k}" 
                        width="105" 
                        height="105" 
                        class="qr-code-img"
                        style="display:block; width:105px; height:105px; object-fit:contain; image-rendering:pixelated;"
                        loading="lazy"
                      />
                    </div>
                    <span class="scan-instructions" style="color:#B45309;font-weight:800;">VERVALLEN</span>
                    <span class="scan-res-hash">${k}</span>
                  </div>
                  <div class="ticket-left-stub" style="background:#FFFDF9;">
                    <div class="ticket-watermark" style="opacity:0.04;">OMGERUILD</div>
                    <div class="ticket-header-row">
                      <div class="ticket-title-block">
                        <h2 class="ticket-session-title" style="text-decoration:line-through;color:#78716C;">${y}</h2>
                        <p class="ticket-schedule-text" style="color:#A8A29E;">${C.date} • ${C.time}</p>
                      </div>
                      <div class="ticket-badges-block">
                        <span class="ticket-status-tag" style="background:#FEF3C7;color:#92400E;border-color:#FCD34D;">
                          Vervallen (Omgeruild)
                        </span>
                      </div>
                    </div>
                    <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:6px;padding:0.65rem 0.85rem;margin:0.75rem 0;font-size:0.82rem;color:#92400E;line-height:1.4;">
                      Dit ticket is omgeruild voor <strong>${x}</strong>. De barcode is per direct gedeactiveerd aan de deur.
                    </div>
                    <div class="ticket-meta-trio">
                      <div class="meta-col">
                        <span class="meta-col-label">Kaarthouder</span>
                        <strong class="meta-col-val">${E}</strong>
                      </div>
                      <div class="meta-col">
                        <span class="meta-col-label">Oude Code</span>
                        <strong class="meta-col-val font-mono" style="text-decoration:line-through;">${k}</strong>
                      </div>
                      <div class="meta-col">
                        <span class="meta-col-label">Nieuw Ticket</span>
                        <strong class="meta-col-val font-mono" style="color:#1E3A8A;">${x}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `}),s.innerHTML+=r}if(m&&m.length>0){let r=`
            <div style="margin-top:2.5rem;margin-bottom:1rem;padding-top:1.5rem;border-top:2px dashed #E5E7EB;">
              <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.95rem;font-weight:800;color:#991B1B;text-transform:uppercase;letter-spacing:0.05em;display:flex;align-items:center;gap:8px;margin:0 0 1rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                Geannuleerde Tickets (Niet geldig)
              </h3>
            </div>
          `;m.forEach(i=>{const h=(i.ticketCode||"").replace(/^#/,"").trim(),k=`#${h}`,E=i.attendeeName||a,y=(i.sessionTitle||i.title||"Festival Entreeticket").replace(/\s*(?:1[0-9]|2[0-3]):[0-5][0-9]\s*-\s*(?:1[0-9]|2[0-3]):[0-5][0-9]\s*(?:uur)?/gi,"").trim(),C=U(y,i.category||"",i.dateStr||i.date,i.timeStr||i.time||i.timeslot);r+=`
              <div class="ticket-envelope" style="opacity:0.7;filter:grayscale(0.3);margin-bottom:1.25rem;">
                <div class="ticket-stub-large" style="border:2px dashed #DC2626;">
                  <div class="ticket-right-stub" style="background:#FEF2F2;">
                    <span class="scan-label" style="color:#DC2626;">ONGELDIG</span>
                    <div class="qr-code-holder" style="opacity:0.25;filter:blur(1px);">
                      <img 
                        src="https://whiskytix-r1qq.vercel.app/api/tickets/${encodeURIComponent(h)}/qr.svg?city=gent&name=${encodeURIComponent(E)}&title=${encodeURIComponent(y)}" 
                        alt="Geannuleerde QR-Code ${k}" 
                        width="105" 
                        height="105" 
                        class="qr-code-img"
                        style="display:block; width:105px; height:105px; object-fit:contain; image-rendering:pixelated;"
                        loading="lazy"
                      />
                    </div>
                    <span class="scan-instructions" style="color:#DC2626;font-weight:800;">GEANNULEERD</span>
                    <span class="scan-res-hash">${k}</span>
                  </div>
                  <div class="ticket-left-stub" style="background:#FFFDF9;">
                    <div class="ticket-watermark" style="opacity:0.04;">GEANNULEERD</div>
                    <div class="ticket-header-row">
                      <div class="ticket-title-block">
                        <h2 class="ticket-session-title" style="text-decoration:line-through;color:#78716C;">${y}</h2>
                        <p class="ticket-schedule-text" style="color:#A8A29E;">${C.date} • ${C.time}</p>
                      </div>
                      <div class="ticket-badges-block">
                        <span class="ticket-status-tag" style="background:#FEE2E2;color:#991B1B;border-color:#EF4444;">
                          Geannuleerd
                        </span>
                      </div>
                    </div>
                    <div style="background:#FEE2E2;border:1px solid #EF4444;border-radius:6px;padding:0.65rem 0.85rem;margin:0.75rem 0;font-size:0.82rem;color:#991B1B;line-height:1.4;">
                      Dit ticket is geannuleerd en geeft geen toegang tot het festivalterrein.
                    </div>
                    <div class="ticket-meta-trio">
                      <div class="meta-col">
                        <span class="meta-col-label">Kaarthouder</span>
                        <strong class="meta-col-val">${E}</strong>
                      </div>
                      <div class="meta-col">
                        <span class="meta-col-label">Ticket Code</span>
                        <strong class="meta-col-val font-mono" style="text-decoration:line-through;">${k}</strong>
                      </div>
                      <div class="meta-col">
                        <span class="meta-col-label">Status</span>
                        <strong class="meta-col-val" style="color:#DC2626;">Niet Geldig</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `}),s.innerHTML+=r}if(!u&&(!v||v.length===0)&&!n&&e.items){let r=1;e.items.forEach(i=>{i.title.toLowerCase();const T=i.title.replace(/\s*(?:1[0-9]|2[0-3]):[0-5][0-9]\s*-\s*(?:1[0-9]|2[0-3]):[0-5][0-9]\s*(?:uur)?/gi,"").trim(),h=U(T,i.category||"",i.date||i.dateStr,i.time||i.timeStr||i.timeslot),k=h.time,E=h.watermark,f=h.date,y=`${f} • ${k}`,C=i.qty||1;for(let x=0;x<C;x++){const L=`${(e.resNumber||"GWF-2027-84387").replace("#","")}-${r}`,I=`#${L}`,D=`${window.location.origin}/ticket?id=${L}&title=${encodeURIComponent(T)}&name=${encodeURIComponent(a)}&time=${encodeURIComponent(k)}&date=${encodeURIComponent(f)}&category=${encodeURIComponent(i.category||"")}&delivery=${encodeURIComponent(i.delivery||"")}`,N=encodeURIComponent(`*Whisky Festival Gent 2026*
E-ticket: ${T}

Kaarthouder: ${a}
Tijdslot: ${k}
Ticket Code: ${I}
Locatie: De Oude Vismijn, Gent

Bekijk en download je officiële E-ticket:
${D}`),P=`
                <div class="ticket-envelope">
                  <div class="ticket-stub-large">
                    <div class="ticket-right-stub">
                      <span class="scan-label">CONTROLE STUB</span>
                      <div class="qr-code-holder">
                        <img 
                          src="https://whiskytix-r1qq.vercel.app/api/tickets/${encodeURIComponent(L)}/qr.svg?city=gent&name=${encodeURIComponent(a)}&title=${encodeURIComponent(T)}" 
                          alt="Controle QR-Code ${I}" 
                          width="105" 
                          height="105" 
                          class="qr-code-img"
                          style="display:block; width:105px; height:105px; object-fit:contain; image-rendering:pixelated;"
                          loading="lazy"
                        />
                      </div>
                      <span class="scan-instructions">${i.category==="botteling"&&i.delivery==="shipping"?"VERZONDEN":"SCAN BIJ DE DEUR"}</span>
                      <span class="scan-res-hash">${I}</span>
                    </div>

                    <div class="ticket-left-stub">
                      <div class="ticket-watermark">${E}</div>
                      
                      <div class="ticket-header-row">
                        <div class="ticket-title-block">
                          <h2 class="ticket-session-title">${T}</h2>
                          <p class="ticket-schedule-text">${y}</p>
                        </div>
                        <div class="ticket-badges-block">
                          <span class="ticket-status-tag">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            ${i.category==="botteling"?i.delivery==="shipping"?"Verzending Bevestigd":"Geldig Ophaalbewijs":"Geldig Toegangsbewijs"}
                          </span>
                          ${C>1?`<span class="ticket-qty-tag">Ticket ${x+1} van ${C}</span>`:""}
                        </div>
                      </div>

                      <div class="ticket-meta-trio">
                        <div class="meta-col">
                          <span class="meta-col-label">Kaarthouder</span>
                          <strong class="meta-col-val">${a}</strong>
                        </div>
                        <div class="meta-col">
                          <span class="meta-col-label">Locatie</span>
                          <strong class="meta-col-val">${i.category==="masterclass"?"De Oude Vismijn (MC-Ruimte)":i.category==="botteling"?i.delivery==="shipping"?"Verzending per Post (BE & NL)":"De Oude Vismijn (Infodesk Stand O)":"De Oude Vismijn, Gent"}</strong>
                        </div>
                        <div class="meta-col">
                          <span class="meta-col-label">Ticket Code</span>
                          <strong class="meta-col-val font-mono">${I}</strong>
                        </div>
                      </div>

                      <div class="ticket-actions-row">
                        <button type="button" class="btn-ticket-download-gold" onclick="window.open('https://whiskytix-r1qq.vercel.app/api/tickets/${encodeURIComponent(L)}/pdf?city=gent&name=${encodeURIComponent(a)}&title=${encodeURIComponent(T)}&time=${encodeURIComponent(k)}&date=${encodeURIComponent(f)}&orderNumber=${encodeURIComponent(e.resNumber||"")}', '_blank')">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          <span>Download E-Ticket (PDF)</span>
                        </button>

                        <div class="ticket-share-wrapper">
                          <button type="button" class="btn-ticket-share-white btn-share-trigger">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                            <span>Deel Ticket</span>
                          </button>
                          <div class="ticket-share-menu">
                            <a href="https://api.whatsapp.com/send?text=${N}" target="_blank" rel="noopener noreferrer" class="share-option-link">
                              <span>Deel via WhatsApp</span>
                            </a>
                            <button type="button" class="share-option-link" onclick="navigator.clipboard.writeText('${D}'); alert('✓ Directe ticket link gekopieerd!');">
                              <span>Kopieer Ticket Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `;s.innerHTML+=P,r++}})}}s.innerHTML.trim()||(s.innerHTML=`
            <div class="empty-tickets-notice" style="padding: 3rem 1.5rem; text-align: center; background: white; border-radius: 8px; border: 1.5px dashed var(--border-color-dark);">
              <h3 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--brand-dark);">Geen actieve tickets gevonden</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 420px; margin: 0 auto 1.5rem;">Er zijn momenteel geen actieve tickets gekoppeld aan dit account. Heeft u zojuist tickets besteld? Deze verschijnen zodra de betaling is verwerkt.</p>
              <a href="/#sessies" class="btn btn-gold" style="display: inline-flex;">Bestel Tickets &rarr;</a>
            </div>
          `)}const O=document.getElementById("portal-authenticated-area"),F=document.getElementById("portal-login-area"),ie=document.getElementById("portal-login-form"),B=document.getElementById("login-email"),R=document.getElementById("login-res-no"),b=document.getElementById("btn-login-submit");document.getElementById("btn-quick-demo-login");const ae=document.getElementById("portal-page-logout-btn"),q=document.getElementById("auth-error-box"),ne=document.getElementById("auth-error-text"),we=10080*60*1e3;function $(l){q&&ne&&(ne.textContent=l,q.style.display="flex")}function Ce(){q&&(q.style.display="none")}function oe(){try{const l=localStorage.getItem("wf_auth_session")||sessionStorage.getItem("wf_auth_session");if(!l)return null;const a=JSON.parse(l);if(a&&a.email&&a.expiresAt&&Date.now()<=a.expiresAt)return a;a&&a.expiresAt&&Date.now()>a.expiresAt&&(localStorage.removeItem("wf_auth_session"),sessionStorage.removeItem("wf_auth_session"))}catch{}return null}const V=new URLSearchParams(window.location.search),le=V.get("email"),re=V.get("order")||V.get("orderNumber");le&&B&&!B.value&&(B.value=le.trim()),re&&R&&!R.value&&(R.value=re.trim());function S(){const l=oe(),c=new URLSearchParams(window.location.search).get("view")==="login";if(!l||c)O&&(O.style.display="none"),F&&(F.style.display="flex"),document.documentElement.classList.remove("wf-authenticated"),document.documentElement.classList.add("wf-unauthenticated");else{O&&(O.style.display="block"),F&&(F.style.display="none"),document.documentElement.classList.remove("wf-unauthenticated"),document.documentElement.classList.add("wf-authenticated");const p=e&&(e.status==="paid"||e.isPaid===!0);if(e&&!p){sessionStorage.removeItem("wf_auth_session"),localStorage.removeItem("wf_auth_session"),localStorage.removeItem("wf_last_order"),e=null,S(),$("U heeft geen voltooide bestelling. Het accountportaal is alleen toegankelijk na een voltooide betaling.");return}if(!e||l.email&&e.email&&e.email.toLowerCase()!==l.email.toLowerCase()){try{const d=localStorage.getItem("wf_last_order");if(d){const s=JSON.parse(d);s&&s.email&&s.email.toLowerCase()===l.email.toLowerCase()&&(e=s)}}catch{}(!e||e.email&&e.email.toLowerCase()!==l.email.toLowerCase())&&(e={name:l.name||(l.email?l.email.split("@")[0]:"Bezoeker"),email:l.email,resNumber:l.resNumber||"",phone:"",whiskyStyle:"Single Malt Scotch",items:[],tickets:[],activeTickets:[],isMember:(l.resNumber||"").includes("WS"),totalPrice:0})}A();const t=l.resNumber||e&&e.resNumber;if(t){const d=t.replace(/^#/,"").trim();fetch(`https://whiskytix-r1qq.vercel.app/api/checkout/order/${encodeURIComponent(d)}`).then(s=>s.ok?s.json():null).then(s=>{if(s&&s.order){const n=s.order;if(n.status!=="paid"&&n.isPaid!==!0){console.warn("Toegang ontzegd: order is niet betaald of geannuleerd:",n.orderNumber),sessionStorage.removeItem("wf_auth_session"),localStorage.removeItem("wf_auth_session"),localStorage.removeItem("wf_last_order"),e=null,S(),$(`Bestelling ${t} is niet voltooid of geannuleerd. Het portaal is alleen toegankelijk voor bezoekers met een voltooide ticketbestelling.`);return}const g=(n.items||[]).map(o=>({id:o.id||o.ticketId||"ticket",title:o.title||o.name||"Entreeticket",qty:o.quantity||o.qty||1,price:o.unitPriceCents?o.unitPriceCents/100:o.price||0,category:o.category||"entree",timeslot:o.timeslot||o.time||"",delivery:o.delivery||"",date:o.date||o.dateStr||"",time:o.time||o.timeStr||o.timeslot||""}));e={...e,name:n.customerName||e.name,email:n.customerEmail||e.email,phone:n.customerPhone||e.phone,resNumber:n.orderNumber||e.resNumber,status:n.status||e.status,items:g.length>0?g:e.items,tickets:n.tickets||e.tickets||[],activeTickets:n.activeTickets||e.activeTickets||[],cancelledTickets:n.cancelledTickets||e.cancelledTickets||[],swappedTickets:n.swappedTickets||e.swappedTickets||[],itemsSummary:n.itemsSummary||e.itemsSummary||"",totalPrice:n.totalCents?n.totalCents/100:e.totalPrice},localStorage.setItem("wf_last_order",JSON.stringify(e)),A()}}).catch(s=>{console.warn("Whiskytix achtergrond sync:",s)})}}}window.addEventListener("ghl:tickets-updated",()=>{A()}),ie&&ie.addEventListener("submit",async l=>{l.preventDefault(),Ce();const a=B?B.value.trim().toLowerCase():"",c=R?R.value.trim():"";if(!a){$("Vul een geldig e-mailadres in.");return}const p=b?b.innerHTML:"";b&&(b.disabled=!0,b.innerHTML="<span>Gegevens verifiëren...</span>");try{let t=null;if(c){const d=c.replace(/^#/,"").trim();try{const s=await fetch(`https://whiskytix-r1qq.vercel.app/api/checkout/order/${encodeURIComponent(d)}`);if(s.ok){const n=await s.json();n&&n.order&&(t=n.order)}}catch(s){console.warn("Whiskytix lookup niet bereikbaar, controleer lokale opslag:",s)}}if(!t&&a)try{const d=await fetch(`https://whiskytix-r1qq.vercel.app/api/checkout/orders-by-email?email=${encodeURIComponent(a)}&festivalId=gent`);if(d.ok){const s=await d.json();if(s&&s.orders&&s.orders.length>0){const n=s.orders.filter(g=>g.status==="paid"||g.isPaid===!0);n.length>0&&(t=n[0])}}}catch(d){console.warn("Whiskytix email lookup error:",d)}if(!t)try{const d=localStorage.getItem("wf_last_order");if(d){const s=JSON.parse(d),n=(s.resNumber||"").replace(/^#/,"").trim().toLowerCase(),g=c.replace(/^#/,"").trim().toLowerCase(),o=(s.email||"").trim().toLowerCase();s&&(s.status==="paid"||s.isPaid===!0)&&(g&&(n===g||n.endsWith(g))||!g&&o===a)&&(t=s)}}catch{}if(t){if(!(t.status==="paid"||t.isPaid===!0)){$(`Bestelling ${c||t.orderNumber||""} is niet voltooid of geannuleerd. Toegang tot het portaal is uitsluitend beschikbaar voor voltooide bestellingen.`),b&&(b.disabled=!1,b.innerHTML=p);return}const s=(t.customerEmail||t.email||"").trim().toLowerCase();if(s&&s!==a){$(`Het e-mailadres komt niet overeen met ordernummer ${c}.`),b&&(b.disabled=!1,b.innerHTML=p);return}const n=t.customerName||t.name||a.split("@")[0].charAt(0).toUpperCase()+a.split("@")[0].slice(1),g=t.orderNumber||t.resNumber||c,o=g.startsWith("#")?g:`#${g}`,u={email:a,resNumber:o,name:n,timestamp:Date.now(),expiresAt:Date.now()+we};localStorage.setItem("wf_auth_session",JSON.stringify(u)),localStorage.removeItem("wf_user_logged_out");const v=(t.items||[]).map(m=>({id:m.id||m.ticketId||"ticket",title:m.title||m.name||"Entreeticket",qty:m.quantity||m.qty||1,price:m.unitPriceCents?m.unitPriceCents/100:m.price||0,category:m.category||"entree",timeslot:m.timeslot||m.time||"",delivery:m.delivery||"",date:m.date||m.dateStr||"",time:m.time||m.timeStr||m.timeslot||""}));e={name:n,email:a,phone:t.customerPhone||t.phone||"+32 470 123456",whiskyStyle:t.whiskyStyle||"Single Malt Scotch",status:t.status||"paid",items:v,tickets:t.tickets||[],activeTickets:t.activeTickets||[],cancelledTickets:t.cancelledTickets||[],swappedTickets:t.swappedTickets||[],itemsSummary:t.itemsSummary||"",resNumber:o,isMember:o.includes("WS"),totalPrice:t.totalCents?t.totalCents/100:t.totalPrice||42.5},localStorage.setItem("wf_last_order",JSON.stringify(e));const w=window.location.pathname;window.history.replaceState({},"",w),S(),window.dispatchEvent(new Event("storage"));return}$(c?`Geen bestelling gevonden voor ordernummer "${c}". Controleer uw e-mailadres en ordernummer.`:`Geen actieve bestellingen gevonden voor "${a}". Vul ook uw ordernummer in.`)}catch(t){console.error("Inloggen fout:",t),$("Er is een onverwachte fout opgetreden bij het inloggen. Probeer het opnieuw.")}finally{b&&(b.disabled=!1,b.innerHTML=p)}});function Ee(){localStorage.setItem("wf_user_logged_out","true"),sessionStorage.removeItem("wf_auth_session"),localStorage.removeItem("wf_auth_session");const l=window.location.pathname+"?view=login";window.history.replaceState({},"",l),S(),window.dispatchEvent(new Event("storage"))}ae&&ae.addEventListener("click",Ee),S(),window.addEventListener("load",S),window.addEventListener("storage",S);const ce=document.getElementById("profile-edit-form"),W=document.getElementById("profile-success-banner");ce&&ce.addEventListener("submit",l=>{l.preventDefault(),e.name=G.value,e.email=j.value,e.phone=z.value,e.whiskyStyle=H.value,e.isDemo&&(delete e.isDemo,demoBanner&&(demoBanner.style.display="none")),localStorage.setItem("wf_last_order",JSON.stringify(e)),A(),W&&(W.style.display="block",setTimeout(()=>{W.style.display="none"},4e3))});const xe=JSON.parse("{JSON.stringify(EXHIBITORS_GENT)}"),de=document.querySelectorAll("#account-church-map .svg-stand"),me=document.getElementById("account-default-info-state"),pe=document.getElementById("account-active-info-state"),ge=document.getElementById("account-stand-badge"),ue=document.getElementById("account-stand-title"),ve=document.getElementById("account-stand-category"),he=document.getElementById("account-stand-desc"),ke=document.getElementById("account-stand-brands-list");de.forEach(l=>{l.addEventListener("click",()=>{const a=l.getAttribute("data-stand");let c=xe.find(p=>p.id===a);if(window.__LIVE_GHL_STANDS__){const p=window.__LIVE_GHL_STANDS__.find(t=>{const d=t.properties||t;return String(d.stand_id||t.id)===a});if(p){const t=p.properties||p,d=t.brands||"",s=Array.isArray(d)?d:String(d).split(",").map(n=>n.trim()).filter(Boolean);c={id:a,name:t.name||c?.name||"",category:t.category||c?.category||"",description:t.stand_description||t.description||c?.description||"",brands:s.length>0?s:c?.brands||[]}}}de.forEach(p=>p.classList.remove("selected-stand")),l.classList.add("selected-stand"),c&&me&&pe&&(me.style.display="none",pe.style.display="block",ge&&(ge.textContent=`STAND ${c.id}`),ue&&(ue.textContent=c.name),ve&&(ve.textContent=c.category.toUpperCase()),he&&(he.textContent=c.description||""),ke&&c.brands&&(ke.innerHTML=c.brands.map(p=>`<span class="addon-badge">${p}</span>`).join(" ")))})})});
