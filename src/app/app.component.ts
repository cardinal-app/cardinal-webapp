import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MassiveComponentComponent } from "./massive-component/massive-component.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { DataSubmissionComponent } from "./data-submission/data-submission.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterOutlet, MassiveComponentComponent, FontAwesomeModule, DataSubmissionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'cardinal';
  faHandPointer = faHandPointer

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
