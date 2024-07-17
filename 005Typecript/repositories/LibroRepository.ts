import { Libro } from "../models/Libro";

export class LibroRepository {

    libros: Libro[] = [new Libro("Libro1", "Autor1", 100), new Libro("Libro2", "Autor2", 200), new Libro("Libro3", "Autor3", 300)];	

    constructor() {
    }

    buscarTodos(): Libro[] {
        return this.libros;
    }

    buscarUno(titulo:string): Libro {
      
        return this.libros.filter(p => p.titulo == titulo)[0];

    }

    insertar(libro: Libro): void {
        this.libros.push(libro);
    }
    public borrar(libro:Libro): void {
      
        let index = this.libros.findIndex(p => p.titulo == libro.titulo);
        if(index == -1){
            throw new Error("Libro no encontrado");
        }else{
           
            this.libros.splice(index,1);
            
        }
    }
}