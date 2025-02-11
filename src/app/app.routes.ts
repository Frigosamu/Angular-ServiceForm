import { Routes } from '@angular/router';
import { EntradaComponent } from './component/entrada/entrada.component';
import { ListaComponent } from './component/lista/lista.component';
import { FormularioComponent } from './component/formulario/formulario.component';

export const routes: Routes = [
    { path: '', component: EntradaComponent },
    { path: 'listado', component: ListaComponent },
    { path: 'formulario', component: FormularioComponent }
];
