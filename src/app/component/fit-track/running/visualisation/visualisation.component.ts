import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import {Week} from "../../../core/model/fit-track/week";

@Component({
  selector: 'visualisation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualisation.component.html',
  styleUrl: './visualisation.component.scss'
})
export class VisualisationComponent implements OnInit {

  @Input() weeks: Week[] = [new Week()];

  public chart: any;

  private averageVolume: number = 0;
  private weekBlocks: string[] = [];
  private weekVolumes: number[] = [];

  ngOnInit(): void {
    this.weekBlocks = this.weeks.map(week => `B${week.block}:W${week.week}`);
    this.weekVolumes = this.weeks.map(week => week.running.volume.miles);
    this.averageVolume = this.weekVolumes.reduce((a, b) => { return a + b; }) / (this.weeks.length);

    this.createChart();
  }

  createChart(){
    this.chart = new Chart("week-chart", {
      type: 'line',
      data: {
        labels: this.weekBlocks,
        datasets: [
          {
            label: "Actual",
            data: this.weekVolumes,
            backgroundColor: 'lightblue',
            borderColor: 'royalblue',
          },
          {
            label: "Expected",
            data: Array(this.weeks.length).fill(9),
            backgroundColor: 'red',
            borderColor: 'indianred',
          },
          {
            label: "Average",
            data: Array(this.weeks.length).fill(this.averageVolume),
            backgroundColor: 'limegreen',
            borderColor: 'forestgreen',
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

}
