import { Component } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../model/evento';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent{
  eventos: Evento[] = [];

  constructor(private eventosService: EventosService, private empleadoService: EmpleadosService) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
    console.log(this.eventos);
  }

  getEvento(id: number) {
    this.eventosService.getEvento(id).subscribe((evento) => {
      console.log(evento);
    });
  }
}