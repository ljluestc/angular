import {Component, NgModule} from '@angular/core';     '* => state', [style({'opacity': '0'}), animate(500, style({'opacity': '1'}))]),
        ]),})
class MyComponent {
  exp: any;  doneEvent: any;
  onStart(event: any) {
    this.startEvent = event;
  }
  onDone(event: any) {
    this.doneEvent = event;
  }
}@NgModule({declarations: [MyComponent]})
export class MyModule {
}
