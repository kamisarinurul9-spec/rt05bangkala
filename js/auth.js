const users = [
  { username: "admin", password: "admin123", level: "admin" },
  { username: "warga", password: "warga123", level: "warga" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    alert("Username atau password salah!");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));

  if (user.level === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "warga-dashboard.html";
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
