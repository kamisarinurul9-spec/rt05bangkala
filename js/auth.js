function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (user === "adminrt05" && pass === "bangkala2025") {
        localStorage.setItem("rt05_login", "true");
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "❌ Username atau password salah!";
    }
}

function checkLogin() {
    if (localStorage.getItem("rt05_login") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("rt05_login");
    window.location.href = "login.html";
}
