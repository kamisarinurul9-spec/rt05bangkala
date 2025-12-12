const loggedUser = JSON.parse(localStorage.getItem("user"));

if (!loggedUser) {
  window.location.href = "login.html";
}
