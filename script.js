const translations = {
  fr: {
    // Header & About
    "header.job": "Chef de Projet Informatique / Développeuse Informatique",
    "header.degree": "Master 2 Méthodes Informatiques Appliquées à la Gestion des Entreprises MIAGE",
    "about.title": "À propos",
    "about.description": "Diplômée d'un Master MIAGE, spécialisée en Informatique, Gestion d'Entreprises et Applications métiers. J’évolue à l’interface entre les équipes techniques et les utilisateurs, avec une expérience significative en support, développement et pilotage applicatif.",

    // Expériences
    "experience.title": "Expériences professionnelles",
    "experience.job1.title": "Chef de projet Informatique",
    "experience.job1.company": "Veolia Energie Performance",
    "experience.job1.date": "Sept. 2024 – Août 2026",
    "experience.job1.intro": "Intégrée à la DSI au sein de l’équipe Solutions Digitales aux Opérations, avec un rôle mêlant évolution applicative, support utilisateurs et amélioration continue.",
    "experience.job1.task1": "Gestion de projets applicatifs (GMAO, portail client)",
    "experience.job1.task2": "Analyse des besoins métiers et mise en œuvre d’une application métier dédiée aux techniciens, centralisant la gestion des équipements, des sites, des interventions et des plannings opérationnels.",
    "experience.job1.task3": "Ajout de nouvelles fonctionnalités sur des applications existantes",
    "experience.job1.task4": "Amélioration et optimisation de fonctionnalités en production",
    "experience.job1.task5": "Correction de bugs et résolution d’anomalies",
    "experience.job1.task6": "Support utilisateurs et traitement de tickets clients",
    "experience.job1.task7": "Mise en place et suivi d’indicateurs KPI et tableaux de bord",

    "experience.job2.title": "Développement et Support Informatique",
    "experience.job2.company": "dDruid – Solutions IoT",
    "experience.job2.date": "Mai 2024 – Août 2024",
    "experience.job2.intro": "Stage au sein d’une entreprise éditrice de solutions IoT No Code, orienté support technique, développement et automatisation.",
    "experience.job2.task1": "Développement de scripts multi-langages pour l’envoi de données IoT",
    "experience.job2.task2": "Intégration des protocoles HTTP et MQTT",
    "experience.job2.task3": "Rédaction de documentation technique et fonctionnelle",
    "experience.job2.task4": "Création de dashboards et outils de démonstration clients",

    // Recommandation
    "recommendation.title": "Lettre de recommandation",
    "recommendation.name": "Recommandation de Sevan AMPS",
    "recommendation.role": "Responsable projets et Technologies – Veolia Energie Performance",
    "recommendation.desc": "Cette recommandation témoigne de mon expérience, de mon implication et de mes compétences professionnelles dans le cadre de mes missions au sein de la DSI de Veolia Energie Performance.",
    "recommendation.button": "Consulter la recommandation",

    // Compétences
    "skills.title": "Compétences",
    "skills.cat1": "Gestion et Collaboration",
    "skills.cat2": "Programmation",
    "skills.cat3": "Web et Full Stack",
    "skills.cat4": "Bases de données et Data",
    "skills.cat5": "Cloud et Google",
    "skills.cat6": "Systèmes et Protocoles",
    "skills.cat7": "Scripting",
    "skills.cat8": "Mobile Android",
    "skills.cat9": "UI / UX et Interfaces",
    "skills.cat10": "IDE et Outils",

    // Certifications
    "certifications.title": "Certifications",
    "cert.scrum_fund": "Les fondements de la méthode Scrum",
    "cert.pm_fund": "Les fondements de la gestion de projet",
    "cert.cyber": "Introduction à la Cybersécurité",
    "cert.ai": "Introduction à l'IA pour les entreprises",
    "cert.psc1": "Formation Prévention et Secours Civiques",
    "cert.marketing": "Fondamentaux du Marketing Numérique",

    // Projets Pro
    "projects.title": "Projets",
    "proj.ecommerce.title": "Plateforme e-commerce en microservices",
    "proj.ecommerce.p1": "Conception et développement d'une plateforme e-commerce complète basée sur une architecture microservices, couvrant l'ensemble du parcours client : catalogue produits, gestion des stocks, commandes, paiements et notifications.",
    "proj.ecommerce.p2": "Le projet repose sur 8 services indépendants orchestrés via Spring Cloud Eureka, exposés par une API Gateway avec authentification JWT, et accompagnés d'un frontend React responsive.",
    "proj.rdv.title": "Application de gestion de RDV",
    "proj.rdv.p1": "Conception et développement d’une application desktop permettant la gestion structurée de rendez-vous (création, modification, suppression et consultation).",
    "proj.rdv.p2": "L’application repose sur une architecture claire en C++ et intègre une interface graphique intuitive réalisée avec Qt Creator, mettant l’accent sur l’ergonomie et la fiabilité.",
    "proj.db.title": "Projet Base de Données",
    "proj.db.p1": "Conception et réalisation d’un système de gestion des inscriptions universitaires, depuis l’analyse des besoins fonctionnels jusqu’à l’implémentation de la base de données.",
    "proj.db.p2": "Le projet a inclus la rédaction d’un cahier des charges, la planification via diagramme de Gantt, la modélisation des données avec la méthode Merise, puis la création et l’exploitation de la base de données sous Microsoft Access.",
    "proj.db.tech": "Analyse des besoins • Cahier des charges • Gantt • Merise • Access • SQL",
    "proj.front.title": "Développement Web Frontend",
    "proj.front.p1": "Réalisation rapide d’un site vitrine pour une pharmacie, mettant l’accent sur la clarté de l’information, l’accessibilité et la présentation des services proposés.",
    "proj.front.p2": "L’interface a été développée en HTML5 et CSS3, avec une attention particulière portée à la structure, au responsive design et à l’expérience utilisateur.",
    "proj.back.title": "Développement Web Backend",
    "proj.back.p1": "Conception et développement d’une application web complète de gestion de produits, intégrant l’authentification, la gestion des rôles et des permissions, ainsi qu’une API dédiée.",
    "proj.back.p2": "Le projet a été réalisé selon une approche API First, avec une architecture orientée objet et hexagonale. Deux versions ont été développées : une en PHP natif et une avec Laravel, en respectant les standards PSR.",
    "proj.back.tech": "PHP • Laravel • API REST • POO • PSR-1/4/7/12/18 • SQL Server • Authentification • Bootstrap",
    "proj.storage.title": "Projet Stockage",
    "proj.storage.p1": "Développement d’une application web permettant le chargement de vidéos et leur traitement côté client avant envoi vers le cloud.",
    "proj.storage.p2": "L’application, développée en React, extrait des frames vidéo puis les transmet vers Supabase, illustrant une logique de traitement asynchrone, de gestion des médias et d’interaction avec des services cloud.",
    "proj.storage.tech": "React • Supabase • Cloud Storage • Traitement Vidéo • JavaScript",
    "proj.case.title": "Projet Étude de Cas",
    "proj.case.p1": "Analyse complète des besoins d’un client dans le cadre d’un projet de transformation numérique, incluant un site e-commerce, un module de communication avec Sage, ainsi que des aspects de référencement et d’hébergement.",
    "proj.case.p2": "Le projet a également intégré la proposition d’une solution e-commerce adaptée et la préparation d’un plan de formation destiné aux utilisateurs finaux.",
    "proj.case.tech": "Analyse métier • E-commerce • Intégration Sage • Hébergement • Formation utilisateurs",

    // Projets Persos
    "personal.title": "Projets personnels",
    "personal.shop.title": "Application de Gestion d'un Magasin",
    "personal.resto.title": "Site de restauration",
    "personal.notebook.title": "Bloc-note conçu entièrement avec Adobe Illustrator",

    // Footer
    "footer.phone": "Téléphone",

    // Hobbies
    "hobbies.title": "Centres d'intérêt",
    "hobbies.tennis.title": "Tennis",
    "hobbies.tennis.desc": "Pratique régulière sur court. Un sport qui m'apporte dynamisme et esprit de compétition.",
    "hobbies.crafts.title": "Couture, Tricot et Broderie",
    "hobbies.crafts.desc": "Création de pièces uniques, travail minutieux des textiles et passion pour le fait-main.",
    "hobbies.design.title": "Design Graphique",
    "hobbies.design.desc": "Création de visuels, illustrations et identités graphiques. J'aime allier esthétisme et fonctionnalité."
  },

  en: {
    // Header & About
    "header.job": "IT Project Manager / Software Developer",
    "header.degree": "Master's Degree in Applied Computer Science for Business Management (MIAGE)",
    "about.title": "About",
    "about.description": "MIAGE graduate specializing in IT, Business Management and Business Applications. I work at the intersection of technical teams and end users, with significant experience in support, software development and application management.",

    // Expériences
    "experience.title": "Professional Experience",
    "experience.job1.title": "IT Project Manager",
    "experience.job1.company": "Veolia Energie Performance",
    "experience.job1.date": "Sept. 2024 – Aug. 2026",
    "experience.job1.intro": "Integrated into the IT department within the Digital Operations Solutions team, with a role combining application evolution, user support, and continuous improvement.",
    "experience.job1.task1": "Application project management (CMMS, customer portal)",
    "experience.job1.task2": "Business needs analysis and implementation of a business app dedicated to technicians, centralizing the management of equipment, sites, interventions, and operational schedules.",
    "experience.job1.task3": "Adding new features to existing applications",
    "experience.job1.task4": "Improvement and optimization of features in production",
    "experience.job1.task5": "Bug fixing and anomaly resolution",
    "experience.job1.task6": "User support and customer ticket handling",
    "experience.job1.task7": "Setup and monitoring of KPI indicators and dashboards",

    "experience.job2.title": "IT Support and Development Intern",
    "experience.job2.company": "dDruid – IoT Solutions",
    "experience.job2.date": "May 2024 – Aug. 2024",
    "experience.job2.intro": "Internship at a No-Code IoT solutions publisher, focused on technical support, development, and automation.",
    "experience.job2.task1": "Development of multi-language scripts for sending IoT data",
    "experience.job2.task2": "Integration of HTTP and MQTT protocols",
    "experience.job2.task3": "Writing technical and functional documentation",
    "experience.job2.task4": "Creation of dashboards and client demonstration tools",

    // Recommandation
    "recommendation.title": "Letter of Recommendation",
    "recommendation.name": "Recommendation from Sevan AMPS",
    "recommendation.role": "Projects and Technologies Manager – Veolia Energie Performance",
    "recommendation.desc": "This recommendation attests to my experience, involvement, and professional skills as part of my missions within the Veolia Energie Performance IT department.",
    "recommendation.button": "View Recommendation",

    // Compétences
    "skills.title": "Skills",
    "skills.cat1": "Management and Collaboration",
    "skills.cat2": "Programming",
    "skills.cat3": "Web and Full Stack",
    "skills.cat4": "Databases and Data",
    "skills.cat5": "Cloud and Google",
    "skills.cat6": "Systems and Protocols",
    "skills.cat7": "Scripting",
    "skills.cat8": "Mobile Android",
    "skills.cat9": "UI / UX and Interfaces",
    "skills.cat10": "IDE and Tools",

    // Certifications
    "certifications.title": "Certifications",
    "cert.scrum_fund": "Scrum Method Fundamentals",
    "cert.pm_fund": "Project Management Fundamentals",
    "cert.cyber": "Introduction to Cybersecurity",
    "cert.ai": "Introduction to AI for Business",
    "cert.psc1": "Civic Prevention and Rescue Training (PSC1)",
    "cert.marketing": "Fundamentals of Digital Marketing",

    // Projets Pro
    "projects.title": "Projects",
    "proj.ecommerce.title": "Microservices E-commerce Platform",
    "proj.ecommerce.p1": "Design and development of a comprehensive e-commerce platform based on a microservices architecture, covering the entire customer journey: product catalog, inventory management, orders, payments, and notifications.",
    "proj.ecommerce.p2": "The project relies on 8 independent services orchestrated via Spring Cloud Eureka, exposed by an API Gateway with JWT authentication, accompanied by a responsive React frontend.",
    "proj.rdv.title": "Appointment Management Application",
    "proj.rdv.p1": "Design and development of a desktop application enabling structured appointment management (creation, modification, deletion, and consultation).",
    "proj.rdv.p2": "The application is built on a clear C++ architecture and integrates an intuitive graphical interface created with Qt Creator, focusing on ergonomics and reliability.",
    "proj.db.title": "Database Project",
    "proj.db.p1": "Design and implementation of a university registration management system, from functional needs analysis to database implementation.",
    "proj.db.p2": "The project included writing specifications, scheduling via Gantt chart, data modeling with the Merise method, and creating the database using Microsoft Access.",
    "proj.db.tech": "Needs analysis • Specifications • Gantt • Merise • Access • SQL",
    "proj.front.title": "Frontend Web Development",
    "proj.front.p1": "Rapid development of a showcase website for a pharmacy, focusing on information clarity, accessibility, and the presentation of proposed services.",
    "proj.front.p2": "The interface was developed in HTML5 and CSS3, with special attention paid to structure, responsive design, and user experience.",
    "proj.back.title": "Backend Web Development",
    "proj.back.p1": "Design and development of a complete product management web application, integrating authentication, role and permission management, as well as a dedicated API.",
    "proj.back.p2": "The project was carried out using an API First approach, with an object-oriented and hexagonal architecture. Two versions were developed: one in native PHP and one with Laravel, complying with PSR standards.",
    "proj.back.tech": "PHP • Laravel • REST API • OOP • PSR-1/4/7/12/18 • SQL Server • Authentication • Bootstrap",
    "proj.storage.title": "Storage Project",
    "proj.storage.p1": "Development of a web application allowing video uploads and client-side processing before sending them to the cloud.",
    "proj.storage.p2": "The application, developed in React, extracts video frames and transmits them to Supabase, illustrating asynchronous processing logic, media management, and interaction with cloud services.",
    "proj.storage.tech": "React • Supabase • Cloud Storage • Video Processing • JavaScript",
    "proj.case.title": "Case Study Project",
    "proj.case.p1": "Comprehensive analysis of client needs for a digital transformation project, including an e-commerce site, a communication module with Sage, as well as SEO and hosting aspects.",
    "proj.case.p2": "The project also integrated the proposal of a tailored e-commerce solution and the preparation of a training plan for end-users.",
    "proj.case.tech": "Business analysis • E-commerce • Sage Integration • Hosting • End-user training",

    // Projets Persos
    "personal.title": "Personal Projects",
    "personal.shop.title": "Store Management Application",
    "personal.resto.title": "Restaurant Website",
    "personal.notebook.title": "Notepad entirely designed with Adobe Illustrator",

    // Footer
    "footer.phone": "Phone",

    // Hobbies
    "hobbies.title": "Hobbies and Interests",
    "hobbies.tennis.title": "Tennis",
    "hobbies.tennis.desc": "Regular practice on the court. A sport that brings me dynamism and a competitive spirit.",
    "hobbies.crafts.title": "Sewing, Knitting and Embroidery",
    "hobbies.crafts.desc": "Creating unique pieces, meticulous textile work, and a passion for handmade crafts.",
    "hobbies.design.title": "Graphic Design",
    "hobbies.design.desc": "Creating visuals, illustrations, and brand identities. I enjoy combining aesthetics with functionality."
  },

  de: {
    // Header & About
    "header.job": "IT-Projektmanagerin / Softwareentwicklerin",
    "header.degree": "Masterabschluss in Angewandter Informatik für Unternehmensmanagement (MIAGE)",
    "about.title": "Über mich",
    "about.description": "MIAGE-Absolventin mit Schwerpunkt Informatik, Unternehmensmanagement und Geschäftsanwendungen. Ich arbeite an der Schnittstelle zwischen technischen Teams und Anwendern und verfüge über umfangreiche Erfahrung in den Bereichen Support, Softwareentwicklung und Anwendungsmanagement.",

    // Expériences
    "experience.title": "Berufserfahrung",
    "experience.job1.title": "IT-Projektmanagerin",
    "experience.job1.company": "Veolia Energie Performance",
    "experience.job1.date": "Sept. 2024 – Aug. 2026",
    "experience.job1.intro": "Integration in die IT-Abteilung innerhalb des Teams für digitale Operationslösungen, mit einer Rolle, die Anwendungsentwicklung, Benutzersupport und kontinuierliche Verbesserung kombiniert.",
    "experience.job1.task1": "Verwaltung von Anwendungsprojekten (CMMS, Kundenportal)",
    "experience.job1.task2": "Analyse der Geschäftsanforderungen und Implementierung einer speziellen Geschäfts-App für Techniker zur zentralen Verwaltung von Ausrüstung, Standorten, Einsätzen und operativen Zeitplänen.",
    "experience.job1.task3": "Hinzufügen neuer Funktionen zu bestehenden Anwendungen",
    "experience.job1.task4": "Verbesserung und Optimierung von Funktionen in der Produktion",
    "experience.job1.task5": "Fehlerbehebung und Anomalielösung",
    "experience.job1.task6": "Benutzersupport und Bearbeitung von Kundentickets",
    "experience.job1.task7": "Einrichtung und Überwachung von KPI-Indikatoren und Dashboards",

    "experience.job2.title": "Praktikantin im IT-Support und in der Softwareentwicklung",
    "experience.job2.company": "dDruid – IoT-Lösungen",
    "experience.job2.date": "Mai 2024 – Aug. 2024",
    "experience.job2.intro": "Praktikum bei einem Anbieter von No-Code-IoT-Lösungen mit Fokus auf technischen Support, Entwicklung und Automatisierung.",
    "experience.job2.task1": "Entwicklung mehrsprachiger Skripte zum Senden von IoT-Daten",
    "experience.job2.task2": "Integration der HTTP- und MQTT-Protokolle",
    "experience.job2.task3": "Verfassen technischer und funktionaler Dokumentationen",
    "experience.job2.task4": "Erstellung von Dashboards und Kundenpräsentationstools",

    // Recommandation
    "recommendation.title": "Empfehlungsschreiben",
    "recommendation.name": "Empfehlung von Sevan AMPS",
    "recommendation.role": "Manager für Projekte und Technologien – Veolia Energie Performance",
    "recommendation.desc": "Dieses Empfehlungsschreiben bestätigt meine Erfahrung, mein Engagement und meine beruflichen Fähigkeiten im Rahmen meiner Aufgaben in der IT-Abteilung von Veolia Energie Performance.",
    "recommendation.button": "Empfehlungsschreiben ansehen",

    // Compétences
    "skills.title": "Kenntnisse und Fähigkeiten",
    "skills.cat1": "Management und Zusammenarbeit",
    "skills.cat2": "Programmierung",
    "skills.cat3": "Web und Full Stack",
    "skills.cat4": "Datenbanken und Data",
    "skills.cat5": "Cloud und Google",
    "skills.cat6": "Systeme und Protokolle",
    "skills.cat7": "Scripting",
    "skills.cat8": "Mobile Android",
    "skills.cat9": "UI / UX und Interfaces",
    "skills.cat10": "IDE und Tools",

    // Certifications
    "certifications.title": "Zertifizierungen",
    "cert.scrum_fund": "Grundlagen der Scrum-Methode",
    "cert.pm_fund": "Grundlagen des Projektmanagements",
    "cert.cyber": "Einführung in die Cybersicherheit",
    "cert.ai": "Einführung in KI für Unternehmen",
    "cert.psc1": "Erste-Hilfe-Ausbildung (PSC1)",
    "cert.marketing": "Grundlagen des digitalen Marketings",

    // Projets Pro
    "projects.title": "Projekte",
    "proj.ecommerce.title": "Microservices E-Commerce-Plattform",
    "proj.ecommerce.p1": "Konzeption und Entwicklung einer umfassenden E-Commerce-Plattform basierend auf einer Microservices-Architektur, die die gesamte Customer Journey abdeckt: Produktkatalog, Bestandsverwaltung, Bestellungen, Zahlungen und Benachrichtigungen.",
    "proj.ecommerce.p2": "Das Projekt stützt sich auf 8 unabhängige Dienste, die über Spring Cloud Eureka orchestriert, durch ein API-Gateway mit JWT-Authentifizierung offengelegt und mit einem responsiven React-Frontend versehen werden.",
    "proj.rdv.title": "Terminverwaltungs-Anwendung",
    "proj.rdv.p1": "Konzeption und Entwicklung einer Desktop-Anwendung zur strukturierten Terminverwaltung (Erstellung, Bearbeitung, Löschung und Einsicht).",
    "proj.rdv.p2": "Die Anwendung basiert auf einer klaren C++ Architektur und integriert eine intuitive grafische Benutzeroberfläche, die mit Qt Creator erstellt wurde, wobei Ergonomie und Zuverlässigkeit im Vordergrund stehen.",
    "proj.db.title": "Datenbank-Projekt",
    "proj.db.p1": "Konzeption und Realisierung eines Immatrikulations-Verwaltungssystems für Universitäten, von der funktionalen Bedarfsanalyse bis zur Implementierung der Datenbank.",
    "proj.db.p2": "Das Projekt umfasste die Erstellung eines Pflichtenhefts, die Planung mittels Gantt-Diagramm, die Datenmodellierung nach der Merise-Methode sowie die Erstellung der Datenbank mit Microsoft Access.",
    "proj.db.tech": "Bedarfsanalyse • Pflichtenheft • Gantt • Merise • Access • SQL",
    "proj.front.title": "Frontend-Webentwicklung",
    "proj.front.p1": "Schnelle Erstellung einer Showcase-Website für eine Apotheke mit Fokus auf Informationsklarheit, Zugänglichkeit und der Präsentation der angebotenen Dienstleistungen.",
    "proj.front.p2": "Die Benutzeroberfläche wurde in HTML5 und CSS3 entwickelt, wobei besonderes Augenmerk auf Struktur, Responsive Design und User Experience gelegt wurde.",
    "proj.back.title": "Backend-Webentwicklung",
    "proj.back.p1": "Konzeption und Entwicklung einer vollständigen Webanwendung für das Produktmanagement, inklusive Authentifizierung, Rollen- und Berechtigungsverwaltung sowie einer eigenen API.",
    "proj.back.p2": "Das Projekt wurde nach einem API-First-Ansatz mit objektorientierter, hexagonaler Architektur durchgeführt. Es wurden zwei Versionen entwickelt: eine in nativem PHP und eine mit Laravel, unter Einhaltung der PSR-Standards.",
    "proj.back.tech": "PHP • Laravel • REST-API • OOP • PSR-1/4/7/12/18 • SQL Server • Authentifizierung • Bootstrap",
    "proj.storage.title": "Speicher-Projekt",
    "proj.storage.p1": "Entwicklung einer Webanwendung, die das Hochladen von Videos und deren clientseitige Verarbeitung vor dem Senden in die Cloud ermöglicht.",
    "proj.storage.p2": "Die in React entwickelte Anwendung extrahiert Video-Frames und sendet sie an Supabase, wodurch asynchrone Verarbeitungslogik, Medienverwaltung und die Interaktion mit Cloud-Diensten veranschaulicht werden.",
    "proj.storage.tech": "React • Supabase • Cloud Storage • Videoverarbeitung • JavaScript",
    "proj.case.title": "Fallstudien-Projekt",
    "proj.case.p1": "Umfassende Bedarfsanalyse für ein digitales Transformationsprojekt eines Kunden, einschließlich einer E-Commerce-Website, eines Kommunikationsmoduls mit Sage sowie SEO- und Hosting-Aspekten.",
    "proj.case.p2": "Das Projekt umfasste auch den Vorschlag einer angepassten E-Commerce-Lösung und die Vorbereitung eines Schulungsplans für die Endnutzer.",
    "proj.case.tech": "Geschäftsanalyse • E-Commerce • Sage-Integration • Hosting • Anwenderschulung",

    // Projets Persos
    "personal.title": "Persönliche Projekte",
    "personal.shop.title": "Ladenverwaltungs-Anwendung",
    "personal.resto.title": "Restaurant-Website",
    "personal.notebook.title": "Notizblock, komplett mit Adobe Illustrator entworfen",

    // Footer
    "footer.phone": "Telefon",

    // Hobbies
    "hobbies.title": "Hobbys und Interessen",
    "hobbies.tennis.title": "Tennis",
    "hobbies.tennis.desc": "Regelmäßiges Training auf dem Platz. Ein Sport, der mir Dynamik und Teamgeist verleiht.",
    "hobbies.crafts.title": "Nähen, Stricken und Sticken",
    "hobbies.crafts.desc": "Kreation einzigartiger Stücke, sorgfältige Textilarbeit und Leidenschaft für Handgemachtes.",
    "hobbies.design.title": "Grafikdesign",
    "hobbies.design.desc": "Erstellung von Visuals, Illustrationen und Markenidentitäten. Ich verbinde gerne Ästhetik mit Funktionalität."
    
  }
};

function changeLanguage(language) {
  if (!translations[language]) return;

  document.documentElement.lang = language;

  // Parcourt tous les éléments avec l'attribut data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    
    // Vérifie si la traduction existe
    if (translations[language] && translations[language][key] !== undefined) {
      // Pour les éléments contenant des balises HTML internes (comme <strong>)
      if (element.innerHTML.includes('<strong') || element.innerHTML.includes('<span')) {
        element.innerHTML = translations[language][key];
      } else {
        // Pour le texte simple
        element.textContent = translations[language][key];
      }
    }
  });

  localStorage.setItem("selectedLanguage", language);
}

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("languageSelect");
  const savedLanguage = localStorage.getItem("selectedLanguage") || "fr";

  if (languageSelect) {
    languageSelect.value = savedLanguage;
    languageSelect.addEventListener("change", event => {
      changeLanguage(event.target.value);
    });
  }

  // Applique la langue sauvegardée au chargement
  changeLanguage(savedLanguage);

  // Animation au défilement
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});
