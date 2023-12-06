import {Component, computed, effect, OnInit, signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {faFutbol, faHandPointer, faHeartbeat} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {FitTrackService} from "./fit-track.service";
import {Week} from "../model/week";
import {AddWeekComponent} from "./add-week/add-week.component";
import {VisualisationComponent} from "./visualisation/visualisation.component";

@Component({
  selector: 'fit-track',
  standalone: true,
  imports: [CommonModule, FaIconComponent, AddWeekComponent, VisualisationComponent],
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
    console.log(`[init] Loading data ...`);
    const historicalWeeks: Week[] = await this.fitTrackService.getHistoricalWeeks()
      .then((weeks) => {
          return weeks
        }
      );

    // WTF :: why does the service [] come back unsorted
    // console.log(`[init] Loaded [${historicalWeeks.length}] historicalWeeks ... setting this.weekList ...`);
    this.weeks.set(historicalWeeks);
    console.log(`[init] Loaded [${historicalWeeks.length}] historicalWeeks ... setting this.weekList [DONE]`);
  }

  /**
   * Add the new week created from the dialog back to the Weeks signal list
   * @param week, the created Week.
   */
  onWeekAdded(week: any): void {
    console.log(`[onWeekAdded] Callback triggered, update weeks`);
    this.weeks.update(weeks => [week,...weeks]);
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
