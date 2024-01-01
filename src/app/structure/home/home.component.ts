import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from "../../core/component/landing/landing.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, LandingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
