//Get the confirmation container
var x = document.getElementById("myConfirmation");

//On form submit, display the confirmation message and reset the form fields
document.getElementById("myForm").addEventListener("submit", function() {
  x.style.display = "block";
});
document.getElementById("myForm").addEventListener("submit", function() {
  document.getElementById("myForm").reset();
});

//Close the confirmation message when you click the 'X' button
function formClose() {
  x.style.display = "none";
}
