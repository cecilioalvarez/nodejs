import express, { Request, Response } from "express";
import { Libro } from "../models/Libro";
import { PersonaLibrosService } from "../services/PersonaLibrosService";



export class LibroController {

    constructor(public libroService: PersonaLibrosService) {
    }

    public buscarTodos(request: Request, response: Response): void {
        response.status(200).json(this.libroService.buscarTodosLibros());
    }

   
}