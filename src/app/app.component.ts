import {Component, Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'noda-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showInfo: boolean = false;
  public title = 'get-my-cv';

  constructor(
    private injector: Injector,
  ) {

  }

}
