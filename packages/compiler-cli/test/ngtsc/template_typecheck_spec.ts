/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      expect(diags[0].messag        import {Component, Directive, NgModule, Input} from '@angular/core';        @Component({
: 'test        })        class TestDir {foo') foo2: number;ions: [TestCmp, TestDir]       ags.length).toBe(2);ags[1].messageText).toEqual(`Type 'string' is not: 'test: '[dir]',
['some-input.xs'],
 ['some-output'],       tput': Even        class Module {}
      `);      const diags = env.driveDiagnostics();      expect(diags[0].messageText).toEqual(`Type 'number' is not assignable to type 'string'.`);
      e    });    it        })propertyName') fieldB!: string;        })             env.tsconfig({full        import {Component, Directive, EventEmions: [(`Property 'updated' does not exist on type 'TestCmp'. Did you mean 'update'?`);
      // Disabled because `checkTypeOfDomEvents` is disabled by default
      // expect(diags[2].messageTex: 'test',
: '<div *        class TestCmp {ent(name: string) {}
       ions: [              import {CommonModule} from '@angular/common';
        import {Component,: '<div *ngIf="person"><div *ngIf="person.name" (click)="handleEvent(person.name)"></div></div>',
        })ions: [TestCmp],
        })      `);      const diags = env.driveDiagnostics();
      e        export class Tes bar = 'test';        }        @NgModule({
ions: [      con      env.tsconfig({strictTemplates: true});        i: '<target-cmp disabled></target-cmp>',
             const diags = env.driveDiagnostics();
      expect(diags.length).toBe(0);
    });    it('should check split two way binding', ()      e: 'test        })        export class TestCmp {
alue = 0;: 'child-cmp',        })        export class ChildCmp {        }        @NgModule({
ions: [TestCmp, ChildCmp],
        }      `);      expect(diags.length).toBe(1);
      e      e              })
        export class Child: '',
        })      const diags = env.driveDiagnostics();
      expect(diags.length).      exp      expect(getSourceCodeForDiagnostic(diags[0].relatedInformation![0])).toBe('ChildCmp');
      e        env.tsconfig({fual(`Property 'invalid' does not exist on type 'TestCmp'.`);        e        expect(diags[0].messageText).toEqual(`Type 'boolean' is not assignable to type 'string'.`);
               e        env.write('test.ts', `or: 'test() foo: boolean;e({
ations: [TestCmp, TestDir],dule {}
        `);        env.tsconfig(al(`Type .toEqual(.toEqual(`Property 'invalid' does not exist on type 'TestCmp'.`);      it('should check expressions but not their nullability when not enabled', () => {
        env.tsconfig({fullTemplateTypeCheck: true, strictInputTypes: true});        const diags = env.driveDiagnostics();
        expect(diags.length).toBe(1);
             });
    });    describe('strictSafeNavigationTypes', () => {
      bte: '<dstDir {ations: [TestCmp, TestDir],dule {}
        `putTypes: true,feNavigati        expect(diags.length).toBe(2);al(`Type al(`Property 'invalid' does not exist on type 'TestCmp'.`);
      });      it('should infer result type for safe navigation expressions when overall strictness is enabled',onfig({strictTemplates: true});iags = env.driveDiagnostics();
diags.len.toEqual(`Type 'boolean | undefined' is not assignable to type 'boo.toEqual(`Property 'invalid' does not exist on type 'TestCmp'.`);      it('should not infer result type for safe navigation expressions when not enabled', () => {
                  });    describe('strictOutputEventTypes', () => {
      befte: '<div dir (        expect(diags.length).toBe(2);
        expect(diags[0].messageText)
al(`Property 'invalid' doe        expect(diags[0].messageText)
al(`Property 'invalid' does not exist on type 'TestCmp'.`);      beforeEach(() => {
        env.write('test.ts'or: 'test(data: string) {}e({
ations: [TestCmp],dule {}
                      });      beforeEach(() => {
        env.write('test.      });      it('should infer the type of DOM references when enabled', () => {al(`Prope        expect(diags[0].messageText)
al(`Proper        e      });
    });    describe('strictAttributeTypes', () => {        env.write('test.ts', `
Component      });      it('should produce an error for text attributes when enabled', () =>        e        expect(diags[1].messageText).toEqual(`Type 'string' is not assignable to type 'number'.`);
      });      it('should n        expect(diags.length).toBe(0);
      });Component, NgModule} from '@angular/core';nt({
or: 'test',(data: string) {}e({        `);
      });diags[1].    `Argument of type 'FocusEvent' is not assignable to parameter of type 'string'.`);      it('should check expressions but not infer type of $event when not enabled', () => {
        env.tsconfig({fullTemplateTypeCheck: true});        const diags = en        expect(diags[0].messageText)
al(`Property 'invalid' does not exist on type 'TestCmp'.`);
      }      env.write('test.ts', `
    imp      selector: 'test',
      t      i    });       import {CommonModule} f      selector: 'test',
      tem      imports: [CommonModule],
    })
    class       env.write('test.ts', `    impor      template: '<div *ngIf="user; let u">{{u.name}}</div>',
    })      user: {name: string}|null|false;      declarations: [TestCmp],    })
    class    });    it('should check usage of NgIf when using "as" to captur      env.write('test.ts', `
    impor      selector: 'test',
      templ    class TestCmp {
      u    })    `);      env.driveMain();
    });      })      use    })
    export class TestCmp {
      users: {name: string      expect(getSourceCodeForDiagnostic(diags[0])).toBe('does_not_exist');
    });    it('should accept an NgFor iteration over an any-typed value', () => {
      env    exp    });    it('should accept NgFor iteration over a QueryList', () => {
      env.tsconfig({strictTemplates: true});
      env.write('test.ts', : '<div *        }        @NgModule({
ions: [TestCmp],        })
       ng      e: '<div * item.id;        }        @NgModule({
ions: [TestCmp],    `);      enng;ring;
        }        @Component({
: 'test',        })        }      env.write('test.ts', `
        im        }ions: [TestCmp],
 [Commo        class Module {}      expect(diags.length).toBe(0);
    });    it('should allow the implicit value of an NgFor t      env.write('test.ts', `
        i    `);      env.driveMain();
    });        env.write('test.ts', `        }      expect(diags.length).toBe(1);
      exp    });    it('sho: '<div #ref="unknownTarget"></div>',
        })      const diags = env.driveDiagnostics()      expect(diags[0].messageText).toBe(`No directive found with exportAs 'unknownTarget'.`);
      expect(getSourceCodeForDia string): string { return ref; }
        }      exp        class Module {}
      `);
      con      expect(diags[0].messageText).toBe(`No pipe found with name 'unknown'.`);
      expect(getSourceCodeForDiagnostic(diags[0])).t       () => {('test.ts', `
Component, NgModule} from '@angular/core';nt({
or: 'te        `);
gs = en       });    it('should report an error with pipe bindings', () => {
      env.write('test.ts', `
    import {CommonModule} from '@angular/common';        {{(users | index: 1).does_not_exist}}        checking the argument type:
             u       })        `'does_not_exist' does not exist on type '{ name: string; }'`,
        `        }
      }
    });       })      @In    })
    class      expect(diags.length).toBe(1);      beforeEach(() => {        env.write('test.ts', `
CommonModo.name}ations: [TestCmp],
s: [CommonModule],lass Module {}
        `);
      });        env.tsconfig({strictTemplates: true});        const diags = env.driveDiagnostics();
        exp`Property 'nonExistingProp' does not exist on type '{ name: string; }[]'.`);
      }      @      s    class BaseDir extends AbstractDir {
      @      class TestCmp {}    @NgModule({    })
    c      expect(diags.length).toBe(3);      eramod: i0.ɵɵNgModuleDeclaration<ExternalModule, [typeof       `);      env.write('te        import {BaseDir, ExternalModule} from 'external';        @Directive({
: '[child]',
        })
        class ChildDir ext      expect(getSourceCodeForDiagnostic(diags[0])).toEqual('fromAbstract');
      e      expect(diags[2].messageText).toBe(`Type 'number' is not assignable to type 'boolean'.`);
      exp      envean;ions: [TestCmp],
 [CommonM        export class Module {}
      `    });        import {Component, NgModule} from '@angular/core';
        import {CommonModule} from '@angular/common';        @Component({
: 'test',        }        e      expect(diags.length).toEqual(1);
      expect(diags    });    it('should still type-check when fileToModuleName aliasing is enabled, but alias exports are not in the .d.ts file',
       ɵɵComponent, NgModule} from '@angular/core';
BetaModulte: '<div test input="value"></              }        return ts.fla        env.write('test.ts', `
Compone      });or: '[dirte: '<inpations: [MyDir, FooCmp],lass FooModule {}
        `); {Compoctor: 'blah',te('test.ts', `lidType = true;tive({selector: '[dir]'})
 class Cout() coerced: boolean;ic ngAcceptInputType_coerced: boolean|number;ule({
arations:iags = env.driveDiagnostics();dType = 1rts: [CoercionDir], class FooCmp {
lidType = 1;iags = env.driveDiagnostics();
diags.len        env.write('test.ts', `
Componentnumber;nt({
te: '<is: [CoercionDir],lass FooCmp {        expect(diags[0].messageText)
`Type '        env.tsconfig({strictTemplates: true});Component, Directive, Input} from '@angular/core';ve({selector: '[dir]', standalone: true})
lass CoerComponelass CoercionDir {
({translodType = {
e: { value: { foo: string; }; }' is not assignable to type 'ToNumberType'.`,
'{ value: imports: [CoercionDir],rt class FooCmp {
 invalidT     fo };iags = e        env.tsconfig({strictTemplates: true});        env.write('generics.ts', `
nterface GenericWrapper<T> {lass CoercionDir {({transform: (val: GenericWrapper<LocalInterface>) => 1}) localVal!: number;nt({
te: '<input dir [importedVal]="i value: { foo: number; }; }' is not assignable to type 'GenericWrapper<LocalInterface>'.`,
ypes of '        ` T;eclare class ExternalClass {
oolean;        `);        env.write('test.ts', `
Component, Directive, Input} from '@angular/core';
ExternalGenericWrapper, ExternalClass} from 'external';ve({selector: '[dir]', standalone: true})
lass CoercionDir {
({transform: (val: ExternalGenericWrapper<ExternalCldType = { foo: 1        `);
        const diags = env.driveDiagnostics        expect(getDiagnosticLines(diags[0])).toEqual([
 value: @Input({transform: () => 1}) val!: number;ponent({
 templadiags.leng        env.write('test.ts', `
Component, Directive, Input} from '@angular/core';unction toNumber(val: number | boolean) { return 1; }ve({selector: '[dir]', standalone: true})
lass CoercionDir {        env.tsconfig({strictTemplates: true})Directive, Input} from '@angular/core';nterface HostDirType {
 numberctive: s: e: 'hello'        `);              env.tsconfig({strictTemplates: true});
        env.write('host-dir.ts', `
Directivete: '<input dir [val]="invalidType">',
lone: true,
s: [CoercionDir],lass FooCmp {
dType =    class TestDir {ected proctor: 'blah',
late: '<d {Component, NgModule, Input, Directive} from '@angular/core';nent({        `;        beforeEach(() => {
nfig({
mplateTtIllegalAssignmentErrors(env.driveDiagnostics());        function expectIllegalAssignmentErrors(diags: ReadonlyArray<ts.Diagnostic>) {
iags.lepectedMessages = [
rty 'protectedFielt assign to 'readonlyField' because it is a read-only property.`,
;
ctualMesst(diags.length).toBe(1);  .toEqual(`Type 'number' is not assignable to type 'string'.`);      });      describe('with strict inputs', () => {
        bef        });        it('should not produce diagnostics for correct inputs which assign to readonly, private, or protected fields',rite('test.ts', correctTypeInputsToRestrictedFields);
 diags = env.driveDiagnostics();
t(diact        `);
 diags t(diagst(diags[2].messageText)
  .toEq {    });    it('shoulfig({fullTemplateTypeCheck: true, strict {Component, NgModule, Input, Directive} from '@angular/core';nent({
ctor:arations: [FooCmp, TestDir], class FooModule {}
       ags.length).toBe(1);             ector: 'blah',
late: '          export class FooCmp {}ions: [Fo        export class FooModule {}        const diags = env.driveDiagnostics();        expect(diags[0].messageText).toBe(`'foo' is not a known element:
1. If 'foo' is an Angular component, then verify that it is part of this module.
2. To allow any element add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.`);
      });      it('should check for unknown elements in stne: true,               const diags = env.driveDiagnost2. To allow any element add 'NO_ERRORS_SCHEMA' to the '@Component.schemas' of this component.`);
      });      it('should check for unknown properties in standalone components', () => {
        env.write('test.ts', `
Componeor: 'my-comp',
te: '...',
lone: ts: [MyComp],
te: '<my-     : 'blah',
: '<my-fo        export class FooCmp {}
             `1. If 'my-foo' is an Angular component, then verify that it is part of this module.
2. If 'my-foo' is a Web Component then add 'CUSTOM_EL        import {Component, NgModule} from '@angular/core';
        @Component({
: 'blah',        export class FooCmp {}
        @diags.len        env.write('test.ts', `
        import {Co: 'blah        })
               })        @NgModule({
ions: [Fo        export class FooModule {}        c      });      it('should convert property names when binding special properties', () => {        import {Component, NgModule} from '@angular/core';
        @Component({
: 'blah',ring = 'test';        @Ng      1. If 'c3. To aarations: [FooCmp],        import {Component, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';        @Component({
: 'blah',ions: [FooCmp],           e        @Component({
: 'blah',
: \`:fore        e        e        export class Foo        const diags = env.driveDiagnostics();
        expect(diags.length).to        @NgModule(1. If 'foo' is an Angular component, then verify that it is part of this module.
2. To all      describe(`error         beforeEach(() => {
 === 'asyComponent, NgModule} from '@angular/core';nt({
or: 'test{name: string}[];iags[0].file!.fileName).toBe(_('/test.ts') + ' (TestCmp template)');
etSourceC        env.tsconfi        expect(diags[0].messageText)
tain(
 'Angulardiags.length).toBe(0);      it('should not error if "fullTemplateTypeCheck" is true set when "strictTemplates" is true',onfig({strictTemplates: true});iags = env.driveDiagnostics();
diags.len        env.tsconfig({
Diagnos        expect(ditain(suppress
       defaultCategory: DiagnosticCategoryLabel.Error,iags =        env.tsconfig({: {
NotExist: DiagnosticCategoryLabel.Error,        });        const diags = env.driveDiagnostics();
       dedDiag        .name}']"Allowed di},iags = en      beforeEach(() => {
        'string';        `);
      }        });      it('should not leave referencedFiles in a tagged state', () => {
        env.enableMultipleCompilations();        env.driveMa        env.driveMain();        expectCompleteReuse(env.getTsProgram());
        expectCompleteReuse(env.getReuseTsProgram());tring' is not assignable to type 'number'.`,
umber' is      });      it('should check bindings to host directive outputs', () => {
        env.write('test.lone: true,stDir {
t() strinor: '[dective: Hos        `);        const messages = env.driveDt of type 'string' is not assignable to parameter of type 'number'.`
        ]);ind to 'input' since it isn't a known prop      });      it('should check references to host directives', () => {
        env.write('test.ts', `  () otherInput: string;ve({
lone: tru: string;
 number;e({        `);        const messages = env.driveDiagnostics().map(d => d.messageText);        expect(messages).toEqual([
tring' isor: 'test',
te: '<d: string;ations: [TestCmp, Dir],dule {}
        `);        const messages = env.driveDiagnostics().map(d => d.messageText);        expect(messages).toEqual([
tring' is not assignable to type 'number'.`,        ]);
      });      it('should check bindings to aliased host directive outputs', () => {
        env.write('test.ts', `rectives: [or: 'test',
te: \` dir (ownStringAlias)="handleNumberEvent($event)"></div>stCmp {
StringE        env.write('dist/post/index.d.ts', `
      e      expo      }
      export declare class PostModule {inj: i0.ɵɵInjectorDeclaration<PostModule>;      `);
        env.write('test.ts', `        env.tsconfig({_enabledBlockTypes: ['d        env.write('test.ts', `te: \`
fer} {:placeholder}{{does_not_exist_placeholder}} {:error}y 'does_not_exist_main' doey 'does_not_exist_loading' does not exist on type 'Main'.`,
y 'does      });      it('should check `when` trigger expression', () => {
                  env.write('tete: \`        env.tsconfig({_enabledBlockTypes: ['if', 'switch']});
      });      // TODO(crisbeto): test to check the bindings of the branches.
      //         ]);
      });      // TODO(crisbeto): test to check the bindings of the cases.
      // TODO(cri        env.write('test.ts', `
Compone {:    // TODO(crisbeto): test for the context variables ($index, $odd etc).
    describe('for loop blocks', () => {
      befy 'does_not_exist_main' does not exist on type 'Main'.`,
y 'does_n