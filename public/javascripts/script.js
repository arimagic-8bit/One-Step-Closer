if (
  window.location.pathname === "/login" ||
  window.location.pathname === "/signup" ||
  window.location.pathname === "/" ||
  window.location.pathname === "/challenge"
) {
  const button = document.querySelector("button");
  button.style.display = "none";
}

// MENU NAV

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
