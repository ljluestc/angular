import {Component} from '@angular/core';  `,
})
export class MyApp {
  message = 'hello';
  items = [{name: 'one'}, {name: 'two'}, {name: 'three'}];  trackFn(_index: number, item: any) {
    return item;
  }