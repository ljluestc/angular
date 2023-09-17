import {Component, NgModule} from '@angular/core';    <ng-template>
      '*' selector: <ng-content></ng-content>
    </ng-template>
  `,
})
class Cmp {
}@NgModule({declarations: [Cmp]})
class Module {
}