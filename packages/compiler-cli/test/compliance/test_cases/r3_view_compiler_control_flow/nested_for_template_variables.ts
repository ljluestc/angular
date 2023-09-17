import {Component} from '@angular/core'; Inner: {{$count}}
        {/for}
      {/for}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  items = [
    {name: 'one', subItems: ['sub one', 'sub two', 'sub three']},
    {name: 'two', subItems: ['sub one', 'sub two', 'sub three']},
    {name: 'three', subItems: ['sub one', 'sub two', 'sub three']},
  ];  // TODO(crisbeto): remove this once template type checking is fully implemented.
  item: any;
  ou}
