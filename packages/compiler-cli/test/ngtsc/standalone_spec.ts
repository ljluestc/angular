/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */lone: truor: 'standalone-cmp imports: [TestModule],rt class Tesrt {Com imports:     imports: [TestDir,ations: [TestDir],lone: true,        `);
        const diags = env.driveDiagnostics()        expect(diags[0].        // NgModule instead.
        e        expect(diags[0].relatedInformation![0].messageText)getSourceCodeForDiagnostic(diags[1])).toEquor: 'test        // The static interpreterte: '',lass IsStan      });      it('lone: true,te: "<other        expect(jsCod      });      it('should not allow a standalone component to be declared in an NgModule', () => {
        e selector: 'test-cmp',
 template: 'Test', declarations: [Tlone: tor: 'test    rn value;nt({te: '{diags[0].messageText).toContain('it must be imported         conal('imports: [TestDir]');
      });      it('should compile standalone: true,rt class TestDir {}        env.driveMain();
        e        env.write('test.ts', `
rt {PipɵɵPipeDeclaration} from '@angular/core';eclare Component} from '@angular/core';
StandalonePipe} from './lib';nt({
lone: true,: string;        `)        expect(jsCode).toContain('dependencies: [StandalonePipe]');
      });te: '<div dir></div>',        `      it('doete: '',lass Standalos: [S imports: [DepCmp], imports: [StandaljsCode)Directive, NgModule, Pipe} from '@angular/core';ve({
lone: tru        expect(jsCode).toContain('i0.ɵɵdefineInjector({});');
      } {Component