import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

require('bootstrap-loader');

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

console.info('app.environment:', app.environment); // log env

// call ng2 production mode if env set to production, else default to development environment
if (app.environment === 'production') {
    enableProdMode();
}

//noinspection TypeScriptValidateTypes // <-- required to fix webstorm issue
bootstrap(AppComponent, [APP_ROUTER_PROVIDERS])
    .catch(err => console.error(err));