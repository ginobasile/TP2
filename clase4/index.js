function uno(){
    console.log("uno")
}

function dos(){
    setTimeout(() => {
        console.log("dos")
    }, 500);
}
//promesa positiva, resolve
//promesa negativa, reject
function tres(param){
    return new Promise((resolve, reject) => {
        if (param) {
            resolve(`promesa tres cumplida, se paso ${param}`)
        } else {
            reject("promesa tres no cumplida, no hay parametros")
        }
    });
}

function cuatro(){
    console.log("cuatro")
}
console.log("Inicio")


uno()
dos()
tres(2)
.then((data) => console.log(data))
.catch((err) => console.log(err))
cuatro()
console.log("Fin")
