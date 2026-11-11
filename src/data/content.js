// Complete bilingual content structure for Trivunović Law Firm
// Mirrors aktodorovic.rs architecture with unique, contextually similar content

import { privacy } from './privacy';

export const translations = {
  sr: {
    privacy: privacy.sr,

    seo: {
      title: 'Advokatska Kancelarija Trivunović - Advokat Futog | Pravne Usluge',
      description:
        'Advokatska kancelarija Trivunović u Futogu pruža profesionalne pravne usluge. Iskusni advokati za građansko, krivično, porodično i radno pravo. Zakažite besplatnu konsultaciju.',
      organizationDescription:
        'Advokatska kancelarija Trivunović pruža vrhunske pravne usluge u Futogu. Specijalizovani smo za građansko, krivično, porodično i radno pravo.',
    },

    notFound: {
      title: 'Stranica nije pronađena',
      text: 'Stranica koju tražite ne postoji ili je premeštena.',
      backHome: 'Nazad na početnu',
    },

    // Navigation
    nav: {
      skipToContent: 'Preskoči na sadržaj',
      home: 'Početna',
      about: 'O Nama',
      services: 'Usluge',
      team: 'Naš Tim',
      blog: 'Blog',
      faq: 'Česta Pitanja',
      contact: 'Kontakt',
      menu: 'Meni',
    },

    // Company Information
    company: {
      name: 'Advokatska Kancelarija Trivunović',
      tagline: 'Vaš partner u pravnoj sigurnosti',
      address: 'Rade Kondića 116a, 21410 Futog',
      city: 'Futog, Novi Sad',
      phone: '+381 21 895 4321',
      email: 'office@trivunovic-law.rs',
      workingHours: 'Pon - Pet: 08:00 - 16:00',
      foundedYear: '2010',
      description:
        'Pružamo sveobuhvatne pravne usluge fizičkim i pravnim licima širom Srbije. Sa sedištem u Futgu, naša kancelarija je posvećena pružanju visokokvalitetnih pravnih rešenja prilagođenih potrebama svakog klijenta.',
    },

    // Hero Section
    hero: {
      title: 'Izvrsnost u Pravnom Zastupanju',
      subtitle:
        'Pružamo sofisticirana pravna rešenja za domaće i međunarodne klijente u Novom Sadu. Naša posvećenost i stručnost garantuju uspešne rezultate.',
      cta: 'Zakazite konsultacije',
      ctaSecondary: 'NAŠE USLUGE',
    },

    // About Section
    about: {
      heading: 'O Našoj Kancelariji',
      subheading: 'Tradicija, Iskustvo i Posvećenost',
      foundedText: 'Osnovana',
      description: [
        'Advokatska kancelarija Trivunović osnovana je 2010. godine sa vizijom pružanja vrhunskih pravnih usluga zasnovanih na etičkim principima i stručnosti. Tokom godina rada, izgradili smo reputaciju pouzdanog partnera u rešavanju najsloženijih pravnih pitanja.',
        'Naš tim čine visoko kvalifikovani advokati sa dugogodišnjim iskustvom u različitim oblastima prava. Pružamo pravnu podršku fizičkim licima, privrednim subjektima i institucijama širom Srbije, sa posebnim fokusom na teritoriju Vojvodine.',
        'Verujemo u personalizovan pristup svakom klijentu. Naša filozofija rada zasniva se na transparentnosti, brzoj komunikaciji i proaktivnom rešavanju pravnih problema pre nego što postanu sporovi.',
      ],
      values: [
        {
          title: 'Integritet',
          desc: 'Posvećeni smo najvišim etičkim standardima u svim aspektima našeg rada.',
        },
        {
          title: 'Stručnost',
          desc: 'Kontinuirano usavršavanje i praćenje zakonskih izmena garantuje kvalitetne usluge.',
        },
        {
          title: 'Efikasnost',
          desc: 'Brzo reagovanje i racionalno korišćenje vremena u interesu klijenta.',
        },
        {
          title: 'Poverenje',
          desc: 'Izgradnja dugoročnih odnosa zasnovanih na transparentnosti i rezultatima.',
        },
      ],
    },

    // Services - 10 practice areas
    services: {
      heading: 'Oblasti Pravne Prakse',
      subheading: 'Sveobuhvatna pravna podrška u svim segmentima',
      list: [
        {
          title: 'Privredno Pravo',
          desc: 'Osnivanje privrednih društava, restrukturiranje, M&A transakcije, ugovorno pravo i korporativno upravljanje.',
          icon: '⚖️',
        },
        {
          title: 'Nekretnine i Imovinsko Pravo',
          desc: 'Kupoprodaja nepokretnosti, hipoteke, imovinsko-pravni odnosi, zemljišno-knjižni poslovi i urbanističko pravo.',
          icon: '🏢',
        },
        {
          title: 'Radno Pravo',
          desc: 'Ugovori o radu, radni sporovi, kolektivni ugovori, otkazi i prava zaposlenih pred nadležnim organima.',
          icon: '👔',
        },
        {
          title: 'Porodično Pravo',
          desc: 'Bračne parnice, razvod braka, alimentacija, roditeljsko pravo, vršenje roditeljskog prava i starateljstvo.',
          icon: '👨‍👩‍👧‍👦',
        },
        {
          title: 'Krivično Pravo',
          desc: 'Odbrana u krivičnom postupku, zastupanje oštećenih, privredni kriminalitet i postupci pred svim instancama.',
          icon: '⚔️',
        },
        {
          title: 'Građansko Pravo',
          desc: 'Obligacioni odnosi, ugovori, naknada štete, nasledstvo i rešavanje sporova u parničnom postupku.',
          icon: '📋',
        },
        {
          title: 'Upravno Pravo',
          desc: 'Postupci pred upravnim organima, upravni sporovi, građevinske i urbanističke dozvole, inspekcijski postupci.',
          icon: '🏛️',
        },
        {
          title: 'Zaštita Konkurencije',
          desc: 'Antimonopolska praksa, kontrola koncentracija, zaštita tržišne utakmice i savetovanje o compliance-u.',
          icon: '🎯',
        },
        {
          title: 'Intelektualna Svojina',
          desc: 'Zaštita žigova, patenata, autorskih prava, zaštita softvera i rešavanje sporova iz oblasti IP prava.',
          icon: '💡',
        },
        {
          title: 'Izvršenje i Stečaj',
          desc: 'Prinudna naplata potraživanja, izvršni postupci, stečajni postupak i restrukturiranje dugovanja.',
          icon: '📊',
        },
      ],
    },

    // Team Members
    team: {
      heading: 'Upoznajte Naš Tim',
      subheading: 'Iskusni pravnici posvećeni vašem uspehu',
      portraitAlt: 'Profesionalni portret',
      contactBtn: 'Kontakt',
      members: [
        {
          name: 'Bosko Trivunović',
          role: 'Osnivač i vodeći Advokat',
          bio: 'Više od 15 godina iskustva u privrednom i građanskom pravu. Specijalizacija iz oblasti ugovornog prava i M&A transakcija.',
          email: 'bosko.trivunovic@trivunovic-law.rs',
          img: 'https://via.placeholder.com/400x500/0a1428/c5a059?text=M.T.',
        },
        {
          name: 'Natalija Trivunović',
          role: 'Advokat - Radno Pravo',
          bio: 'Doktor pravnih nauka sa ekspertizom u radnom i socijalnom pravu. Dugogodišnje iskustvo u zastupanju u složenim radnim sporovima.',
          email: 'natalija.trivunovic@trivunovic-law.rs',
          img: '/images/kume.webp',
        },
        {
          name: 'Maja Reljin',
          role: 'Advokat - Krivično Pravo',
          bio: 'Specijalizovan za krivično pravo i zastupanje u prekršajnom postupku. Iskustvo u zaštiti ljudskih prava.',
          email: 'maja.reljin@trivunovic-law.rs',
          img: '/images/kume.webp',
        },
      ],
    },

    // Blog/News
    blog: {
      heading: 'Pravne Novosti i Saveti',
      subheading: 'Budite informisani o promenama u zakonodavstvu',
      readMore: 'Pročitajte više',
      backToBlog: 'Sve pravne novosti',
      moreArticles: 'Pročitajte i',
      ctaHeading: 'Potreban vam je pravni savet?',
      ctaText: 'Zakažite konsultacije sa našim timom i dobićete odgovor u najkraćem roku.',
      imageAlt: 'Pravni članak o temi',
      articles: [
        {
          slug: 'istekao-rok-svoj-na-svome',
          title: 'Istekao Rok za Upis po Zakonu „Svoj na Svome": Šta Sada?',
          excerpt:
            'Naknadni rok za prijavu bespravno izgrađenih objekata istekao je 24. oktobra 2026. Objašnjavamo šta to znači za vlasnike i kupce nekretnina.',
          content: `Zakon o posebnim uslovima za evidentiranje i upis prava na nepokretnostima („Sl. glasnik RS", br. 91/2025), poznat kao „Svoj na svome", zamenio je dosadašnji Zakon o ozakonjenju i omogućio jednostavniji i jeftiniji upis bespravno izgrađenih objekata u katastar.

**Ključni rokovi**
- Redovni rok za prijavu istekao je 5. februara 2026.
- Naknadni rok, uz dokaz o opravdanim razlozima, istekao je 24. oktobra 2026.

**Ako ste podneli prijavu**
Prijavu razmatra Agencija za prostorno planiranje i urbanizam. Kada utvrdi da su uslovi ispunjeni, Agencija izdaje potvrdu koju dostavlja katastru, a upis prava svojine sprovodi se prioritetno i bez plaćanja takse.

Naknada se ne plaća unapred - Agencija naknadno dostavlja obaveštenje o iznosu. Za kuće i stanove naknada zavisi od veličine mesta (npr. od 100 do 500 evra u gradovima sa više od 100.000 stanovnika), a pojedine kategorije, poput primalaca socijalne pomoći, osoba sa invaliditetom i porodica sa troje i više dece, oslobođene su plaćanja.

Status upisa možete pratiti preko servisa eKatastar.

**Ako prijavu niste podneli**
Objekat koji nije upisan nema uredno upisano pravo svojine, što u praksi otežava prodaju, zasnivanje hipoteke i nasleđivanje. Ako ste propustili rok, preporučujemo da se što pre posavetujete sa advokatom o mogućnostima u vašem konkretnom slučaju.

**Važno za stare predmete ozakonjenja**
Za sve predmete u kojima rešenje o ozakonjenju nije doneto do 24. oktobra 2025. bilo je potrebno podneti novu prijavu po novom zakonu, jer su dotadašnji postupci prekinuti.

**Saveti za kupce nekretnina**
- Pre kupovine obavezno proverite list nepokretnosti u katastru
- Proverite da li je objekat upisan i da li postoje tereti ili zabeležbe
- Ne isplaćujte kaparu dok advokat ne pregleda dokumentaciju

Kontaktirajte našu kancelariju za proveru statusa vaše nepokretnosti ili pravnu pomoć pri kupoprodaji.

Tekst je informativnog karaktera i ne predstavlja pravni savet.`,
          date: '10. Novembar 2026',
          isoDate: '2026-11-10',
          category: 'Nekretnine',
          img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
        },
        {
          slug: 'novi-zakon-o-zastiti-potrosaca-reklamacije',
          title: 'Novi Zakon o Zaštiti Potrošača: Nova Pravila za Reklamacije',
          excerpt:
            'Od 2. avgusta 2026. primenjuju se nova pravila za reklamacije. Šta se promenilo za kupce, a šta za trgovce?',
          content: `Novi Zakon o zaštiti potrošača („Sl. glasnik RS", br. 35/2026) stupio je na snagu 1. maja 2026, a u celini se primenjuje od 2. avgusta 2026. godine. Najviše promena odnosi se na reklamacije robe sa nedostatkom.

**Šta se menja za kupce**

**1. Slobodan izbor u prvih 30 dana**
Ako se nedostatak pojavi u roku od 30 dana od isporuke, kupac može odmah da bira između zamene, umanjenja cene ili raskida ugovora. Ranije je ovaj rok iznosio šest meseci.

**2. Nakon 30 dana - prvo popravka ili zamena**
Posle isteka tog roka kupac najpre traži popravku ili zamenu. Umanjenje cene ili raskid ugovora moguć je ako trgovac ne otkloni nedostatak, odbije da to učini ili je nedostatak značajan.

**3. Rok od dva meseca za prijavu nedostatka**
Kupac je dužan da trgovca obavesti o nedostatku u roku od dva meseca od kada ga je uočio, a najkasnije u roku od dve godine od isporuke.

**4. Pretpostavka nesaobraznosti produžena na godinu dana**
Ako se nedostatak pojavi u roku od 12 meseci od isporuke (ranije šest meseci), pretpostavlja se da je postojao u trenutku isporuke - trgovac mora dokazati suprotno.

**Obaveze trgovaca**
- Odgovor na reklamaciju u pisanoj ili elektronskoj formi u roku od 8 dana
- Rešavanje reklamacije u roku od 15 dana, odnosno 30 dana za tehničku robu i nameštaj
- Produženje roka moguće je samo jednom i samo uz saglasnost kupca
- Nedostatak originalne ambalaže ne može biti razlog za odbijanje reklamacije

**Važno:** Za robu kupljenu pre 2. avgusta 2026. i dalje važe pravila prethodnog zakona.

**Preporuke za trgovce:**
- Uskladite interne procedure za reklamacije
- Ažurirajte opšte uslove prodaje i internet prodavnice
- Obučite zaposlene koji primaju reklamacije

Za usklađivanje poslovanja sa novim zakonom ili pomoć u sporu sa trgovcem, obratite se našoj kancelariji.

Tekst je informativnog karaktera i ne predstavlja pravni savet.`,
          date: '10. Novembar 2026',
          isoDate: '2026-11-10',
          category: 'Zaštita Potrošača',
          img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800',
        },
        {
          slug: 'ebolovanje-obavezno-za-preduzetnike-2027',
          title: 'eBolovanje: Obavezno i za Preduzetnike od 1. Januara 2027.',
          excerpt:
            'Papirne doznake su prošlost. Preduzetnici koji imaju zaposlene moraju da se uključe u sistem eBolovanje do početka 2027. godine.',
          content: `Zakon o razmeni podataka, dokumenata i obaveštenja u slučaju nastupanja privremene sprečenosti za rad korišćenjem softverskog rešenja „eBolovanje - Poslodavac" („Sl. glasnik RS", br. 109/2025) uveo je potpuno elektronsku razmenu podataka o bolovanju između lekara, RFZO i poslodavaca.

**Faze primene**
- **Od 1. januara 2026.** - sistem je obavezan za privredna društva i javni sektor
- **Od 1. aprila 2026.** - komunikacija poslodavaca sa RFZO (zahtevi za obračun i refundaciju naknade zarade) odvija se isključivo elektronski
- **Od 1. januara 2027.** - sistem postaje obavezan i za preduzetnike koji imaju zaposlene

Poslodavci koji nemaju nijednog zaposlenog nemaju ovu obavezu.

**Šta to znači za zaposlene**
Zaposleni više ne moraju da poslodavcu donose papirne potvrde i doznake o bolovanju - poslodavac podatke dobija direktno kroz sistem.

**Šta poslodavac treba da uradi**
- Registruje se na Portalu eUprava (putem aplikacije ConsentID ili kvalifikovanog elektronskog sertifikata)
- Pristupi sistemu eBolovanje - Poslodavac i redovno ga koristi
- Omogući pristup zaposlenima u kadrovskoj službi i računovodstvu
- Uskladi interne procedure i pravilnike o evidenciji odsustva

**Kazne**
Za poslodavce koji ne koriste sistem propisane su novčane kazne:
- pravno lice: od 50.000 do 200.000 dinara
- odgovorno lice: od 5.000 do 25.000 dinara
- preduzetnik: od 10.000 do 50.000 dinara

**Savet:** Preduzetnici ne moraju da čekaju 1. januar - sistemu se može pristupiti i ranije, dobrovoljno, što ostavlja vreme da se procedure uhodaju.

Za pomoć u usklađivanju radnopravne dokumentacije kontaktirajte našu kancelariju.

Tekst je informativnog karaktera i ne predstavlja pravni savet.`,
          date: '10. Novembar 2026',
          isoDate: '2026-11-10',
          category: 'Radno Pravo',
          img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800',
        },
      ],
    },

    // FAQ
    faqs: {
      heading: 'Česta Pitanja',
      subheading: 'Odgovori na najčešća pitanja o pravnim uslugama',
      list: [
        {
          q: 'Koliko koštaju prve konsultacije?',
          a: 'Prve konsultacije su besplatne.',
        },
        {
          q: 'Koje dokumente trebam poneti na prvu konsultaciju?',
          a: 'Ponesite svu relevantnu dokumentaciju koja se odnosi na vaš slučaj: ugovore, dopisivanja, sudske odluke, identifikacione dokumente i sve što smatrate relevantnim. Ne brinite ako nemate sve - možemo zajedno identifikovati šta nedostaje.',
        },
        {
          q: 'Da li zastupate klijente van Novog Sada?',
          a: 'Apsolutno. Zastupamo klijente širom Srbije pred svim sudovima i organima. Većinu konsultacija možemo obaviti online ili telefonom, a za ročišta putujemo prema potrebi.',
        },
        {
          q: 'Koliko dugo traje prosečan pravni postupak?',
          a: 'Zavisi od vrste i složenosti postupka. Vanparnični postupci mogu trajati 3-6 meseci, parnični 1-2 godine, dok krivični postupci mogu biti i duži. Uvek ćemo vam dati realnu procenu za vaš konkretni slučaj.',
        },
        {
          q: 'Da li nudite pravnu zaštitu preduzeća?',
          a: 'Da, nudimo kompletne pravne usluge za privrednike i preduzeća - od osnivanja, preko redovnog pravnog savjetovanja, do zastupanja u sporovima. Možemo biti vaš eksterni pravni tim.',
        },
        {
          q: 'Kako se vrši naplata usluga?',
          a: 'Zavisno od vrste posla koristimo fiksne honorare, satnice ili uspešnu naknadu (success fee). Uvek ćemo vam transparentno predočiti sve troškove pre početka rada.',
        },
      ],
    },

    // Contact Form
    contact: {
      heading: 'Zakažite Besplatnu Konsultaciju',
      subheading: 'Kontaktirajte nas danas i dobijte stručno pravno mišljenje',
      form: {
        heading: 'Zakažite Pravne Konsultacije',
        subheading: 'Popunite formular ispod i naš tim će vam odgovoriti u roku od 24 sata',
        fields: {
          name: 'Ime i Prezime',
          email: 'Email Adresa',
          phone: 'Broj Telefona',
          legalArea: 'Oblast Prava',
          message: 'Vaša Poruka',
        },
        placeholders: {
          name: 'Unesite vaše ime i prezime',
          email: 'Unesite vašu email adresu',
          phone: 'Unesite vaš broj telefona (opciono)',
          selectArea: 'Izaberite oblast prava koja vas interesuje',
          message: 'Ukratko opišite vaš pravni problem ili upit',
        },
        submit: 'Pošalji Poruku',
        sending: 'Šaljem...',
        successMessage: 'Hvala! Vaša poruka je uspešno poslata. Javićemo vam se u roku od 24 sata.',
        errorMessage:
          'Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte direktno.',
        privacyNotice:
          'Podatke iz formulara koristimo isključivo da bismo odgovorili na vaš upit. Kako ih obrađujemo, pročitajte u našoj',
        privacyLink: 'Politici privatnosti',
        rateLimitError:
          'Prečesto šaljete poruke. Molimo sačekajte nekoliko minuta pre ponovnog slanja.',
      },
      info: {
        title: 'Kontakt Informacije',
        addressLabel: 'Adresa',
        phoneLabel: 'Telefon',
        emailLabel: 'Email',
        hoursLabel: 'Radno Vreme',
      },
    },

    // Map Section
    map: {
      heading: 'Posetite Nas',
      subheading: 'Naša kancelarija se nalazi u centru Futoga',
      getDirections: 'Otvori u Mapi',
      loading: 'Učitavanje mape...',
    },

    // Footer
    footer: {
      about: {
        title: 'O Kancelariji',
        text: 'Advokatska kancelarija Trivunović pruža pravne usluge najvišeg kvaliteta od 2010. godine. Naša misija je zaštita prava i interesa klijenata kroz profesionalan, etičan i efikasan rad.',
      },
      quickLinks: {
        title: 'Brze Veze',
        links: ['Početna', 'Usluge', 'Naš Tim', 'Blog', 'Kontakt'],
      },
      practiceAreas: {
        title: 'Oblasti Prakse',
        areas: [
          'Privredno Pravo',
          'Nekretnine',
          'Radno Pravo',
          'Krivično Pravo',
          'Porodično Pravo',
        ],
      },
      contact: {
        title: 'Kontakt',
      },
      bottom: {
        copyright: '© 2026 Advokatska Kancelarija Trivunović. Sva prava zadržana.',
        privacy: 'Politika Privatnosti',
        terms: 'Uslovi Korišćenja',
      },
    },

    // Stats/Numbers Section
    stats: {
      heading: 'Naši Rezultati Govore',
      items: [
        { number: '15+', label: 'Godina Iskustva' },
        { number: '600+', label: 'Zadovoljnih Klijenata' },
        { number: '800+', label: 'Rešenih Predmeta' },
        { number: '85%', label: 'Stopa Uspeha' },
      ],
    },
  },

  // ENGLISH VERSION
  en: {
    privacy: privacy.en,

    seo: {
      title: 'Trivunović Law Firm - Lawyer Futog | Legal Services',
      description:
        'Trivunović Law Firm in Futog provides professional legal services. Experienced lawyers for civil, criminal, family and labor law. Schedule a free consultation.',
      organizationDescription:
        'Trivunović Law Firm provides top-quality legal services in Futog. We specialize in civil, criminal, family, and labor law.',
    },

    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for does not exist or has been moved.',
      backHome: 'Back to home page',
    },

    // Navigation
    nav: {
      skipToContent: 'Skip to content',
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      team: 'Our Team',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      menu: 'Menu',
    },

    // Company Information
    company: {
      name: 'Trivunović Law Firm',
      tagline: 'Your partner in legal security',
      address: 'Rade Kondica 116a, 21410 Futog',
      city: 'Futog, Novi Sad',
      phone: '+381 21 895 4321',
      email: 'office@trivunovic-law.rs',
      workingHours: 'Mon - Fri: 08:00 AM - 04:00 PM',
      foundedYear: '2010',
      description:
        "We provide comprehensive legal services to individuals and businesses throughout Serbia. Based in Futog, our firm is dedicated to delivering high-quality legal solutions tailored to each client's needs.",
    },

    // Hero Section
    hero: {
      title: 'Excellence in Legal Advocacy',
      subtitle:
        'Providing sophisticated legal solutions for domestic and international clients in Novi Sad. Our dedication and expertise guarantee successful outcomes.',
      cta: 'SCHEDULE A CONSULTATION',
      ctaSecondary: 'OUR SERVICES',
    },

    // About Section
    about: {
      heading: 'About Our Firm',
      subheading: 'Tradition, Experience and Dedication',
      foundedText: 'Established',
      description: [
        'Trivunović Law Firm was founded in 2010 with a vision of providing top-tier legal services based on ethical principles and expertise. Over the years, we have built a reputation as a trusted partner in resolving the most complex legal matters.',
        'Our team consists of highly qualified attorneys with extensive experience across various areas of law. We provide legal support to individuals, businesses, and institutions throughout Serbia, with a special focus on the Vojvodina region.',
        'We believe in a personalized approach to each client. Our work philosophy is based on transparency, rapid communication, and proactive resolution of legal problems before they escalate into disputes.',
      ],
      values: [
        {
          title: 'Integrity',
          desc: 'Committed to the highest ethical standards in all aspects of our work.',
        },
        {
          title: 'Expertise',
          desc: 'Continuous education and monitoring of legislative changes guarantee quality service.',
        },
        {
          title: 'Efficiency',
          desc: "Quick response and rational use of time in the client's best interest.",
        },
        {
          title: 'Trust',
          desc: 'Building long-term relationships based on transparency and results.',
        },
      ],
    },

    // Services - 10 practice areas
    services: {
      heading: 'Practice Areas',
      subheading: 'Comprehensive legal support in all segments',
      list: [
        {
          title: 'Corporate Law',
          desc: 'Business formation, restructuring, M&A transactions, contract law, and corporate governance.',
          icon: '⚖️',
        },
        {
          title: 'Real Estate & Property Law',
          desc: 'Property sales, mortgages, property relations, land registry procedures, and urban planning law.',
          icon: '🏢',
        },
        {
          title: 'Labor Law',
          desc: 'Employment contracts, labor disputes, collective agreements, terminations, and employee rights before authorities.',
          icon: '👔',
        },
        {
          title: 'Family Law',
          desc: 'Marriage litigation, divorce, alimony, parental rights, custody, and guardianship.',
          icon: '👨‍👩‍👧‍👦',
        },
        {
          title: 'Criminal Law',
          desc: 'Criminal defense, victim representation, white-collar crime, and proceedings before all instances.',
          icon: '⚔️',
        },
        {
          title: 'Civil Law',
          desc: 'Obligations, contracts, damages, inheritance, and dispute resolution in litigation proceedings.',
          icon: '📋',
        },
        {
          title: 'Administrative Law',
          desc: 'Proceedings before administrative bodies, administrative disputes, construction permits, inspection procedures.',
          icon: '🏛️',
        },
        {
          title: 'Competition Law',
          desc: 'Antitrust practice, merger control, market competition protection, and compliance counseling.',
          icon: '🎯',
        },
        {
          title: 'Intellectual Property',
          desc: 'Trademark, patent, and copyright protection, software protection, and IP dispute resolution.',
          icon: '💡',
        },
        {
          title: 'Enforcement & Bankruptcy',
          desc: 'Debt collection, enforcement procedures, bankruptcy proceedings, and debt restructuring.',
          icon: '📊',
        },
      ],
    },

    // Team Members
    team: {
      heading: 'Meet Our Team',
      subheading: 'Experienced lawyers dedicated to your success',
      portraitAlt: 'Professional portrait of',
      contactBtn: 'Contact',
      members: [
        {
          name: 'Bosko Trivunović',
          role: 'Founder & Managing Partner',
          bio: 'Over 15 years of experience in corporate and civil law. Specialization in contract law and M&A transactions.',
          email: 'bosko.trivunovic@trivunovic-law.rs',
          img: 'https://via.placeholder.com/400x500/0a1428/c5a059?text=M.T.',
        },
        {
          name: 'Natalija Trivunović',
          role: 'Senior Associate - Labor Law',
          bio: 'Doctor of Legal Sciences with expertise in labor and social law. Extensive experience in complex labor disputes.',
          email: 'natalija.trivunovic@trivunovic-law.rs',
          img: '/images/kume.webp',
        },
        {
          name: 'Maja Reljin',
          role: 'Attorney - Criminal Law',
          bio: 'Specialized in criminal law and misdemeanor proceedings. Experience in human rights protection.',
          email: 'maja.reljin@trivunovic-law.rs',
          img: '/images/kume.webp',
        },
      ],
    },

    // Blog/News
    blog: {
      heading: 'Legal News & Advice',
      subheading: 'Stay informed about changes in legislation',
      readMore: 'Read More',
      backToBlog: 'All legal news',
      moreArticles: 'More articles',
      ctaHeading: 'Need legal advice?',
      ctaText: 'Book a consultation with our team and we will get back to you as soon as possible.',
      imageAlt: 'Legal article about',
      articles: [
        {
          slug: 'svoj-na-svome-registration-deadline-passed',
          title: 'The "Svoj na Svome" Registration Deadline Has Passed: What Now?',
          excerpt:
            'The extended deadline for registering unpermitted buildings expired on 24 October 2026. Here is what it means for owners and buyers.',
          content: `The Law on Special Conditions for Recording and Registering Rights to Real Estate (Official Gazette of RS, No. 91/2025), known as "Svoj na svome", replaced the previous Legalization Law and introduced a simpler and cheaper way to enter unpermitted buildings into the land registry.

**Key Deadlines**
- The regular application deadline expired on 5 February 2026.
- The extended deadline, available with proof of justified reasons, expired on 24 October 2026.

**If You Applied**
Applications are reviewed by the Agency for Spatial Planning and Urbanism. Once it confirms the conditions are met, the Agency issues a certificate and sends it to the cadastre, where ownership is registered as a priority and free of fees.

The registration charge is not paid in advance - the Agency sends a notice of the amount afterwards. For houses and apartments the charge depends on the size of the town (e.g. EUR 100 to 500 in cities with more than 100,000 residents), and certain groups, such as social assistance recipients, persons with disabilities and families with three or more children, are exempt.

You can track the status of your registration through the eKatastar service.

**If You Did Not Apply**
A building that is not registered has no properly recorded ownership, which in practice makes selling, mortgaging and inheriting it difficult. If you missed the deadline, we recommend speaking with a lawyer as soon as possible about the options in your specific case.

**Pending Legalization Cases**
Any case in which no legalization decision had been issued by 24 October 2025 required a new application under the new law, as earlier proceedings were suspended.

**Tips for Property Buyers**
- Always check the title deed (list nepokretnosti) in the cadastre before buying
- Confirm the building is registered and whether there are any encumbrances or notes
- Do not pay a deposit until a lawyer has reviewed the documents

Contact our office to check the status of your property or for legal help with a purchase or sale.

This article is for information only and does not constitute legal advice.`,
          date: 'November 10, 2026',
          isoDate: '2026-11-10',
          category: 'Real Estate',
          img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
        },
        {
          slug: 'new-consumer-protection-law-complaints',
          title: 'New Consumer Protection Law: New Rules for Complaints',
          excerpt:
            'New rules for complaints about defective goods apply from 2 August 2026. What has changed for buyers and for traders?',
          content: `Serbia's new Consumer Protection Law (Official Gazette of RS, No. 35/2026) entered into force on 1 May 2026 and has applied in full since 2 August 2026. The biggest changes concern complaints about defective goods.

**What Changes for Buyers**

**1. Free Choice in the First 30 Days**
If a defect appears within 30 days of delivery, the buyer can immediately choose between replacement, a price reduction or terminating the contract. Previously this period was six months.

**2. After 30 Days - Repair or Replacement First**
After that period, the buyer first asks for repair or replacement. A price reduction or termination is possible if the trader fails to fix the defect, refuses to do so, or the defect is significant.

**3. Two Months to Report a Defect**
The buyer must notify the trader within two months of discovering the defect, and no later than two years after delivery.

**4. Presumption of Non-Conformity Extended to One Year**
If a defect appears within 12 months of delivery (previously six months), it is presumed to have existed at delivery - the trader must prove otherwise.

**Obligations of Traders**
- Respond to a complaint in writing or electronically within 8 days
- Resolve the complaint within 15 days, or 30 days for technical goods and furniture
- The deadline can be extended only once, and only with the buyer's consent
- Missing original packaging cannot be a reason to reject a complaint

**Important:** Goods bought before 2 August 2026 remain subject to the rules of the previous law.

**Recommendations for Traders:**
- Align your internal complaint procedures
- Update your general terms of sale and online shop terms
- Train staff who handle complaints

For help bringing your business into line with the new law, or with a dispute with a trader, contact our office.

This article is for information only and does not constitute legal advice.`,
          date: 'November 10, 2026',
          isoDate: '2026-11-10',
          category: 'Consumer Protection',
          img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800',
        },
        {
          slug: 'ebolovanje-mandatory-for-sole-traders-2027',
          title: 'eBolovanje: Mandatory for Sole Traders from 1 January 2027',
          excerpt:
            'Paper sick notes are a thing of the past. Sole traders with employees must join the eBolovanje system by the start of 2027.',
          content: `The Law on the Exchange of Data, Documents and Notices in Case of Temporary Incapacity for Work Using the "eBolovanje - Employer" Software (Official Gazette of RS, No. 109/2025) introduced a fully electronic exchange of sick-leave data between doctors, the Republic Health Insurance Fund (RFZO) and employers.

**Implementation Phases**
- **From 1 January 2026** - mandatory for companies and the public sector
- **From 1 April 2026** - employers' communication with the RFZO (requests for calculation and refund of sick pay) is electronic only
- **From 1 January 2027** - mandatory for sole traders (preduzetnici) who have employees

Employers with no employees are not covered by this obligation.

**What It Means for Employees**
Employees no longer need to bring paper sick-leave certificates to their employer - the employer receives the data directly through the system.

**What Employers Need to Do**
- Register on the eUprava portal (using the ConsentID app or a qualified electronic certificate)
- Access the eBolovanje - Employer system and use it regularly
- Give access to HR and accounting staff
- Update internal procedures and absence-tracking rules

**Fines**
Employers who fail to use the system face fines of:
- legal entity: RSD 50,000 to 200,000
- responsible person: RSD 5,000 to 25,000
- sole trader: RSD 10,000 to 50,000

**Tip:** Sole traders do not have to wait until 1 January - they can join the system voluntarily now, which leaves time to get procedures running smoothly.

For help bringing your employment documentation into compliance, contact our office.

This article is for information only and does not constitute legal advice.`,
          date: 'November 10, 2026',
          isoDate: '2026-11-10',
          category: 'Labor Law',
          img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800',
        },
      ],
    },

    // FAQ
    faqs: {
      heading: 'Frequently Asked Questions',
      subheading: 'Answers to the most common questions about legal services',
      list: [
        {
          q: 'How much does the first consultation cost?',
          a: 'The first consultation is free.',
        },
        {
          q: 'What documents should I bring to the first consultation?',
          a: "Bring all relevant documentation related to your case: contracts, correspondence, court decisions, identification documents, and anything you deem relevant. Don't worry if you don't have everything - we can identify what's missing together.",
        },
        {
          q: 'Do you represent clients outside of Novi Sad?',
          a: 'Absolutely. We represent clients throughout Serbia before all courts and authorities. Most consultations can be conducted online or by phone, and we travel for hearings as needed.',
        },
        {
          q: 'How long does an average legal proceeding take?',
          a: "It depends on the type and complexity of the case. Non-litigation proceedings may take 3-6 months, litigation 1-2 years, while criminal proceedings can be longer. We'll always give you a realistic estimate for your specific case.",
        },
        {
          q: 'Do you offer legal protection for businesses?',
          a: 'Yes, we offer complete legal services for entrepreneurs and companies - from formation, through ongoing legal counseling, to dispute representation. We can be your external legal team.',
        },
        {
          q: 'How are services billed?',
          a: 'Depending on the type of work, we use fixed fees, hourly rates, or success fees. We will always transparently present all costs before starting work.',
        },
      ],
    },

    // Contact Form
    contact: {
      heading: 'Schedule a Free Consultation',
      subheading: 'Contact us today and receive expert legal advice',
      form: {
        heading: 'Request a Legal Consultation',
        subheading: 'Fill out the form below and our team will respond within 24 hours',
        fields: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          legalArea: 'Legal Area',
          message: 'Your Message',
        },
        placeholders: {
          name: 'Enter your full name',
          email: 'Enter your email address',
          phone: 'Enter your phone number (optional)',
          selectArea: 'Select legal area of interest',
          message: 'Briefly describe your legal matter or inquiry',
        },
        submit: 'Send Message',
        sending: 'Sending...',
        successMessage:
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        errorMessage:
          'An error occurred while sending your message. Please try again or contact us directly.',
        privacyNotice:
          'We use the details you submit only to reply to your inquiry. Read how we handle them in our',
        privacyLink: 'Privacy Policy',
        rateLimitError:
          'You are sending messages too frequently. Please wait a few minutes before trying again.',
      },
      info: {
        title: 'Contact Information',
        addressLabel: 'Address',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        hoursLabel: 'Working Hours',
      },
    },

    // Map Section
    map: {
      heading: 'Visit Us',
      subheading: 'Our office is located in the center of Futog',
      getDirections: 'Open in Map',
      loading: 'Loading map...',
    },

    // Footer
    footer: {
      about: {
        title: 'About the Firm',
        text: 'Trivunović Law Firm has been providing the highest quality legal services since 2010. Our mission is to protect the rights and interests of clients through professional, ethical, and efficient work.',
      },
      quickLinks: {
        title: 'Quick Links',
        links: ['Home', 'Services', 'Our Team', 'Blog', 'Contact'],
      },
      practiceAreas: {
        title: 'Practice Areas',
        areas: ['Corporate Law', 'Real Estate', 'Labor Law', 'Criminal Law', 'Family Law'],
      },
      contact: {
        title: 'Contact',
      },
      bottom: {
        copyright: '© 2026 Trivunović Law Firm. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },

    // Stats/Numbers Section
    stats: {
      heading: 'Our Results Speak for Themselves',
      items: [
        { number: '19+', label: 'Years of Experience' },
        { number: '850+', label: 'Satisfied Clients' },
        { number: '1200+', label: 'Cases Resolved' },
        { number: '95%', label: 'Success Rate' },
      ],
    },
  },
};

// Dev-only guard: the `sr` and `en` trees must stay structurally identical, since
// components and SEO structured data map over shared shapes. This warns in the
// console during development if a key exists in one language but not the other.
// (Stripped from production builds — the `import.meta.env.DEV` branch is dead code
// under `vite build` and gets tree-shaken away.)
if (import.meta.env.DEV) {
  const collectPaths = (node, prefix = '') => {
    if (Array.isArray(node)) {
      // Compare array length; recurse into the first element for shape.
      const paths = [`${prefix}[len=${node.length}]`];
      if (node.length > 0 && typeof node[0] === 'object' && node[0] !== null) {
        paths.push(...collectPaths(node[0], `${prefix}[]`));
      }
      return paths;
    }
    if (node && typeof node === 'object') {
      return Object.keys(node)
        .sort()
        .flatMap((key) => collectPaths(node[key], prefix ? `${prefix}.${key}` : key));
    }
    return [`${prefix}`];
  };

  const srPaths = collectPaths(translations.sr);
  const enPaths = collectPaths(translations.en);
  const onlyInSr = srPaths.filter((p) => !enPaths.includes(p));
  const onlyInEn = enPaths.filter((p) => !srPaths.includes(p));

  if (onlyInSr.length > 0 || onlyInEn.length > 0) {
    console.warn(
      '[content] sr/en translation trees are out of sync:\n' +
        (onlyInSr.length ? `  Only in sr: ${onlyInSr.join(', ')}\n` : '') +
        (onlyInEn.length ? `  Only in en: ${onlyInEn.join(', ')}` : '')
    );
  }
}
