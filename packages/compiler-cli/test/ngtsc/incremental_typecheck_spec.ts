/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        env.write('mod.ts',       });   or: '[dir]',string;    te: '<d        c        // also accepts `boole        env.write('dir.ts', `
Direc()
string; ngAcceptInputType_dir: s      });      it('should typeor: 'te        expec `Argument of type 'num        // This test verifies that adding Dir} from './dir';e        // specify that the bound expression for `dir` should be used as template guard. This
        // should Directive, Input} froDirective,()or: 'test-cmp',
te: '<divoo:        expe       Dire      }NgModule}        // no longer be narrowDirective, Input} from '@angular/core';nterface TemplateContext {
cit:         expect(ts.flattenDiagnosticMessageText(diags[0].messageText, '\n'))
tain(      });      it('should t        /        // otherwise the prior declaration wistring;        `);C        env.write('mod.ts', `
NgModulDir}         `);        env.write('dir.ts', `
Directi        env.wor: '[dir]',lass Dir<T> {
()        env.write('cmp.ts', `
Component} from '@angular/core';nt({
or: 'test-cmp','fo        // prior de        env.write('cmp.ts', `
Component} from '@t()
T;        `);      });      it('should         //()        env.driveMain();
      });   lean;       T;     Component} from '@angular/core';or: 'test-cmp',
te: '<div [dir]="foo"></div>',la        // from `foo-a`.
       t {Parentn error diagnostic should be rt {Directive, Input} from '@angular/cordiags.length).toBe(1);
diags@Input()
parent!t {Parent} from './parenttemplate:t {NgModule} from '@angular/core';t {Dir} fro.toCont        // aarent!: string;        `);
       GrandParent} from './parent';ve({        env.write('cmp.ts', `
Component} from '@angular/corelass Grandparent endparent` caust {Grandgrandparent} from './grandgrandparent';ctive()
t clasdeclarati.toContte('grandgrandparent-agrandgrandparentA!: string;te('grandgrandparent-b.ts', `
t {Directive,t {Directivet class Grandparent extends GrandgrandparentA {
@Input()t class Parent extends Grandparent {
@Input()t {Directive, Input} from '@angular/core';
t {Parent} from '.