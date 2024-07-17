import { Libro } from "./Libro";

export class Persona {

    libros: Array<Libro> = [];

    constructor (public nombre: string, public edad?: number) {
    }

    addLibro(libro: Libro): void {
        this.libros.push(libro);
    }

}