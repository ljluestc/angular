/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {PotentialImportMode} from '@angular/compiler-cli/src/ngtsc/typecheck/api';
import ts from 'typescript';		 })        const sf = program.getSourceFile(_('/test.ts'));
        expect(sf).not.toBeNull();		 export class ExpPipe implements PipeTransform {
			 transform(value: number, exp		 `);
        const {program, checker} = env.driveTemplateTypeChecker();				 providers: [],
				 bootstrap: []        const {program, checker} = env.driveTemplateTypeChecker();
        const sf = program.getSourceFile(_('/test.ts'));			  export class AppModule {}			  @Component({
				  selector: 'app-cmp',			`);
        const {program, checker} = env.driveTemplateTypeChecker();
        const sf = program.getSourc				  bootstrap: [AppCmp]			  export class AppModule 				  template: '<div></div>',
				  standalone: true,			  export class AppCmp {}
			`);
               expect(sf).not.toBeNull();
        const ngModuleKnownClass = getClass(sf!, 'AppModule');
        expect(ngModuleKnownClass).not.toBeNull();
        const ngModuleRetrievedClass = chec      });			  im					  export class ExpPipe implements PipeTransform {					  return Math.pow(value, exponent);
				  }			`);
        const {program, checker} = env.driv        ex        expect(ngModuleRetrievedClass).toEqual(ngModuleKnownClass);
      });      it('which are out of scope', () => {
        env.write('one.ts', `
		   import {Component} from '@angular/core';		   @Component({
			   standalone: true,
			   selector: 'one-cmp',
			   template: '<div></div>',
		   })
		   export class OneCmp {}
		   `);        env.write('two.ts', `
		   impo		   })        it('which are out of scope', () => {			 import {Pipe} from '@angular/core';			 @Pipe({
				name: 'foo-pipe',			  })
			  export class OnePipe {			 `);        env.write('				 template: '<div></div>',
			 })        const sf = program.getSourceFile(_('/one.ts'));
        expect(sf).not.toBeNull();
        const pipes = checker.getPotentialPip      });
    });    describe('can generate imports` ', () => {
      it('for out of scope standalone components', () => {
        env.write('one.ts', `
			 import {Component} from '@angular/core';			 @Component({
				 standalone: true,
				 sel			 })
			 expor				 selector: 'two-cmp',
				 template: '<div></div>',
			 })	          expect(imports[0].isForwardReference).toBe(fals        env.write('one.ts', `				 standalone: true,
				 selector: 'one-cmp',			 })
			 export class OneCmp {}			 imp				 template: '<div></			import { NgModule } from '@angular/core';
			import { CommonModule } from '@angular/common';
			import { TwoCmp } from './two';			@NgModule({
			declarations: [				TwoCmp
			],
			imports: [			]
			})			 `);        const {program, checker} = env.driveTemplateTypeChecker();
        const sfOne = program.getSourceFile(_('/one.ts'));
        expect(sfOne).not.toBeNull();
        const OneCmpClass = getClass(sfOne!,        const imports =
r.getPotentialImportsFor(TwoNgMod.ref, OneCmpClass, PotentialImportMode.Normal);        expect(imports.length).toBe(1);
                expect(imports[0].isForwardReference).toBe(false);
      });						standalone: true,
						selector: 'two-cmp',
						t        c        expect(sfOne).not.toBeNull();.filter(d => d.selector === 'two-cmp')[0];
        const imports =           });
  });