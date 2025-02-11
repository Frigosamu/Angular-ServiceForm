/* import { Habitacion } from "../model/habitacion.model";
import { Predefinida } from "../model/predefinida.model"; */
import { Empleado } from "../model/persona.model";


export interface Registro {

    hotel: string;
    empleado: string;

    nombreC: string;
    apellidoC: string;
    /* habitacionC: Habitacion; */
    agencia?: string;
    telefonoC: string;

    tituloE: string;
    descripcionE: string;
    categoria: 'registro' | 'incidencia' | 'alerta';
    /* predefinido: Predefinida; */
    fechaE: string;
    horaE: string;

    creacion: Date;
  }