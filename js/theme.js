/* Applique le thème avant l'affichage pour éviter un flash au rechargement. */
(() => {
  const root = document.documentElement;
  let theme = "dark";

  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") theme = savedTheme;
  } catch {
    // Le bouton reste utilisable si le navigateur bloque le stockage.
  }

  root.dataset.theme = theme;

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");
    if (!button) return;

    function updateButton() {
      const isLight = root.dataset.theme === "light";
      button.textContent = isLight ? "☾" : "☀";
      button.setAttribute("aria-label", isLight ? "Activer le mode sombre" : "Activer le mode clair");
    }

    updateButton();
    button.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      updateButton();
      try {
        localStorage.setItem("portfolio-theme", root.dataset.theme);
      } catch {
        // Sans stockage, le choix reste actif jusqu'au prochain chargement.
      }
    });
  });
})();
