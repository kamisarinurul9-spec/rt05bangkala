// ==================================
// MOBILE SIDEBAR TOGGLE
// ==================================

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("[data-mobile-menu]");
  const sidebar = document.querySelector(".sidebar");

  if (btn && sidebar) {
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
});
