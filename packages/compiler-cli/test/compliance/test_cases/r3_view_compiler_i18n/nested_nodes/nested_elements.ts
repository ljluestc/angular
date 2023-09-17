import {Component, NgModule, Pipe} from '@angular/core';    <div>
  More bindings in more nested element: {{ nestedInBlockTwo }}
        </span>
   </div>
`,
})
export class MyComponent {
  one = 1;
  two = 2;
  nestedInBlockTwo = '';
}@NgModule({declarations: [MyComponent, UppercasePipe]})
export class MyModule {
}
