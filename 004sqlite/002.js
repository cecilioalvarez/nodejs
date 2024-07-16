const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('misql.db' , (err) => {
  
    if (err) {
      console.error(err.message);
    }else{
      console.log('Connected to the sqllite database.');
    }
    
});

const consulta="insert into Personas (nombre, edad) values (?,?)";
db.run(consulta,["Pepito", 50]);;
