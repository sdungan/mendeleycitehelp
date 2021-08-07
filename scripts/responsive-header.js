/* Toggle between adding and removing the "responsive" class to the header when you click the hamburger */
function hamburgerHead() {
  var x = document.getElementById("topNav");
  if (x.className === "megamenu") {
    x.className += " responsive";
  } else {
    x.className = "megamenu";
  }
}
