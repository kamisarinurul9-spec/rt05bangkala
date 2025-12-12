// ui.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeBtns = document.querySelectorAll("[data-toggle-theme]");
  const mobileMenuBtn = document.querySelector("[data-mobile-menu]");
  const sidebar = document.querySelector(".sidebar");

  // Dark mode toggle
  toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "on" : "off");
    });
  });

  // Load dark mode from localStorage
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
  }

  // Mobile menu toggle
  if(mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show-mobile");
    });
  }
});
