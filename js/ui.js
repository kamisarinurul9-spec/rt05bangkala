// ui.js
document.addEventListener("DOMContentLoaded",()=>{
  const menuBtn = document.querySelector("[data-mobile-menu]");
  const sidebar = document.querySelector(".sidebar");
  menuBtn?.addEventListener("click",()=>{sidebar.classList.toggle("open");});

  const themeBtns = document.querySelectorAll("[data-toggle-theme]");
  themeBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.body.classList.toggle("dark");
      localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");
    });
  });

  if(localStorage.getItem("theme")==="dark") document.body.classList.add("dark");
});
