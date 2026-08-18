# Portfolio — Eraste Konan, Développeur Web

> Ce document est un **brief de conception** destiné à être collé dans Cursor pour générer le portfolio. Il décrit l'objectif, la direction artistique, le contenu réel et les contraintes techniques attendues. Ne pas inventer d'informations personnelles au-delà de ce qui est fourni ici.

---

## 1. Objectif du projet

Créer un site portfolio en **une seule page (one-page)**, qui défile à travers plusieurs sections ancrées (Hero, À propos, Compétences, Expérience, Projet, Formation, Contact), avec une navigation en haut de page qui scroll vers chaque ancre au clic. **Pas de pages séparées** (pas de `/about`, `/projects`, etc.) : tout se trouve sur une seule page, découpée visuellement en sections claires. Le site s'adresse à **Eraste Konan**, développeur web fullstack en formation, afin de présenter son profil, ses compétences, son expérience et son projet en cours à des recruteurs, entreprises d'alternance ou clients freelance.

Le site doit donner une impression **sobre, sérieuse et technique** — celle d'un développeur concentré et rigoureux — tout en restant moderne et agréable à parcourir.

---

## 2. Direction artistique

### Palette de couleurs

Le thème est **noir / blanc / bleu tirant vers le vert (teal)**. Fond sombre dominant, texte clair, accent teal utilisé avec parcimonie (titres, liens, bordures actives, icônes de compétences, boutons).

| Rôle | Couleur | Code (proposition) |
|---|---|---|
| Fond principal | Noir profond / quasi noir | `#0A0A0B` |
| Fond secondaire (cartes, sections) | Gris très sombre | `#141517` |
| Texte principal | Blanc cassé | `#F5F5F5` |
| Texte secondaire | Gris clair | `#A0A3A8` |
| Accent principal (teal/vert-bleu) | Teal vif | `#14E0B4` |
| Accent hover / variante | Teal plus foncé | `#0FBF9A` |
| Bordures / séparateurs | Gris foncé | `#25272B` |

Ces codes sont des propositions de départ — Cursor peut ajuster légèrement les nuances tant que l'esprit **noir / blanc / teal** est respecté. Éviter tout autre accent coloré (pas de violet, rouge, orange, jaune).

### Ambiance visuelle de référence

Une image de moodboard est fournie : un développeur de nuit, éclairage tamisé (lampe de bureau chaude sur fond sombre), plusieurs écrans avec du code coloré, poster "BUILD / SOLVE / REPEAT — Eat Sleep Code", mug "Keep Calm and Code". L'esprit à retranscrire sur le site (sans reproduire l'image elle-même) :
- contraste fort entre fond sombre et éléments lumineux/accentués ;
- typographie moderne, un peu technique (monospace pour les bouts de code ou labels, sans-serif propre pour le reste) ;
- légers effets de lumière/glow teal sur les éléments interactifs (boutons, icônes au survol) pour rappeler l'éclairage de l'écran dans l'image ;
- sensation "atelier de développeur la nuit" : calme, concentré, pas flashy.

### Typographie (choix arrêté)
- **Titres** : `Outfit` (Google Fonts) — poids 600/700 pour les grands titres, 500 pour les sous-titres.
- **Corps de texte** : `Karla` (Google Fonts) — poids 400 pour le texte courant, 500 pour les éléments mis en avant.
- **Éléments techniques** (badges de compétences, tags de stack, extraits de code) : `JetBrains Mono` — pour créer un contraste "technique" avec le duo Outfit/Karla plus épuré.

Charger ces trois polices via `next/font`, `@fontsource`, ou un import Google Fonts classique dans le `index.html` / `layout`, et les déclarer dans `tailwind.config` (`fontFamily.sans`, `fontFamily.heading`, `fontFamily.mono`).

---

## 3. ⚠️ Exigence obligatoire : vraies icônes de technologies

**Pour chaque compétence technique affichée, utiliser le vrai logo officiel de la technologie — jamais une lettre, un sigle ou une abréviation textuelle en guise de logo.**

Concrètement :
- Utiliser **[Devicon](https://devicon.dev/)** via CDN (voir section 5) : chaque compétence est une balise `<i class="devicon-[nom-techno]-[variante] colored"></i>` qui affiche le vrai logo officiel de la technologie. Alternative possible : SVG téléchargés depuis [Simple Icons](https://simpleicons.org/) si une techno n'est pas disponible sur Devicon.
- Chaque logo doit garder si possible sa couleur de marque d'origine (classe `colored` de Devicon, ou couleur définie manuellement), même si le reste de la palette du site reste noir/blanc/teal — ex. logo React en cyan, logo Docker en bleu, etc.
- Ne jamais afficher un simple badge avec juste les initiales (comme "R", "JS", "TS") à la place du logo.

### Liste des compétences à représenter (avec leur icône officielle)

**Langages & frameworks front-end**
- React
- TypeScript
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- Bootstrap

**Back-end & données**
- NestJS
- MySQL
- Python
- PostgreeSQL

**Outils & environnement**
- Docker
- Git
- GitHub
- Linux
- Figma
- WordPress
- Postman

---

## 4. Structure des sections

### 4.1 Hero / En-tête
- Nom : **Eraste Konan**
- Titre : **Développeur Web** (fullstack, en formation)
- Sous-titre / stack mise en avant : `React · TypeScript · NestJS · MySQL · Docker`
- Bouton principal : "Voir mes projets" (ancre vers la section Projets)
- Bouton secondaire : "Me contacter" (ancre vers la section Contact) ou lien direct GitHub
- Photo de profil fournie (image jointe, ambiance sombre/code) à intégrer en visuel d'accroche (portrait ou en arrière-plan léger derrière le hero, avec overlay sombre pour garder la lisibilité du texte).

### 4.2 À propos / Profil
Texte à reprendre (reformulable légèrement mais sans changer le sens) :

> Étudiant en 3ᵉ année à l'ESGI Lille, je m'oriente vers le développement web fullstack. Curieux, autonome et motivé, j'aime concevoir des solutions utiles, structurées et adaptées à des besoins concrets. Mon expérience actuelle chez Planète Aroma me permet de travailler sur un projet complet, depuis l'analyse du besoin jusqu'à la conception de l'application.

Savoir-être à illustrer sous forme de tags ou petite liste : Autonomie, Curiosité, Travail en équipe, Adaptabilité, Organisation.

Langues : Français (maternel), Anglais (basique).

### 4.3 Compétences
Grille d'icônes (voir section 3) organisée par catégories : **Front-end**, **Back-end & données**, **Outils**. Chaque icône avec son nom en-dessous, animation légère au survol (léger scale + glow teal).

### 4.4 Expérience professionnelle
Une entrée (format timeline ou carte) :

- **Développeur Web — Planète Aroma**
- Contrat d'apprentissage | 23 février 2026 – 23 août 2026 | Lille
- Missions :
  - Conception d'une application web fullstack de gestion de stock adaptée aux besoins de l'entreprise.
  - Gestion du projet en autonomie : analyse du besoin, choix techniques, organisation des données et suivi des livrables.
  - Travail proche d'un chef de projet : planification, documentation, propositions de base de données, MCD/MLD et interface utilisateur.
  - Création de supports de communication pour les événements de l'entreprise.

### 4.5 Projet en cours
- **Outil fullstack de gestion de stock**
- Description : application web actuellement conçue pour centraliser la gestion des produits, lots, fournisseurs, stocks, commandes, fiches analytiques et alertes. Approche évolutive, intégrant progressivement les retours des réunions avec l'entreprise.
- Stack : `React` `TypeScript` `NestJS` `MySQL` `Docker` `Render`
- Afficher sous forme de carte "projet" avec badges technos (mêmes vraies icônes que section compétences) et, si disponible plus tard, un lien vers le repo GitHub ou une démo.

### 4.6 Formation
Timeline ou liste chronologique (du plus récent au plus ancien) :
- **ESGI Lille** — 3ᵉ année — 2025 à aujourd'hui — Lille, France
- **JUNIA ISEN** — 1ère année Cycle Ingénieur — 2024–2025 — Lille, France
- **BEM School of Technology** — Classe préparatoire — 2022–2024 — Abidjan, Côte d'Ivoire
- **Cours Secondaire Méthodiste de Cocody** — BAC — 2021–2022 — Abidjan, Côte d'Ivoire

### 4.7 Centres d'intérêt (optionnel, en fin de page ou dans la section À propos)
Musique, Sport, Lecture — sous forme de petits tags discrets, pas une section majeure.

### 4.8 Contact / Footer
- Téléphone : +33 7 44 96 83 03
- Email : e.konan@myskolae.fr
- Localisation : Lille, France
- GitHub : github.com/Eraste21
- Prévoir des icônes cliquables (mail, téléphone, GitHub) avec, là aussi, les vraies icônes de marque (ex. logo GitHub officiel, pas juste "GH").

---

## 5. Stack technique recommandée pour le site lui-même

Le site doit être développé en **HTML / CSS / JavaScript vanilla** (pas de framework front-end, pas de build tool) — plus léger à héberger et plus simple à maintenir pour un développeur qui doit pouvoir modifier le contenu ou le style sans réapprendre un écosystème.

- **HTML5 sémantique** : une seule page, découpée en sections identifiées par des ancres (`<section id="hero">`, `<section id="about">`, `<section id="skills">`, `<section id="experience">`, `<section id="project">`, `<section id="education">`, `<section id="contact">`). Les sections à contenu répétitif (compétences, expérience, formation) restent **vides dans le HTML** : elles ne contiennent qu'un conteneur (ex. `<div id="skills-list"></div>`) que le JavaScript vient remplir dynamiquement (voir architecture des données ci-dessous).
- **CSS3 organisé en plusieurs fichiers** pour rester maintenable :
  - `variables.css` : toutes les couleurs (section 2), les polices (Outfit/Karla/JetBrains Mono), les espacements réutilisables, déclarés en **custom properties** (`:root { --color-bg: #0A0A0B; --color-accent: #14E0B4; --font-heading: 'Outfit', sans-serif; ... }`).
  - `base.css` : reset, styles globaux (typo, liens, boutons).
  - `sections.css` (ou un fichier par section si le projet grossit) : mise en page de chaque section, y compris le style des cartes/badges générés dynamiquement.
  - `animations.css` : keyframes et transitions CSS (hover, glow teal, etc.).
- **JavaScript organisé en plusieurs fichiers**, séparant clairement les données du comportement :
  - `data.js` : contient **toutes les informations de contenu** (compétences, expérience, formation, projet, contact) sous forme de tableaux d'objets — voir structure détaillée ci-dessous.
  - `render.js` : fonctions qui **bouclent sur les données de `data.js`** et génèrent dynamiquement le HTML correspondant dans les conteneurs prévus (via `template literals` + `innerHTML`, ou `document.createElement`).
  - `main.js` : initialisation générale (appel des fonctions de rendu au chargement), menu burger mobile, scroll fluide vers les ancres, mise en surbrillance du lien de nav actif, initialisation d'AOS.
- **Animations au scroll : [AOS – Animate On Scroll](https://michalsnik.github.io/aos/)**, chargée via CDN (`<script src="https://unpkg.com/aos@next/dist/aos.js"></script>`) : ajouter `data-aos="fade-up"` (ou `fade-in`, `zoom-in`, etc.) directement dans les templates générés par `render.js`, avec un léger décalage (`data-aos-delay`) pour un effet cascade sur les listes (compétences, formations).
- **Icônes réelles des technologies sans React** : utiliser **[Devicon](https://devicon.dev/)** via CDN (`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">`) ; le nom de la classe Devicon de chaque compétence est stocké directement dans `data.js` (voir ci-dessous) et injecté par la boucle de rendu.
- Site responsive mobile-first en CSS pur (Flexbox/Grid + media queries), testé au minimum sur mobile, tablette, desktop.
- **Déploiement** : GitHub Pages ou Netlify (déploiement statique direct du dossier, sans étape de build).

### 5.1 Architecture des données (`data.js`)

Toutes les informations réutilisables (section 4) doivent être extraites du HTML et centralisées dans `data.js`, sous une forme proche de :

```javascript
// data.js

export const skills = [
  { name: "React", category: "frontend", icon: "devicon-react-original colored" },
  { name: "TypeScript", category: "frontend", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", category: "frontend", icon: "devicon-javascript-plain colored" },
  { name: "HTML5", category: "frontend", icon: "devicon-html5-plain colored" },
  { name: "CSS3", category: "frontend", icon: "devicon-css3-plain colored" },
  { name: "Tailwind CSS", category: "frontend", icon: "devicon-tailwindcss-plain colored" },
  { name: "NestJS", category: "backend", icon: "devicon-nestjs-plain colored" },
  { name: "MySQL", category: "backend", icon: "devicon-mysql-plain colored" },
  { name: "Python", category: "backend", icon: "devicon-python-plain colored" },
  { name: "Docker", category: "tools", icon: "devicon-docker-plain colored" },
  { name: "Git", category: "tools", icon: "devicon-git-plain colored" },
  { name: "GitHub", category: "tools", icon: "devicon-github-original colored" },
  { name: "Linux", category: "tools", icon: "devicon-linux-plain colored" },
  { name: "Figma", category: "tools", icon: "devicon-figma-plain colored" },
  { name: "WordPress", category: "tools", icon: "devicon-wordpress-plain colored" },
];

export const education = [
  { school: "ESGI Lille", degree: "3ᵉ année", period: "2025 – aujourd'hui", location: "Lille, France" },
  { school: "JUNIA ISEN", degree: "1ère année Cycle Ingénieur", period: "2024 – 2025", location: "Lille, France" },
  { school: "BEM School of Technology", degree: "Classe préparatoire", period: "2022 – 2024", location: "Abidjan, Côte d'Ivoire" },
  { school: "Cours Secondaire Méthodiste de Cocody", degree: "BAC", period: "2021 – 2022", location: "Abidjan, Côte d'Ivoire" },
];

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

export const project = {
  title: "Outil fullstack de gestion de stock",
  description: "Application web actuellement conçue pour centraliser la gestion des produits, lots, fournisseurs, stocks, commandes, fiches analytiques et alertes. Approche évolutive, intégrant progressivement les retours des réunions avec l'entreprise.",
  stack: ["React", "TypeScript", "NestJS", "MySQL", "Docker", "Render"],
};

export const contact = {
  phone: "+33 7 44 96 83 03",
  email: "e.konan@myskolae.fr",
  location: "Lille, France",
  github: "github.com/Eraste21",
};
```

`render.js` doit ensuite contenir une fonction par section (`renderSkills()`, `renderEducation()`, `renderExperience()`), qui boucle avec `.map()` ou `.forEach()` sur le tableau correspondant de `data.js` et injecte le HTML généré dans le conteneur prévu. Exemple de logique attendue pour les compétences :

```javascript
function renderSkills() {
  const container = document.getElementById("skills-list");
  container.innerHTML = skills.map(skill => `
    <div class="skill-card" data-aos="zoom-in">
      <i class="${skill.icon} skill-icon"></i>
      <span class="skill-name">${skill.name}</span>
    </div>
  `).join("");
}
```

Cette architecture permet d'ajouter, modifier ou retirer une compétence, une formation ou une expérience **uniquement dans `data.js`**, sans jamais toucher au HTML ni à la logique d'affichage.

---

### 5.2 Arborescence de projet attendue

```
portfolio/
├── index.html
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── sections.css
│   └── animations.css
├── js/
│   ├── data.js
│   ├── render.js
│   └── main.js
└── assets/
    └── (photo de profil, favicon, etc.)
```

## 6. Contraintes générales
- Pas de texte "Lorem ipsum" : tout le contenu réel est fourni ci-dessus, à utiliser tel quel.
- Accessibilité de base : contrastes suffisants malgré le thème sombre (vérifier notamment le gris de texte secondaire sur fond noir), tailles de police lisibles, attributs `alt` sur les images.
- Performance : images optimisées, pas de librairie lourde inutile.
- Code propre et commenté, cohérent avec le niveau d'un développeur en formation qui doit pouvoir comprendre et faire évoluer le projet facilement.