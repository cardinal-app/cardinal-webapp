import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModal, NgbModalRef, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FitTrackService} from "../fit-track.service";
import {Week} from "../../model/week";

@Component({
  selector: 'add-week',
  templateUrl: './add-week.component.html',
  styleUrl: './add-week.component.scss',
  standalone: true,
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [FitTrackService]
})
export class AddWeekComponent {
  submitted = false;
  activities = ['none', 'squash', 'footie'];
  model: Week;
  modalReference: NgbModalRef | undefined;

  @Input() weeks: Week[] | undefined;

  constructor(private modalService: NgbModal,
              private fitTrackService: FitTrackService) {
    this.model = new Week();
  }

  public open(modal: any): void {
    this.modalReference = this.modalService.open(modal);
  }

  onSubmit() {
    const newWeek = new Week().convert(this.model);
    this.fitTrackService.addWeek(newWeek)
    this.weeks!.push(newWeek);

    this.submitted = true;
    this.modalReference!.close('Submitted');
  }

}
