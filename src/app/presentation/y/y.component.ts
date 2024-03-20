import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from "../../core/component/landing/landing.component";

@Component({
  selector: 'y',
  standalone: true,
    imports: [CommonModule, LandingComponent],
  templateUrl: './y.component.html',
  styleUrl: './y.component.scss'
})
export class YComponent {

}
