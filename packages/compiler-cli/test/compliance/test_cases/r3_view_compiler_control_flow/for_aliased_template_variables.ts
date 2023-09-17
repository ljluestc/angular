import {Component} from '@angular/core';        Even: {{ev}}
        Odd: {{o}}
        Count: {{co}}
      {/for}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  items = [];  // TODO(crisbeto): remove this once template type checking is fully implemented.
  idx: any;
  f: any;  ev: any;
  o: any;
  co: any;