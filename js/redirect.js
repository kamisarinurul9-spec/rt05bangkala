// redirect.js — protect pages (only login.html and index.html allowed public)
const publicPages = ['login.html','index.html'];
const current = window.location.pathname.split('/').pop() || 'index.html';

if (!publicPages.includes(current)) {
  const user = JSON.parse(localStorage.getItem('rtUser'));
  if (!user) {
    // not logged in → go to login
    window.location.href = 'login.html';
  }
}
