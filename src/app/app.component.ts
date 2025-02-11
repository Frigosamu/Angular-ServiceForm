import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormularioComponent } from './component/formulario/formulario.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceForm';
}
