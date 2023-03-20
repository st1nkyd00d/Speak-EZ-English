import './aboutUs.html';
import './contacto.html';
import './index.html';
import './planes.html';
import './styles.css';
import { menuDesplegable } from "./menuScript";
import { enviarInformacion } from "./formulario";
import { carruselSlide } from "./carrusel.js";
const formElement = document.getElementById("save-info");
menuDesplegable();

if (window.location.href.indexOf("aboutUs.html") > -1) {
    carruselSlide();
}

if (window.location.href.indexOf("contacto.html") > -1) {
    formElement.addEventListener("submit", enviarInformacion);
}