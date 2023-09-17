import {Directive, HostBinding, NgModule} from '@angular/core';  @HostBinding('class.c') true: any;
  @HostBinding('class.d') false: any;
  @HostBinding('class.e') other: any;
}@NgModule({declarations: [HostBindingDir]})
export class MyModule {
}