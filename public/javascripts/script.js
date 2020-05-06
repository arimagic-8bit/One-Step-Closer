// BUTTON RETURN

const button = document.querySelector("button");

if (
  window.location.pathname === "/login" ||
  window.location.pathname === "/signup" ||
  window.location.pathname === "/" ||
  window.location.pathname === "/challenge"
) {
  button.style.display = "none";
}
//ponemoswindow.location en una función por que onClick toma una función
if (
  window.location.pathname === "/users/actual" ||
  window.location.pathname === "/users/completed" ||
  window.location.pathname === "/users/created"
) {
  button.onclick = function () {
    window.location.href = `/challenge`;
  };
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


