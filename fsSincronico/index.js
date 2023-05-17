//CODIGO SINCRONICO Y BLOQUEANTE
const fs = require("fs")
//path direccion del archivo
//luego decodificacion
const read = () => {
    try{
        return fs.readFileSync("./package.json", "utf-8")
    } catch (error){
        return error.message;
    }
    // de esta forma escribo codigo sincronico pero no bloqueante
};
console.log(read()) //me trae en exadecimal el archivo packageson, los convirtio a decimal los caracteres

const write = () =>{
    try{
         fs.writeFileSync("./notas.txt", "data")
         return "archivo creado"
    } catch(error){
        return `Error: ${error.message}`
    }
};

console.log(write())

const append = () => {
    try{
        fs.appendFileSync("./notas.txt", `\nNombre: Javier"`)
        return "archivo modificado"

    }catch(error){
        return `Error: ${error.message}`

    }
};

console.log(append())
console.log(append())

//Hacer funcion que le pase nombre de un archivo y que me lo lea
//archivo txt, le tengo que pasar por parametros el nombre del archivo, y en ese archivo tiene que estar la hora y fecha de hoy





