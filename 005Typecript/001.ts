import express, { Request, Response } from "express";
import { Persona } from "./models/Persona";
import { PersonaRepository } from "./repositories/memory/PersonaRepository";
import { BodyParser } from "body-parser";
import { PersonaController } from "./controllers/PersonaController";
import dotenv from "dotenv";
import { LibroController } from "./controllers/LibroController";
import { LibroRepository } from "./repositories/memory/LibroRepository";
import { PersonaLibrosService } from "./services/PersonaLibrosService";
import { IPersonaRepository } from "./repositories/IPersonaRepository";
import { sqlite3 } from "sqlite3";
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sql/misql.db' , (err:any) => {
  
  if (err) {
    console.error(err.message);
  }else{
    console.log('Connected to the sqllite database.');
  }
  
});

// configures dotenv to work in your application
dotenv.config();
const app = express();

app.use(express.json());

const PORT = 3000;
// no lo tenemos no pasa nada iniciamos el repositorio
let personaRepository: IPersonaRepository = new PersonaRepository();
let libroRepository: LibroRepository = new LibroRepository();
let personaLibroService: PersonaLibrosService = new PersonaLibrosService(personaRepository, libroRepository);	
let controlador:PersonaController = new PersonaController(personaLibroService);
let controladorLibros:LibroController = new LibroController(personaLibroService);



app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});
app.get("/personas", controlador.buscarTodos.bind(controlador));
app.post("/personas", controlador.insertar.bind(controlador));
app.get("/personas/:nombre", controlador.buscarUno.bind(controlador));
app.delete("/personas/:nombre", controlador.borrar.bind(controlador));  
app.get("/libros", controladorLibros.buscarTodos.bind(controladorLibros));



app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});