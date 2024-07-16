const sqlite3 = require('sqlite3').verbose();
const {PersonaRepository}= require('./repositorios/personaRepository.js');
let personaRepository= new PersonaRepository('misql.db');


