import {Component, computed, effect, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'cardinal';

  // Signals :: Writable
  totalMiles = signal(0);

  // Signals :: Computed
  totalKilometres = computed(() => 1.60934 * this.totalMiles());

  constructor() {
    // Signals :: Effects
    effect(() => {
      console.log(`The current total mileage is: ${this.totalMiles()}`);
    });
  }

  ngOnInit(): void {
    this.totalMiles.set(3);
  }

}
