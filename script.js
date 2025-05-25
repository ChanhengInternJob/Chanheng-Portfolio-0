// Toggle hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Copyright year
const year = () => new Date().getFullYear();
document.getElementById("footer-copyright").innerHTML = `<div>Copyright &#169; ${year()} Chanheng Menh, All Rights Reserved.</div>`;

