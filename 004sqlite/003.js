const {Persona}= require('./negocio/persona.js');

let persona= new Persona('Juan',30);

console.log(persona.nombre);
console.log(persona.edad);


