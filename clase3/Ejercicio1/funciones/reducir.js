//function reducir(array){
  //const obj = {};

  //for(let i=0; i< array.length; i++){
   // const element = array[i];
   // if (obj[element]) {
    //  obj[element]++
    //} else {
     // obj[element] =1
    //}
  //}
  //return obj;
//}
//console.log(reducir(cosas))

function reducir(array){
    //1 parametro funcion callback
    //2 paremetro element
    //si pongo {acumulador} se rompe porque cuando ejecuto en array funcion, tiene return implicito, se va el return con las llaves
    const obj=array.reduce((acumulador, element)=>{
      acumulador[element]++ || (acumulador[element] = 1);
      return acumulador;
       }, {});
  
    return obj;
  }

  module.exports = reducir;