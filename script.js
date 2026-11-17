const translations = {
  fr: {
    "about.title": "À propos",
    "about.description": "Jeune diplômée en MIAGE, spécialisée en Informatique, Gestion d'Entreprises et Applications métiers. J’évolue à l’interface entre les équipes techniques et les utilisateurs, avec une expérience significative en support, développement et pilotage applicatif.",

    "header.name": "Faiza Maalim",
    "header.job": "Chef de Projet Informatique - Applications GMAO / Développeuse Informatique",
    "header.degree": "Master 2 Méthodes Informatiques Appliquées à la Gestion des Entreprises MIAGE",

    "experience.title": "Expériences professionnelles",
    "experience.job1": "Chef de projet Informatique – Applications GMAO",
    "experience.job1.desc": "Pilotage et déploiement d'applications de gestion de maintenance assistée par ordinateur. Coordination entre les équipes techniques et les utilisateurs finaux.",
    "experience.job2": "Stagiaire Support et Développement Informatique",
    "experience.job2.desc": "Support utilisateur, résolution d'incidents et développement de fonctionnalités correctives et évolutives sur les applications internes.",

    "recommendation.title": "Lettre de recommandation",
    "recommendation.name": "Recommandation de Sevan AMPS",
    "recommendation.button": "Consulter la recommandation",

    "skills.title": "Compétences",
    "skills.desc": "Gestion de projet, Support applicatif, Développement web, SQL, Java, Gestion d'entreprise, GMAO.",

    "certifications.title": "Certifications",
    "certifications.desc": "Liste des certifications obtenues dans le domaine de l'informatique et de la gestion.",

    "projects.title": "Projets",
    "projects.desc": "Projets académiques et professionnels réalisés dans le cadre de mon cursus et de mes expériences.",

    "personal.title": "Projets personnels",
    "personal.desc": "Réalisations personnelles et initiatives menées en autonomie pour approfondir mes compétences techniques.",

    "footer.linkedin": "LinkedIn",
    "footer.email": "Email",
    "footer.phone": "Téléphone"
  },

  en: {
    "about.title": "About",
    "about.description": "MIAGE graduate specializing in IT, Business Management and Business Applications. I work at the intersection of technical teams and end users, with significant experience in support, software development and application management.",

    "header.name": "Faiza Maalim",
    "header.job": "IT Project Manager - CMMS Applications / Software Developer",
    "header.degree": "Master's Degree in Applied Computer Science for Business Management (MIAGE)",

    "experience.title": "Professional Experience",
    "experience.job1": "IT Project Manager – CMMS Applications",
    "experience.job1.desc": "Management and deployment of computerized maintenance management system applications. Coordination between technical teams and end users.",
    "experience.job2": "IT Support and Development Intern",
    "experience.job2.desc": "User support, troubleshooting, and development of corrective and evolutionary features on internal applications.",

    "recommendation.title": "Letter of Recommendation",
    "recommendation.name": "Recommendation from Sevan AMPS",
    "recommendation.button": "View Recommendation",

    "skills.title": "Skills",
    "skills.desc": "Project Management, Application Support, Web Development, SQL, Java, Business Management, CMMS.",

    "certifications.title": "Certifications",
    "certifications.desc": "List of certifications obtained in the fields of IT and management.",

    "projects.title": "Projects",
    "projects.desc": "Academic and professional projects completed during my studies and experiences.",

    "personal.title": "Personal Projects",
    "personal.desc": "Personal achievements and initiatives undertaken independently to deepen my technical skills.",

    "footer.linkedin": "LinkedIn",
    "footer.email": "Email",
    "footer.phone": "Phone"
  },

  de: {
    "about.title": "Über mich",
    "about.description": "MIAGE-Absolventin mit Schwerpunkt Informatik, Unternehmensmanagement und Geschäftsanwendungen. Ich arbeite an der Schnittstelle zwischen technischen Teams und Anwendern und verfüge über umfangreiche Erfahrung in den Bereichen Support, Softwareentwicklung und Anwendungsmanagement.",

    "header.name": "Faiza Maalim",
    "header.job": "IT-Projektmanagerin - CMMS-Anwendungen / Softwareentwicklerin",
    "header.degree": "Masterabschluss in Angewandter Informatik für Unternehmensmanagement (MIAGE)",

    "experience.title": "Berufserfahrung",
    "experience.job1": "IT-Projektmanagerin – CMMS-Anwendungen",
    "experience.job1.desc": "Steuerung und Einführung von Instandhaltungsmanagementsystemen. Koordination zwischen Technik-Teams und Endanwendern.",
    "experience.job2": "Praktikantin im IT-Support und in der Softwareentwicklung",
    "experience.job2.desc": "Anwendersupport, Störungsbeseitigung sowie Entwicklung von Korrekturen und Erweiterungen für interne Anwendungen.",

    "recommendation.title": "Empfehlungsschreiben",
    "recommendation.name": "Empfehlung von Sevan AMPS",
    "recommendation.button": "Empfehlungsschreiben ansehen",

    "skills.title": "Kenntnisse und Fähigkeiten",
    "skills.desc": "Projektmanagement, Anwendungsbetreuung, Webentwicklung, SQL, Java, Unternehmensmanagement, GMAO.",

    "certifications.title": "Zertifizierungen",
    "certifications.desc": "Liste der erworbenen Zertifizierungen im IT- und Managementbereich.",

    "projects.title": "Projekte",
    "projects.desc": "Im Rahmen meines Studiums und meiner beruflichen Tätigkeiten realisierte Projekte.",

    "personal.title": "Persönliche Projekte",
    "personal.desc": "Eigenständige Initiativen und private Projekte zur Vertiefung meiner technischen Kenntnisse.",

    "footer.linkedin": "LinkedIn",
    "footer.email": "E-Mail",
    "footer.phone": "Telefon"
  }
};

function changeLanguage(language) {
  if (!translations[language]) return;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    const translation = translations[language][key];

    if (translation !== undefined) {
      element.textContent = translation;
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

  changeLanguage(savedLanguage);

  // Animation au défilement (Intersection Observer)
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
