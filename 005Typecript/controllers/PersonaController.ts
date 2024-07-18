
import express, { Request, Response } from "express";
import { PersonaRepository } from "../repositories/memory/PersonaRepository";
import { Persona } from "../models/Persona";
import { PersonaLibrosService } from "../services/PersonaLibrosService";
import { PersonaMapper } from "../mappers/PersonaMapper";

export class PersonaController {
    constructor(public personaService: PersonaLibrosService) {
    }

    public buscarTodos(request: Request, response: Response): void {

        let personas:Persona[]=  this.personaService.buscarTodosPersonas();
        let personasDto= personas.map(persona=>PersonaMapper.toDto(persona));
           
        response.status(200).json(personasDto);
    }

    public insertar(request: Request, response: Response): void {

        let persona: Persona = request.body;
        this.personaService.insertarPersona(persona);
        response.status(201).json(persona);

    }
    public borrar(request: Request, response: Response): void {

        let nombre: string = request.params.nombre;
        let persona = this.personaService.buscarUnaPersona(nombre);
        this.personaService.borrarPersona(persona);
        response.status(204).send();

    }

    public buscarUno(request: Request, response: Response): void {
        let nombre: string = request.params.nombre;

        let persona:Persona = this.personaService.buscarUnaPersona(nombre);
      
        if (persona) {
          response.status(200).json(persona);
        } else {
          response.status(404).send("Persona no encontrada");
        }
    }
}
