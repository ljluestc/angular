import {Component, Directive, forwardRef, NgModule, QueryList, ViewChild, ViewChildren} from '@angular/core';  @ViewChildren(forwardRef(() => SomeDirective)) someDirList!: QueryList<SomeDirective>;
}@Component({
  selector: 'my-app',
   `
})
e  selector: '[someDir]',
})
eexport class MyModule {
}
