import { Routes } from '@angular/router';
import { FitTrackComponent } from "./structure/fit-track/fit-track.component";
import { HomeComponent } from "./structure/home/home.component";
import { XComponent } from "./structure/x/x.component";
import { YComponent } from "./structure/y/y.component";
import {LoginComponent} from "./structure/login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'x', component: XComponent },
  { path: 'y', component: YComponent },
  { path: 'fit-track', component: FitTrackComponent }
];
