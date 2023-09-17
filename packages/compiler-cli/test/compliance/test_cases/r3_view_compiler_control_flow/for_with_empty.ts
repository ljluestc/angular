import {Component} from '@angular/core';    </div>
  `,
})
export class MyApp {
  message = 'hello';
  items = [{name: 'one'}, {name: 'two'}, {name: 'three'}];
  item: any;  // TODO(crisbeto): remove this once template type checking is fully implemented.
}
