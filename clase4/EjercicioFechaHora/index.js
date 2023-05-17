const fs = require("fs")

const write = (nombre) =>{
    try{
         fs.writeFileSync(`./${nombre}.txt`, "")
         return "archivo creado"
    } catch(error){
        return `Error: ${error.message}`
    }
};

console.log(write("fecha"))


const append = () => {

    var today = new Date();
    var now = today.toLocaleString();
    try{
        fs.appendFileSync("./fecha.txt", `\nFecha y hora actual: ${now}"`)
        return "archivo modificado"

    }catch(error){
        return `Error: ${error.message}`

    }
};

console.log(append())
console.log(append())

console.log(append())

const readFecha = (nombre) => {
    try{
        if(!nombre) throw "rutaa  incorrecta"
        return fs.readFileSync(`${nombre}.txt`, "utf-8")
    } catch (error){
        return `Error: ${error}`

    }
}

console.log(readFecha())