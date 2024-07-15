
let listaPersonas = [{ nombre: "Juan", edad: 25 }, { nombre: "Ana", edad: 24 }, { nombre: "Pedro", edad: 30 }];

let transformadorPersonaEdad= (persona)=>persona.edad;
let sumarEdades=(acumulador, edad) => acumulador + edad;

let edadTotal=
listaPersonas
.filter(persona=>persona.edad>20)
.map(transformadorPersonaEdad)
.reduce(sumarEdades);

console.log(edadTotal); //79