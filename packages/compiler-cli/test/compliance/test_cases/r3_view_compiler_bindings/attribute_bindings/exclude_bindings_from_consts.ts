import {Component, NgModule} from '@angular/core';    [id]="2"
    aria-label="link"
    [attr.baz]="three"></a>`
})
export class MyComponent {
  doThings() {}
  three!: any;
}@NgModule({declarations: [MyComponent]})
export class MyModule {
}