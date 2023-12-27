import {Component, computed, effect, Input} from '@angular/core';
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

  @Input() historicalRunning: Running[] = [];

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
    let n = this.historicalRunning.map((run: any) => run.volume.miles);
    let miles = 0;
    if (n.length > 0) {
      miles = n.reduce(
        (a, b) => {
          return a + b;
        });
    }
    console.log(`[calculateTotalMiles] calculating .. there are [${miles}] miles done.`)

    return miles;
  }

  getLastWeekNumber(): number {
    // return this.weeks().length > 0 ? this.weeks().at(-1)!.week : 0;
    return 1;
  }

}
