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

