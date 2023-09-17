import {Component, NgModule} from '@angular/core';    <div *ngIf="visible">
      {gender, select, male {male} female {female} other {other}}
    </div>
  </div>
`
})
export class MyComponent {
  gender = 'male';
}@NgModule({declarations: [MyComponent]})
export class MyModule {
}