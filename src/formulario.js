export function enviarInformacion(event) {
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
}