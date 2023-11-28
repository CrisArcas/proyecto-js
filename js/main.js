let ingresarNombre = prompt("Ingrese su Nombre");

function welcome(nombre){
    alert("Bienvenido a nuestro Carrito de Compras " + nombre);
}

welcome(ingresarNombre);

alert("Ingrese el producto que desea llevar y luego la cantidad. Para salir presione 0");

alert("Si la compra supera los $60.000 el envío es gratuito. Costo del envío $8000.")

let seleccionarProductos = parseInt(prompt("1 - Buzo $35000 2 - Remera $17000 3 - Short $11000 4 - Jean $25000 5 - Gorra $6000"));
let cantidad;
let total = 0;
let envio = 8000;

function calcularTotal(cant, precio){
    let tot = cant * precio;
    return tot;
}

while(seleccionarProductos != 0){
    switch (seleccionarProductos) {
        case 1:
            cantidad = parseInt(prompt("El producto elegido es un Buzo, seleccione la cantidad a llevar"));
            total =+ calcularTotal(cantidad, 35000);
            if(cantidad >= 1){
                alert("Producto Agregado al carrito");
            }
        break;
    
        case 2:
            cantidad = parseInt(prompt("El producto elegido es una Remera, seleccione la cantidad a llevar"));
            total += calcularTotal(cantidad, 17000);
            if(cantidad >= 1){
                alert("Producto Agregado al carrito");
            }
        break;

        case 3:
            cantidad = parseInt(prompt("El producto elegido es un short Short, seleccione la cantidad a llevar"));
            total += calcularTotal(cantidad, 11000);
            if(cantidad >= 1){
                alert("Producto Agregado al carrito");
            }
        break;

        case 4:
            cantidad = parseInt(prompt("El producto elegido es un Jean, seleccione la cantidad a llevar"));
            total += calcularTotal(cantidad, 25000);
            if(cantidad >= 1){
                alert("Producto Agregado al carrito");
            }
        break;

        case 5:
            cantidad = parseInt(prompt("El producto elegido es una gorra, seleccione la cantidad a llevar"));
            total += calcularTotal(cantidad, 6000);
            if(cantidad >= 1){
                alert("Producto Agregado al carrito");
            }
        break;

        default:
            alert("Por favor, elegí una opción valida");
        break;
    }
    seleccionarProductos = parseInt(prompt("1 - Buzo $35000 2 - Remera $17000 3 - Short $11000 4 - Jean $25000 5 - Gorra $6000"));

}

if(total >= 60000){
    alert("Tenes bonificado el costo del envío");
} else{
    total += envio;
    alert("Debes pagar el costo del envío");
}

alert("El Total de compra es " + "$" +total);
alert("Gracias por su compra!");

class Producto {
    constructor(nombre, precio, img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

const PRODUCTO_1 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_2 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_3 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_4 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_5 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_6 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_7 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_8 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_9 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_10 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_11 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");
const PRODUCTO_12 = new Producto("Zapatillas Nano X3", 77560, "./assets/img/nano1.jpg");

const ArrayProductos = [PRODUCTO_1, PRODUCTO_2, PRODUCTO_3, PRODUCTO_4, PRODUCTO_5, PRODUCTO_6, PRODUCTO_7, PRODUCTO_8, PRODUCTO_9, PRODUCTO_10, PRODUCTO_11, PRODUCTO_12,];

ArrayProductos.forEach(producto => {
    let section = document.createElement("div");
    section.className = "card";
    section.innerHTML = `
                    <div class="card bg-dark align-items-center border-0" style="width: 300px;">
                            <img src="${producto.img}" class="card-img-top " alt="...">
                        <div class="card-body alig-items-center">
                            <h5 class="card-title text-light text-center">${producto.nombre}</h5>
                            <h5 class="card-text text-light text-center">$ ${producto.precio}</h5>
                            <a href="#" class="btn btn-primary mx-auto d-block">COMPRAR</a>
                        </div>
                    </div>
`
    sectionProductos.appendChild(section);
    }
)

