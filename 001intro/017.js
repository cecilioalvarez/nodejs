//para gestionar la programacion asincrona
// son variables que como su nombre indica tendran un valor en el futuro

const promesa= new Promise((resolve, reject) => {
  
    setTimeout(() => {
        resolve('resuelta1');
    }, 2000);
});


const promesa2= new Promise((resolve, reject) => {
  
    setTimeout(() => {
        resolve('resuelta2');
    }, 5000);
});
// es el metodo que se ejecutara cuando pasen dos segundos
/*promesa.then((resolucion) => {
    console.log(resolucion);
});*/

Promise.all([promesa, promesa2]).then((resolucion) => {
  

    console.log(resolucion);
});

