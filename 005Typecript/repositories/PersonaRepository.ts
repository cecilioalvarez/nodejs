import { Persona } from "../models/Persona";

export class PersonaRepository {

    personas: Persona[] = [new Persona("Juan1", 30), new Persona("Maria1", 25), new Persona("Carlos1", 40)];	

    constructor() {
    }

    buscarTodos(): Persona[] {
        return this.personas;
    }


}