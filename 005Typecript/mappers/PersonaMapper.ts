import { PersonaDto } from "../dtos/PersonaDto";
import { Persona } from "../models/Persona";

export class PersonaMapper {

    public static toDto(persona: Persona): PersonaDto {
        
        return {
            nombre: persona.nombre,
            edad: persona.edad
    }
    }
    public static toModel(personaDto: PersonaDto): Persona {
        return  new Persona(personaDto.nombre, personaDto.edad);
    }
}