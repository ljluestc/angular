import {Component} from '@angular/core';  `,
})
export class MyApp {
  message = 'hello';
  items = [];
  log(..._: any[]) {}  // TODO(crisbeto): remove this once template type checking is fully implemented.
  item: any;
  ev: any;  $first: any;
  $count: any;
}