import Duenio from "./Duenio";

export default interface Mascota {
    idMascota: number;
    nombre: string;
    especie: string;
    raza: string;
    color: string;
    duenio: Duenio;
}