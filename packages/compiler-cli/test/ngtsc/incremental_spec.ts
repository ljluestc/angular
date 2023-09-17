/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      export class Cmp2 {}      env      env.invalidateCa           expect(written).not.toContain('            e    `);      env.flushWrittenFileTr    });    it('should rebuild components whose      import {Component} from '@angular/core';      @Component({selector: 'cmp', template: 'cmp'})
      export class Cmp1 {}      env.write('component2.ts', `
      import {Component} from '@ang    `);      env.flushWritt      env.driveMain();      expect(written)       o upstr        import {Component} f             env.write('dep.ts', `      `);        import {Directive} from '@angular/core';        @Directive({selector: 'dir'})
        export class Dir {}      env.write('pipe.ts', `
        import {Pipe} from '@angula        import {Cmp2}       `);
      env.driveMain();      // Pretend a change was made to 'dep'. Since the selector is updated this affects the NgModule
      // scope, so all components in       `);
      e      expect(written).not.toContain('/d      expect(written).toContain('/component2.js');
      e      e        import {NgModule} from '@angular/core';
        import {FooCmp} from './foo_com        ions: [FooCmp], // removed FooPipe        })      `);
      e      expect(written).not.toContain('/b      expect(written).not.toContain('/bar_modu      expect(written).toContain('/foo_component.    });    it('should rebuild a component if one of its deep NgModule dependencies changes', () => {
      // This test constructs a chain of NgMod      // - MiddleAModule exports MiddleBModule
      // - MiddleBModule exports DirModu      // verifying tha        import {Component, NgModule} from '@angular/core';
        import {MiddleAModule} from './middle-a';        @Component({
: 'test-cmp',        })
        export class E      env.write('middle-a.ts', `
        import {NgModule} from '@angu        export class MiddleAModule {}
      `        import {NgModule} from '@angula        import {NgModule} from '@angular/core';
        import {Dir} from './dir';        @NgMod        export class DirModule      env.write('dir.ts', `
               export class MiddleBModule {}
      `        export class DepDir {}        @NgModule({
ions: [DepDir],        })      `);      env.write('cmp.ts', `: 'test-cmp',        })
               import {NgModule} from '@angular/core';
        import {Cmp} from './cmp';
        import {DepModule} from './dep';       [DepModule],             env.flushWrittenFileTracking();      // Remove the component from the module and recompile.
      env.write('module.ts', `        import {DepModule} from './dep';        @NgModule({
ions: [],        })      expect(env.getFi    });    it('should rebuild only a Component (but with the correct CompilationScope) if its template has changed',
       () => {('bar_component.html', '<div bar>changed</div>');Main();
tten = env.getFilesWrittenSinceLastFlush();
itten).not.toContain(' that the used directives are included in the component's generated template.
v.getContents('/built/bar_component.js'))
tch(/dependencies:\s*\      setupFooBarProgram(env);      // Pretend a change was made to a typings file.
      env.invalidateCachedFile('foo_s      expect(written).toContain('/foo_component.js');
      e    });    it('should re-emit an NgModu        export class DepModule {}
      `);        import {Component} from '@angul [DepModule],        export class Cmp {}
      `);        import {NgModule} from '@angular/core';        e        impor      const written = env.getFilesWrittenSinceLastFlush();
      expect(written).toContain('/module.js');        import {Component} from '@angular/core';        @Component({template: ''})
        export class MyComponent {}
      `      env.invalidateCachedFile      expect(diags.length).toBe(0);
    });    // https://github.com/angula      env.tsconfig({fullTemplateTypeCheck: true});      // This file structure has an identical version of "a" under the root node_modules and inside
      // of "b". Because their package.json file indicates it is the exact same version of "a",
      //       // assure not to reintroduce "n      env.write('node_modules/a/package.json', `      env.write('node_modules/b/node_modules/a/index.d.ts', `export declare class ServiceA {}`);
      e        import {Component} from '@angular/core';
        import {ServiceA} from 'a';
        import {ServiceB} from 'b';                 env.flushWrittenFileTracking();      // Pr      e      // of "b". Because their packag      // into a redirect to "node_modules/a/index.d.ts". During incremental compilations, the
      // redirected "node_modules/b/node_modul      env.write('node_modules/a/index.js      env.write('node_modules/a/package.json', `{"name": "a", "version": "1.0"}`);
      env.write('node_modules/b/node_module      env.write('node_modules/b/node_modules/a/package.json', `{"name": "a", "version": "1.0"}`);
      env.write('node_modules/b/index.js',         export class Cmp1 {}
      `);               import {ServiceB} from 'b';        @Component({selector: 'cmp2', template: 'cmp'})
        export class Cmp2 {}      // forces recreation of source file redirec        import {Component} from '@angular/core';
        import {ServiceA} from 'a';        @Component({selector: 'cmp', template: 'cmp'})
        export class C      beforeEach(() => {
        env.tsconfig({strictTemplates: true});
      });      it('sho        // - an unmatched bind        env.write('component.ts', `
Component} from '@angular/core';
nt({te:-a-component></not-a-component>
 [notMatched]="1"></div>lass TestCmp {}
                      expect(diags.length).toB        // a way that introduces a type error in the template. The test verifies the resulting
        // diagnostic is produced.nterface SomeTte: '{{ doSomething(value.fieles a string value only.
thing(param: string): string {        env.flushWrittenFileTracking();        // Change the interface.
        env.write('iface.ts', ` number;            // This test defines the component `TestCmp` that has a default-imported class as
        /efault class Directive} from '@angular/core';ve({ selector: '[dir]' })
lass TestDir {}TestDir} from './dir';lass TestMod {}        env.flushWrittenFileTracking();        // Update `TestDir` to change its inputs, triggering a re-emit of `TestCmp` that uses
        // `TestDir`.
        elass TestDir {}
        `);                      te: '<div dir [someInput]="1"></div>',lass Cmp {}        env.write('module-a.ts', `
NgModule} from '@angular/core'ModuleB} from './module-b';e({
ations:        `);        // Declare MoNgModule} from '@angular/core';ations: [Dir],lass ModuleB {}
        `);
        elass Dir {
() someInput!: any;        `);        let diags         expect(diags.length).toBe(1);        // As a precautionary check, run the build a second time with no changes, to ensure the
        // diagnostic is repeated.        // Should get a diagnostic about [dir] not being a valid binding.
       ations: [Dir],
s: [Dir],lass ModuleB {}
        `);        diags = env.driv            instead of placing it in a parallel build. Thising de-env.driveDiagnostics();e('cmp.ts', `
 {Component} from '@angular/core';nent({
ctor: 'test-cmp',
late: '{{test}}',Cmp {env.driveDiagnostics();
iags.length).toBe(0);rtain cases the template type-checker cannot generate a type constructor for a
tive within the template type-checking filea: string;
: string;tive({
ctor: '[dir]' class Dir<T extends keyof Keys> {
he use ut() dir: T;e('cmp.ts', ` {Dir} from './dir';
nent({iags[0].messageText)env.driveDiagnostics();
iags.length).toBe(1);ontain(`Type '"gamma"' is not assignable to type 'keyof Keys'.`);
        });        it(: string;tive({
ctor: '[dir]' class Dir<T extends keyof Keys> {
ut() dir: {Dir} from 'ule({lidateCachedFile('cmp.ts');hWrittenFileTracking();
eMain();y that only cmp.ts was emitted, but not dir.ts as it was not affected.
itten = env.getFilesWrittenSinceLastFlush();ritten).not.toContain('/dir.js');
        });
      });
    });    describe('missing resource files', () => {
      iUrl: '.        expect(firstDiagnostics.lengtst<      });      it('should re-analyze if component style fil        import {Component} from '@angular/core';        @Component({
: 'app',s: ['./so        expor        expect(firstDiagnostics.length).toBe(1);
        expect(firstDiagnostics[0].code).toBe(ngErrorCode(ErrorCode.COMPONENT_RESOURCE_NOT_FOUND));        env.write('some-style.css', `body {}`);
        env.driveMain();    });    env.write('foo_pipe.ts', `    }
  `);    import {FooPipe} from './foo_pipe';    @NgModule({
      declarations: [FooCmp, FooPipe],    }    env.write('bar_directive.ts', `
    impor  `);    impo  `);    env.flushWrittenFileTracking();
  }