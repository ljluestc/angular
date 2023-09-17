import {Component, Directive, NgModule, Pipe} from '@angular/core';e  transform(value: any): any {}
}@NgModule({
 export class DirectDir {
}  name: 'directpipe',
})
e    <p>Reference some non-standalone things:<span not-standalone>{{data | nspipe}}</span></p>
    <p>Reference some indirect standalone things:<span indirect>{{data | indirectpipe}}</span></p>
 export class TestCmp {
  data = true;
}