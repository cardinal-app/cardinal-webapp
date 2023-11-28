import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModal, NgbModalRef, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { Week } from "../../model/week";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'data-submission-modal',
  standalone: true,
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  templateUrl: './data-submission-modal.component.html',
  styleUrl: './data-submission-modal.component.scss'
})
export class DataSubmissionModalComponent {
  submitted = false;
  activities = ['none', 'squash', 'footie'];
  model: Week;
  modalReference: NgbModalRef | undefined;

  @Input() weeks: Week[] | undefined;

  constructor(private modalService: NgbModal) {
    this.model = new Week();
  }

  public open(modal: any): void {
    this.modalReference = this.modalService.open(modal);
  }

  onSubmit() {
    this.weeks!.push(new Week().convert(this.model));
    this.submitted = true;
    this.modalReference!.close('Submitted');
  }

}
