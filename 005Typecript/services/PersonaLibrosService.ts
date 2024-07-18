import {PersonaRepository} from '../repositories/memory/PersonaRepository';

import {LibroRepository} from '../repositories/memory/LibroRepository';	
import { Persona } from '../models/Persona';
import { IPersonaRepository } from '../repositories/IPersonaRepository';

export class PersonaLibrosService {

    constructor(public personaRepository: IPersonaRepository, public libroRepository: LibroRepository) {
    }
    public  buscarTodosPersonas():Promise<Persona[]> {
        return  this.personaRepository.buscarTodos();
    }
    public buscarTodosLibros() {
        return  this.libroRepository.buscarTodos();
    }
    public insertarPersona(persona: any) {
        return  this.personaRepository.insertar(persona);
    }
    public borrarPersona(persona:Persona) {
        return  this.personaRepository.borrar(persona);
    }
    public buscarUnaPersona(nombre:string) {
        return  this.personaRepository.buscarUno(nombre);
    }
}