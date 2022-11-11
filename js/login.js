// Validation login
let alertEmail = document.querySelector(".val-email")
let alertPass = document.querySelector(".val-pass")
let login = document.getElementById("login-form")
console.log(document)
login.addEventListener("submit", (event)=>{
  event.preventDefault()
  let valueEmail = event.target.email.value
  let valuePass = event.target.password.value
  if(valueEmail != "faisal@gmail.com"){
    alertEmail.classList.remove("hidden")
  }else if(valuePass != "123"){
    alertPass.classList.remove("hidden")
  }else{
    alertEmail.classList.add("hidden")
    alertPass.classList.add("hidden")
    document.location.href ='../page/home-withuser.html';
  }
})
document.getElementById("email").addEventListener("click",()=>{
  alertEmail.classList.add("hidden")
})
document.getElementById("password").addEventListener("click",()=>{
  alertPass.classList.add("hidden")
})
