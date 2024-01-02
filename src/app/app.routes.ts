import {mapToCanActivate, Routes} from '@angular/router';
import { FitTrackComponent } from "./structure/fit-track/fit-track.component";
import { HomeComponent } from "./structure/home/home.component";
import { XComponent } from "./structure/x/x.component";
import { YComponent } from "./structure/y/y.component";
import {LoginComponent} from "./structure/login/login.component";
import {AuthGuard} from "./core/guard/auth-guard";

export const routes: Routes = [
  { path: 'auth', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'x', component: XComponent, canActivate: [AuthGuard] },
  { path: 'y', component: YComponent, canActivate: [AuthGuard] },
  { path: 'fit-track', component: FitTrackComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
