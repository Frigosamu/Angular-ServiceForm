import { Empleado } from "./persona";

export interface Evento {
  empleadoId: number;

  idEvento: number;
  nombreEvento: string;
  fechaEvento: Date;
  descripcion: string;
  categoria: 'log' | 'warn' | 'error';
}