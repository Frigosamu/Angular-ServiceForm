export class Autor {
    id: number;
    autor: string;
    añoNacimiento: number;
    lugarNacimiento: {
        latitud: number;
        longitud: number;
    };

    constructor(id: number, autor: string, añoNacimiento: number, latitud: number, longitud: number) {
        this.id = id;
        this.autor = autor;
        this.añoNacimiento = añoNacimiento;
        this.lugarNacimiento = {
            latitud: latitud,
            longitud: longitud
        };
    }
}