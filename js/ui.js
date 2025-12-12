// ui.js - FINAL VERSION
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll("[data-toggle-theme]");
  const body = document.body;

  // load dark mode
  if (localStorage.getItem("rt05_theme") === "dark") {
    body.classList.add("dark");
  }

  toggleBtns.forEach(btn => {
    btn.onclick = () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        localStorage.setItem("rt05_theme", "dark");
      } else {
        localStorage.setItem("rt05_theme", "light");
      }
    };
  });
});
