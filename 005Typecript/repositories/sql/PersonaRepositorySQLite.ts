import { Persona } from "../../models/Persona";
import { IPersonaRepository } from "../IPersonaRepository";
export class PersonaRepositorySQLite implements IPersonaRepository {

    buscarTodos(): Persona[] {
        throw new Error("Method not implemented.");
    }
    buscarUno(nombre: string): Persona {
        throw new Error("Method not implemented.");
    }
    insertar(persona: Persona): void {
        throw new Error("Method not implemented.");
    }
    borrar(persona: Persona): void {
        throw new Error("Method not implemented.");
    }

  

}