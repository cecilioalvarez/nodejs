//para gestionar la programacion asincrona
// son variables que como su nombre indica tendran un valor en el futuro

const promesa= new Promise((resolve, reject) => {
    resolve('Promesa resuelta');
});

promesa.then((resolucion) => {
    console.log(resolucion);
});