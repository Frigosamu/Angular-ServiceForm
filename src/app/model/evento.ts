import { Empleado } from "./persona";

export interface Evento {
    empleadoNombre: string;
    
    id: string;
    nombre: string;
    fecha: string;
    descripcion: string;
    categoria: 'log' | 'warn' | 'error';
    creacion: Date;
}