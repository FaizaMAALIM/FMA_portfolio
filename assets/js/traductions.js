
const translations = {
  fr: {
    "about.title": "À propos",
    "about.description": "Jeune diplômée en MIAGE, spécialisée en Informatique, Gestion d'Entreprises et Applications métiers. J’évolue à l’interface entre les équipes techniques et les utilisateurs, avec une expérience significative en support, développement et pilotage applicatif.",

    "header.degree": "Master 2 Méthodes Informatiques Appliquées à la Gestion des Entreprises MIAGE",

    "experience.title": "Expériences professionnelles",
    "experience.job1": "Chef de projet Informatique – Applications GMAO",
    "experience.job2": "Stagiaire Support et Développement Informatique",

    "recommendation.title": "Lettre de recommandation",
    "recommendation.button": "Consulter la recommandation",

    "skills.title": "Compétences",
    "certifications.title": "Certifications",
    "projects.title": "Projets",
    "personal.title": "Projets personnels",

    "footer.linkedin": "LinkedIn",
    "footer.email": "Email",
    "footer.phone": "Téléphone"
  },

  en: {
    "about.title": "About",
    "about.description": "MIAGE graduate specializing in IT, Business Management and Business Applications. I work at the intersection of technical teams and end users, with significant experience in support, software development and application management.",

    "header.degree": "Master's Degree in Applied Computer Science for Business Management (MIAGE)",

    "experience.title": "Professional Experience",
    "experience.job1": "IT Project Manager – CMMS Applications",
    "experience.job2": "IT Support et Development Intern",

    "recommendation.title": "Letter of Recommendation",
    "recommendation.button": "View Recommendation",

    "skills.title": "Skills",
    "certifications.title": "Certifications",
    "projects.title": "Projects",
    "personal.title": "Personal Projects",

    "footer.linkedin": "LinkedIn",
    "footer.email": "Email",
    "footer.phone": "Phone"
  },

  de: {
    "about.title": "Über mich",
    "about.description": "MIAGE-Absolventin mit Schwerpunkt Informatik, Unternehmensmanagement und Geschäftsanwendungen. Ich arbeite an der Schnittstelle zwischen technischen Teams und Anwendern und verfüge über umfangreiche Erfahrung in den Bereichen Support, Softwareentwicklung und Anwendungsmanagement.",

    "header.degree": "Masterabschluss in Angewandter Informatik für Unternehmensmanagement (MIAGE)",

    "experience.title": "Berufserfahrung",
    "experience.job1": "IT-Projektmanagerin – CMMS-Anwendungen",
    "experience.job2": "Praktikantin im IT-Support und in der Softwareentwicklung",

    "recommendation.title": "Empfehlungsschreiben",
    "recommendation.button": "Empfehlungsschreiben ansehen",

    "skills.title": "Kenntnisse und Fähigkeiten",
    "certifications.title": "Zertifizierungen",
    "projects.title": "Projekte",
    "personal.title": "Persönliche Projekte",

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

  languageSelect.value = savedLanguage;
  changeLanguage(savedLanguage);

  languageSelect.addEventListener("change", event => {
    changeLanguage(event.target.value);
  });
});
