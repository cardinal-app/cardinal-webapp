import {Component, computed, effect, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {faHandPointer, faFutbol, faHeartbeat} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {FitTrackService} from "./fit-track.service";
import {Week} from "../model/week";
import {AddWeekComponent} from "./add-week/add-week.component";
import {VisualisationComponent} from "./visualisation/visualisation.component";
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
      console.log(`The current total mileage is: ${this.totalMiles()}`); // TODO: add logging
    });
  }

  ngOnInit(): void {
    this.fitTrackService.getHistoricalWeeks().subscribe((weeks) => {
      this.weeks.set(weeks);
    });
  }

  onWeekAdded(weeks: any): void {
    // Question :: why doesn't computed signal update automatically with this.weeks() change?
    this.totalMiles = computed(() => this.calculateTotalMiles());

    // Note :: SignalComponents not supported in Ng17 - related^^
    // so event is emitted in place of signal change in child component
  }

  calculateTotalMiles(): number {
    return this.weeks().map(a => a.volume).reduce(
      (a, b) => {
        return a + b;
      });
  }

  getLastWeekNumber(): number {
    return !!this.weeks() ?  this.weeks().at(-1)!.week : 0;
  }

}
