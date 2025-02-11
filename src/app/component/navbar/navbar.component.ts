import { Evento } from '../../model/evento.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    eventos: Evento[] = [];
    constructor() { 
            
    }

    ngOnInit(): void {
        // Initialization logic here
    }
}