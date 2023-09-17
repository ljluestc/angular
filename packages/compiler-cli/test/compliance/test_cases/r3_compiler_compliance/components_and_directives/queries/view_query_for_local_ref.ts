import {Component, NgModule, QueryList, ViewChild, ViewChildren} from '@angular/core';  @ViewChild('myRef') myRef: any;
  @ViewChildren('myRef1, myRef2, myRef3') myRefs!: QueryList<any>;
}@NgModule({declarations: [ViewQueryComponent]})
export class MyModule {
}