import {Component, NgModule, OnDestroy, Pipe, PipeTransform} from '@angular/core'; export class MyPurePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
 }@Component({
  selector: 'my-app',
 }  name = 'World';
  size = 0;
}}