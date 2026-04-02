let navbar = document.getElementById("navbar");

navbar.style.display = "none";
window.addEventListener("scroll", () => {
  if (this.window.scrollY > 0) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});
