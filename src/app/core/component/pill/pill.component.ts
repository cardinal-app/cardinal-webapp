import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'pill',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss'
})
export class PillComponent {

  @Input() icon: IconDefinition = faCircle;
  @Input() value: string = '';
  @Input() tooltip: string = '';
  @Input() small: boolean = false;
  @Input() withoutIcon: boolean = true;

  protected readonly default = faCircle;

}
