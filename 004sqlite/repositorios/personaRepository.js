const sqlite3 = require('sqlite3').verbose();
class PersonaRepository {


    constructo(dbPath) {
        this.db= new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error al abrir la base de datos', err.message);
            }
            console.log('Conectado a la base de datos');
        });
    }
}