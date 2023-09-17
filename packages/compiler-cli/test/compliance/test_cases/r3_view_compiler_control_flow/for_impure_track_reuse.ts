import {Component} from '@angular/core';  items = [{name: 'one'}, {name: 'two'}, {name: 'three'}];
  otherItems = [{name: 'four'}, {name: 'five'}, {name: 'six'}];  trackFn(item: any, message: string) {
    return message + item.name;
  }  // TODO(crisbeto): remove this once template type checking  otherItem: any;
}
