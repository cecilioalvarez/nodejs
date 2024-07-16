const sqlite3 = require('sqlite3').verbose();


class PersonaRepository {


    constructor(dbPath) {
        this.db= new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error al abrir la base de datos', err.message);
            }
            console.log('Conectado a la base de datos');
        });
    }

    insertar(persona) {

        this.db.run('INSERT INTO personas(nombre, edad) VALUES(?,?)', [persona.nombre, persona.edad], function(err) {
            if (err) {
                return console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
    }
}
module.exports = {PersonaRepository};