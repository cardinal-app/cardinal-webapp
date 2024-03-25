import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent} from "../../core/component/landing/landing.component";
import { WalletComponent } from "../../core/component/wallet/wallet.component";
import { faCameraRetro, faCoins, faHammer, faList, faPencil, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, LandingComponent, WalletComponent, FaIconComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected content: [string, string][];
  protected readonly faPersonRunning = faPersonRunning;
  protected readonly faPencil = faPencil;
  protected readonly faCameraRetro = faCameraRetro;
  protected readonly faCoins = faCoins;
  protected readonly faList = faList;
  protected readonly faHammer = faHammer;

  constructor() {
    this.content = [
      ['X', 'Feature Pending'],
      ['Y', 'Feature Pending'],
      ['Fit Track', 'Track completed training and progress towards goals'],
    ];
  }

}
