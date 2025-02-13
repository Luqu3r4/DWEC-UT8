import { cargar } from "./modules/nasa";
import { obtenerFecha, insertarImagen } from "./modules/formulario";

let boton = document.getElementById("boton");
boton.addEventListener("click", async (e) => {
  e.preventDefault();
  
  let fecha = obtenerFecha("fecha");
  let url = await cargar(fecha);
  console.log(url);
  
  insertarImagen("img", url);
});
