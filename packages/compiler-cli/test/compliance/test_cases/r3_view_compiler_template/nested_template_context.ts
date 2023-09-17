import {Component, NgModule} from '@angular/core';        </div>
      </li>
    </ul>`
})
export class MyComponent {
  component = this;
  format(outer: any, middle: any, inner: any) {}
  onClick(outer: any, middle: any, inner: any) {}
}@NgModule({declarations: [MyComponent]})
export class MyModule {
}