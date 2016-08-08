import "zone.js/dist/zone";
import "reflect-metadata/reflect.js";

import { bootstrap } from "@angular/platform-browser-dynamic";
import { APP_ROUTER_PROVIDERS } from './app.routes';

import * as Components from "./components/_components";

bootstrap(Components.MainComponent, [APP_ROUTER_PROVIDERS]);

import "./node_modules/bootstrap/dist/css/bootstrap.css";

import "./app.html";
import "./app.scss";
