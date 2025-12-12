// =============================
// AUTH SYSTEM FINAL VERSION
// =============================

// Demo akun
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "warga", password: "warga123", role: "warga" }
];

// LOGIN
function login(event) {
  event.preventDefault();

  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();

  const found = users.find(x => x.username === u && x.password === p);

  if (!found) {
    alert("Username atau Password salah!");
    return;
  }

  // simpan session
  localStorage.setItem("rt05_user", JSON.stringify(found));

  // redirect sesuai role
  if (found.role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "warga-dashboard.html";
  }
}

// CHECK AUTH PER PAGE
function checkAuth(requiredRole = null) {
  const user = JSON.parse(localStorage.getItem("rt05_user"));

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  if (requiredRole && user.role !== requiredRole) {
    alert("Tidak memiliki akses halaman ini!");
    window.location.href = "login.html";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("rt05_user");
  window.location.href = "login.html";
}
