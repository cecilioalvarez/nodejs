import express, { Request, Response } from "express";
import { Libro } from "../models/Libro";
import { LibroRepository } from "../repositories/LibroRepository";
export class LibroController {

    constructor(public libroRepository: LibroRepository) {
    }

    public buscarTodos(request: Request, response: Response): void {
        response.status(200).json(this.libroRepository.buscarTodos());
    }

    public insertar(request: Request, response: Response): void {

        let libro: Libro = request.body;
        this.libroRepository.insertar(libro);
        response.status(201).json(libro);

    }
    public borrar(request: Request, response: Response): void {

        let nombre: string = request.params.nombre;
        let libro = this.libroRepository.buscarUno(nombre);
        this.libroRepository.borrar(libro);
        response.status(204).send();

    }

    public buscarUno(request: Request, response: Response): void {
        let nombre: string = request.params.nombre;

        let libro:Libro = this.libroRepository.buscarUno(nombre);
      
        if (libro) {
          response.status(200).json(libro);
        } else {
          response.status(404).send("Libro no encontrado");
        }
    }
}