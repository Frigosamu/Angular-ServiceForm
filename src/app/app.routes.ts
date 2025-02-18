import { Routes } from '@angular/router';
import { EntradaComponent } from './component/entrada/entrada.component';
import { ListaComponent } from './component/lista/lista.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { FormEmpleadosComponent } from './component/form-empleados/form-empleados.component';

export const routes: Routes = [
    { path: '', component: EntradaComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'form-empleados', component: FormEmpleadosComponent }
];