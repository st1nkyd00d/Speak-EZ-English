import"./aboutUs.html";import"./contacto.html";import"./index.html";import"./planes.html";import"./styles.css";import{menuDesplegable}from"./menuScript";import{enviarInformacion}from"./formulario";import{carruselSlide}from"./carrusel.js";var formElement=document.getElementById("save-info");menuDesplegable(),window.location.href.indexOf("aboutUs.html")>-1&&carruselSlide(),window.location.href.indexOf("contacto.html")>-1&&formElement.addEventListener("submit",enviarInformacion);