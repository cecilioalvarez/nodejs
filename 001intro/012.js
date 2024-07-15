
let listaPersonas = [{ nombre: "Juan", edad: 25 }, { nombre: "Ana", edad: 24 }, { nombre: "Pedro", edad: 30 }];
let listaPersonas2 = [{ nombre: "Juan", edad: 25 }, { nombre: "Ana", edad: 24 }, { nombre: "Pedro", edad: 30 }];

let listaTotal= [ listaPersonas, listaPersonas2 ];

listaTotal
.flatMap(persona=>persona)
.filter(persona=>persona.edad>24)
.map(persona=>persona.nombre)
.forEach(elemento=>console.log(elemento));