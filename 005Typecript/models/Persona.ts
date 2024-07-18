import { Libro } from "./Libro";

export class Persona {

    libros: Array<Libro> = [];

    constructor (public nombre: string, public edad?: number|undefined) {
    }

    addLibro(libro: Libro): void {
        this.libros.push(libro);
    }
    toString(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }

}