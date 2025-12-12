document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        const users = {
            "admin": { password: "admin123", level: "admin" },
            "warga": { password: "warga123", level: "warga" }
        };

        if (users[username] && users[username].password === password) {
            // simpan sesi login
            localStorage.setItem("rt05_logged_in", "true");
            localStorage.setItem("rt05_user_level", users[username].level);
            localStorage.setItem("rt05_username", username);

            if (users[username].level === "admin") {
                window.location.href = "admin-dashboard.html";
            } else {
                window.location.href = "warga-dashboard.html";
            }
        } else {
            alert("Username atau password salah!");
        }
    });
});
