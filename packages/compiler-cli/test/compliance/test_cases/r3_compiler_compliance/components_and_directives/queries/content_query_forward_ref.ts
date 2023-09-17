import {Component, ContentChild, ContentChildren, Directive, forwardRef, NgModule, QueryList} from '@angular/core';  @ContentChildren(forwardRef(() => SomeDirective)) someDirList!: QueryList<SomeDirective>;
}@Component({
  selector: 'my-app',
       <div someDir></div>
    </content-query-component>
 export class MyApp {
}@Directive({
 export class SomeDirective {
}@NgModule({declarations: [SomeDirective, ContentQueryComponent, MyApp]})
e