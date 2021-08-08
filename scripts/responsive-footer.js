/* Toggle between adding and removing the "responsive" class to the footer when you click the hamburger */
function hamburger() {
  var x = document.getElementById("myFootnav");

  if (x.className === "footnav") {
    x.className += " responsive";
  } else {
    x.className = "footnav";
  }
}
