import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faHandPointer, faFutbol, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { FitTrackService } from "./fit-track.service";
import { Week } from "../model/week";
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

  ngOnInit(): void {
    // XXX: Using 'await' and then setting, may well be more performant and can avoid memory leaks.
    /* e.g.
      ```
      const historicalWeeks: Week[] = await this.fitTrackService.getHistoricalWeeks(); // No need for the extra 'then'
      this.weeks.set(historicalWeeks);
      ```
      If you are going to 'subscribe', then really you should store that subscription in a variable and remember to
      unsubscribe in the destroy function.
    */

    this.fitTrackService.getHistoricalWeeks().subscribe((weeks) => {
      console.log(`[init] Loaded [${weeks.length}] historical weeks ... setting this.weeks()`);
      this.weeks.set(weeks);
    });
    // FixMe :: causing Error 500 at build-time...
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
    let n = this.weeks().map(a => a.volume);
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
