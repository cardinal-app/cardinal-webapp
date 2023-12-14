import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faHandPointer, faFutbol, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { FitTrackService } from "./fit-track.service";
import { Week } from "./model/week";
import { AddWeekComponent } from "./add-week/add-week.component";
import { VisualisationComponent } from "./visualisation/visualisation.component";
import { OrderWeeksPipe } from '../core/pipes/order-weeks.pipe';

@Component({
  selector: 'fit-track',
  standalone: true,
  imports: [CommonModule, FaIconComponent, AddWeekComponent, VisualisationComponent, OrderWeeksPipe],
  templateUrl: './fit-track.component.html',
  styleUrl: './fit-track.component.scss'
})
export class FitTrackComponent implements OnInit {
  protected readonly faHandPointer = faHandPointer;
  protected readonly faFutbol = faFutbol;
  protected readonly faHeartbeat = faHeartbeat;

  // Signals :: Writable
  weeks: WritableSignal<Week[]> = signal([new Week()]);

  // Signals :: Computed
  totalMiles = computed(() => this.calculateTotalMiles());
  totalKilometres = computed(() => 1.60934 * this.totalMiles());
  lastWeek = computed(() => this.getLastWeekNumber());

  constructor(private fitTrackService: FitTrackService) {
    // Signals :: Effects
    effect(() => {
      console.log(`[constructor] List size: ${this.weeks().length}`);
      console.log(`[constructor] The current total mileage is: ${this.totalMiles()}`); // TODO: add logging
    });
  }

  async ngOnInit(): Promise<void> {
    const historicalWeeks: Week[] = await this.fitTrackService.getHistoricalWeeks(); // No need for the extra 'then'
    console.log(`[init] Loaded [${historicalWeeks.length}] historical weeks ... setting this.weeks()`);

    this.weeks.set(historicalWeeks);
  }

  /**
   * Add the new week created from the dialog back to the Weeks signal list
   * @param week
   */
  onWeekAdded(week: any): void {
    console.log(`[onWeekAdded] Callback triggered, update weeks`);
    this.weeks.update(weeks => [week, ...weeks]);
    // Note :: change detection occurs when the reference tracked by the signal changes, not simply the value in memory
  }

  calculateTotalMiles(): number {
    console.log(`[calculateTotalMiles] calculating ..`)
    let n = this.weeks().map(a => a.running.volume.miles);
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
    return this.weeks().length > 0 ? this.weeks().at(-1)!.week : 0;
  }

}
