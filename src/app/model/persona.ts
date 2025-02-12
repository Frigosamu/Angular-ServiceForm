export interface Persona {
    id: number;
      nombre: string;
      apellidos: string;
  }
  
  export interface Empleado extends Persona {
      email: string;
      departamento: string;
  }