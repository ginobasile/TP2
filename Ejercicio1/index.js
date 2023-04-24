// Reducir Ejercicio: resumir las instancias de cada uno de estos en un solo objeto
// Ejemplo:
// var mascotas = ['perro', 'gato', 'perro'];
// Resultado: { 'perro': 2, 'gato': 1 }

const cosas = require("./utils/cosas")
const reducir = require ("./funciones/reducir")


console.log(reducir(cosas))