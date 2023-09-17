/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import {computed, signal, watch} from '@angular/core/src/signals';describe('computed', () => {
  it('should create computed', () => {
    const counter = signal(0);    let computedRunCount = 0;
    const double = computed(() => `${counter() * 2}:${++computedRunCount}`);    expect(double()).toEqual('0:1');    counter.set(1);
    expect(double()).toEqual('2:2');
    expect(double()).toEqual('2:2');    counter.set(2);
    expect(double()).toEqual('