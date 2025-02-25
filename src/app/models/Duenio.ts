import Mascota from "./Mascota";

export default interface Duenio {
    idDuenio: number;
    dni: string;
    nombre: string;
    apellido: string;
    celular: string;
    listaMascotas: Mascota[];
}