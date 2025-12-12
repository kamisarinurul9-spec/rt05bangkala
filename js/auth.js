document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const user = document.getElementById("username").value.trim();
        const pass = document.getElementById("password").value.trim();

        // User database (bisa tambah nanti)
        const users = {
            "admin": { password: "admin123", level: "admin" },
            "warga": { password: "warga123", level: "warga" }
        };

        // Validasi login
        if (users[user] && users[user].password === pass) {
            // Simpan sesi login
            localStorage.setItem("rt05_logged_in", "true");
            localStorage.setItem("rt05_user_level", users[user].level);
            localStorage.setItem("rt05_username", user);

            // Redirect berdasarkan role
            if (users[user].level === "admin") {
                window.location.href = "admin-dashboard.html";
            } else {
                window.location.href = "warga-dashboard.html";
            }

        } else {
            alert("Username atau password salah!");
        }
    });
});
