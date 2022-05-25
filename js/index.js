let carritoDeCompras = []
// ! react rediseñar paginas
//! Bases
const contenedorProductos1 = document.getElementById('contenedor-productos1')


const productos = document.getElementsByClassName('producto')
const container = document.getElementById('container-fluid')
const ordenarProductos = document.getElementById('sort-by')

const carritoContenedor = document.getElementById('carrito-contenedor');
const botonTerminar = document.getElementById('terminar')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');



//! Funciones
//! Display de menus
function abrirMenu(menu) {
    if (menu == "menuIntro") {
        document.querySelector("#menuIntro").style.display = "block";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
        document.querySelector("#carritoClase").style.display = "none";

    } else if (menu == "menuCatalogo") {
        document.querySelector("#menuCatalogo").style.display = "block";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuIntro").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
        document.querySelector("#carritoClase").style.display = "none";

    } else if (menu == "menuContacto") {
        document.querySelector("#menuContacto").style.display = "block";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
        document.querySelector("#menuIntro").style.display = "none";
        document.querySelector("#carritoClase").style.display = "none";

    } else if (menu == "menuColeccion") {
        document.querySelector("#menuColeccion").style.display = "block";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuIntro").style.display = "none";
        document.querySelector("#carritoClase").style.display = "none";
    } else if (menu == "carritoClase") {
        document.querySelector("#carritoClase").style.display = "block";
        document.querySelector("#pagCompra").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuIntro").style.display = "none";
    } else if (menu == "pagCompra") {
        document.querySelector("#pagCompra").style.display = "block";
        document.querySelector("#carritoClase").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuIntro").style.display = "none";
    } else {
        document.querySelector("#menuIntro").style.display = "block";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
        document.querySelector("#carritoClase").style.display = "none";
    }
}


mostrarProductos(stock);

function mostrarProductos(array) {
    contenedorProductos1.innerHTML = "";

    array.forEach(({
        id,
        img,
        img2,
        nombre,
        precio
    }) => {

        let div = document.createElement('div')
        div.className = "producto"
        div.innerHTML += `<div class ='card'>
                        <div class ='hover-animation' id="detalleProducto${id}">
                     <img class="card-img-top img-front" src="${img}" alt="Card image cap">
                     <img class="card-img-top img-back" id="${id}" src="${img2}" alt="Card image cap">
                     </div>  
                     <div class="card-body" id="detalleProductoTexto${id}">
                     <span class="card-title">${nombre}</span>
                     <span class="card-text">$${precio}</span>                
                     </div>
                        </div>
                        `
        contenedorProductos1.appendChild(div)

        let detalleProducto = document.getElementById(`detalleProducto${id}`)
        let detalleProductoTexto = document.getElementById(`detalleProductoTexto${id}`)
        detalleProductoTexto.style.display = 'none'
        detalleProducto.addEventListener("mouseover", () => {
            detalleProductoTexto.style.display = "block"
        })
        detalleProducto.addEventListener("mouseout", () => {
            detalleProductoTexto.style.display = "none"
        })

        let btnAgregar = document.getElementById(`${id}`);

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(id)
        })

    });
}


function agregarAlCarrito(id) {
    let productoAgregar = stock.find(el => el.id == id)

    carritoDeCompras.push(productoAgregar)

    mostrarCarrito(productoAgregar);
}


function agregarAlCarrito(id) {
    let yaEsta = carritoDeCompras.find(item => item.id == id)
    if (yaEsta) {
        yaEsta.cantidad += 1
        document.getElementById(`und${yaEsta.id}`).innerHTML = ` <span id=und${yaEsta.id}>${yaEsta.cantidad}</span>`
        actualizarCarrito()
    } else {
        let productoAgregar = stock.find(elemento => elemento.id == id)

        productoAgregar.cantidad = 1

        carritoDeCompras.push(productoAgregar)

        actualizarCarrito()

        mostrarCarrito(productoAgregar)
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))

}


function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML = `
                    <span class="productoEnCarritoNombre"><strong>${productoAgregar.nombre}</strong></span>  

                    <img class="card-img-top img-back productoEnCarritoFoto" id="${productoAgregar.id}" src="${productoAgregar.img}"alt="Card image cap">
    
                    <span class="productoEnCarritoPrecio">$${productoAgregar.precio}</span>
              
                  <button id="restarProducto${productoAgregar.id}"><img src="fotos/menos.png" class="productoEnCarritoBtnMenos"></button> 
                
                    <span class="productoEnCarritoCantidad" id="und${productoAgregar.id}">${productoAgregar.cantidad}</span>

                    <button id="sumarProducto${productoAgregar.id}"><img src="fotos/mas.png" class="productoEnCarritoBtnMas"></button>
                     
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar productoEnCarritoBtnEliminar"style="font-size:1.5vh;letter-spacing: 0.1em;  display: flex;
                    justify-content: flex-start;padding-left:0!important">ELIMINAR</button>              
                    `
    carritoContenedor.appendChild(div)



    let restarProducto = document.getElementById(`restarProducto${productoAgregar.id}`)

    restarProducto.addEventListener('click', () => {
        if (productoAgregar.cantidad == 1) {
            restarProducto.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item => item.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        } else {
            productoAgregar.cantidad -= 1
            document.getElementById(`und${productoAgregar.id}`).innerHTML = ` <span id=und${productoAgregar.id}>${productoAgregar.cantidad}</span>`
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }


    })

    let sumarProducto = document.getElementById(`sumarProducto${productoAgregar.id}`)

    sumarProducto.addEventListener('click', () => {
        if (productoAgregar.cantidad !== 0) {
            productoAgregar.cantidad += 1
            document.getElementById(`und${productoAgregar.id}`).innerHTML = ` <span id=und${productoAgregar.id}>${productoAgregar.cantidad}</span>`
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }

    })

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener('click', () => {
        if (productoAgregar.cantidad !== 0) {
            btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item => item.nombre != productoAgregar.nombre)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }

    })

}
let totaal = document.getElementById("precioTotalCompraa")
function actualizarCarrito() {
    contadorCarrito.innerText = [...carritoDeCompras].reduce((acc, el) => acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
    totaal.innerText = precioTotal.innerText
}

//! Eventos click menus 
document.querySelector(".catalogo").addEventListener("click", () => abrirMenu("menuCatalogo"));
document.querySelector(".footerCatalogo").addEventListener("click", () => abrirMenu("menuContacto"));
document.querySelector(".contacto").addEventListener("click", () => abrirMenu("menuContacto"));
document.querySelector("#contacto2").addEventListener("click", () => abrirMenu("menuContacto"));
document.querySelector("#catalogo4").addEventListener("click", () => abrirMenu("menuCatalogo"));
document.querySelector(".coleccion").addEventListener("click", () => abrirMenu("menuColeccion"));
document.querySelector(".catalogo").addEventListener("click", () => abrirMenu("menuCatalogo"));
document.querySelector("#coleccion2").addEventListener("click", () => abrirMenu("menuColeccion"));
document.querySelector("#contacto3").addEventListener("click", () => abrirMenu("menuContacto"));
document.querySelector("#catalogo2").addEventListener("click", () => abrirMenu("menuCatalogo"));
document.querySelector("#coleccion3").addEventListener("click", () => abrirMenu("menuColeccion"));
document.querySelector("#boton-carrito").addEventListener("click", () => abrirMenu("carritoClase"));
document.querySelector("#boton-continuar").addEventListener("click", () => abrirMenu("pagCompra"));
document.querySelector("#pagCompraCerrar").addEventListener("click", () => abrirMenu("carritoClase"));




//! Sort-by
ordenarProductos.addEventListener('change', () => {
    if (ordenarProductos.value == 'pantalon') {

        mostrarProductos(stock.filter(e => {
            return (e.tipo === 'pantalon')
        }))

    } else if (ordenarProductos.value == 'remera') {

        mostrarProductos(stock.filter(e => {
            return (e.tipo === 'remera')
        }))

    } else if (ordenarProductos.value == 'extras') {
        mostrarProductos(stock.filter(e => {
            return (e.tipo === 'extras')
        }))

    } else if (ordenarProductos.value == 'todo') {
        return mostrarProductos(stock);

    }
})

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))

    recuperarLS.forEach(el => {
        mostrarCarrito(el);
        carritoDeCompras.push(el);
        actualizarCarrito()
    })


}

recuperar()




// click en un producto se despliega carrito

//  contadorCarrito.innerText = [...carritoDeCompras].reduce((acc,el)=> acc + el.cantidad, 0)

// (function($){
//     $.fn.selectRange = function(start, end) {
//             return this.each(function() {
//                     if(this.setSelectionRange) {
//                             this.focus();
//                             this.setSelectionRange(start, end);
//                     } else if(this.createTextRange) {
//                             var range = this.createTextRange();
//                             range.collapse(true);
//                             //range.moveEnd('character', end);
//                             range.moveStart('character', start);
//                             range.select();
//                     }
//             });
//     };
//   })

// $(".card").on('mouseenter touchstart', function(){
//     $(this).find('.card-body').animate({
//       opacity: 1.0
//     }, 200);

//       let img = $(this).data("product-image-flat");

//       $(this).find("img").attr("src", img);

//   });