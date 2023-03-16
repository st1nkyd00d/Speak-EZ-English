const formElement = document.getElementById("save-info")
const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

const carousel = document.querySelector('.carousel');
const imgs = carousel.querySelectorAll('img');
let index = 0;

// Muestra la primera imagen por defecto
imgs[index].classList.add('active');

// Selecciona los botones de navegación
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Función para actualizar la imagen activa
function updateCarousel() {
    // Oculta todas las imágenes
    imgs.forEach(img => img.classList.remove('active'));
    // Muestra la imagen en el índice actual
    imgs[index].classList.add('active');
}

// Event listener para el botón anterior
prevButton.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = imgs.length - 1;
    }
    updateCarousel();
});

// Event listener para el botón siguiente
nextButton.addEventListener('click', () => {
    index++;
    if (index >= imgs.length) {
        index = 0;
    }
    updateCarousel();
});


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let nombreYapellido = document.getElementById("nombreYapellido").value
    let correoElectr = document.getElementById("correoElectr").value
    let telefono = document.getElementById("telefono").value
    let ubicacion = document.getElementById("ubicacion").value
    let mensaje = document.getElementById("mensaje").value
    let info = { nombreYapellido: nombreYapellido, correoElectr: correoElectr, telefono: telefono, ubicacion: ubicacion, mensaje: mensaje }
    let infoJson = JSON.stringify(info)
    console.log(infoJson)

    fetch('http://localhost:3000/informacion', {
        method: 'Post',
        body: infoJson
    }).then(x => console.log('Datos enviados'))
})

