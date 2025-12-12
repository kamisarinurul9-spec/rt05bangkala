// ui.js — Mengatur Sidebar, Dark Mode, Mobile Mode, Badge Notifikasi, Active Menu

document.addEventListener("DOMContentLoaded", () => {
  setupSidebar();
  setupDarkMode();
  setupActiveMenu();
  setupMobileSidebar();
  setupNotificationBadge();
});


// =============================
// SIDEBAR TOGGLE
// =============================
function setupSidebar() {
  const toggleBtn = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");

  if (!toggleBtn || !sidebar) return;

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    localStorage.setItem("sidebar-collapsed", sidebar.classList.contains("collapsed"));
  });

  // Restore saved state  
  const saved = localStorage.getItem("sidebar-collapsed");
  if (saved === "true") sidebar.classList.add("collapsed");
}


// =============================
// MOBILE SIDEBAR
// =============================
function setupMobileSidebar() {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("mobileOverlay");

  if (!mobileBtn || !sidebar || !overlay) return;

  mobileBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });
}


// =============================
// DARK MODE TOGGLE
// =============================
function setupDarkMode() {
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  if (!toggle) return;

  const savedMode = localStorage.getItem("dark-mode");
  if (savedMode === "true") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    localStorage.setItem("dark-mode", body.classList.contains("dark"));
  });
}


// =============================
// ACTIVE MENU (MENANDAI HALAMAN SEDANG AKTIF)
// =============================
function setupActiveMenu() {
  const current = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".sidebar a");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
}


// =============================
// BADGE NOTIFIKASI BARU (Aduan / Pengumuman)
// =============================
function setupNotificationBadge() {
  const raw = localStorage.getItem("rt05_new_aduan");
  const isNew = raw === "true";

  const badge = document.querySelector(".notif-badge");
  if (badge) badge.style.display = isNew ? "inline-block" : "none";
}


// =============================
// MENANDAI SUDAH DIBUKA (untuk halaman aduan)
// =============================
function clearAduanNotification() {
  localStorage.setItem("rt05_new_aduan", "false");

  const badge = document.querySelector(".notif-badge");
  if (badge) badge.style.display = "none";
}

window.clearAduanNotification = clearAduanNotification;
