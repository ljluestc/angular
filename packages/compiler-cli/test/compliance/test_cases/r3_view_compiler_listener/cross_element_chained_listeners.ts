import {Component, EventEmitter, NgModule, Output} from '@angular/core';  selector: 'my-component',
       <some-comp (update)="update()" (delete)="delete()"></some-comp>
    `
}  click() {}
  change() {}
 }@NgModule({declarations: [MyComponent, SomeComp]})
export class MyModule {
}