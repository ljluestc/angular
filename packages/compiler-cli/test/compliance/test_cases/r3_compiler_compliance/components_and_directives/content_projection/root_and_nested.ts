import {Component, NgModule} from '@angular/core';    </ng-template>
    <ng-template>
      '*' selector in a template: <ng-content></ng-content>
    </ng-template>
    <ng-content select="[id=toMainAfter]"></ng-content>
  `,
})
class Cmp {
}@NgModule({declarations: [Cmp]})
class Module {
}