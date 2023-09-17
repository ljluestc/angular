import {Component, ContentChild, ContentChildren, NgModule, QueryList} from '@angular/core';
import {SomeDirective} from './some.directive';  @ContentChildren(SomeDirective) someDirList!: QueryList<SomeDirective>;
}@Component({
  selector: 'my-app',
       <div someDir></div>
    </content-query-component>
 export class MyApp {
}@NgModule({declarations: [SomeDirective, ContentQueryComponent, MyApp]})
e