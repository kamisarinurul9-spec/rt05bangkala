// ui.js
document.addEventListener("DOMContentLoaded", ()=>{
  const sidebar = document.querySelector(".sidebar");
  const mobileBtn = document.querySelector("[data-mobile-menu]");
  const themeBtns = document.querySelectorAll("[data-toggle-theme]");

  // Dark mode
  if(localStorage.getItem("darkMode")==="on") document.body.classList.add("dark-mode");
  themeBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode")?"on":"off");
    });
  });

  // Mobile menu
  if(mobileBtn && sidebar){
    mobileBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("show-mobile");
      document.body.classList.toggle("sidebar-open");
    });
  }
});
