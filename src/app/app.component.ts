import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterOutlet, FontAwesomeModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'cardinal';
}
