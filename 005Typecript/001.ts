import express, { Request, Response } from "express";
import { Persona } from "./models/Persona";
import { PersonaRepository } from "./repositories/PersonaRepository";
import { BodyParser } from "body-parser";
import { PersonaController } from "./controllers/PersonaController";
import dotenv from "dotenv";


// configures dotenv to work in your application
dotenv.config();
const app = express();

app.use(express.json());

const PORT = 3000;
// no lo tenemos no pasa nada iniciamos el repositorio
let personaRepository: PersonaRepository = new PersonaRepository();
let controlador:PersonaController = new PersonaController(personaRepository);


app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

app.get("/personas", controlador.buscarTodos.bind(controlador));

// envias los datos en el body de la peticion y los gestionas
app.post("/personas", (request: Request, response: Response) => {


  let persona: Persona = request.body;

  personaRepository.insertar(persona);
  response.status(201).json(persona);


})

app.get("/personas/:nombre", (request: Request, response: Response) => {

  let nombre: string = request.params.nombre;

  let persona:Persona = personaRepository.buscarUno(nombre);

  if (persona) {
    response.status(200).json(persona);
  } else {
    response.status(404).send("Persona no encontrada");
  }

})

app.delete("/personas/:nombre", (request: Request, response: Response) => { 


  let nombre: string = request.params.nombre;
  try {
    
    let persona= personaRepository.buscarUno(nombre);
    
    personaRepository.borrar(persona);


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