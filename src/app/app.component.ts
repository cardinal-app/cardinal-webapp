import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from "./presentation/home/home.component";
import {
  faCog, faHouse, faPersonRunning, faQuestion, faSearch, faBell, faPencil, faCoins, faList, faHammer, faCameraRetro
} from "@fortawesome/free-solid-svg-icons";
import { AuthenticationService } from "./core/service/auth/authentication-service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, RouterLink, HomeComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'cardinal';
  protected readonly faCog = faCog;
  protected readonly faQuestion = faQuestion;
  protected readonly faBell = faBell;
  protected readonly faSearch = faSearch;
  protected readonly faPersonRunning = faPersonRunning;
  protected readonly faHouse = faHouse;
  protected readonly faPencil = faPencil;
  protected readonly faCoins = faCoins;
  protected readonly faList = faList;
  protected readonly faHammer = faHammer;
  protected readonly faCameraRetro = faCameraRetro;

  constructor(public router: Router, private authService: AuthenticationService) {}

  logout(): void {
    this.authService.removeToken();
    this.router.navigate(['/auth']);
  }

}
