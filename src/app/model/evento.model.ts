import { Empleado } from "./persona.model";


export interface Evento {
  id: number;
  nombre: string;
  fecha: Date;
  empleado: string;
  descripcion: string;
  categoria: 'log' | 'warn' | 'error';
}