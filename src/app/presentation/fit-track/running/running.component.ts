import {Component, computed, effect, Input, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Running } from "../../../core/model/fit-track/paradigm/running/running";
import { faHandPointer, faFutbol, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { OrderWeeksPipe } from "../../../core/pipe/order-weeks.pipe";
import { VisualisationComponent } from "./visualisation/visualisation.component";
import { Week } from "../../../core/model/fit-track/week";

@Component({
  selector: 'running',
  standalone: true,
  imports: [CommonModule, FaIconComponent, OrderWeeksPipe, VisualisationComponent],
  templateUrl: './running.component.html',
  styleUrl: './running.component.scss'
})
export class RunningComponent {
  protected readonly faHandPointer = faHandPointer;
  protected readonly faFutbol = faFutbol;
  protected readonly faHeartbeat = faHeartbeat;

  @Input() weeks: Signal<Week[]> = signal([]);
  // Signals :: Computed
  historicalRunning = computed(() => this.weeks().map(week => week.running));

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
