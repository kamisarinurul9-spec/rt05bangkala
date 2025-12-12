// redirect.js
document.addEventListener("DOMContentLoaded", ()=>{
  const path = window.location.pathname.split("/").pop();
  if(["admin-dashboard.html"].includes(path)) checkAuth("admin");
  else if(["warga-dashboard.html"].includes(path)) checkAuth("warga");
});
