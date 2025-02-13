import { Empleado } from "./persona";

export interface Evento {
    empleadoNombre: string;
    
    id: number;
    nombre: string;
    fecha: string;
    descripcion: string;
    categoria: 'log' | 'warn' | 'error';
    creacion: Date;
}