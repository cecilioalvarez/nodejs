import {PersonaRepository} from '../repositories/PersonaRepository';
import {LibroRepository} from '../repositories/LibroRepository';	
import { Persona } from '../models/Persona';

export class PersonaLibrosService {

    constructor(public personaRepository: PersonaRepository, public libroRepository: LibroRepository) {
    }
    public  buscarTodosPersonas() {
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