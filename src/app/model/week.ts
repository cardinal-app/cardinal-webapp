// Block Week Object
export class Week {
  block: number | undefined;
  week: number | undefined;
  volume: number | undefined;
  activity?: string = '';

  convert(wk: any) {
   this.block = wk.block;
   this.week = wk.week;
   this.volume = wk.volume;
   this.activity = wk.activity;

   return this;
  }

}
