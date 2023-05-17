import http from "http"
import fs from "fs"


const append = (contador) => {
    try{
        
        fs.appendFileSync("./contador.txt", `${contador}\n `)
        return "archivo modificado"

    }catch(error){
        return `Error: ${error.message}`

    }
};

//const traerData = () => 
////{ 
//fs.readFile("./contador.txt", 'utf-8', (error, data) => {
    //if (error) throw error;
    // Convertimos los datos a un array de números
   // const numeros = data.split('\n').map(Number);
    // Sumamos los números
   // const suma = numeros.reduce((total, num) => total + num, 0);
    //console.log(`La suma de los números es: ${suma}`);
   // return suma;
    
 // });
//}




//var arrayData = new Array();
///var XMLHttpRequest = import('xhr2');
//var archivoTxt = new XMLHttpRequest();
//var fileRuta = 'contador.txt';
//var dataSum = 0;
//archivoTxt.open("GET", fileRuta, false);
//archivoTxt.send(null);
//var txt = archivoTxt.responseText;
//for(var i=0; i< txt.length; i++){
//    arrayData.push(txt[i]);
//}



//arrayData.forEach(function(data){
 //   console.log(data);
 //   dataSum += parseInt(data);

//});





const server = http.createServer((peticion, respuesta)=>{
    const {url, method} = peticion;
    console.log("url", url);
    console.log("method", method);

   // let buffer = fs.readFileSync("contador.txt");
//let texto = buffer.toString();
  // let numero = Number(texto)
//console.log(numero)
    
    

   let contador =0;
 
    
    if(url === "/visitas"){
       append(1);
       fs.readFile("./contador.txt", 'utf-8', (error, data) => {
        if (error) throw error;
        // Convertimos los datos a un array de números
        const numeros = data.split('\n').map(Number);
        // Sumamos los números
        const suma = numeros.reduce((total, num) => total + num, 0);
        console.log(`Visitas : ${suma}`);
        
        {{"visitas actual " + suma}}
        
      });
        


    }

    
})

server.listen(8080, ()=>{
    console.log("puertoOK http://localhost:8080/")
});

