import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from "../../core/component/landing/landing.component";
import { WalletComponent } from "../../core/component/wallet/wallet.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, LandingComponent, WalletComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected content: [string, string][];

  constructor() {
    this.content = [
      ['X', 'Feature Pending'],
      ['Y', 'Feature Pending'],
      ['Fit Track', 'Track completed training and progress towards goals'],
    ];
  }

}
