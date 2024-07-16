const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('misql.db' , (err) => {
  
    if (err) {
      console.error(err.message);
    }else{
      console.log('Connected to the sqllite database.');
    }
    
});

db.serialize(() => {

    db.each(`SELECT * from Personas`, (err, fila) => {
      if (err) {
        console.error(err.message);
      }
      console.log(fila.nombre + "\t" + fila.edad);
    });

});