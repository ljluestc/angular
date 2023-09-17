import {Component} from '@angular/core';  items = [{name: 'one'}, {name: 'two'}, {name: 'three'}];  trackFn(_index: number, item: any) {
    return item;
  }