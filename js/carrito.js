const carritoAbrir = document.getElementById('boton-carrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const botonContinuar = document.getElementById("boton-continuar")
 

carritoCerrar.addEventListener('click', () => {
    abrirMenu("menuColeccion");
})

// ! Pag Compra
const pagCompraCerrar = document.getElementById('pagCompraCerrar');



pagCompraCerrar.addEventListener( "click" , () => {
    tarjetaPago.style.display = "none"
    transferenciaPago.style.display = "none"
     abrirMenu("carritoClase");
    })
 
const botonComprar = document.getElementById("botonComprar");

botonComprar.addEventListener("click", function () {

  // ! Carrito vacio no compra nada
    Toastify({
        text: "Compra realizada con exito <3",
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
            background: "green",
        },
    }).showToast();


})

// ! Carrito vacio no compra nada
carritoAbrir.addEventListener("click", () => {
    contadorCarrito.innerText == 0 ? carro = true : carro = false;
    carro ? document.getElementById("carritoClase").innerHTML = `<p style=text-align:center;max-height: 100vh;font-family: 'arial', source-sans-pro, 'Helvetica Neue', Helvetica, Arial,sans-serif; font-size: 0.70rem; letter-spacing:0.2rem; background-color: #fff; color: #000;>TU CARRITO ESTA VACIO</p><br>
    <span style="font-size:8vh; display:flex; justify-content:center;">☹</span>  
    `  : console.log("compre nomas")
})

// const mercadopago = require('mercadopago');
// mercadopago.configure({
//     access_token: 'TEST-2409797633534823-050419-cc88ac778d6678432e9e2f79b6ddbff1-225899006'
// })

// app.post("api/pay", async (req, res) => {
//     const ids = req.body;
//     const productsCopy = await repository.read();

//     let preference = {
//         items: [
//             {
//                 title: 'M',
//                 unit_price: 100,
//                 quantity: 1,
//             }
//         ]
//     }
// });

const transferenciaPago = document.getElementById("transferenciaPago");
const transferenciaBancaria = document.getElementById("transferenciaBancaria");
const tarjetaPago = document.getElementById("tarjetaPago");
const tarjetaBancaria = document.getElementById("tarjetaBancaria");

transferenciaPago.style.display = "none";
tarjetaPago.style.display = "none";

transferenciaBancaria.addEventListener("click", () => {
    transferenciaPago.style.display = "block"
    tarjetaPago.style.display = "none"
})
 

 
tarjetaBancaria.addEventListener("click", () => {
    tarjetaPago.style.display = "block"
    transferenciaPago.style.display = "none"
})


// ! Compras realizadas Historial




