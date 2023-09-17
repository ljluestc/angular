/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {compileClassMetadata} from '@angular/compiler';
import ts from 'typescript';      expect(res).toEqual(    });    it('should convert namespaced dec    import * as core from '@angular/core';    @core.Component('metadata') class Target {}
    `);
      expect(res).toEqual(    });    import {Component, Inject, Inject      constructor(@Inject(FOO) foo: any, b    `);
      expect(res).toContain(
n () { return [{ type: undefined, decorators: [{ type      c    `);    import {Component, Input} from '@angul      set foo(value: string) { this._foo = value; }
      private _foo: string;      get bar() { return this._bar; }
      @Input('value') set bar(value: string) { this._      e noDashesInName = 456;  });  function compileAndPrint(contents:       contents: `
      export declare functi      export declare function Component(...args: any[]): any;
      export declare class Injector {}
    `        [_('/index.ts'),
ts,    