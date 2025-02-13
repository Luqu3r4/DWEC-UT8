import { log } from 'console';
import os from 'os';
import fs, { readFile, writeFile } from 'fs';

let nOS = os.type();
let vOS = os.version();
let cMeDisp = os.freemem()/1000000;
let nCPU = os.cpus().length;

console.log('Nombre del OS: ', nOS);
console.log('Version del OS: ', vOS);
console.log('Cantidad de memoria disponible: ', cMeDisp, 'MB');
console.log('Número de CPUs disponibles: ', nCPU);


// Creamos el archivo y lo escribimos
let data = `${nOS}\n${vOS}\n${cMeDisp}\n${nCPU}`;

writeFile('./info_sistema.txt', data, (err) => {
    if (err) {
      console.log('Error al escribir el archivo:', err);
    } else {
      console.log('El archivo fue escrito exitosamente.');
    }
  });

// Leemos el archivo y lo mostramos por pantalla

fs.readFile('info_sistema.txt', 'utf8', (err, datosArchivos) => {
    if (err) {
      console.log('Error al leer el archivo:', err);
      return;
    }
  
    console.log('Contenido del archivo:\n', datosArchivos);
  });