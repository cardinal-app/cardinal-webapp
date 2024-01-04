import {Component, EventEmitter, Output} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { AddWeekComponent } from "./add-week/add-week.component";
import { ContainerComponent } from "../../../core/component/container/container.component";
import {Week} from "../../../core/model/fit-track/week";

@Component({
  selector: 'fit-track-admin',
  standalone: true,
  imports: [CommonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatButtonModule, MatDialogClose, ContainerComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  @Output() newWeek = new EventEmitter<Week>();

  constructor(private dialog: MatDialog) {
  }

  openAddWeekDialog() {
    const dialogRef = this.dialog.open(AddWeekComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // pass back the week...

      this.newWeek.emit(result);
    });
  }

}
