/**
 * render.js
 * Fonctions de rendu dynamique : génèrent le HTML à partir des données de data.js
 * et l'injectent dans les conteneurs prévus dans index.html.
 */

import {
  skills,
  skillCategories,
  softSkills,
  languages,
  interests,
  education,
  experience,
  project,
  stackIcons,
  contact,
} from "./data.js";

/**
 * Retourne le HTML d'un tag simple (savoir-être, langue, centre d'intérêt).
 * @param {string} label - Texte affiché dans le tag
 * @param {number} index - Index pour le décalage AOS en cascade
 * @returns {string} HTML du tag
 */
function renderTag(label, index = 0) {
  return `<li class="tag" data-aos="fade-up" data-aos-delay="${index * 50}">${label}</li>`;
}

/**
 * Affiche les tags de savoir-être, langues et centres d'intérêt.
 */
export function renderAboutTags() {
  const softSkillsList = document.getElementById("soft-skills-list");
  const languagesList = document.getElementById("languages-list");
  const interestsList = document.getElementById("interests-list");

  if (softSkillsList) {
    softSkillsList.innerHTML = softSkills.map(renderTag).join("");
  }
  if (languagesList) {
    languagesList.innerHTML = languages.map(renderTag).join("");
  }
  if (interestsList) {
    interestsList.innerHTML = interests.map(renderTag).join("");
  }
}

/**
 * Génère une carte de compétence avec icône Devicon officielle.
 * @param {Object} skill - Objet compétence depuis data.js
 * @param {number} index - Index pour l'animation AOS en cascade
 * @returns {string} HTML de la carte compétence
 */
function renderSkillCard(skill, index) {
  return `
    <div class="skill-card" data-aos="zoom-in" data-aos-delay="${index * 30}">
      <i class="${skill.icon} skill-icon" aria-hidden="true"></i>
      <span class="skill-name">${skill.name}</span>
    </div>
  `;
}

/**
 * Affiche les compétences groupées par catégorie (Front-end, Back-end, Outils).
 */
export function renderSkills() {
  const container = document.getElementById("skills-categories");
  if (!container) return;

  /* Regroupe les compétences par catégorie */
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  /* Ordre d'affichage des catégories */
  const categoryOrder = ["frontend", "backend", "tools"];

  container.innerHTML = categoryOrder
    .filter((cat) => grouped[cat])
    .map((cat, catIndex) => {
      const items = grouped[cat]
        .map((skill, i) => renderSkillCard(skill, catIndex * 10 + i))
        .join("");

      return `
        <div class="skills__category" data-aos="fade-up" data-aos-delay="${catIndex * 100}">
          <h3 class="skills__category-title">${skillCategories[cat]}</h3>
          <div class="skills__grid">${items}</div>
        </div>
      `;
    })
    .join("");
}

/**
 * Affiche une entrée d'expérience professionnelle (format timeline).
 * @param {Object} exp - Objet expérience depuis data.js
 * @param {number} index - Index pour l'animation AOS
 * @returns {string} HTML de l'entrée timeline
 */
function renderExperienceItem(exp, index) {
  const missionsHtml = exp.missions
    .map((mission) => `<li>${mission}</li>`)
    .join("");

  return `
    <article class="timeline__item" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="timeline__header">
        <h3 class="timeline__role">${exp.role} — <span class="timeline__company">${exp.company}</span></h3>
        <div class="timeline__meta">
          <span>${exp.contract}</span>
          <span>${exp.period}</span>
          <span>${exp.location}</span>
        </div>
      </div>
      <ul class="timeline__missions">${missionsHtml}</ul>
    </article>
  `;
}

/**
 * Injecte les expériences professionnelles dans le conteneur #experience-list.
 */
export function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  container.innerHTML = experience
    .map((exp, i) => renderExperienceItem(exp, i))
    .join("");
}

/**
 * Affiche une entrée de formation (format timeline).
 * @param {Object} edu - Objet formation depuis data.js
 * @param {number} index - Index pour l'animation AOS
 * @returns {string} HTML de l'entrée timeline
 */
function renderEducationItem(edu, index) {
  return `
    <article class="timeline__item" data-aos="fade-up" data-aos-delay="${index * 80}">
      <div class="timeline__header">
        <h3 class="timeline__role">${edu.school}</h3>
        <p class="timeline__degree">${edu.degree}</p>
        <div class="timeline__meta">
          <span>${edu.period}</span>
          <span>${edu.location}</span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Injecte le parcours de formation dans le conteneur #education-list.
 */
export function renderEducation() {
  const container = document.getElementById("education-list");
  if (!container) return;

  container.innerHTML = education
    .map((edu, i) => renderEducationItem(edu, i))
    .join("");
}

/**
 * Retourne le badge d'une techno pour la stack du projet.
 * Render utilise un SVG Simple Icons car absent de Devicon.
 * @param {string} tech - Nom de la technologie
 * @returns {string} HTML du badge stack
 */
function renderStackBadge(tech) {
  /* Render : logo SVG officiel (Simple Icons) */
  if (tech === "Render") {
    return `
      <span class="stack-badge-render">
        <svg viewBox="0 0 24 24" fill="#46E3B7" aria-hidden="true">
          <path d="M24 10.8v2.4c0 .66-.54 1.2-1.2 1.2H18v6c0 .66-.54 1.2-1.2 1.2h-2.4c-.66 0-1.2-.54-1.2-1.2v-6h-6v6c0 .66-.54 1.2-1.2 1.2H4.8c-.66 0-1.2-.54-1.2-1.2v-6H1.2C.54 14.4 0 13.86 0 13.2v-2.4c0-.66.54-1.2 1.2-1.2h2.4V4.8c0-.66.54-1.2 1.2-1.2h2.4c.66 0 1.2.54 1.2 1.2v2.4h6V4.8c0-.66.54-1.2 1.2-1.2h2.4c.66 0 1.2.54 1.2 1.2v2.4h2.4c.66 0 1.2.54 1.2 1.2z"/>
        </svg>
        Render
      </span>
    `;
  }

  const iconClass = stackIcons[tech];
  if (iconClass) {
    return `
      <span class="project-card__stack-item">
        <i class="${iconClass}" aria-hidden="true"></i>
        ${tech}
      </span>
    `;
  }

  return `<span class="project-card__stack-item">${tech}</span>`;
}

/**
 * Affiche la carte du projet en cours avec sa stack technique.
 */
export function renderProject() {
  const container = document.getElementById("project-card");
  if (!container) return;

  const stackHtml = project.stack.map(renderStackBadge).join("");

  container.innerHTML = `
    <article class="project-card" data-aos="fade-up">
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__desc">${project.description}</p>
      <div class="project-card__stack">${stackHtml}</div>
    </article>
  `;
}

/**
 * Affiche les coordonnées de contact avec icônes cliquables.
 */
export function renderContact() {
  const container = document.getElementById("contact-info");
  if (!container) return;

  container.innerHTML = `
    <div class="contact__card" data-aos="fade-up" data-aos-delay="0">
      <div class="contact__icon" aria-hidden="true">📞</div>
      <div>
        <p class="contact__label">Téléphone</p>
        <p class="contact__value"><a href="tel:+33744968303">${contact.phone}</a></p>
      </div>
    </div>
    <div class="contact__card" data-aos="fade-up" data-aos-delay="80">
      <div class="contact__icon" aria-hidden="true">✉️</div>
      <div>
        <p class="contact__label">Email</p>
        <p class="contact__value"><a href="mailto:${contact.email}">${contact.email}</a></p>
      </div>
    </div>
    <div class="contact__card" data-aos="fade-up" data-aos-delay="160">
      <div class="contact__icon" aria-hidden="true">📍</div>
      <div>
        <p class="contact__label">Localisation</p>
        <p class="contact__value">${contact.location}</p>
      </div>
    </div>
    <div class="contact__card" data-aos="fade-up" data-aos-delay="240">
      <div class="contact__icon"><i class="devicon-github-original colored" aria-hidden="true"></i></div>
      <div>
        <p class="contact__label">GitHub</p>
        <p class="contact__value">
          <a href="${contact.githubUrl}" target="_blank" rel="noopener noreferrer">${contact.github}</a>
        </p>
      </div>
    </div>
  `;
}

/**
 * Point d'entrée : appelle toutes les fonctions de rendu.
 */
export function renderAll() {
  renderAboutTags();
  renderSkills();
  renderExperience();
  renderProject();
  renderEducation();
  renderContact();
}
