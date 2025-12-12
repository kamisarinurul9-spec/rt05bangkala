// Halaman yang tidak butuh login
const publicPages = ["login.html", "index.html"];

// Ambil halaman yang sedang dibuka
const currentPage = window.location.pathname.split("/").pop();

// Jika halaman tidak ada di folder (GitHub Pages), fallback index
const safePage = currentPage === "" ? "index.html" : currentPage;

// Jika halaman bukan public → wajib login
if (!publicPages.includes(safePage)) {
    const logged = localStorage.getItem("rt05_logged");

    if (logged !== "true") {
        window.location.href = "login.html";
    }
}
