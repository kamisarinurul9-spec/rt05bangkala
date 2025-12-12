// akun demo
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "warga", password: "warga123", role: "warga" }
];

function login(event) {
  event.preventDefault();

  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  const findUser = users.find(
    u => u.username === username && u.password === password
  );

  if (!findUser) {
    alert("Username atau password salah!");
    return;
  }

  // simpan session
  localStorage.setItem("user", JSON.stringify(findUser));

  // redirect sesuai role
  if (findUser.role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "warga-dashboard.html";
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
