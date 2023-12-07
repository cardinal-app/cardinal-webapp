// Block Week Object
export class Week {
  block: number = 0;
  week: number = 0;
  volume: number = 0;
  activity?: string = '';

  convert(wk: any) {
    this.block = wk.block;
    this.week = wk.week;
    this.volume = wk.volume;
    this.activity = wk.activity;

    return this;
  }

}
