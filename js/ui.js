// ==================================
// UI SYSTEM (Dark Mode & Theme)
// ==================================

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll("[data-toggle-theme]");
  const body = document.body;

  // LOAD theme
  if (localStorage.getItem("rt05_theme") === "dark") {
    body.classList.add("dark");
  }

  // SWITCH theme
  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        localStorage.setItem("rt05_theme", "dark");
      } else {
        localStorage.setItem("rt05_theme", "light");
      }
    });
  });
});
