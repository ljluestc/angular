import {Component, NgModule} from '@angular/core';
import {ForOfDirective} from './for_of'; {{item.name}}: {{info.description}}
        </li>
      </ul>
    </li>
  </ul>`
})
export class MyComponent {
  items = [
    {name: 'one', infos: [{description: '11'}, {description: '12'}]},
    {name: 'two', infos: [{description: '21'}, {description: '22'}]}
  ];
}@NgModule({declarations: [MyComponent, ForOfDirective]})
export class MyModule {
}