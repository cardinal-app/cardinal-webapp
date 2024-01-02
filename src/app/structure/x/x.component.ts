import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from "../../core/component/landing/landing.component";

@Component({
  selector: 'x',
  standalone: true,
    imports: [CommonModule, LandingComponent],
  templateUrl: './x.component.html',
  styleUrl: './x.component.scss'
})
export class XComponent {

}
