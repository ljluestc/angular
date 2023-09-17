import {Component, HostBinding, NgModule} from '@angular/core';  myClassExp = '';  @HostBinding('class.foo!important') myFooClassExp = true;  @HostBinding('style.width!important') myWidthExp = '100px';  myBarClassExp = true;
  myHeightExp = '200px';
}@NgModule({declar}