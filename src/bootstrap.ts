import {enableProdMode} from '@angular/core';
import {bootstrap} from "@angular/platform-browser-dynamic";

import {AppComponent} from "./app/app.component.ts";
import {APP_ROUTER_PROVIDERS} from "./routes.ts";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

if (process.env.ENV === 'prod') {
    enableProdMode();
}

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }
])
    .catch(err => console.error(err));