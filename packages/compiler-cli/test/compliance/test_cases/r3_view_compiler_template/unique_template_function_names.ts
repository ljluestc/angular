import {Component, NgModule} from '@angular/core';  `,
})
export class AComponent {
  items = [4, 2];
}@NgModule({declarations: [AComponent]})
export class AModule {
}  template: `
    <div *ngFor="let item of items">
       <ng-container *ngFor="let subitem of item.subitems">
        <p *ngIf="subitem < 10">less than 10</p>
         <p *ngIf="subitem > 10">more than 10</p>
      </ng-container>
   items = [
    {subitems: [1, 3]},
 }
