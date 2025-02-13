function obtenerFecha(idInput) {
  let input = document.getElementById(idInput);

  let fecha = input.value;
  
  return fecha;
}

function insertarImagen(idImagen, url) {
  
  let img = document.getElementById(idImagen);
  img.src = url;
}

export { obtenerFecha, insertarImagen };
