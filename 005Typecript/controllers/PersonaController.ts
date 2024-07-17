
import express, { Request, Response } from "express";
import { PersonaRepository } from "../repositories/PersonaRepository";
import { Persona } from "../models/Persona";

export class PersonaController {
    constructor(public personaRepository: PersonaRepository) {
    }

    public buscarTodos(request: Request, response: Response): void {
        response.status(200).json(this.personaRepository.buscarTodos());
    }

    public insertar(request: Request, response: Response): void {

        let persona: Persona = request.body;
        this.personaRepository.insertar(persona);
        response.status(201).json(persona);

    }
    public borrar(request: Request, response: Response): void {

        let nombre: string = request.params.nombre;
        let persona = this.personaRepository.buscarUno(nombre);
        this.personaRepository.borrar(persona);
        response.status(204).send();

    }

    public buscarUno(request: Request, response: Response): void {
        let nombre: string = request.params.nombre;

        let persona:Persona = this.personaRepository.buscarUno(nombre);
      
        if (persona) {
          response.status(200).json(persona);
        } else {
          response.status(404).send("Persona no encontrada");
        }
    }
}
