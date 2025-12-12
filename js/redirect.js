// Cek apakah sudah login
const isLoggedIn = localStorage.getItem("rt05_logged_in");

if (isLoggedIn !== "true") {
    window.location.href = "login.html";
}
