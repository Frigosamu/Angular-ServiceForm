import { Injectable } from '@angular/core';
import { Empleado } from '../model/persona.model';
import { Evento } from '../model/evento.model';
/* import { Registro } from '../model/registro.model'; */
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class DatosService {
    private registrosSubject = new BehaviorSubject<Evento[]>([]);
/*     registros$: Observable<Registro[]> = this.registrosSubject.asObservable(); */

    private empleadosUrl = 'http://localhost:3000/empleados';
    private eventosUrl = 'http://localhost:3000/eventos';
    private registrosUrl = 'http://localhost:3000/registros';

    constructor(private http: HttpClient) { }

    getEmpleados(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(this.empleadosUrl);
    }
}
