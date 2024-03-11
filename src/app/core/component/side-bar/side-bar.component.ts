import {Component, EventEmitter, Input, Output} from "@angular/core";
import { CommonModule } from "@angular/common";
import {Week} from "../../model/fit-track/week";
import {MatDialog} from "@angular/material/dialog";
import {AddWeekComponent} from "../../../structure/fit-track/admin/add-week/add-week.component";

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  @Input() title: string = '';

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
