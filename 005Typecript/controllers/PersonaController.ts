
import express, { Request, Response } from "express";
import { PersonaRepository } from "../repositories/PersonaRepository";

export class PersonaController {
    constructor(public personaRepository: PersonaRepository) {
    }
    
    public buscarTodos(request: Request, response: Response): void {
        response.status(200).json(this.personaRepository.buscarTodos());
    }
}
