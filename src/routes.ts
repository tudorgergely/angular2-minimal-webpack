import { provideRouter, RouterConfig } from '@angular/router';
import {AboutComponent} from "./about/about.component.ts";
import {HomeComponent} from "./home/home.component.ts";

export const routes: RouterConfig = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];