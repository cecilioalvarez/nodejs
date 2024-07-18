import { Database } from "sqlite3";
import { Persona } from "../../models/Persona";
import { IPersonaRepository } from "../IPersonaRepository";
export class PersonaRepositorySQLite implements IPersonaRepository {

    constructor(public db: Database) {

    }
    buscarTodos(): Promise<Persona[]> {
        
        const query = `SELECT * FROM personas`;
        //array que esta vacio
        let personas: Persona[] = [];

        return new Promise((resolve, reject) => {
            // tengo el codigo asincrono
            this.db.all(query, (err:any, rows:any[]) => {
                if (err) {
                    console.error(err.message);
                } else {
                  
                    const personas:Persona[] =rows.map( row=> new Persona(row.nombre,row.edad))
                    resolve(personas);
                }
            });
        });
    }
    buscarUno(nombre: string): Persona {
        throw new Error("Method not implemented.");
    }
    insertar(persona: Persona): void {

        const query = `
        INSERT INTO personas (nombre, edad)
        VALUES (?, ?)`;

        this.db.run(query, [persona.nombre, persona.edad]);
    }
    borrar(persona: Persona): void {
        throw new Error("Method not implemented.");
    }



}