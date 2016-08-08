import { provideRouter, RouterConfig } from '@angular/router';

import * as Components from "./components/_components";

export const routes: RouterConfig = [
  {
    path: '',
    component: Components.IndexComponent,
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
