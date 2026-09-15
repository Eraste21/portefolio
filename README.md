# Portfolio — Eraste Konan

Portfolio personnel d'Eraste Konan, développeur web fullstack en formation à l'ESGI Lille, en première année de Master. Le site présente mon profil, mes compétences, mon parcours et mes projets sur une seule page.

## Fonctionnalités

- Navigation fixe vers les sections Accueil, À propos, Compétences, Expérience, Projets, Formation et Contact.
- Mise en page responsive et menu burger à partir de 960 px et en dessous.
- Mode clair / sombre accessible dans la topbar via un bouton carré de **36 × 36 px**, avec une icône soleil ou lune et un libellé accessible.
- Thème sombre par défaut ; choix conservé dans `localStorage` sous la clé `portfolio-theme` et restauré avant l'affichage. Si le stockage est bloqué, la bascule fonctionne pour la page en cours.
- Compétences regroupées par catégorie, avec logos des technologies.
- Cartes de projets avec liens facultatifs vers une démonstration et un dépôt GitHub.
- Animations au défilement et mise en évidence de la section active dans la navigation.
- Liens GitHub et LinkedIn dans l'accueil et les contacts.

## Technologies

Le portfolio utilise **HTML, CSS et JavaScript natif**, sans framework, gestionnaire de paquets ni étape de compilation. Cette structure permet de modifier le contenu et de servir directement les fichiers statiques.

- CSS : variables de thème, Flexbox, Grid et media queries.
- JavaScript : modules ES pour les données, le rendu et l'initialisation ; script indépendant pour le thème.
- AOS : animations au défilement, chargé via CDN.
- Devicon : icônes des technologies, chargé via CDN ; logo ExpressJS chargé depuis son site.
- Google Fonts : **Space Grotesk** pour les titres, **Inter** pour le texte et **JetBrains Mono** pour les éléments techniques.

La palette conserve un accent turquoise dans les deux thèmes, avec une nuance plus sombre en mode clair pour la lisibilité. Une connexion Internet est nécessaire pour charger les ressources externes. Le fonctionnement complet hors ligne n'est pas pris en charge.

## Lancer le site en local

Prérequis : **Python 3** et un navigateur récent. Aucune installation de dépendances ni variable d'environnement n'est nécessaire.

Depuis la racine du dépôt :

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Ouvrir ensuite [le portfolio local](http://127.0.0.1:8080). Arrêter le serveur avec `Ctrl+C`.

Sur Windows, si Python est accessible via le lanceur `py` :

```powershell
py -m http.server 8080 --bind 127.0.0.1
```

Utiliser un serveur HTTP local : l'ouverture directe de `index.html` avec une URL `file://` peut empêcher le chargement des modules JavaScript.

## Organisation du dépôt

```text
portefolio/
├── index.html          # Structure de la page, accueil et texte de présentation
├── assets/
│   └── profile.png     # Image de profil, logo de navigation et favicon
├── css/
│   ├── variables.css  # Couleurs des deux thèmes, polices et espacements
│   ├── base.css       # Styles globaux, boutons et tags
│   ├── sections.css   # Mise en page, topbar et responsive
│   └── animations.css # Animations CSS et effets au survol
├── js/
│   ├── data.js        # Compétences, parcours, projets et contacts
│   ├── render.js      # Génération du contenu à partir des données
│   ├── main.js        # Initialisation, navigation et animations AOS
│   └── theme.js       # Restauration et bascule du thème
├── README.md          # Présentation et utilisation du projet
└── DEVBOOK.md         # Historique des décisions, livraisons et vérifications
```

## Modifier le portfolio

- **Accueil et présentation** : modifier `index.html`.
- **Compétences, savoir-être, langues, intérêts, expériences, formations et projets** : modifier les tableaux de `js/data.js`.
- **Contacts** : modifier l'objet `contact` dans `js/data.js`. Les liens GitHub et LinkedIn de l'accueil sont aussi présents dans `index.html`.
- **Ajouter un projet** : ajouter un objet au tableau `projects` avec `title`, `description` et `stack`. Les champs `githubUrl` et `siteUrl` sont facultatifs ; leurs liens sont affichés par `js/render.js` lorsqu'ils sont renseignés.
- **Associer une icône à une technologie de projet** : compléter `stackIcons` dans `js/data.js` si nécessaire.
- **Couleurs et typographie** : modifier `css/variables.css` ; le sélecteur `:root[data-theme="light"]` définit les variantes claires.
- **Dimensions du bouton de thème et disposition de la topbar** : modifier `.theme-toggle` et les règles de navigation dans `css/sections.css`.

La résidence affichée est **Villeneuve-d'Ascq**. L'expérience chez **Planète Aroma** est située à **Valenciennes**.

## Projets présentés

- **Gestion de budget** : suivi des revenus, dépenses et transactions — React, TypeScript, Vite, Tailwind CSS, PostgreSQL et Supabase.
- **PRISMA — Profil des 4 couleurs** : questionnaire de personnalité et visualisation du profil — HTML, CSS, JavaScript et Netlify Functions.
- **Outil fullstack de gestion de stock — En cours** : projet réalisé dans le cadre du stage — React, TypeScript, NestJS, MySQL, Docker et Render.
- **Listener** : extension Chrome de lecture à voix haute du texte sélectionné — HTML, CSS et JavaScript.
- **Blobby** : jeu multijoueur en temps réel dans le navigateur — React, TypeScript, Vite, Canvas, NestJS et Socket.IO.
- **Morpion** : projet d'apprentissage de la programmation orientée objet — Python et Tkinter.

Les descriptions détaillées et les liens sont conservés dans `js/data.js`.

## Vérifications

Avec **Node.js** et **Git** installés, depuis la racine du dépôt :

```powershell
node --check js/data.js
node --check js/render.js
node --check js/main.js
node --check js/theme.js
git diff --check
```

Ces commandes vérifient la syntaxe JavaScript et les erreurs d'espacement du diff. Le dépôt ne contient actuellement ni configuration de lint/formatage ni suite de tests automatisés.

Pour vérifier le comportement dans le navigateur :

1. Contrôler les sections et les liens sur ordinateur et mobile.
2. Ouvrir le menu burger et sélectionner une section.
3. Basculer entre les deux thèmes, puis recharger la page pour vérifier la mémorisation.
4. Vérifier les boutons au clavier, les icônes et la lisibilité dans les deux thèmes.

La validation de syntaxe ne remplace pas ces contrôles visuels et interactifs. Les vérifications effectuées et leurs limites sont consignées dans [DEVBOOK.md](DEVBOOK.md).

## Hébergement

Le dossier peut être servi par un hébergeur de fichiers statiques. Publier `index.html` avec les dossiers `assets/`, `css/` et `js/` à leur emplacement relatif actuel. Aucune compilation ni service backend n'est nécessaire pour le portfolio.

## Contact

- [LinkedIn — Eraste Konan](https://www.linkedin.com/in/eraste-konan/)
- [GitHub — Eraste21](https://github.com/Eraste21)
- Email : [e.konan@myskolae.fr](mailto:e.konan@myskolae.fr)
