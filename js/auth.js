// js/auth.js
// Simple client-side auth (demo). Stores current user in localStorage under key "user".
// Provides: login(event), checkAuth(role), logout()

const AUTH_USERS = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "warga", password: "warga123", role: "warga" }
];

(function globalAuthScope(){
  // perform login from a form: use onsubmit="login(event)"
  function login(event) {
    if (event && event.preventDefault) event.preventDefault();
    const uEl = document.getElementById("username");
    const pEl = document.getElementById("password");
    if (!uEl || !pEl) {
      alert("Form login tidak ditemukan.");
      return;
    }
    const username = (uEl.value || "").trim();
    const password = (pEl.value || "").trim();
    if (!username || !password) {
      alert("Masukkan username & password.");
      return;
    }

    const found = AUTH_USERS.find(x => x.username === username && x.password === password);
    if (!found) {
      alert("Username atau password salah!");
      return;
    }

    // simpan session
    localStorage.setItem("user", JSON.stringify(found));

    // redirect sesuai role
    if (found.role === "admin") window.location.href = "admin-dashboard.html";
    else window.location.href = "warga-dashboard.html";
  }

  // cek akses halaman; jika roleRequired diberikan, batasi akses
  function checkAuth(roleRequired) {
    const raw = localStorage.getItem("user");
    if (!raw) {
      // not logged in
      window.location.href = "login.html";
      return;
    }
    try {
      const u = JSON.parse(raw);
      if (roleRequired && u.role !== roleRequired) {
        alert("Anda tidak memiliki akses ke halaman ini.");
        window.location.href = "login.html";
      }
    } catch (e) {
      localStorage.removeItem("user");
      window.location.href = "login.html";
    }
  }

  function logout() {
    localStorage.removeItem("user");
    // also remove any UI-only flags (optional)
    // localStorage.removeItem('rt05_new_aduan');
    window.location.href = "login.html";
  }

  // auto-redirect: jika user buka login.html tetapi sudah login, redirect ke dashboard sesuai role
  document.addEventListener("DOMContentLoaded", () => {
    try {
      const uRaw = localStorage.getItem("user");
      const path = window.location.pathname.split("/").pop() || "";
      if (uRaw) {
        const u = JSON.parse(uRaw);
        if (path === "login.html" || path === "index.html" || path === "") {
          if (u.role === "admin") window.location.href = "admin-dashboard.html";
          else window.location.href = "warga-dashboard.html";
        }
      }
    } catch (e) {
      // ignore
    }
  });

  // expose to global scope so HTML can call them
  window.login = login;
  window.checkAuth = checkAuth;
  window.logout = logout;
})();
