// ui.js

document.addEventListener("DOMContentLoaded", function() {
  // Toggle sidebar mobile
  const menuBtn = document.querySelector("[data-mobile-menu]");
  const sidebar = document.querySelector(".sidebar");
  menuBtn?.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Dark mode toggle
  const themeBtn = document.querySelectorAll("[data-toggle-theme]");
  themeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });

  // Load theme from storage
  const theme = localStorage.getItem("theme");
  if (theme === "dark") document.body.classList.add("dark");
});
