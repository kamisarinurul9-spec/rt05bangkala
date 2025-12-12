// redirect.js
const publicPages = ["login.html","index.html"];
const current = window.location.pathname.split("/").pop();
if(!publicPages.includes(current)){
  const user = JSON.parse(localStorage.getItem("user"));
  if(!user){ window.location.href="login.html"; }
}
