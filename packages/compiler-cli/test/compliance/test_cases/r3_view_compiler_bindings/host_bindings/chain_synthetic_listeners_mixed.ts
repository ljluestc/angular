import {Component, HostListener} from '@angular/core';})
export class MyComponent {
  @HostListener('@animation.start')
  start() {
  }  @HostListener('click')
  click() {
  }