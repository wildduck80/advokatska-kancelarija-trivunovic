// Complete bilingual content structure for Trifunovic Law Firm
// Mirrors aktodorovic.rs architecture with unique, contextually similar content

export const translations = {
  sr: {
    // Navigation
    nav: {
      home: "Početna",
      about: "O Nama",
      services: "Usluge",
      team: "Naš Tim",
      blog: "Blog",
      faq: "Česta Pitanja",
      contact: "Kontakt"
    },

    // Company Information
    company: {
      name: "Advokatska Kancelarija Trivunović",
      tagline: "Vaš partner u pravnoj sigurnosti",
      address: "Rade Kondića 116a, 21410 Futog",
      city: "Futog, Novi Sad",
      phone: "+381 21 895 4321",
      email: "office@trivunovic-law.rs",
      workingHours: "Pon - Pet: 08:00 - 16:00",
      foundedYear: "2010",
      description: "Pružamo sveobuhvatne pravne usluge fizičkim i pravnim licima širom Srbije. Sa sedištem u Futgu, naša kancelarija je posvećena pružanju visokokvalitetnih pravnih rešenja prilagođenih potrebama svakog klijenta."
    },

    // Hero Section
    hero: {
      title: "Izvrsnost u Pravnom Zastupanju",
      subtitle: "Pružamo sofisticirana pravna rešenja za domaće i međunarodne klijente u Novom Sadu. Naša posvećenost i stručnost garantuju uspešne rezultate.",
      cta: "Zakazite konsultacije",
      ctaSecondary: "NAŠE USLUGE"
    },

    // About Section
    about: {
      heading: "O Našoj Kancelariji",
      subheading: "Tradicija, Iskustvo i Posvećenost",
      foundedText: "Osnovana",
      description: [
        "Advokatska kancelarija Trivunović osnovana je 2010. godine sa vizijom pružanja vrhunskih pravnih usluga zasnovanih na etičkim principima i stručnosti. Tokom godina rada, izgradili smo reputaciju pouzdanog partnera u rešavanju najsloženijih pravnih pitanja.",
        "Naš tim čine visoko kvalifikovani advokati sa dugogodišnjim iskustvom u različitim oblastima prava. Pružamo pravnu podršku fizičkim licima, privrednim subjektima i institucijama širom Srbije, sa posebnim fokusom na teritoriju Vojvodine.",
        "Verujemo u personalizovan pristup svakom klijentu. Naša filozofija rada zasniva se na transparentnosti, brzoj komunikaciji i proaktivnom rešavanju pravnih problema pre nego što postanu sporovi."
      ],
      values: [
        { title: "Integritet", desc: "Posvećeni smo najvišim etičkim standardima u svim aspektima našeg rada." },
        { title: "Stručnost", desc: "Kontinuirano usavršavanje i praćenje zakonskih izmena garantuje kvalitetne usluge." },
        { title: "Efikasnost", desc: "Brzo reagovanje i racionalno korišćenje vremena u interesu klijenta." },
        { title: "Poverenje", desc: "Izgradnja dugoročnih odnosa zasnovanih na transparentnosti i rezultatima." }
      ]
    },

    // Services - 10 practice areas
    services: {
      heading: "Oblasti Pravne Prakse",
      subheading: "Sveobuhvatna pravna podrška u svim segmentima",
      list: [
        {
          title: "Privredno Pravo",
          desc: "Osnivanje privrednih društava, restrukturiranje, M&A transakcije, ugovorno pravo i korporativno upravljanje.",
          icon: "⚖️"
        },
        {
          title: "Nekretnine i Imovinsko Pravo",
          desc: "Kupoprodaja nepokretnosti, hipoteke, imovinsko-pravni odnosi, zemljišno-knjižni poslovi i urbanističko pravo.",
          icon: "🏢"
        },
        {
          title: "Radno Pravo",
          desc: "Ugovori o radu, radni sporovi, kolektivni ugovori, otkazi i prava zaposlenih pred nadležnim organima.",
          icon: "👔"
        },
        {
          title: "Porodično Pravo",
          desc: "Bračne parnice, razvod braka, alimentacija, roditeljsko pravo, vršenje roditeljskog prava i starateljstvo.",
          icon: "👨‍👩‍👧‍👦"
        },
        {
          title: "Krivično Pravo",
          desc: "Odbrana u krivičnom postupku, zastupanje oštećenih, privredni kriminalitet i postupci pred svim instancama.",
          icon: "⚔️"
        },
        {
          title: "Građansko Pravo",
          desc: "Obligacioni odnosi, ugovori, naknada štete, nasledstvo i rešavanje sporova u parničnom postupku.",
          icon: "📋"
        },
        {
          title: "Upravno Pravo",
          desc: "Postupci pred upravnim organima, upravni sporovi, građevinske i urbanističke dozvole, inspekcijski postupci.",
          icon: "🏛️"
        },
        {
          title: "Zaštita Konkurencije",
          desc: "Antimonopolska praksa, kontrola koncentracija, zaštita tržišne utakmice i savetovanje o compliance-u.",
          icon: "🎯"
        },
        {
          title: "Intelektualna Svojina",
          desc: "Zaštita žigova, patenata, autorskih prava, zaštita softvera i rešavanje sporova iz oblasti IP prava.",
          icon: "💡"
        },
        {
          title: "Izvršenje i Stečaj",
          desc: "Prinudna naplata potraživanja, izvršni postupci, stečajni postupak i restrukturiranje dugovanja.",
          icon: "📊"
        }
      ]
    },

    // Team Members
    team: {
      heading: "Upoznajte Naš Tim",
      subheading: "Iskusni pravnici posvećeni vašem uspehu",
      members: [
        {
          name: "Bosko Trivunović",
          role: "Osnivač i vodeći Advokat",
          bio: "Više od 15 godina iskustva u privrednom i građanskom pravu. Specijalizacija iz oblasti ugovornog prava i M&A transakcija.",
          email: "bosko.trivunovic@trivunovic-law.rs",
          img: "https://via.placeholder.com/400x500/0a1428/c5a059?text=M.T."
        },
        {
          name: "Natalija Trivunović",
          role: "Advokat - Radno Pravo",
          bio: "Doktor pravnih nauka sa ekspertizom u radnom i socijalnom pravu. Dugogodišnje iskustvo u zastupanju u složenim radnim sporovima.",
          email: "natalija.trivunovic@trivunovic-law.rs",
          img: "https://via.placeholder.com/400x500/0a1428/c5a059?text=Dr.A.T."
        },
        {
          name: "Maja Reljin",
          role: "Advokat - Pravno savetovanje",
          bio: "Specijalizovan za krivično pravo i zastupanje u prekršajnom postupku. Iskustvo u zaštiti ljudskih prava.",
          email: "maja.reljin@trivunovic-law.rs",
          img: "https://via.placeholder.com/400x500/0a1428/c5a059?text=N.J."
        }
      ]
    },

    // Testimonials
    testimonials: {
      heading: "Šta Klijenti Kažu",
      subheading: "Poverenje izgrađeno rezultatima",
      list: [
        {
          text: "Profesionalizam i posvećenost advokata Trifunovića bili su ključni u uspešnom rešavanju našeg spora. Toplo ih preporučujem!",
          author: "Marko Trifunović",
          position: "Direktor Trifunović Holding",
          rating: 5
        },
        {
          text: "Izuzetan pristup u porodičnom pravu. Sa strpljenjem i stručnošću rešili su veoma osetljiv slučaj. Hvala od srca!",
          author: "Nadezda Petrovic",
          position: "Klijent",
          rating: 5
        },
        {
          text: "U oblasti krivičnog prava pokazali su neverovatnu ekspertizu. Naša odbrana je bila precizna i dobro pripremljena.",
          author: "Stefan Nenadic",
          position: "Klijent",
          rating: 5
        },
        {
          text: "Preduzeće je dobilo pravnu podršku najvišeg kvaliteta. Njihovo poznavanje privrednog prava je impresivno.",
          author: "Atila Bala",
          position: "Portfolio Director",
          rating: 5
        }
      ]
    },

    // Blog/News
    blog: {
      heading: "Pravne Novosti i Saveti",
      subheading: "Budite informisani o promenama u zakonodavstvu",
      readMore: "Pročitajte više",
      articles: [
        {
          title: "Nove Izmene Zakona o Radu 2025",
          excerpt: "Analiziramo najvažnije izmene koje se odnose na radne ugovore, otpremnine i rad na daljinu.",
          date: "15. Decembar 2024",
          category: "Radno Pravo",
          img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800"
        },
        {
          title: "Postupak Kupovine Nekretnine: Vodič za Kupce",
          excerpt: "Korak po korak objašnjenje svih pravnih aspekata kupovine stana ili kuće u Srbiji.",
          date: "8. Decembar 2024",
          category: "Nekretnine",
          img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800"
        },
        {
          title: "Zaštita Autorskih Prava u Digitalnom Dobu",
          excerpt: "Kako zaštititi vaš kreativni rad na internetu i koje mere možete preduzeti protiv kršenja prava.",
          date: "1. Decembar 2024",
          category: "Intelektualna Svojina",
          img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800"
        }
      ]
    },

    // FAQ
    faqs: {
      heading: "Česta Pitanja",
      subheading: "Odgovori na najčešća pitanja o pravnim uslugama",
      list: [
        {
          q: "Koliko koštaju prve konsultacije?",
          a: "Prve konsultacije su besplatne."
        },
        {
          q: "Koje dokumente trebam poneti na prvu konsultaciju?",
          a: "Ponesite svu relevantnu dokumentaciju koja se odnosi na vaš slučaj: ugovore, dopisivanja, sudske odluke, identifikacione dokumente i sve što smatrate relevantnim. Ne brinite ako nemate sve - možemo zajedno identifikovati šta nedostaje."
        },
        {
          q: "Da li zastupate klijente van Novog Sada?",
          a: "Apsolutno. Zastupamo klijente širom Srbije pred svim sudovima i organima. Većinu konsultacija možemo obaviti online ili telefonom, a za ročišta putujemo prema potrebi."
        },
        {
          q: "Koliko dugo traje prosečan pravni postupak?",
          a: "Zavisi od vrste i složenosti postupka. Vanparnični postupci mogu trajati 3-6 meseci, parnični 1-2 godine, dok krivični postupci mogu biti i duži. Uvek ćemo vam dati realnu procenu za vaš konkretni slučaj."
        },
        {
          q: "Da li nudite pravnu zaštitu preduzeća?",
          a: "Da, nudimo kompletne pravne usluge za privrednike i preduzeća - od osnivanja, preko redovnog pravnog savjetovanja, do zastupanja u sporovima. Možemo biti vaš eksterni pravni tim."
        },
        {
          q: "Kako se vrši naplata usluga?",
          a: "Zavisno od vrste posla koristimo fiksne honorare, satnice ili uspešnu naknadu (success fee). Uvek ćemo vam transparentno predočiti sve troškove pre početka rada."
        }
      ]
    },

    // Contact Form
    contact: {
      heading: "Zakažite Besplatnu Konsultaciju",
      subheading: "Kontaktirajte nas danas i dobijte stručno pravno mišljenje",
      form: {
        heading: "Zakažite Pravne Konsultacije",
        subheading: "Popunite formular ispod i naš tim će vam odgovoriti u roku od 24 sata",
        fields: {
          name: "Ime i Prezime",
          email: "Email Adresa",
          phone: "Broj Telefona",
          legalArea: "Oblast Prava",
          message: "Vaša Poruka"
        },
        placeholders: {
          name: "Unesite vaše ime i prezime",
          email: "Unesite vašu email adresu",
          phone: "Unesite vaš broj telefona (opciono)",
          selectArea: "Izaberite oblast prava koja vas interesuje",
          message: "Ukratko opišite vaš pravni problem ili upit"
        },
        submit: "Pošalji Poruku",
        sending: "Šaljem...",
        successMessage: "Hvala! Vaša poruka je uspešno poslata. Javićemo vam se u roku od 24 sata.",
        errorMessage: "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte direktno.",
        privacyNotice: "Slanjem ovog formulara, prihvatate našu Politiku privatnosti. Vaši podaci će biti korišćeni isključivo za kontaktiranje u vezi sa vašim upitom i neće biti deljeni sa trećim stranama.",
        rateLimitError: "Prečesto šaljete poruke. Molimo sačekajte nekoliko minuta pre ponovnog slanja."
      },
      info: {
        title: "Kontakt Informacije",
        addressLabel: "Adresa",
        phoneLabel: "Telefon",
        emailLabel: "Email",
        hoursLabel: "Radno Vreme"
      }
    },

    // Map Section
    map: {
      heading: "Posetite Nas",
      subheading: "Naša kancelarija se nalazi u centru Futoga",
      getDirections: "Otvori u Mapi",
      loading: "Učitavanje mape..."
    },

    // Footer
    footer: {
      about: {
        title: "O Kancelariji",
        text: "Advokatska kancelarija Trivunović pruža pravne usluge najvišeg kvaliteta od 2010. godine. Naša misija je zaštita prava i interesa klijenata kroz profesionalan, etičan i efikasan rad."
      },
      quickLinks: {
        title: "Brze Veze",
        links: ["Početna", "Usluge", "Naš Tim", "Blog", "Kontakt"]
      },
      practiceAreas: {
        title: "Oblasti Prakse",
        areas: ["Privredno Pravo", "Nekretnine", "Radno Pravo", "Krivično Pravo", "Porodično Pravo"]
      },
      contact: {
        title: "Kontakt"
      },
      bottom: {
        copyright: "© 2025 Advokatska Kancelarija Trifunović. Sva prava zadržana.",
        privacy: "Politika Privatnosti",
        terms: "Uslovi Korišćenja"
      }
    },

    // Stats/Numbers Section
    stats: {
      heading: "Naši Rezultati Govore",
      items: [
        { number: "15+", label: "Godina Iskustva" },
        { number: "600+", label: "Zadovoljnih Klijenata" },
        { number: "800+", label: "Rešenih Predmeta" },
        { number: "85%", label: "Stopa Uspeha" }
      ]
    }
  },

  // ENGLISH VERSION
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      team: "Our Team",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact"
    },

    // Company Information
    company: {
      name: "Trivunovic Law Firm",
      tagline: "Your partner in legal security",
      address: "Rade Kondica 116a, 21410 Futog",
      city: "Futog, Novi Sad",
      phone: "+381 21 895 4321",
      email: "office@trivunovic-law.rs",
      workingHours: "Mon - Fri: 08:00 AM - 04:00 PM",
      foundedYear: "2010",
      description: "We provide comprehensive legal services to individuals and businesses throughout Serbia. Based in Futog, our firm is dedicated to delivering high-quality legal solutions tailored to each client's needs."
    },

    // Hero Section
    hero: {
      title: "Excellence in Legal Advocacy",
      subtitle: "Providing sophisticated legal solutions for domestic and international clients in Novi Sad. Our dedication and expertise guarantee successful outcomes.",
      cta: "SCHEDULE A CONSULTATION",
      ctaSecondary: "OUR SERVICES"
    },

    // About Section
    about: {
      heading: "About Our Firm",
      subheading: "Tradition, Experience and Dedication",
      foundedText: "Established",
      description: [
        "Trivunovic Law Firm was founded in 2010 with a vision of providing top-tier legal services based on ethical principles and expertise. Over the years, we have built a reputation as a trusted partner in resolving the most complex legal matters.",
        "Our team consists of highly qualified attorneys with extensive experience across various areas of law. We provide legal support to individuals, businesses, and institutions throughout Serbia, with a special focus on the Vojvodina region.",
        "We believe in a personalized approach to each client. Our work philosophy is based on transparency, rapid communication, and proactive resolution of legal problems before they escalate into disputes."
      ],
      values: [
        { title: "Integrity", desc: "Committed to the highest ethical standards in all aspects of our work." },
        { title: "Expertise", desc: "Continuous education and monitoring of legislative changes guarantee quality service." },
        { title: "Efficiency", desc: "Quick response and rational use of time in the client's best interest." },
        { title: "Trust", desc: "Building long-term relationships based on transparency and results." }
      ]
    },

    // Services - 10 practice areas
    services: {
      heading: "Practice Areas",
      subheading: "Comprehensive legal support in all segments",
      list: [
        {
          title: "Corporate Law",
          desc: "Business formation, restructuring, M&A transactions, contract law, and corporate governance.",
          icon: "⚖️"
        },
        {
          title: "Real Estate & Property Law",
          desc: "Property sales, mortgages, property relations, land registry procedures, and urban planning law.",
          icon: "🏢"
        },
        {
          title: "Labor Law",
          desc: "Employment contracts, labor disputes, collective agreements, terminations, and employee rights before authorities.",
          icon: "👔"
        },
        {
          title: "Family Law",
          desc: "Marriage litigation, divorce, alimony, parental rights, custody, and guardianship.",
          icon: "👨‍👩‍👧‍👦"
        },
        {
          title: "Criminal Law",
          desc: "Criminal defense, victim representation, white-collar crime, and proceedings before all instances.",
          icon: "⚔️"
        },
        {
          title: "Civil Law",
          desc: "Obligations, contracts, damages, inheritance, and dispute resolution in litigation proceedings.",
          icon: "📋"
        },
        {
          title: "Administrative Law",
          desc: "Proceedings before administrative bodies, administrative disputes, construction permits, inspection procedures.",
          icon: "🏛️"
        },
        {
          title: "Competition Law",
          desc: "Antitrust practice, merger control, market competition protection, and compliance counseling.",
          icon: "🎯"
        },
        {
          title: "Intellectual Property",
          desc: "Trademark, patent, and copyright protection, software protection, and IP dispute resolution.",
          icon: "💡"
        },
        {
          title: "Enforcement & Bankruptcy",
          desc: "Debt collection, enforcement procedures, bankruptcy proceedings, and debt restructuring.",
          icon: "📊"
        }
      ]
    },

    // Team Members
    team: {
      heading: "Meet Our Team",
      subheading: "Experienced lawyers dedicated to your success",
      members: [
        {
          name: "Bosko Trivunović",
          role: "Founder & Managing Partner",
          bio: "Over 20 years of experience in corporate and civil law. Specialization in contract law and M&A transactions.",
          email: "bosko.trivunovic@trivunovic-law.rs",
          img: "https://via.placeholder.com/400x500/0a1428/c5a059?text=M.T."
        },
        {
          name: "Natalija Trivunović",
          role: "Senior Associate - Labor Law",
          bio: "Doctor of Legal Sciences with expertise in labor and social law. Extensive experience in complex labor disputes.",
          email: "natalija.trivunovic@trivunovic-law.rs",
          img: "https://via.placeholder.com/400x500/0a1428/c5a059?text=Dr.A.T."
        },
        {
          name: "Maja Reljin",
          role: "Attorney - Criminal Law",
          bio: "Specialized in criminal law and misdemeanor proceedings. Experience in human rights protection.",
          email: "maja.reljin@trivunovic-law.rs",
          img: "https://via.placeholder.com/400x500/0a1428/c5a059?text=N.J."
        }
      ]
    },

    // Testimonials
    testimonials: {
      heading: "What Clients Say",
      subheading: "Trust built through results",
      list: [
        {
          text: "The professionalism and dedication of Attorney Trivunović were key to successfully resolving our dispute. I highly recommend them!",
          author: "Milan Kovacevic",
          position: "Director, Kovacevic LLC",
          rating: 5
        },
        {
          text: "Exceptional approach to family law. With patience and expertise, they resolved a very sensitive case. Thank you from the heart!",
          author: "Gordana Petrovic",
          position: "Client",
          rating: 5
        },
        {
          text: "In criminal law, they demonstrated incredible expertise. Our defense was precise and well-prepared.",
          author: "Stefan Nikolic",
          position: "Client",
          rating: 5
        },
        {
          text: "The company received the highest quality legal support. Their knowledge of corporate law is impressive.",
          author: "Dragana Djordjevic",
          position: "CEO, TechSolutions",
          rating: 5
        }
      ]
    },

    // Blog/News
    blog: {
      heading: "Legal News & Advice",
      subheading: "Stay informed about changes in legislation",
      readMore: "Read More",
      articles: [
        {
          title: "New Amendments to Labor Law 2025",
          excerpt: "Analyzing the most important changes related to employment contracts, severance pay, and remote work.",
          date: "December 15, 2024",
          category: "Labor Law",
          img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800"
        },
        {
          title: "Real Estate Purchase Process: Buyer's Guide",
          excerpt: "Step-by-step explanation of all legal aspects of buying an apartment or house in Serbia.",
          date: "December 8, 2024",
          category: "Real Estate",
          img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800"
        },
        {
          title: "Copyright Protection in the Digital Age",
          excerpt: "How to protect your creative work online and what measures you can take against infringement.",
          date: "December 1, 2024",
          category: "Intellectual Property",
          img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800"
        }
      ]
    },

    // FAQ
    faqs: {
      heading: "Frequently Asked Questions",
      subheading: "Answers to the most common questions about legal services",
      list: [
        {
          q: "How much does the first consultation cost?",
          a: "The initial assessment is usually a fixed fee of 5,000 RSD which is credited toward total costs if we proceed with your case. Consultations up to 30 minutes may be free for first-time clients."
        },
        {
          q: "What documents should I bring to the first consultation?",
          a: "Bring all relevant documentation related to your case: contracts, correspondence, court decisions, identification documents, and anything you deem relevant. Don't worry if you don't have everything - we can identify what's missing together."
        },
        {
          q: "Do you represent clients outside of Novi Sad?",
          a: "Absolutely. We represent clients throughout Serbia before all courts and authorities. Most consultations can be conducted online or by phone, and we travel for hearings as needed."
        },
        {
          q: "How long does an average legal proceeding take?",
          a: "It depends on the type and complexity of the case. Non-litigation proceedings may take 3-6 months, litigation 1-2 years, while criminal proceedings can be longer. We'll always give you a realistic estimate for your specific case."
        },
        {
          q: "Do you offer legal protection for businesses?",
          a: "Yes, we offer complete legal services for entrepreneurs and companies - from formation, through ongoing legal counseling, to dispute representation. We can be your external legal team."
        },
        {
          q: "How are services billed?",
          a: "Depending on the type of work, we use fixed fees, hourly rates, or success fees. We will always transparently present all costs before starting work."
        }
      ]
    },

    // Contact Form
    contact: {
      heading: "Schedule a Free Consultation",
      subheading: "Contact us today and receive expert legal advice",
      form: {
        heading: "Request a Legal Consultation",
        subheading: "Fill out the form below and our team will respond within 24 hours",
        fields: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          legalArea: "Legal Area",
          message: "Your Message"
        },
        placeholders: {
          name: "Enter your full name",
          email: "Enter your email address",
          phone: "Enter your phone number (optional)",
          selectArea: "Select legal area of interest",
          message: "Briefly describe your legal matter or inquiry"
        },
        submit: "Send Message",
        sending: "Sending...",
        successMessage: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        errorMessage: "An error occurred while sending your message. Please try again or contact us directly.",
        privacyNotice: "By submitting this form, you accept our Privacy Policy. Your data will be used exclusively to contact you regarding your inquiry and will not be shared with third parties.",
        rateLimitError: "You are sending messages too frequently. Please wait a few minutes before trying again."
      },
      info: {
        title: "Contact Information",
        addressLabel: "Address",
        phoneLabel: "Phone",
        emailLabel: "Email",
        hoursLabel: "Working Hours"
      }
    },

    // Map Section
    map: {
      heading: "Visit Us",
      subheading: "Our office is located in the center of Futog",
      getDirections: "Open in Map",
      loading: "Loading map..."
    },

    // Footer
    footer: {
      about: {
        title: "About the Firm",
        text: "Trivunovic Law Firm has been providing the highest quality legal services since 2010. Our mission is to protect the rights and interests of clients through professional, ethical, and efficient work."
      },
      quickLinks: {
        title: "Quick Links",
        links: ["Home", "Services", "Our Team", "Blog", "Contact"]
      },
      practiceAreas: {
        title: "Practice Areas",
        areas: ["Corporate Law", "Real Estate", "Labor Law", "Criminal Law", "Family Law"]
      },
      contact: {
        title: "Contact"
      },
      bottom: {
        copyright: "© 2024 Trivunovic Law Firm. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    },

    // Stats/Numbers Section
    stats: {
      heading: "Our Results Speak for Themselves",
      items: [
        { number: "19+", label: "Years of Experience" },
        { number: "850+", label: "Satisfied Clients" },
        { number: "1200+", label: "Cases Resolved" },
        { number: "95%", label: "Success Rate" }
      ]
    }
  }
};

// Legacy exports for backward compatibility with existing components
export const companyData = {
  name: translations.sr.company.name,
  address: translations.sr.company.address,
  phone: translations.sr.company.phone,
  email: translations.sr.company.email,
  services: translations.sr.services.list,
  stats: translations.sr.stats.items
};

export const faqData = translations.sr.faqs.list;
export const blogPosts = translations.sr.blog.articles;
