import {Component, computed, effect, Input, signal, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Running } from "../../../core/model/fit-track/paradigm/running/running";
import { faHandPointer, faFutbol, faHeartbeat } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'running',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './running.component.html',
  styleUrl: './running.component.scss'
})
export class RunningComponent {
  protected readonly faHandPointer = faHandPointer;
  protected readonly faFutbol = faFutbol;
  protected readonly faHeartbeat = faHeartbeat;

  @Input() historicalRunning: Signal<Running[]> = signal([]);

  totalMiles = computed(() => this.calculateTotalMiles());
  totalKilometres = computed(() => 1.60934 * this.totalMiles());
  lastWeek = computed(() => this.getLastWeekNumber());

  constructor() {
    // Signals :: Effects
    effect(() => {
      console.log(`[constructor] The current total mileage is: ${this.totalMiles()}`); // TODO: add logging
    });
  }

  calculateTotalMiles(): number {
    console.log(`[calculateTotalMiles] calculating ..`)
    const volumes = this.historicalRunning().map((run: Running) => run.volume);
    let mileage = 0;
    if (volumes.length > 0) {
      mileage = volumes.reduce(
        (a, b) => {
          return a + b;
        });
    }
    console.log(`[calculateTotalMiles] calculating .. there are [${mileage}] miles done.`)

    return mileage;
  }

  getLastWeekNumber(): number {
    // return this.weeks().length > 0 ? this.weeks().at(-1)!.week : 0;
    return 1;
  }

}
