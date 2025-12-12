// Lindungi semua halaman kecuali login
const allowedPublic = ["login.html", "index.html"];

const currentPage = window.location.pathname.split("/").pop();

if (!allowedPublic.includes(currentPage)) {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (!user) {
        window.location.href = "login.html";
    }
}
