import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../model/persona';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../model/evento';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ObservablesService } from '../../services/observables.service';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule, BsDatepickerModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  empleados: Empleado[] = [];
  eventos: Evento[] = [];
  form: FormGroup;
  nombre: string = '';

  constructor(private empleadosService: EmpleadosService, private eventosService: EventosService, private fb: FormBuilder, private observablesService: ObservablesService) {
    this.form = this.fb.group({
      empleado: [[Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      creacion: [new Date()]
    });
  }

  ngOnInit(): void {
    this.empleadosService.getEmpleados().subscribe((empleados) => {
      this.empleados = empleados;
    });
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
  }

  addEvento(form: FormGroup) {
    if (form.valid) {
      this.eventosService.addEvento(form.value).subscribe(() => {
        this.eventos.push(form.value);
      });
    }
  }

  cambiarNombre(){
    this.nombre =this.form.value.empleado;
    this.observablesService.setNombreTitulo(this.nombre);
  }

  submit() {
    if (this.form.valid) {
      const now = new Date();

      const nuevoRegistro: Evento = {
        id: this.eventos.length + 1,
        empleadoNombre: this.form.value.empleado,
        nombre: this.form.value.nombre,
        descripcion: this.form.value.descripcion,
        categoria: this.form.value.categoria,
        fecha: this.form.value.fecha,
        creacion: now
      };

      if(this.form.value.categoria === 'log'){
        this.observablesService.log(`LOG actualizado`);
      } else if(this.form.value.categoria === 'warn'){
        this.observablesService.warn(`WARN actualizado`);
      }
      else if(this.form.value.categoria === 'error'){
        this.observablesService.error(`ERROR actualizado`);
      }

      this.eventosService.addEvento(nuevoRegistro).subscribe(() => {
        this.eventos.push(nuevoRegistro);
        this.form.reset();
      });
    } else {
      alert('Por favor, rellene todos los campos');
    }
  }
}