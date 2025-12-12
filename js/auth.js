// auth.js
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "warga", password: "warga123", role: "warga" }
];

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if(loginForm){
    loginForm.addEventListener("submit", e=>{
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const user = users.find(u=>u.username===username && u.password===password);
      if(user){
        localStorage.setItem("rtUser", JSON.stringify(user));
        if(user.role==="admin") window.location.href="admin-dashboard.html";
        else window.location.href="warga-dashboard.html";
      } else alert("Username atau password salah!");
    });
  }
});

function logout(){
  localStorage.removeItem("rtUser");
  window.location.href="login.html";
}

function checkAuth(role){
  const user = JSON.parse(localStorage.getItem("rtUser"));
  if(!user) window.location.href="login.html";
  else if(role && user.role!==role){
    alert("Anda tidak memiliki akses halaman ini!");
    window.location.href="login.html";
  }
}
