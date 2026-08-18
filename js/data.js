/**
 * data.js
 * Source unique de vérité pour tout le contenu dynamique du portfolio.
 * Pour ajouter/modifier une compétence, une formation ou une expérience,
 * éditer uniquement ce fichier — le HTML et render.js restent inchangés.
 */

/** Compétences techniques avec icônes Devicon officielles */
export const skills = [
  /* Front-end */
  { name: "React", category: "frontend", icon: "devicon-react-original colored" },
  { name: "TypeScript", category: "frontend", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", category: "frontend", icon: "devicon-javascript-plain colored" },
  { name: "HTML5", category: "frontend", icon: "devicon-html5-plain colored" },
  { name: "CSS3", category: "frontend", icon: "devicon-css3-plain colored" },
  { name: "Tailwind CSS", category: "frontend", icon: "devicon-tailwindcss-plain colored" },
  { name: "Bootstrap", category: "frontend", icon: "devicon-bootstrap-plain colored" },

  /* Back-end & données */
  { name: "NestJS", category: "backend", icon: "devicon-nestjs-plain colored" },
  { name: "MySQL", category: "backend", icon: "devicon-mysql-plain colored" },
  { name: "Python", category: "backend", icon: "devicon-python-plain colored" },
  { name: "PostgreSQL", category: "backend", icon: "devicon-postgresql-plain colored" },

  /* Outils & environnement */
  { name: "Docker", category: "tools", icon: "devicon-docker-plain colored" },
  { name: "Git", category: "tools", icon: "devicon-git-plain colored" },
  { name: "GitHub", category: "tools", icon: "devicon-github-original colored" },
  { name: "Linux", category: "tools", icon: "devicon-linux-plain colored" },
  { name: "Figma", category: "tools", icon: "devicon-figma-plain colored" },
  { name: "WordPress", category: "tools", icon: "devicon-wordpress-plain colored" },
  { name: "Postman", category: "tools", icon: "devicon-postman-plain colored" },
];

/** Libellés des catégories de compétences */
export const skillCategories = {
  frontend: "Front-end",
  backend: "Back-end & données",
  tools: "Outils & environnement",
};

/** Savoir-être affichés dans la section À propos */
export const softSkills = [
  "Autonomie",
  "Curiosité",
  "Travail en équipe",
  "Adaptabilité",
  "Organisation",
];

/** Langues parlées */
export const languages = [
  "Français (maternel)",
  "Anglais (basique)",
];

/** Centres d'intérêt (tags discrets) */
export const interests = [
  "Musique",
  "Sport",
  "Lecture",
  "Cadrage"
];

/** Parcours de formation (du plus récent au plus ancien) */
export const education = [
  {
    school: "ESGI Lille",
    degree: "3ᵉ année",
    period: "2025 – aujourd'hui",
    location: "Lille, France",
  },
  {
    school: "JUNIA ISEN",
    degree: "1ère année Cycle Ingénieur",
    period: "2024 – 2025",
    location: "Lille, France",
  },
  {
    school: "BEM School of Technology",
    degree: "Classe préparatoire",
    period: "2022 – 2024",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    school: "Cours Secondaire Méthodiste de Cocody",
    degree: "BAC",
    period: "2021 – 2022",
    location: "Abidjan, Côte d'Ivoire",
  },
];

/** Expériences professionnelles */
export const experience = [
  {
    role: "Développeur Web",
    company: "Planète Aroma",
    contract: "Contrat d'apprentissage",
    period: "23 février 2026 – 23 août 2026",
    location: "Lille",
    missions: [
      "Conception d'une application web fullstack de gestion de stock adaptée aux besoins de l'entreprise.",
      "Gestion du projet en autonomie : analyse du besoin, choix techniques, organisation des données et suivi des livrables.",
      "Travail proche d'un chef de projet : planification, documentation, propositions de base de données, MCD/MLD et interface utilisateur.",
      "Création de supports de communication pour les événements de l'entreprise.",
    ],
  },
];

/** Projet en cours */
export const project = {
  title: "Outil fullstack de gestion de stock",
  description:
    "Application web actuellement conçue pour centraliser la gestion des produits, lots, fournisseurs, stocks, commandes, fiches analytiques et alertes. Approche évolutive, intégrant progressivement les retours des réunions avec l'entreprise.",
  stack: ["React", "TypeScript", "NestJS", "MySQL", "Docker", "Render"],
};

/**
 * Correspondance nom de techno → classe Devicon pour le rendu du projet.
 * Render n'est pas disponible sur Devicon : traité séparément dans render.js.
 */
export const stackIcons = {
  React: "devicon-react-original colored",
  TypeScript: "devicon-typescript-plain colored",
  NestJS: "devicon-nestjs-plain colored",
  MySQL: "devicon-mysql-plain colored",
  Docker: "devicon-docker-plain colored",
};

/** Coordonnées de contact */
export const contact = {
  phone: "+33 7 44 96 83 03",
  email: "e.konan@myskolae.fr",
  location: "Lille, France",
  github: "github.com/Eraste21",
  githubUrl: "https://github.com/Eraste21",
};
