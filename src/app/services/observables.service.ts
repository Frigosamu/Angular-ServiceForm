import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { count } from "rxjs";
import { EventosService } from './eventos.service'; 

@Injectable({
    providedIn: 'root'
})
export class ObservablesService {

    constructor(private eventoService: EventosService) {
        this.initValoresContadores();
    }

    contadorLog: number = 0;
    contadorWarn: number = 0;
    contadorError: number = 0;

    private countLog = new BehaviorSubject<number>(this.contadorLog);
    curLog$ = this.countLog.asObservable();
    private countWarn = new BehaviorSubject<number>(this.contadorWarn);
    curWarn$ = this.countWarn.asObservable();
    private countError = new BehaviorSubject<number>(this.contadorError);
    curError$ = this.countError.asObservable();
    private nombreTitulo = new BehaviorSubject<string>('');
    curNombreTitulo$ = this.nombreTitulo.asObservable();

    private initValoresContadores() {
        this.eventoService.getEventos().subscribe((eventos) => {
            this.contadorLog = eventos.filter((evento) => evento.categoria === 'log').length;
            this.contadorWarn = eventos.filter((evento) => evento.categoria === 'warn').length;
            this.contadorError = eventos.filter((evento) => evento.categoria === 'error').length;

            this.countLog.next(this.contadorLog);
            this.countWarn.next(this.contadorWarn);
            this.countError.next(this.contadorError);
        });
    }

    log(msg: string) {
        console.log(msg);
        this.countLog.next(this.countLog.value + 1);
        this.showCounts();
    }

    error(msg: string) {
        console.error(msg);
        this.countError.next(this.countError.value + 1);
        this.showCounts();
    }

    warn(msg: string) {
        console.warn(msg);
        this.countWarn.next(this.countWarn.value + 1);
        this.showCounts();
    }

    showCounts() {
        console.log(this.countLog.value, this.countWarn.value, this.countError.value);
    }

    setNombreTitulo(nombre: string) {
        this.nombreTitulo.next(nombre);
    }
}