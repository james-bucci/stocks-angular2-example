import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: "index",
  templateUrl: "./components/index/index.html",
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [

  ]
})

export class IndexComponent {

  public constructor() {
  }
}

import "./index.html";
import "./index.scss";
