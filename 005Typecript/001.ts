import express, { Request, Response } from "express";
import { Persona } from "./models/Persona";
import { PersonaRepository } from "./repositories/PersonaRepository";
import { BodyParser } from "body-parser";


import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app = express();

app.use(express.json());

const PORT = 3000;

let personaRepository: PersonaRepository = new PersonaRepository();

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

app.get("/personas", (request: Request, response: Response) => {

  response.status(200).json(personaRepository.buscarTodos());

})
// envias los datos en el body de la peticion y los gestionas
app.post("/personas", (request: Request, response: Response) => {


  let persona: Persona = request.body;

  personaRepository.insertar(persona);
  response.status(201).json(persona);


})


app.delete("/personas/:nombre", (request: Request, response: Response) => { 


  let nombre: string = request.params.nombre;

  console.log(nombre);
  try {
    personaRepository.borrar(nombre);
    response.status(204).send();
  } catch (error : any) {
    response.status(404).send(error.message);
  }
  
})


app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});