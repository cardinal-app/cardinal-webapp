import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from "./structure/home/home.component";
import {faHouse, faPersonRunning, faUser, faX, faY} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, RouterLink, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'cardinal';
  protected readonly faUser = faUser;
  protected readonly faPersonRunning = faPersonRunning;
  protected readonly faHouse = faHouse;
  protected readonly faX = faX;
  protected readonly faY = faY;

  constructor(public router: Router) {}

}
