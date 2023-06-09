const singupForm=document.querySelector("#RegistroForm");
singupForm.addEventListener("submit",(e)=>{
    e.preventDefault()

const name=document.querySelector("#name").value
const email=document.querySelector("#email").value
const contraseña=document.querySelector("#contraseña").value

const users=JSON.parse(localStorage.getItem("users")) || [];
const isUserRegistrate=users.find(user => user.email ===email)

if(isUserRegistrate){
return alert("El usuario ya esta registrado");
    }
    users.push({name: name, email: email , contraseña: contraseña});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Usuario registrado correctamente");

    window.location.href="login.html";
})