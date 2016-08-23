import "zone.js/dist/zone";
import "reflect-metadata/reflect.js";
import "rxjs";
import { bootstrap } from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS } from '@angular/http';
import * as Components from "./components/_components";

bootstrap(Components.IndexComponent, [HTTP_PROVIDERS]);

import "./node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.html";
import "./app.scss";
