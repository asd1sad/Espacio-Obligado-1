function sendMail(){
    let params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        // message2 : document.getElementById("message2").value, INTENTO HACER LA DEL TELEFONO PERO NO ME LLEGA LA DATA NO SE POR QUE
        message : document.getElementById("message").value
    }
    emailjs.send("service_66d0wgb", "template_ilosj24",params).then(function (res) {
        alert("Mensaje enviado!");
    })
} 


//! Submit Out
const enviarFormulario = document.getElementById("enviarFormulario");
enviarFormulario.addEventListener("click", function (e) {
    e.preventDefault();

})

 