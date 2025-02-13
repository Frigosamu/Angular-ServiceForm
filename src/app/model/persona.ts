export interface Persona {
    id: number;
    nombre: string;
    apellido: string;
    }

export interface Empleado extends Persona {
    email: string;
    departamento: string;
}