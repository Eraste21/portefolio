# DEVBOOK — Portfolio Eraste Konan

> Journal de développement : toutes les tâches accomplies pour la création du site portfolio, dans l'ordre chronologique.

---

## 1. Analyse du brief (`README.md`)

| Tâche | Statut |
|---|---|
| Lecture intégrale du brief de conception | ✅ |
| Identification des contraintes : one-page, HTML/CSS/JS vanilla, pas de build tool | ✅ |
| Recensement du contenu réel (textes, coordonnées, expériences, formation) | ✅ |
| Identification de la direction artistique : noir / blanc / teal, ambiance "dev de nuit" | ✅ |
| Liste des 18 compétences avec icônes Devicon obligatoires | ✅ |

---

## 2. Mise en place de l'arborescence

Structure créée conformément à la section 5.2 du README :

```
cursor-dev/
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
├── assets/
│   └── profile.png
├── README.md
└── DEVBOOK.md
```

| Tâche | Statut |
|---|---|
| Création des dossiers `css/`, `js/`, `assets/` | ✅ |
| Copie de l'image de profil fournie vers `assets/profile.png` | ✅ |

---

## 3. Fichier `index.html`

| Tâche | Statut |
|---|---|
| Page HTML5 sémantique unique avec ancres (`#hero`, `#about`, `#skills`, etc.) | ✅ |
| Chargement Google Fonts : Sora, Inter, JetBrains Mono | ✅ |
| Chargement Devicon via CDN (logos officiels des technos) | ✅ |
| Chargement AOS via CDN (animations au scroll) | ✅ |
| Navigation fixe avec liens d'ancrage vers chaque section | ✅ |
| Menu burger mobile (`aria-label`, `aria-expanded`, `aria-controls`) | ✅ |
| Section Hero : nom, titre, stack, boutons CTA, photo de profil | ✅ |
| Section À propos : texte réel + conteneurs vides pour tags dynamiques | ✅ |
| Sections répétitives vides (`#skills-categories`, `#experience-list`, etc.) | ✅ |
| Attribut `alt` descriptif sur l'image de profil | ✅ |
| Script ES module `js/main.js` en fin de body | ✅ |

---

## 4. Feuilles de style CSS

### 4.1 `css/variables.css`

| Tâche | Statut |
|---|---|
| Custom properties pour la palette noir / blanc / teal | ✅ |
| Variables typographiques (Sora, Inter, JetBrains Mono) | ✅ |
| Espacements, rayons, ombres et transitions réutilisables | ✅ |

### 4.2 `css/base.css`

| Tâche | Statut |
|---|---|
| Reset minimal (`box-sizing`, marges) | ✅ |
| Styles globaux body, liens, images | ✅ |
| Composants réutilisables : `.container`, `.btn`, `.tag` | ✅ |
| Titres de section avec underline teal | ✅ |

### 4.3 `css/sections.css`

| Tâche | Statut |
|---|---|
| Header fixe avec backdrop-filter et nav responsive | ✅ |
| Menu burger + menu mobile déroulant | ✅ |
| Section Hero : grille 2 colonnes, overlay lumineux, image encadrée | ✅ |
| Section À propos : grille texte + détails (savoir-être, langues, intérêts) | ✅ |
| Section Compétences : grille par catégorie, cartes avec hover scale + glow | ✅ |
| Timeline partagée Expérience / Formation | ✅ |
| Carte projet avec badges stack | ✅ |
| Section Contact : grille de cartes cliquables | ✅ |
| Footer avec année dynamique | ✅ |
| Media queries mobile-first (900px, 768px, 480px) | ✅ |

### 4.4 `css/animations.css`

| Tâche | Statut |
|---|---|
| Keyframe `glow-pulse` pour effet teal au survol des compétences | ✅ |
| Soulignement animé des liens de navigation actifs | ✅ |

---

## 5. JavaScript — Architecture données / rendu / comportement

### 5.1 `js/data.js`

| Tâche | Statut |
|---|---|
| Centralisation de **toutes** les données de contenu | ✅ |
| 18 compétences avec classes Devicon `colored` (vrais logos) | ✅ |
| Catégories : frontend, backend, tools | ✅ |
| Savoir-être, langues, centres d'intérêt | ✅ |
| Formation (4 entrées chronologiques) | ✅ |
| Expérience Planète Aroma avec 4 missions | ✅ |
| Projet en cours avec stack complète | ✅ |
| Coordonnées contact + URL GitHub | ✅ |
| Map `stackIcons` pour le rendu du projet | ✅ |

### 5.2 `js/render.js`

| Tâche | Statut |
|---|---|
| `renderAboutTags()` — tags savoir-être, langues, intérêts | ✅ |
| `renderSkills()` — compétences groupées par catégorie avec AOS cascade | ✅ |
| `renderExperience()` — timeline avec missions en liste | ✅ |
| `renderEducation()` — timeline formation | ✅ |
| `renderProject()` — carte projet + badges stack Devicon | ✅ |
| Badge Render via SVG Simple Icons (absent de Devicon) | ✅ |
| `renderContact()` — cartes cliquables tel/mail/GitHub | ✅ |
| `renderAll()` — point d'entrée unique | ✅ |
| Attributs `data-aos` injectés dans les templates dynamiques | ✅ |
| Commentaires JSDoc sur chaque fonction | ✅ |

### 5.3 `js/main.js`

| Tâche | Statut |
|---|---|
| Appel `renderAll()` au `DOMContentLoaded` | ✅ |
| Initialisation AOS + `AOS.refresh()` après rendu dynamique | ✅ |
| Menu burger mobile (toggle + fermeture au clic lien) | ✅ |
| Intersection Observer pour lien nav actif au scroll | ✅ |
| Année dynamique dans le footer | ✅ |
| Ombre header au scroll | ✅ |
| Commentaires sur chaque fonction | ✅ |

---

## 6. Contenu et conformité au brief

| Exigence README | Implémenté |
|---|---|
| One-page, pas de routes séparées | ✅ |
| HTML/CSS/JS vanilla, sans framework | ✅ |
| Devicon CDN, jamais d'initiales à la place des logos | ✅ |
| Couleurs noir / blanc / teal uniquement | ✅ |
| Polices Sora + Inter + JetBrains Mono | ✅ |
| Contenu réel, pas de Lorem ipsum | ✅ |
| Photo de profil intégrée au Hero | ✅ |
| Scroll fluide vers ancres (`scroll-behavior: smooth`) | ✅ |
| Responsive mobile / tablette / desktop | ✅ |
| Accessibilité de base (alt, aria, contrastes) | ✅ |
| Déployable sur GitHub Pages / Netlify sans build | ✅ |

---

## 7. Décisions techniques notables

1. **Modules ES (`type="module"`)** — Permet `export/import` entre `data.js`, `render.js` et `main.js` comme décrit dans le README. Nécessite un serveur HTTP local ou un hébergement statique (pas de `file://`).

2. **Render sans Devicon** — La techno « Render » n'existe pas sur Devicon ; un SVG officiel Simple Icons est utilisé à la place, conformément à la section 3 du README (alternative Simple Icons).

3. **PostgreSQL** — Orthographe corrigée par rapport au typo « PostgreeSQL » du README ; icône `devicon-postgresql-plain colored`.

4. **Centres d'intérêt** — Intégrés dans la section À propos (tags discrets) plutôt qu'une section dédiée, conformément à la section 4.7 optionnelle.

5. **GitHub en Hero** — Troisième bouton ghost avec logo Devicon GitHub officiel, en plus des CTA « Voir mes projets » et « Me contacter ».

---

## 8. Comment tester localement

```bash
# Depuis le dossier cursor-dev/
npx serve .
# ou
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080` (ou le port affiché).

---

## 9. Déploiement recommandé

- **GitHub Pages** : pousser le repo, activer Pages sur la branche `main`, dossier racine.
- **Netlify** : glisser-déposer le dossier ou connecter le repo — déploiement statique direct, sans étape de build.

---

## 10. Évolutions possibles (hors scope actuel)

- [ ] Lien demo / repo GitHub sur la carte projet (quand disponible)
- [ ] Favicon dédié (actuellement réutilise la photo de profil)
- [ ] Formulaire de contact (actuellement liens mailto/tel)
- [ ] Optimisation image profil (compression WebP)

---

*Généré le 19 août 2026 — Portfolio Eraste Konan*
