import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'accordion',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

  @Input() title: string = '';
  protected expanded: boolean = false;

  toggleAccordion(): void {
    this.expanded = !this.expanded;
  }

  protected readonly faCaretRight = faCaretRight;
  protected readonly faCaretDown = faCaretDown;
}
