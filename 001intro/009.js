const lista=[1,2,3,4,7,8,9];


//porque la programación funcional lo que permite es reducir
// el manejo del estado a nivel de la aplicacion
//encadenar elementos dentro de la programacion funcional
let resultado=lista.reduce((acumulador,elemento)=>{
   
    return acumulador+elemento;
});

console.log(resultado);