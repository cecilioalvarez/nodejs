import { Persona } from "../models/Persona";

export interface IPersonaRepository {


    buscarTodos(): Promise<Persona[]>;
    buscarUno(nombre:string):Persona;
    insertar(persona: Persona):void;
    borrar(persona:Persona):void;

}