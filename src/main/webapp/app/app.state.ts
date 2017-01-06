import { Routes } from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./layouts/error/error.component";
import {NavbarComponent} from "./layouts/navbar/navbar.component";
export const ROUTES: Routes = [
    { path: '',         component: HomeComponent },
    { path: 'navbar',     component:  NavbarComponent},
    { path: '**',       component: ErrorComponent },
    ]

