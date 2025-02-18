import { Component } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../model/evento';
import { EmpleadosService } from '../../services/empleados.service';
import { ObservablesService } from '../../services/observables.service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent{
  eventos: Evento[] = [];

  constructor(private eventosService: EventosService, private empleadoService: EmpleadosService, private observableService: ObservablesService) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
    console.log(this.eventos);
  }

  eliminarDato(id: number) {
    console.log(id);
    this.eventosService.getEvento(id).subscribe(evento => {
      if (evento.categoria === 'log') {
        this.observableService.quitarLog();
      }
      if (evento.categoria === 'warn') {
        this.observableService.quitarWarn();
      }
      if (evento.categoria === 'error') {
        this.observableService.quitarError();
      }
    });
    
    this.eventosService.deleteEvento(id).subscribe(() => {
      this.cargarTodos();
    });
  }

  cargarTodos() {
        this.eventosService.getEventos().subscribe((todoEventos) => {
          this.eventos = todoEventos;
        });
  }

  cargarLogs() {
    this.eventosService.getLogs().subscribe((logs) => {
      this.eventos = logs;
    });
  }

  cargarWarns() {
    this.eventosService.getWarns().subscribe((warns) => {
      this.eventos = warns;
    });
  }

  cargarErrors() {
      this.eventosService.getErrors().subscribe((errors) => {
        this.eventos = errors;
      });
  }

}