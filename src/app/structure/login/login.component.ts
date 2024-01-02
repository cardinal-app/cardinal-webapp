import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router, RouterOutlet} from "@angular/router";
import {LandingComponent} from "../../core/component/landing/landing.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingComponent, NgOptimizedImage, FaIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  protected readonly faUser = faUser;
  protected readonly faLock = faLock;

  constructor(private router: Router) {}

  login() {
    localStorage.setItem('authToken', 'jwt_t0k3n');
    this.router.navigate(['/']);
  }

}
