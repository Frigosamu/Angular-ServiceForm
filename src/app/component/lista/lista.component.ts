import { Component } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../model/evento';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  eventos: Evento[] = [];

  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((evento) => {
      this.eventos = evento;
      console.log(evento);
    });
  }
}