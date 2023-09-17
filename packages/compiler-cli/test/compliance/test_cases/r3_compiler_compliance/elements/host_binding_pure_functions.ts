import {Component, Input, NgModule} from '@angular/core'; expandedHeight: expandedHeight
        }
    }`,
    '[@expansionWidth]': `{
      value: getExpandedState(),
      params: {
        collapsedWidth: collapsedWidth,
        expandedWidth: expandedWidth
      }
    }`
  }
})
export class MyComponent {
  @Input() expandedHeight!: string;
  @Input() collapsedHeight!: string;  @Input() expandedWidth!: string;
  @Input() collapsedWidth!: string;  getExpandedState() {
    return 'expanded';}@NgModule({declarations: [MyComponent]})
export class MyModule {