// auth.js

// Akun demo
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "warga", password: "warga123", role: "warga" }
];

// Login form
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem("rtUser", JSON.stringify(user));
        alert(`Selamat datang, ${user.username}`);
        if(user.role === "admin") window.location.href = "admin-dashboard.html";
        else window.location.href = "warga-dashboard.html";
      } else {
        alert("Username atau password salah!");
      }
    });
  }
});

// Logout function
function logout() {
  localStorage.removeItem("rtUser");
  window.location.href = "login.html";
}

// Redirect if not logged in
function checkAuth(requiredRole) {
  const user = JSON.parse(localStorage.getItem("rtUser"));
  if (!user) {
    window.location.href = "login.html";
  } else if (requiredRole && user.role !== requiredRole) {
    alert("Anda tidak memiliki akses ke halaman ini!");
    window.location.href = "login.html";
  }
}
