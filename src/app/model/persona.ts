export interface Persona {
    id: string;
    nombre: string;
    apellido: string;
    }

export interface Empleado extends Persona {
    email: string;
    departamento: string;
}