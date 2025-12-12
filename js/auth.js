// auth.js
// simple client-side authentication (demo only)
const USERS = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "warga", password: "warga123", role: "warga" }
];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const username = (document.getElementById('username') || document.getElementById('user')).value.trim();
      const password = (document.getElementById('password') || document.getElementById('pass')).value.trim();

      const found = USERS.find(u => u.username === username && u.password === password);
      if (!found) { alert('Username atau password salah!'); return; }
      // simpan session
      localStorage.setItem('rtUser', JSON.stringify(found));
      // redirect
      if (found.role === 'admin') window.location.href = 'admin-dashboard.html';
      else window.location.href = 'warga-dashboard.html';
    });
  }
});

// logout helper (global)
function logout(){
  localStorage.removeItem('rtUser');
  window.location.href = 'login.html';
}
