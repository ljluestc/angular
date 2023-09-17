import {Component, NgModule} from '@angular/core';    <div style="p1:{{p1}};p2:{{p2}};p3:{{p3}};p4:{{p4}};p5:{{p5}};p6:{{p6}};p7:{{p7}};p8:{{p8}};"></div>
    <div style="p1:{{p1}};p2:{{p2}};p3:{{p3}};p4:{{p4}};p5:{{p5}};p6:{{p6}};p7:{{p7}};p8:{{p8}};p9:{{p9}};"></div>
  `,
})
export class MyComponent {
  p1 = 100;
  p2 = 100;
  p3 = 100;
  p4 = 100;
  p5 = 100;
  p6 = 100;
  p7 = 100;
  p8 = 100;
  p9 = 100;
}@NgModule({declarations: [MyComponent]})
export class MyModule {
}