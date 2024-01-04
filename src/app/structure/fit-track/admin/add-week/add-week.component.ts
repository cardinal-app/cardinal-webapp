import {Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Week } from "../../../../core/model/fit-track/week";
import { FitTrackService } from "../../../../core/service/fit-track/fit-track.service";

@Component({
  selector: 'add-week',
  standalone: true,
  imports: [CommonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatButtonModule, MatDialogClose, ReactiveFormsModule],
  templateUrl: './add-week.component.html',
  styleUrl: './add-week.component.scss'
})
export class AddWeekComponent implements OnInit {

  @Output() newWeek: EventEmitter<Week> = new EventEmitter();
  weekForm: FormGroup;
  activeFormSection: number = 0;

  constructor(private formBuilder: FormBuilder,
              private fitTrackService: FitTrackService,
              private dialogRef: MatDialogRef<AddWeekComponent>) {
    this.weekForm = this.formBuilder.group({
      block: ['', [Validators.required]],
      week: ['', [Validators.required]],

      running: this.formBuilder.group({
        volume: ['', [Validators.required]],
      })
    });
  }

  ngOnInit(): void {

  }

  submitWeek(): void {
    console.log(this.weekForm.value); // TODO :: impl logging

    const week = Week.convert(this.weekForm.value);

    console.log('converted');
    console.log(week);

    this.fitTrackService.addWeek(week);
    this.dialogRef.close(week);
  }

  nextSection(): void {
    this.activeFormSection += 1;
  }
}
