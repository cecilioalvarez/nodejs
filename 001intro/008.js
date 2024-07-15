// esto es un array de objetos
//hace falta tener una clase no hace falta
let objeto1= {nombre:"Juan",edad:25};
//console.log(objeto1.nombre);
//console.log(objeto1.edad);
let listaPersonas = [{ nombre: "Juan", edad: 25 }, { nombre: "Ana", edad: 24 }, { nombre: "Pedro", edad: 30 }];
//transformacion
listaPersonas.map((e) => 70-e.edad).forEach((elemento) => console.log(elemento));
// es una operacion de transformacion lo que hemos ejecutado