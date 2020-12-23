var email = document.getElementById("email");

email.addEventListener("keyup", function (event) {
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Please provide a valide email");
  } else {
    email.setCustomValidity("");
  }
});