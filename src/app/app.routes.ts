import { Routes} from '@angular/router';
import { FitTrackComponent } from "./presentation/fit-track/fit-track.component";
import { HomeComponent } from "./presentation/home/home.component";
import { XComponent } from "./presentation/x/x.component";
import { YComponent } from "./presentation/y/y.component";
import {LoginComponent} from "./presentation/login/login.component";
import {AuthGuard} from "./core/guard/auth-guard";

export const routes: Routes = [
  { path: 'auth', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'x', component: XComponent, canActivate: [AuthGuard] },
  { path: 'y', component: YComponent, canActivate: [AuthGuard] },
  { path: 'fit-track', component: FitTrackComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];
