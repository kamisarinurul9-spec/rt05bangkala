// ==================================
// AUTH SYSTEM FINAL VERSION
// ==================================

const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "warga", password: "warga123", role: "warga" }
];

function login(event) {
  event.preventDefault();

  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();

  const found = users.find(x => x.username === u && x.password === p);

  if (!found) {
    alert("Username atau password salah!");
    return;
  }

  localStorage.setItem("rt05_user", JSON.stringify(found));

  if (found.role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "warga-dashboard.html";
  }
}

function checkAuth(requiredRole = null) {
  const userRaw = localStorage.getItem("rt05_user");

  if (!userRaw) {
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(userRaw);

  if (requiredRole && user.role !== requiredRole) {
    alert("Anda tidak punya akses halaman!");
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("rt05_user");
  window.location.href = "login.html";
}
