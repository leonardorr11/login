const inicioForm=document.querySelector("#loginForm");
inicioForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email=document.querySelector("#email").value
    const contraseña=document.querySelector("#contraseña").value
    const users=JSON.parse(localStorage.getItem("users"))|| [];
    const validUser=users.find(user => user.email === email && user.contraseña === contraseña);
    if(!validUser){
        return alert ("Usuario o contraseña incorrectos");
    } alert(`Bienvenido ${validUser.name}!`);
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href="index.html";

});