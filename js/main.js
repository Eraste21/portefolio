/**
 * main.js
 * Point d'entrée du portfolio : initialisation du rendu, navigation,
 * scroll fluide, menu burger mobile et animations AOS.
 */

import { renderAll } from "./render.js";

/**
 * Initialise la bibliothèque AOS (Animate On Scroll) après le rendu dynamique.
 * refresh() est nécessaire car le contenu est injecté après le chargement initial.
 */
function initAOS() {
  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
  });
}

/**
 * Met à jour l'année affichée dans le footer.
 */
function initFooterYear() {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Gère l'ouverture/fermeture du menu burger sur mobile.
 */
function initMobileMenu() {
  const burger = document.getElementById("nav-burger");
  const menu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav__link");

  if (!burger || !menu) return;

  /** Bascule l'état ouvert/fermé du menu */
  function toggleMenu() {
    const isOpen = menu.classList.toggle("active");
    burger.classList.toggle("active", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  }

  burger.addEventListener("click", toggleMenu);

  /* Ferme le menu au clic sur un lien (navigation mobile) */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Met en surbrillance le lien de navigation correspondant à la section visible.
 * Utilise Intersection Observer pour détecter la section active au scroll.
 */
function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Ajoute un effet de transparence au header au scroll.
 */
function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 50);
  });
}

/**
 * Initialisation globale au chargement du DOM.
 */
document.addEventListener("DOMContentLoaded", () => {
  /* 1. Rendu dynamique du contenu depuis data.js */
  renderAll();

  /* 2. AOS après injection du HTML dynamique */
  initAOS();
  AOS.refresh();

  /* 3. Comportements interactifs */
  initFooterYear();
  initMobileMenu();
  initActiveNavLink();
  initHeaderScroll();
});
