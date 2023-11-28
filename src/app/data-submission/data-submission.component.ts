import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Week } from "../model/week";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DataSubmissionModalComponent } from "./data-submission-modal/data-submission-modal.component";
import {
  faFutbol, faHeartbeat
} from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'data-submission',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, DataSubmissionModalComponent, FaIconComponent],
  templateUrl: './data-submission.component.html',
  styleUrl: './data-submission.component.scss'
})
export class DataSubmissionComponent {
  weeks: Week[] = [];

  protected readonly faFutbol = faFutbol;
  protected readonly faHeartbeat = faHeartbeat;
}
