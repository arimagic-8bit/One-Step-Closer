if (
  window.location.pathname === "/login" ||
  window.location.pathname === "/signup" ||
  window.location.pathname === "/" ||
  window.location.pathname === "/challenge"
) {
  const button = document.querySelector("button");
  button.style.display = "none";
}
