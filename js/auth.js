document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Database user statis (bisa ditambah)
        const USERS = {
            "admin": { pass: "admin123", role: "admin" },
            "warga": { pass: "warga123", role: "warga" }
        };

        // Validasi
        if (!USERS[username] || USERS[username].pass !== password) {
            alert("Username atau password salah!");
            return;
        }

        // Jika benar → simpan sesi login
        localStorage.setItem("rt05_logged", "true");
        localStorage.setItem("rt05_role", USERS[username].role);
        localStorage.setItem("rt05_user", username);

        // Redirect berdasarkan role
        if (USERS[username].role === "admin") {
            window.location.href = "admin-dashboard.html";
        } else {
            window.location.href = "warga-dashboard.html";
        }
    });
});
