// Show Password
function showPass(password) {
  var pass = document.getElementById(password);
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

// Set new date value default
document.getElementById("date").valueAsDate = new Date();
