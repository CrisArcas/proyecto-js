const comentarios = "https://jsonplaceholder.typicode.com/comments";

const contenedorComentarios = document.getElementById("comentarios");

fetch(comentarios)
    .then(response => response.json())
    .then((dato) => {
        console.log(dato);
        mostrarComentarios(dato);
    })
    .catch(error => console.log(error));

function mostrarComentarios(dato) {
    dato.forEach(comentario => {
        if(comentario.id <= 8){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${comentario.email}</h5>
                <p class="card-text">${comentario.name}</p>
            </div>
        </div>`
        contenedorComentarios.append(div)
        }
        
    });
}