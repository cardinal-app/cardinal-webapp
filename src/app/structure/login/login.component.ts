import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {LandingComponent} from "../../core/component/landing/landing.component";

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingComponent, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
