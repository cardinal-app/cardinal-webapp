import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ResistanceComponent } from "./resistance/resistance.component";
import { GeneralComponent } from "./general/general.component";
import { StandardsComponent } from "./standards/standards.component";
import { RunningComponent } from "./running/running.component";
import { Week } from "../../core/model/fit-track/week";
import { FitTrackService } from "../../core/service/fit-track/fit-track.service";
import { OrderWeeksPipe } from "../../core/pipe/order-weeks.pipe";
import { LandingComponent } from "../../core/component/landing/landing.component";
import {AccordionComponent} from "../../core/component/accordion/accordion.component";
import {ContainerComponent} from "../../core/component/container/container.component";

@Component({
  selector: 'fit-track',
  standalone: true,
  imports: [CommonModule, FaIconComponent, OrderWeeksPipe, ResistanceComponent, GeneralComponent, StandardsComponent, RunningComponent, LandingComponent, AccordionComponent, ContainerComponent],
  templateUrl: './fit-track.component.html',
  styleUrl: './fit-track.component.scss'
})
export class FitTrackComponent implements OnInit {

  // Signals :: Writable
  weeks: WritableSignal<Week[]> = signal([new Week()]);

  // Signals :: Computed
  historicalRunning = computed(() => this.weeks().map(week => week.running));

  protected content: [string, string][];

  constructor(private fitTrackService: FitTrackService) {
    this.content = [
      ['General', 'Core fitness of a non-specialised nature'],
      ['Resistance', 'Lifting weight with a focus on strength over range'],
      ['Running', 'Runs of varying distance with a focus on pace'],
    ];

    // Signals :: Effects
    effect(() => {
      console.log(`[constructor] List size: ${this.weeks().length}`);
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

}
