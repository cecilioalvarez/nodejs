import express, { Request, Response } from "express";
import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = 3000;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.get("/personas", (request: Request, response: Response) => {


  const personas = [
    { id: 1, nombre: "Juan", apellido: "Perez" },
    { id: 2, nombre: "Maria", apellido: "Lopez" },
    { id: 3, nombre: "Carlos", apellido: "Gonzalez" }
  ];

  response.status(200).json(personas);

}) 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});