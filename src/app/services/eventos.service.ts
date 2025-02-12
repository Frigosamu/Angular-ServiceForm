import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../model/evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) { }
  
  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url);
  }

  getEvento(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.url}/${id}`);
  }

  addEvento(evento: Evento): Observable<any> {
    return this.http.post(this.url, evento);
  }

  updateEvento(evento: Evento): Observable<any> {
    return this.http.put(`${this.url}/${evento.idEvento}`, evento);
  }

  deleteEvento(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}