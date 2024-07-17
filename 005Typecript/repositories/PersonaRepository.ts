import { Persona } from "../models/Persona";

export class PersonaRepository {

    personas: Persona[] = [new Persona("Juan1", 30), new Persona("Maria1", 25), new Persona("Carlos1", 40)];	

    constructor() {
    }

    buscarTodos(): Persona[] {
        return this.personas;
    }

    buscarUno(nombre:string): Persona {
      
        return this.personas.filter(p => p.nombre == nombre)[0];

    }

    insertar(persona: Persona): void {
        this.personas.push(persona);
    }
    public borrar(persona:Persona): void {
      
        let index = this.personas.findIndex(p => p.nombre == persona.nombre);
        if(index == -1){
            throw new Error("Persona no encontrada");
        }else{
           
            this.personas.splice(index,1);
            
        }
    }

}