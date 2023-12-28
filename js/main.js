
class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const PRODUCTO_1 = new Producto(1, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_2 = new Producto(2, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_3 = new Producto(3, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_4 = new Producto(4, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_5 = new Producto(5, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_6 = new Producto(6, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_7 = new Producto(7, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_8 = new Producto(8, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_9 = new Producto(9, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_10 = new Producto(10, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_11 = new Producto(11, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_12 = new Producto(12, "Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");

const ArrayProductos = [PRODUCTO_1, PRODUCTO_2, PRODUCTO_3, PRODUCTO_4, PRODUCTO_5, PRODUCTO_6, PRODUCTO_7, PRODUCTO_8, PRODUCTO_9, PRODUCTO_10, PRODUCTO_11, PRODUCTO_12,];

let carrito = [];

const CONTENEDOR_PRODUCTOS = document.getElementById("divContenedor");

const MOSTRAR_PRODUCTOS = () => {
    ArrayProductos.forEach(producto => {
        let section = document.createElement("div");
        section.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        section.innerHTML = `
            <div class="card bg-dark align-items-center border-0" style="width: 200px">
            <img src="${producto.img}" class="card-img-top imgProducto" alt="...">
                <div class="card-body alig-items-center">
                    <h5 class="card-title text-light text-center">${producto.nombre}</h5>
                    <h5 class="card-text text-light text-center">$${producto.precio}</h5>
                    <button class="btn btn-primary mx-auto d-block" id="boton${producto.id}">COMPRAR</button>
                </div>
            </div>
        `
        CONTENEDOR_PRODUCTOS.appendChild(section);

        const BOTON = document.getElementById(`boton${producto.id}`);
        BOTON.addEventListener("click", () =>{
        agregarCarrito(producto.id);
        Swal.fire({
            title: "Estás seguro que queres agregar este producto al carrito?",
            icon: "question",
            confirmButtonText: "aceptar",
            showCancelButton: true,
            cancelButtonText: "cancelar"
        }).then ((result) => {
            if(result.isConfirmed){
            carrito = carrito.filter(producto => producto !== producto.nombre);
            console.log(carrito);
            }
        })
        })

    });

    
}

MOSTRAR_PRODUCTOS();

const agregarCarrito = (id) => {
    const productoCarrito = carrito.find(producto => producto.id === id);
    if(productoCarrito){
        productoCarrito.cantidad++;
    } else{
        const producto = ArrayProductos.find(producto => producto.id === id)
        carrito.push(producto)
    }

    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
}


const contenedorCarrito = document.getElementById("contenedorCarrito");

contenedorCarrito.addEventListener("click", () =>{
    mostrarCarrito();
});

const mostrarCarrito = () =>{
    contenedorCarrito.innerHTML = " ";

    carrito.forEach(producto => {
        let section = document.createElement("div");
        section.className = "section-carrito";
        section.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        section.innerHTML = `
            <h6>Mis Productos</h6>
            <div class="card bg-dark align-items-center border-0" style="width: 200px">
            <img src="${producto.img}" class="card-img-top imgProducto" alt="...">
                <div class="card-body alig-items-center">
                    <h5 class="card-title text-light text-center">${producto.nombre}</h5>
                    <h5 class="card-text text-light text-center">${producto.precio}</h5>
                    <h5 class="card-text text-light text-center">Cantidad ${producto.cantidad}</h5>
                    <button class="btn btn-primary mx-auto d-block" id="boton${producto.id}">COMPRAR</button>
                </div>
            </div>
        `
        contenedorCarrito.appendChild(section);
    })

};





