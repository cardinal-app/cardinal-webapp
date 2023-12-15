import { Routes } from '@angular/router';
import { FitTrackComponent } from "./component/fit-track/fit-track.component";
import { HomeComponent } from "./component/home/home.component";
import { XComponent } from "./component/x/x.component";
import { YComponent } from "./component/y/y.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'x', component: XComponent },
  { path: 'y', component: YComponent },
  { path: 'fit-track', component: FitTrackComponent },
];
