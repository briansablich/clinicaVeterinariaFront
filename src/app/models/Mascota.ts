import Duenio from "./Duenio";

export default interface Mascota {
    m: { idDuenio: number; nombre: string; apellido: string; celular: string; dni: string; };
    idMascota: number;
    nombre: string;
    especie: string;
    raza: string;
    color: string;
    duenio: Duenio;
}