import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: "main",
  templateUrl: "./components/main/main.html",
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
  ]
})

export class MainComponent {

  public constructor() {
  }
}

import "./main.html";
import "./main.scss";
