// Privacy policy copy for both languages, exposed as `t.privacy` via content.js.
// Sections are paired by index and their `content` uses ArticleBody markup
// (**bold** and "- " list items only).
//
// Keep the "who processes your data" section in sync with the third-party origins
// in vercel.json's CSP: every external service the site talks to must be listed here.

const ISO_DATE = '2026-11-11';

export const privacy = {
  sr: {
    slug: 'politika-privatnosti',
    title: 'Politika privatnosti',
    description:
      'Kako Advokatska kancelarija Trivunović prikuplja, koristi i čuva podatke o ličnosti posetilaca sajta i lica koja nas kontaktiraju, i koja prava imate.',
    lastUpdatedLabel: 'Poslednje ažuriranje:',
    lastUpdated: '11. novembar 2026.',
    isoDate: ISO_DATE,
    intro:
      'Ova politika objašnjava kako postupamo sa vašim podacima o ličnosti kada posetite ovaj sajt ili nam pošaljete upit, u skladu sa Zakonom o zaštiti podataka o ličnosti („Službeni glasnik RS”, br. 87/2018) i, za posetioce iz Evropske unije, Opštom uredbom o zaštiti podataka (GDPR).',
    sections: [
      {
        heading: 'Rukovalac podacima',
        content: `**Advokatska kancelarija Trivunović**
Rade Kondića 116a, 21410 Futog, Srbija
Email: office@trivunovic-law.rs
Za sva pitanja u vezi sa vašim podacima pišite nam na navedenu email adresu.`,
      },
      {
        heading: 'Koje podatke prikupljamo',
        content: `**Kontakt formular.** Kada nam pošaljete upit, prikupljamo podatke koje sami unesete:
- ime i prezime
- email adresu
- broj telefona (opciono)
- oblast prava koja vas zanima
- sadržaj poruke
**Tehnički podaci.** Prilikom posete sajtu, server automatski beleži IP adresu, vrstu pregledača, traženu stranicu i vreme pristupa. Ove podatke ne koristimo da bismo vas identifikovali.
**Kolačići i praćenje.** Sajt ne koristi kolačiće, alate za analitiku niti oglasno praćenje. Fontovi se učitavaju sa našeg servera, a ne od trećih strana.`,
      },
      {
        heading: 'Svrha i pravni osnov obrade',
        content: `- **Odgovor na vaš upit i zakazivanje konsultacija** – obrada je neophodna da bismo, na vaš zahtev, preduzeli radnje pre eventualnog zaključenja ugovora o pružanju pravnih usluga (član 12. stav 1. tačka 2) Zakona; član 6. stav 1. tačka (b) GDPR).
- **Bezbednost i ispravan rad sajta** – tehnički podaci se obrađuju na osnovu našeg legitimnog interesa da sajt zaštitimo od zloupotreba (član 12. stav 1. tačka 6) Zakona; član 6. stav 1. tačka (f) GDPR).
Vaše podatke ne koristimo za marketing, ne prodajemo ih i ne vršimo automatizovano donošenje odluka niti profilisanje.`,
      },
      {
        heading: 'Ko još obrađuje vaše podatke',
        content: `Za rad sajta koristimo sledeće pružaoce usluga, koji podatke obrađuju u naše ime ili ih primaju tehnički, prilikom učitavanja sadržaja:
- **EmailJS** (emailjs.com) – prosleđuje poruku iz kontakt formulara na našu poslovnu email adresu.
- **Vercel Inc.** (SAD) – hostuje sajt i vodi tehničke evidencije pristupa.
- **OpenStreetMap Foundation** (Ujedinjeno Kraljevstvo) – prikazuje mapu lokacije kancelarije. Vaš pregledač joj šalje IP adresu tek kada se pomerite do mape.
- **Unsplash** – fotografije uz blog članke učitavaju se sa njihovih servera, kojima vaš pregledač pritom šalje IP adresu.
Neki od ovih pružalaca usluga nalaze se van Republike Srbije. Prenos podataka vršimo samo uz odgovarajuće mere zaštite predviđene Zakonom, kao što su standardne ugovorne klauzule.
Vaše podatke ne ustupamo drugim licima, osim kada smo na to obavezni zakonom.`,
      },
      {
        heading: 'Koliko dugo čuvamo podatke',
        content: `Upite iz kontakt formulara čuvamo onoliko koliko je potrebno da vam odgovorimo i dogovorimo eventualnu saradnju, a najduže 12 meseci od poslednjeg kontakta, ukoliko ne postanete naš klijent.
Ako nas angažujete, podaci postaju deo spisa predmeta i čuvaju se u skladu sa propisima o advokaturi i obavezi čuvanja advokatske tajne.
Tehničke evidencije pristupa čuva pružalac usluge hostinga u kratkom roku, u skladu sa svojim pravilima.`,
      },
      {
        heading: 'Poverljivost upita',
        content:
          'Kontakt formular nije namenjen dostavljanju dokumentacije. Molimo vas da u poruku ne unosite osetljive podatke, poput podataka o zdravlju ili detalja krivičnog postupka – o tome ćemo razgovarati na konsultacijama. Sve što nam saopštite tretiramo kao poverljivo.',
      },
      {
        heading: 'Vaša prava',
        content: `U vezi sa svojim podacima imate pravo da:
- zatražite pristup podacima i kopiju podataka koje o vama obrađujemo
- zatražite ispravku netačnih ili dopunu nepotpunih podataka
- zatražite brisanje podataka
- zatražite ograničenje obrade
- zatražite prenosivost podataka
- uložite prigovor na obradu zasnovanu na legitimnom interesu
Zahtev nam pošaljite na office@trivunovic-law.rs. Odgovorićemo bez odlaganja, a najkasnije u roku od 30 dana.
Ako smatrate da vaše podatke obrađujemo protivno Zakonu, imate pravo da podnesete pritužbu **Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti**, Bulevar kralja Aleksandra 15, 11000 Beograd, www.poverenik.rs.`,
      },
      {
        heading: 'Izmene politike',
        content:
          'Ovu politiku možemo povremeno ažurirati, npr. ako uvedemo novu uslugu na sajtu. Važeća verzija je uvek objavljena na ovoj stranici, sa datumom poslednjeg ažuriranja na vrhu.',
      },
    ],
  },

  en: {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description:
      'How Trivunović Law Firm collects, uses and stores the personal data of website visitors and people who contact us, and what rights you have.',
    lastUpdatedLabel: 'Last updated:',
    lastUpdated: 'November 11, 2026',
    isoDate: ISO_DATE,
    intro:
      'This policy explains how we handle your personal data when you visit this website or send us an inquiry, in accordance with the Serbian Law on Personal Data Protection (Official Gazette of RS, No. 87/2018) and, for visitors from the European Union, the General Data Protection Regulation (GDPR).',
    sections: [
      {
        heading: 'Data controller',
        content: `**Trivunović Law Firm** (Advokatska kancelarija Trivunović)
Rade Kondića 116a, 21410 Futog, Serbia
Email: office@trivunovic-law.rs
For any questions about your data, write to us at the address above.`,
      },
      {
        heading: 'What data we collect',
        content: `**Contact form.** When you send us an inquiry, we collect the details you enter:
- first and last name
- email address
- phone number (optional)
- the area of law you are interested in
- the content of your message
**Technical data.** When you visit the site, the server automatically logs your IP address, browser type, the page requested and the time of access. We do not use this data to identify you.
**Cookies and tracking.** This site uses no cookies, analytics tools or advertising trackers. Fonts are served from our own server, not by third parties.`,
      },
      {
        heading: 'Purpose and legal basis',
        content: `- **Replying to your inquiry and scheduling a consultation** – processing is necessary to take steps at your request before possibly entering into a contract for legal services (Article 12(1)(2) of the Law; Article 6(1)(b) GDPR).
- **Security and proper operation of the site** – technical data is processed on the basis of our legitimate interest in protecting the site from abuse (Article 12(1)(6) of the Law; Article 6(1)(f) GDPR).
We do not use your data for marketing, we do not sell it, and we do not carry out automated decision-making or profiling.`,
      },
      {
        heading: 'Who else processes your data',
        content: `We use the following service providers to run the site. They process data on our behalf, or receive it technically when content is loaded:
- **EmailJS** (emailjs.com) – forwards contact form messages to our business email address.
- **Vercel Inc.** (USA) – hosts the site and keeps technical access logs.
- **OpenStreetMap Foundation** (United Kingdom) – displays the map of our office location. Your browser sends it your IP address only once you scroll to the map.
- **Unsplash** – the photos on blog articles are loaded from their servers, and your browser sends them your IP address when it does so.
Some of these providers are located outside the Republic of Serbia. We transfer data only with the appropriate safeguards required by law, such as standard contractual clauses.
We do not disclose your data to anyone else unless we are legally required to.`,
      },
      {
        heading: 'How long we keep your data',
        content: `We keep contact form inquiries for as long as needed to reply and arrange a possible engagement, and for no longer than 12 months after our last contact if you do not become our client.
If you engage us, your data becomes part of the case file and is kept in accordance with the rules governing the legal profession and attorney-client confidentiality.
Technical access logs are kept by our hosting provider for a short period, in line with its own policies.`,
      },
      {
        heading: 'Confidentiality of inquiries',
        content:
          'The contact form is not meant for sending documents. Please do not include sensitive information in your message, such as health data or details of criminal proceedings – we will discuss these at the consultation. We treat everything you tell us as confidential.',
      },
      {
        heading: 'Your rights',
        content: `With regard to your data, you have the right to:
- request access to and a copy of the data we process about you
- request correction of inaccurate or completion of incomplete data
- request erasure of your data
- request restriction of processing
- request data portability
- object to processing based on legitimate interest
Send your request to office@trivunovic-law.rs. We will reply without undue delay and within 30 days at the latest.
If you believe we process your data unlawfully, you have the right to lodge a complaint with the **Commissioner for Information of Public Importance and Personal Data Protection**, Bulevar kralja Aleksandra 15, 11000 Belgrade, www.poverenik.rs.`,
      },
      {
        heading: 'Changes to this policy',
        content:
          'We may update this policy from time to time, for example if we add a new service to the site. The current version is always published on this page, with the date of the last update at the top.',
      },
    ],
  },
};
