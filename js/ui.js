// ui.js — theme toggle, sidebar collapse, mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const sidebar = document.querySelector('.sidebar');
  const themeBtns = document.querySelectorAll('[data-toggle-theme]');
  const sidebarBtns = document.querySelectorAll('[data-toggle-sidebar]');
  const mobileBtn = document.querySelector('[data-mobile-menu]');

  // restore theme
  const savedTheme = localStorage.getItem('rt05_theme');
  if (savedTheme === 'dark') html.classList.add('dark-theme');

  // restore sidebar collapsed
  const savedCollapsed = localStorage.getItem('rt05_sidebar_collapsed');
  if (savedCollapsed === 'true' && sidebar) sidebar.classList.add('collapsed');

  themeBtns.forEach(b=>{
    b.addEventListener('click', ()=>{
      html.classList.toggle('dark-theme');
      localStorage.setItem('rt05_theme', html.classList.contains('dark-theme') ? 'dark' : 'light');
    });
  });

  sidebarBtns.forEach(b=>{
    b.addEventListener('click', ()=>{
      if (!sidebar) return;
      sidebar.classList.toggle('collapsed');
      localStorage.setItem('rt05_sidebar_collapsed', sidebar.classList.contains('collapsed'));
    });
  });

  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener('click', ()=>{
      sidebar.classList.toggle('open');
    });
  }
});
