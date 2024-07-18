import { Persona } from "../models/Persona";

export interface IPersonaRepository {


    buscarTodos(): Persona[];
    buscarUno(nombre:string):Persona;
    insertar(persona: Persona):void;
    borrar(persona:Persona):void;

}