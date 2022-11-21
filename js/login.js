// Show Password
function showPass(password, eye) {
  const eyes = document.getElementById(eye);
  let pass = document.getElementById(password);
  if (pass.type === "password") {
    pass.type = "text";
    eyes.classList.add("active-eye");
  } else {
    pass.type = "password";
    eyes.classList.remove("active-eye");
  }
}

if (document.location.pathname == "/page/sign-in.html") {
  // Validation login
  let alertEmail = document.querySelector(".val-email");
  let alertPass = document.querySelector(".val-pass");
  let login = document.getElementById("login-form");
  login.addEventListener("submit", (event) => {
    event.preventDefault();
    let valueEmail = event.target.email.value;
    let valuePass = event.target.password.value;
    if (valueEmail == "root@admin.com" && valuePass == "rahasia") {
      document.location.href = "../page/manage-movie.html";
    } else if (valueEmail != "faisal@gmail.com") {
      alertEmail.classList.remove("hidden");
    } else if (valuePass != "123") {
      alertPass.classList.remove("hidden");
    } else {
      document.location.href = "../page/home-withuser.html";
    }
  });
  document.getElementById("email").addEventListener("click", () => {
    alert.classList.add("hidden");
  });
  document.getElementById("password").addEventListener("click", () => {
    alert.classList.add("hidden");
  });
} else if (document.location.pathname == "/page/sign-up.html") {
  const register = document.getElementById("register-form");
  register.addEventListener("submit", (event) => {
    event.preventDefault();
    document.location.href = "./home-withuser.html";
  });
} else if (document.location.pathname == "/page/reset1.html") {
  const checkEmail = document.getElementById("forgot-email");
  checkEmail.addEventListener("submit", (event) => {
    event.preventDefault();
    document.location.href = "./reset2.html";
  });
} else if (document.location.pathname == "/page/reset2.html") {
  const setPassword = document.getElementById("set-password");
  let alertPass = document.querySelector(".val-pass");
  setPassword.addEventListener("submit", (event) => {
    event.preventDefault();
    const pass1 = event.target.password.value;
    console.log(pass1);
    const pass2 = event.target.password2.value;
    console.log(pass2);
    if (pass1 === pass2) {
      document.location.href = "./home-withuser.html";
    } else {
      alertPass.classList.remove("hidden");
    }
    document.getElementById("password2").addEventListener("click", () => {
      alertPass.classList.add("hidden");
    });
  });
}
