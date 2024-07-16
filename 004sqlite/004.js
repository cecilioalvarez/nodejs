const sqlite3 = require('sqlite3').verbose();
const {PersonaRepository}= require('./repositorios/personaRepository.js');
const {Persona} = require ("./negocio/persona.js")
let personaRepository= new PersonaRepository('misql.db');
let persona= new Persona("anita",70);
personaRepository.insertar(persona);

