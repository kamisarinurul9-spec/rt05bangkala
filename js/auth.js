// auth.js
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "warga", password: "warga123", role: "warga" }
];

function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    if (user.role === "admin") {
      window.location.href = "admin-dashboard.html";
    } else {
      window.location.href = "warga-dashboard.html";
    }
  } else {
    alert("Username atau password salah!");
  }
}

function checkAuth(roleRequired) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || (roleRequired && user.role !== roleRequired)) {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

// Auto-redirect untuk dashboard jika sudah login
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  if (window.location.pathname.includes("login.html")) {
    if (user.role === "admin") window.location.href = "admin-dashboard.html";
    else window.location.href = "warga-dashboard.html";
  }
}
