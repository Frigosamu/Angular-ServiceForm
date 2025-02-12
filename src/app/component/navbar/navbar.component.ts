
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterModule, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

}