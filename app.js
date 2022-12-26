const stockProductos = [
  {
    id: 1,
    nombre: "Americano",
    cantidad: 1,
    desc: "Café que consiste en partes exactamente iguales de espresso y agua.",
    precio: 250,
    img: "media/Cafe/Americano.png",
  },
  {
    id: 2,
    nombre: "Cappuccino",
    cantidad: 1,
    desc: "El Cappuccino es preparado con café expreso y leche montada con vapor para darle cremosidad.",
    precio: 300,
    img: "media/Cafe/Cappuccino.png",
  },
  {
    id: 3,
    nombre: "Caramel Macchiato",
    cantidad: 1,
    desc: "El latte macchiato es una bebida preparada con leche y café expreso.",
    precio: 300,
    img: "media/Cafe/Caramel Macchiato.png",
  },
  {
    id: 4,
    nombre: "Cortado",
    cantidad: 1,
    desc: "Café espresso con una pequeña cantidad de leche, normalmente caliente, para quitarle el amargor al café.",
    precio: 250,
    img: "media/Cafe/Cortado.png",
  },
  {
    id: 5,
    nombre: "Dulce de leche Latte",
    cantidad: 1,
    desc: "Café espresso con dulce de leche, leche al vapor con crema batida y salsa de caramelo.",
    precio: 350,
    img: "media/Cafe/Dulce de leche latte.png",
  },
  {
    id: 6,
    nombre: "Flat <br> White",
    cantidad: 1,
    desc: "Una capa fina de leche caliente o microespuma en un café expreso, simple o doble.",
    precio: 300,
    img: "media/Cafe/Flat White.png",
  },
  {
    id: 7,
    nombre: "Medialuna",
    cantidad: 1,
    desc: "La clásica medialuna reversionada a la manera de Coffee Shop: Crujiente, esponjosa, de mayor tamaño y recien horneada",
    precio: 100,
    img: "media/Facturas/Medialuna.png",
  },
  {
    id: 8,
    nombre: "Donut",
    cantidad: 1,
    desc: "Donut rellena con dulce de leche y <br> glaseada.",
    precio: 120,
    img: "media/Facturas/Donut.png",
  },
  {
    id: 9,
    nombre: "Croissant",
    cantidad: 1,
    desc: "Elaborado con masa de hojaldre crujiente y salada, nuestro Croissant se hornea especialmente para vos.",
    precio: 100,
    img: "media/Facturas/Croissant.png",
  },
  {
    id: 10,
    nombre: "Rool de Canela",
    cantidad: 1,
    desc: "Anillo de suave masa horneada relleno con <br> canela.",
    precio: 90,
    img: "media/Facturas/Rool de Canela.png",
  },
  {
    id: 11,
    nombre: "Croissant Relleno Avellana",
    cantidad: 1,
    desc: "Croissant con masa de hojaldre y cubierto con una salsa de cacao y avellanas.",
    precio: 110,
    img: "media/Facturas/Croissant-Relleno-Avellana.png",
  },
  {
    id: 12,
    nombre: "Medialuna Rellena",
    cantidad: 1,
    desc: "Nuestra Medialuna recién horneada, rellena con queso tybo y jamón cocido.",
    precio: 150,
    img: "media/Facturas/Medialuna rellena.png",
  },
  {
    id: 13,
    nombre: "Cheesecake",
    cantidad: 1,
    desc: "Cheesecake con cobertura de salsa de frutos <br> rojos.",
    precio: 400,
    img: "media/Tortas/Cheesecake.png",
  },
  {
    id: 14,
    nombre: "Cookie Cake",
    cantidad: 1,
    desc: "Torta de chocolate cubierta con crema de cookies de <br> chocolate.",
    precio: 400,
    img: "media/Tortas/Cookie Cake.png",
  },
  {
    id: 15,
    nombre: "Double Choco Brownie",
    cantidad: 1,
    desc: "Brownie húmedo de <br> chocolate.",
    precio: 380,
    img: "media/Tortas/Double Choco Brownie.png",
  },
  {
    id: 16,
    nombre: "Key Lime",
    cantidad: 1,
    desc: "Base de masa brisse, relleno de mousse de lima, decorada con crema y lima.",
    precio: 360,
    img: "media/Tortas/Key Lime.png",
  },
  {
    id: 17,
    nombre: "Lemon Pound Cake",
    cantidad: 1,
    desc: "Exquisito cake de limon, bañado con un glaseado dulce y cítrico.",
    precio: 280,
    img: "media/Tortas/Lemon Pound Cake.png",
  },
  {
    id: 18,
    nombre: "Muffin Choc Chips",
    cantidad: 1,
    desc: "Esponjoso y húmedo muffin de vainilla con chips de chocolate.",
    precio: 270,
    img: "media/Tortas/Muffin Choc Chips.png",
  }
];

let carrito = []

const contenedor = document.querySelector("#contenedor")

/*Esto es para aumentar el numero del icono del carrito de acuerdo a los productos que haya en el */
const carritoContenedor = document.querySelector("#carritoContenedor")

/*Esto es para vaciar carrito (button) */
const vaciarCarrito = document.querySelector("#vaciarCarrito")

/*Esto es para el precio total del carrito */
const precioTotal = document.querySelector("#precioTotal")

/*Esto es para la funcionalidad del boton "Continuar Compra" del carrito */
const procesarCompra = document.querySelector("#procesarCompra")

/*Esto es para activar la funcion del boton para quese muestre en:(compra.html) */
const activarFuncion = document.querySelector("#activarFuncion")

/*Esto es para mostrar el TOTAL de (compra.html) */
const totalProceso = document.querySelector("#totalProceso")

/*Esto es para validar boton de finalizar compra (Formulario)(compra.html) */
const formulario = document.querySelector("#procesar-pago")

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido)
}

if (formulario) {
  formulario.addEventListener("submit", enviarPedido)
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || []

  mostrarCarrito();

  if (activarFuncion) {
    document.querySelector("#activarFuncion").click(procesarPedido);
  }
})

/*Esto es para recorrer el array de productos y pintarlos en el html */
stockProductos.forEach((prod) => {
  const { id, nombre, cantidad, desc, precio, img } = prod
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card m-2" style="width: 21rem;">
    <div class="card-body">
      <h2 class="card-title">${nombre}</h2>
      <p class="card-text">${desc}</p>
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap" style="width: 15rem;">
      <h4 class="card-text">$${precio}</h4>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `
  }
})

/*Evento para boton "Continuar Compra" */
if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Selecciona algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
      procesarPedido()
    }
  })
}

/*Event Vaciar Carrito*/
if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    mostrarCarrito()
  })
}

/*Metodo para agregar los productos al carrito*/
function agregarProducto(id) {

  const existe = carrito.some(prod => prod.id === id)

  if (existe) {
    const prod = carrito.map(prod => {
      if (prod.id === id) {
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }

  mostrarCarrito()
}

/*Esto es para mostrar el carrito en el html */
const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body")
  if (modalBody) {

    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, cantidad, desc, precio, img } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
      <div>
      <img class="img-fluid img-carrito" src="${img}"/>
      </div>

      <div>
      <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad: ${cantidad}</p>
      <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar</button>
      </div>

      </div>
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Agregá tus Productos!</p>
    `;
  } else {
    console.log("Algo");
  }

  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  }

  guardarLocalStorage();

}

/*Funcion para eliminar producto del carrito */
function eliminarProducto(id) {
  const prodId = id
  carrito = carrito.filter((prod) => prod.id !== prodId)
  mostrarCarrito()
}

/*Funcion para gurdar el local storage */
function guardarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

/*Funcion para procesar el pedido en : (copra.html) y mostrarlo dinamicamente */
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody")
    const { id, nombre, precio, cantidad, img } = prod

    const row = document.createElement("tr")
    row.innerHTML += `
      <td>
      <img class="img-fluid img-carrito" src="${img}">
      </td>
      <td>${nombre}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>${precio * cantidad}</td>
    `
    listaCompra.appendChild(row)
  })
  totalProceso.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}

/*Funcion para validar e enviar pedido (Da funcion al boton enviar pedido)*/
function enviarPedido(e) {
  e.preventDefault()
  const persona = document.querySelector("#persona").value
  const correo = document.querySelector("#correo").value

  if (correo === "" || persona === "") {
    Swal.fire({
      title: "¡Debes completar tu email y nombre!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
    })
  } else {
    //Traido desde EmailJs 
    const btn = document.getElementById('button');

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_kq5xmq5';

        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            btn.value = 'Finalizar compra';
            alert('¡Correo Enviado!');
          }, (err) => {
            btn.value = 'Finalizar compra';
            alert(JSON.stringify(err));
          });
      };

    const spinner = document.querySelector("#spinner")
    spinner.classList.add("d-flex")
    spinner.classList.remove("d-none")

    setTimeout(() => {
      spinner.classList.remove("d-flex")
      spinner.classList.add("d-none")
      formulario.reset()
    }, 3000)

    const alertEnviado = document.createElement("p")
    alertEnviado.classList.add("alert", "alerta", "d-block", "text-center", "col-md-12", "mt-2", "alert-success")
    alertEnviado.textContent = "¡Compra realizada correctamente!"
    formulario.appendChild(alertEnviado)

    setTimeout(() => {
      alertEnviado.remove()
    }, 3000)

    //LImpia el local storage cuando finaliza la compra
    localStorage.clear()
  }

  /*API GOOGLE MAPS*/
  function iniciarMap(){
    var coord = {lat:-28.4625824 , lng:-62.8343755 };
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  } 