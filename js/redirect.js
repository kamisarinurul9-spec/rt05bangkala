// redirect.js final
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("[data-mobile-menu]");
  const sidebar = document.querySelector(".sidebar");

  if (menuBtn) {
    menuBtn.onclick = () => {
      sidebar.classList.toggle("open");
    };
  }
});
