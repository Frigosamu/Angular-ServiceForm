export class Libro {
    id: number;
    nombre: string;
    añoPublicacion: number;
    autor: string;

    constructor(id: number, nombre: string, añoPublicacion: number, autor: string) {
        this.id = id;
        this.nombre = nombre;
        this.añoPublicacion = añoPublicacion;
        this.autor = autor;
    }
}