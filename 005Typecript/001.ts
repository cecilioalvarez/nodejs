import express, { Request, Response } from "express";
import { Persona } from "./models/Persona";
import { BodyParser } from "body-parser";


import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app = express();

app.use(express.json());

const PORT = 3000;

const personas = [new Persona("Juan", 30), new Persona("Maria", 25), new Persona("Carlos", 40)];


app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

app.get("/personas", (request: Request, response: Response) => {

  response.status(200).json(personas);

})

app.post("/personas", (request: Request, response: Response) => {


let persona:Persona= request.body;

personas.push(persona);
response.status(201).json(persona);


})


app.delete("/personas/:nombre", (request: Request, response: Response) => { 

  // leo el parametro de la peticion con el nombre
  let nombre = request.params.nombre;

  //uso programacion funcional y un hof para quedarme con la posicion 
  // de la persona
  let index = personas.findIndex(p => p.nombre == nombre);

  //sino exise pues devuelvo un 404
  if(index == -1){
    response.status(404).send("Persona no encontrada");
  }else{
    // si existe la elimino
    personas.splice(index,1);
    response.status(200).send("Persona eliminada");
  }
})

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});