import {Component, computed, effect, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {faHandPointer, faFutbol, faHeartbeat} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MassiveComponentComponent} from "../massive-component/massive-component.component";
import {FitTrackService} from "./fit-track.service";
import {Week} from "../model/week";
import {AddWeekComponent} from "./add-week/add-week.component";

@Component({
  selector: 'fit-track',
  standalone: true,
  imports: [CommonModule, FaIconComponent, MassiveComponentComponent, AddWeekComponent],
  templateUrl: './fit-track.component.html',
  styleUrl: './fit-track.component.scss'
})
export class FitTrackComponent implements OnInit {
  protected readonly title = 'cardinal';
  protected readonly faHandPointer = faHandPointer;
  protected readonly faFutbol = faFutbol;
  protected readonly faHeartbeat = faHeartbeat;

  // Signals :: Writable
  weeks: WritableSignal<Week[]> = signal([new Week()])

  // Signals :: Computed
  totalMiles = computed(() => this.weeks().map(a => a.volume).reduce(
    (a, b) => {
      return a + b;
    })
  );
  totalKilometres = computed(() => 1.60934 * this.totalMiles());
  lastWeek = computed(() => !!this.weeks() ?  this.weeks().at(-1)!.week : 0);

  constructor(private fitTrackService: FitTrackService) {
    // Signals :: Effects
    effect(() => {
      console.log(`The current total mileage is: ${this.totalMiles()}`);
    });
  }

  async ngOnInit(): Promise<void> {
    const historicalWeeks = await this.fitTrackService.getHistoricalWeeks().then((weeks) => {
      return weeks
    });

    this.weeks.set(historicalWeeks);
  }

}
