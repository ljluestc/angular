import {Component, ContentChild, ContentChildren, NgModule, QueryList} from '@angular/core';  @ContentChild('myRef') myRef: any;
  @ContentChildren('myRef1, myRef2, myRef3') myRefs!: QueryList<any>;
}
@NgModule({declarations: [ContentQueryComponent]})
export class MyModule {
}
