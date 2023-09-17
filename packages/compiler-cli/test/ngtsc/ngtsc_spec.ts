/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      expect(jsContents).toContain(      expect(jsContents).toContain(', providedIn: \'root\' });');
      expect(jsContents).not        export class Service {        }        const dtsContents = env.getContents).toContain('static ɵprov: i0.ɵɵInjectableDeclaration<Service>;');      expect(jsContents) = fun      expect(jsContents).not.toContain('__decorate');      expect(dtsContents).toContain('static ɵfac: i0.ɵɵFactoryDeclaration<Dep, never>;');
      expect(dtsContents).toContain    });    it('should compile @Injectable with an @Optional dependency', () => {
      env.write('test.ts', `
        env.write('test.ts',       class Dep {}      @Injectable()
      class OptionalDep {}      @Injectable()        constructor(dep: Dep);        constructor(dep: Dep, @Option        `);      env.driveMain();      consɵɵComponentDeclaration<TestCmp, "test-cmp", never, {}, {}, never, never, f    `);      env.driveMa            const expectedComponentDeclaration =    });    it('should compile Components (external template) without errors', () => {
      env.write('test.ts', `mp',        })
        export class TestCmp {}
        }      });ve, NgModule} from '@angular/core';ector: 'internal'})
ternalDir {}ector: 'externernalDir],dule {}            expect(dtsContents) i0.ɵ    });    it('should not list imports in NgModule .d.ts when requested', () => {
      e      });
  ve} from ).toContain('Dir.ɵfac         });        it('should add @nocollapse to static fields', () => {sureCompiler': true,s', `
nt} fro).toCon   <some-dir>Has a directive, should be okay </ng-t checking that there a   useFactoryule} fr providers: ${providers}ce} from './service'; template: '...',
 viewProviders: ${providers}SomeComponent {};
v      }      })      expect(jsContents).toContain('TestBase.ɵdir      expect(jsContents).toContain('TestDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective');
      e      expect(jsCo    })        class PipeA {        }        @NgModule({
peA],          class PipeB {        }        @Component({nt | number }}'
       ],
peB, App],      e       () => {', `
nt, Pipe, NgModule} from '@angular/core';sesumber'})} [PipeA],
eA]}sesumber'})} [PipeB],.toContain('dependencies: [PipeB]');
              rectiveB, ComponentB, App],      e      env.write('test.ts', `
        import {Component,         class Modu        class ComponentB {}        veB, ComponentB]
        })        export cp],        class Module      expect(jsContents)    })      e        import {Component} from '@angular/core';        @Component({
mp',        })
           });r/style    `);      expect(jsContents).toContain('background-c      env.write('test.ts', `
        import {Component} from '@angular/core';        @Component({r/style.scss'],         `);
      envny;defineDirecɵɵDirectiveDeclaration<TestBase, never, never, { "input": { "    });    describe(ndecoratedClassWithField('Input'));
      i      indecoratedClassWithLifecycleHook('ngDoCheck'));
      it(`should error if ngAfterViewInit lifecycle hook has been discovered`,
ndecora        })      expect(jsContents)fac = function TestModule_Factory(t) { return new (t || TestModule)(); }');
      e        import {NgModule} from      env.write('test.ts', `
             expect(jsContents)      expect(jsContents).toContain(`i0.ɵɵregisterNgModuleType(TestModule, 'test')`);
    });    it('should filter      import {NgModule} from '@angular/core';
      import {RouterComp, RouterModule} from '@an           export class MyPipe {}      @Componen    `);
      env.write('node_modul      env.write('test.ts', `
             expect(dtsContents).toContain('static ɵinj: i0.ɵɵInjectorDeclaration');
    });stCmp],dule],        export class T      expect(jsContents)fac = function TestModule_Factory(t) { return new (t || TestModule)(); }');
      expect(jsContents).toContain('i0.ɵɵdefineNg{ provide: Token, useFactory: () => new Token() }], ` +
herModu      expect(dtsCDep) {        })    `);        expect(jsContents).toContain('i0.ɵɵdefineNgModule({ type: TestModule });');
     he      import {Foo} fr      })    `);      import {Component} from '@angular/core';
      @    });    it('should compile NgModules with references to absolute components', () => {
      env.write('tsconfig.json', JSON.stringify({
        extends: './tsconfig-base.json',      }))      import {NgModule        declarations: [Foo],
      }      import {        template: '',
      })         co      expect(dtsContents).toContain('as i1 from "foo";');
             ex      expect(jsContents).toContain('bootstrap: fu      })
      e    });          export class BarModul      expect(jsContents).toCont, forwardRef} from '@angular/core';oo = forwardRef(() => Foo);tor: 'foo'})
{}', `
 from ',        })    });    `);      env.driveMain();      const jsContents = env.getContents('test.js');
      const dtsContents = e    });    it('sho      const dtsContents = ec ɵpipe:    });    it('should include @Pipes in @NgModule scopes', () => {
      env.wr    });    des        ex        expec        expect(jsContents                    env.write('tsconfig.json', JSON.stringif{rootDir: '.', outDir: '../node_modules/lib1_built'},
       } from '@angular/core';Class {}
              dule {}      });      it('should throw if multiple query decorators are used on the same field', () => {
        env.tsconfig({});, ContentChild} from 'foo')        `);
        verifyThrownError(        it(`should throw if @Input and @${decorator} decorators are applied to the same property`,});
t.ts', ` template: '<ng-content></ng-content>'TestCmp {  ErrorCode.DECnt, $('foo', 'invalidOptionsArgumentType') foo: any;(
ORATOR_ARnt, ${decorator}} fromUE_HAS_WRON        env.tsconfig({});} from         `);_HAS_WRONG_TYPE,
lve @Di       nt, ${decorator}} from '@angular/core';st-cmp',
.'stCmp {
(['invalid-arg-type']) foo: any} decorator argume        verifyThrownError(        env.tsconfig({});
       id-queries-type'Dir           `);_HAS_WRONG_T      });      it('should throw error if @Directive.queries object has incorrect values (refs to other decorators)',;
ts', `
tive, I        env.tsconfig({});e} from '@angular/core';        `);
        verifyThrownErro      });      it('should produce a diangostic if the transform value is not a function', () => {
       ErrorCode.VALUE_HAS_WRONG_TYPE      });      it('should produce a diangostic if the transform function type cannot be referenced from the source file',.ts', `
nalTypeDir {ErrorCode.IMPORT_ErrorCode.IMPORT_GENERATION_FAILURE, 'Unable to import type InternalType.');      it('should produce a diangostic if transform type is not exported', () => {
        en{L_NOT_EXPORTED,
 exported in order to berm: toNumber}) value!: number;        `);        verifyThrownError(
_HAS_WR      });      it('should compile @Injectable on Components, Directives, Pipes, and Modules', () => {
        env.write('test.ts', `        @Injectable()        @Injectable()
        ex        expect(jsContents).toContain('TestPipe.ɵprov =');        expect(dtsContents).toContain('ComponentDeclaration<TestCmp');
             expect(dtsContents).      });              import {Component, Directive} from '@angular/core';        @Component({selector: 'test', template: 'test'})
        @Directive({selector: 'test'})        expect(errors[0].messageText).toContain('Two incompatible decorators on class');
      }        import {Direlength)  .toBe(
      `No suitable injection token for parameter 'notInjectable' of class 'Test'.\n` +
      ` export class MyService {
   consconstructor(param: strDiagnoselatedInformation!.lenable} from '@angular/corconstructor(param: ClassA|ClassB) {}.driveDiagnostics();
th).toBe(1);elatedInformation![0].messageText)
ype is th).toBe(1);elaten a seictInjectionParameterable} ftht.ts', `
imporex  constructor(private  .toMatcimport {Injectable}   useExisting: MyService,
})export });
ts = env.getContents('test.js');
nts)export ab});t.ts', `
import   constructor(  .toMatch(/function Test_Factory\(t\) { i0\.ɵɵinvalidFactory\(\)/ms);        it('should give a compile-time error when a derived Directive inherits an invalid constructor', () => {
ictInjectionParameters: true});impexport c  }
}@DC      `has s', `essageText)   `The injectable ConcreteServiceWithoutCtor inherits its constructor from ParentService, but the ` +
   `lat       s',   }   `does not have an Angular decorator of its own. Depe   `the parameters of ParentClass'sticSourceCode(diags[1])).to   `does not have an Angular decorator of its own. Dependency injection will not be able to resolve ` +
  ticSourceCode(diags[2])).toBe('ConcreteDirWithoutCtor');
       export class ConcreteMiddle      ts = env.getContents('test.s', `
import {Directive} from '@angular/core';@Di  constructor(private notInjectable: string) {}
}export class ConcreteMiddleDir extends AbstractM  constecorateictInjectionParametersimport {Directive} from '@angular/core';export abstract class ParentClass {
  constructor(private notIn       s', `st {gt)        });ts', `        export class Test {
te notInject).toCon      }).toContai        import {Component} from '@angular/core';        @Component({e ? "yes" : [no]}}',
        }      });      it('sho        c        }        expect(env.getContents('test.js')).toContain('i0.ɵɵpureFunction1');
      });this inicallyAnalyzabs).toCo    'i0.ɵɵNgModuleDeclaration<TestModule, never,        import {NgModule} from '@angular/core';
           `);        env.write('node_modules/router/index.d.ts', `
        impModuleDeclaration<RouterModule, never, ne        import {RouterMo        e      });  odule} ithProvt(): ModuleWithclass Router2Module {
ɵɵNgModuleDeclaration<Router2Module, never, never, never>;
 = env.le {}s)`, `      import {RouterModule} from 'router';      @NgModule({imports: [RouterModule.forRoot()]})
      export class TestModule {}      import {ModuleWi        static ɵmod: ɵɵNgModuleDeclaration<RouterModule, never, never, never>;
      }       () => {        import {NgModule} from '@angular/core';
        import {RouterModule} from 'router';        `);dules/router/index.d.ts',ModuleDeclarati).toC        import {,        } from '@angular/core';        @Component({        })
        c    `);      env.drive        imp        }        @Injectable({ useClass: MyService })() serv        }    () service: MyService) {}
        }        @Injectable({ useFactory: (service: MyService) => new Injectable(service), deps: [[new Host(), MyService]] })
        e        }() servi    `);      en      expect(dtsContents).toContain(`static ɵfac: i0.ɵɵFactoryDeclaration<Inj, [{ self: true; }]>`);
      e{ return null; }
so    `);      env.driveMain();
      const jsContents = env.ge      expect(jsContents).toM      expect(jsContents).toMatch(viewQueryRegExp('\\w+', 5));
               class FooCmp {    `);      env.driveMain      expec      //         // could extend the directive.    });    it('should handle queries        import {Component, ContentChild, TemplateRef, ViewContainerRef, forwardRef} from '@angular/core';        @Component({foo></div>',
        })      env.write(`test.ts`, `
               class Te      expect(env.getContents('test.js')).toContain('test[key] = $event');
    });    it('should generate host listeners for comventTarget: HTMLElement): void {}ndow:scroll')
en      const hostBinding        }    `;    });    it('should throw in case unknown global target is provided', () => {
      env.write(`test.ts`, `
               import {Component}      `);      const err      env.write(`test.ts`, `
        import {Componen      `);      expect(trim(errors[0].messageText as string))
t have a pipe in an action expression');      exomeclas      expect(trim(jsContents)).toContain(trim(hostBindingsFn));
    });    // https://github.com/angular/angular/issues/46936
    it('should support binding      })    `);      const jsContents = env.getContents('test.js');
      e    `);      const hos       @Component({
        se      class FooCmp {}      env.tsconfig({preserveWhitespaces: true});
      env.write(`test.ts      env.driveMain();
      const jsContents = env.getContents('test.js');     `);    });    it('should        @Component({
        selector: 'test',      })    `);
      e      expect(jsConten        import {Component} from '@angular/core';
        @Component({18n>Some text</div>'FormatIn: 'xlf'});        })
        cl     class FooCmp {      const jsContents = env.getContents('test.js');
             interpolation: ['{%'      cla            const jsContents = env.getContents('test.js');    });    it('should handle `encapsulation` field', () => {
      env.write(`test.ts`, `      })
      c      const jsConten               changeDetection: ChangeDetectionStrategy.OnPush
      })
      c      class CompA {}      const errors = env.driveDiagnostics();      expect(messageText)       @Component({
         r, Comp        })    `);      en      expect(jsContents).not.toMatch(/i      env.write('test.ts', `
        import {Component, Directive} from '@angular/core';        @Directive({
',         `);      env.drive      e        }        @Injeion GrandChild_Factory(t',
        })
        class Base {}           }
    `);      env.driveMain();
      c,        class Mo      c      env.write('test.ts', `        @Component({m-el></custom-el>',
        })        @NgModule({RS_SCHEMA],      const jsContents = t        MyC      expect(jsContents)e.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MyModule });'));
    });    it('should      i        @Directive({selector: 'dir'}) class TestDirective {}
         });    it('sh        'supportJitMode': false,
      });      import {C      @    });    it('shou      import {Component, Directive, Injectable, NgModule, Pipe} from '@angular/core';      @Component({selector: 'cmp', template: 'I am a component!'}) class TestComponent {}
      @Directive({sel    `);        expect(jsConte      });
      e      i      @Injectable() class TestInjectable {}
      @NgModule({declarations: [TestComponent, TestDirective]}) class TestNgModule {}
      @Pipe({name: 'pipe'}) class TestPipe {}    `);      import {Componen        template: '...',
      }      expect(j       () => {
s`, `eB her {}        const jsContents = trim(env.getContents('test.js'));
    gCme namesp   two: ns.one.two.Two,        env Foo {}
              `, `omp',        })      env.write(`keycodes.ts`, `      `);      env.driveMain();      expect(jsContents).toeOnlyOne {}
eOultImport from './types';
eOnlyOne} f types from './types';e-comp',
',eComp {@Inject('tor fo import should not be emit       });       `);th).toBe(0);
       });    it('should co            `);        env.write(        })
        export class NormalComponent {}            expect(jsContents).not.toContain('/*__PURE__*/ i0.ɵɵsetComponentScope');
       `);        import {Component} from '@angular/core';        @Component({
,        })        e,        })        import {Component} from '@angular/core';        @Component({
,             ot use a-cmp',        export class BCmp {        }        env.driveMain();
        const jsContents = env.getContents('test.js');dOne, SharedTwos).not.toContain('setCompoonent} from './other';ic-component',
rting t        import {Component} from '@angular/core';          expect(error.code).toBe(ngErrorCode(ErrorCode.IMPORT_CYCLE_DETECTED));
               con        `        <div #ref></div>               `
        <div    `;    }); requiredNodLiteral', required: true},        export classny;
any;     l": { "aleral": { "alirors[0].r        expect(code).toBass NotAModule {}
        `);ass Notans that theModule       });      it('should not emit multiple references to the same directive', () => {
        env.write('node_modules/external/indrectiveDeclaration<ExternalDir, '[test]', never, never, never, never>;
        }        export declare class ExternalModule {
ModuleD      `);
        env        })p],        })      `);        es', `essageText).toBe('c        c        e@m             }        // The         env.driveMain();
      });      it('should not throw or produce flat module index if "flatModuleOutFile" is set to ' +
,File':               i        @Directive({selector: 'test', host      `);        const errors = env.driveDiagnostics();
        expect(errors.length).toBe(1);        env.write('tes        @NgModule({exports: [DirModule]})
        export class Module {}        import {Directive, NgModule} from '@angular/core';        // The directive is exported.        export class Dir {}        // The module which declares it is not.
        @NgModule({declarations: [Dir], expo          `        expect(errors[0].        @Direct             export c        env.write('node_modules/rectiveDeclaration<ExternalDir, '[test]', never, never, never, never>;
        } from '        `);     Dir2} fromodule} frCmp],       } from '@     './dir';Dir],le {}
        `        const dtsContents = env.getContents('module.d.ts');        expect(jsContents).not.toContain('ɵngExportɵModuleɵDir');
        e    });        cl                     });      expect(beforeCount).toBe(1);
      expect(afterCount).toBe(1);        hostVars: 6,f')')iong;erHTML')
ring;le')        class FooCmp {}gsFn = `
        hostVars: 6,
        `      it('should use an alias to import a directive from a deep dependency', () => {
        env.tsconfig({'_useHost        import {ɵɵDirectiveD        env.write('beta.d.ts', `
               export class Module {}
      `);        const jsContents = env.getContents('tes        expect(jsContents).toContain('dependencies: [i1.\u0275ng$root$alpha$$ExternalDir]');
      }        env.write('        }          }reModuleDeclaration<LibModule, [typeof LibDir], never,       `        import {Directive, Ng        export class FooDir {}        @NgModule({ ExternalModule]        export class FooModule {}
      `);
                 env.driveMain(               });      it('does not produce an error when supported and version check is enabled', () => {
        env.tsconfig({disableTypeScriptVersionCheck: false});
               env.tsco        setTypeScriptVersionForTesting('3.4.0');
               expect(diags[0].messageText).toContainntDeclaration, ɵɵDirectiveDeclaramentRef: ElementRef) {}ass BaseCmp {
CoBaseDir, BaseCmp} from         `        expect(diags.length).toBe(0);       Directive, Component} from '@angular/core';
BasePlainWithBlankConstructor} from './local';ve({
or: '[d        expect(diags.lengtor: '[dirte: 'TestCmp',l      });      it('should error when inheriting a constructor from undecorated grand super class', () => {
        env.tsconfig();Dte: 'Test        expect(diags.length).toBe(2);
        expect(diags[0].messageText).toContain('       ({required: true}) input: any;ve({
or: '[dor: 'test-cmp',
te: '<div dir [input]="value"></div>',s: [Dir]lass Cmp {        const diags = env.driveDiagnostics();
        expect(diags.length).t    });    describe(: 'test',      `);    or: 'co        `);            // separate var.
        e '_c0 = "div[_ngcontent-%COMP%] { background: url(/some-very-very-long-path.png); }";');        expect(jsContent 'styles: [' +
 // Thi: [ { b        const j // Large string should be called from function definition.
 '_c0()]')        env.write('test.ts', `        expect(jsContents).toContain('styles: ["h2[_ngcontent-%COMP%] {width: 10px}"]');
      });      it('shoul        env.write('dir/styles.css', 'h2 {width: 10px}');
        env.write('test.ts', `             it('shoul       }       : \`      `);        env.driveMain();
        const jsContents = env        exp    });    describe('non-exported classes', () => {
      bDirective} from '@ang      });      it('should not emit component definitions for non-exported classes if configured', () => {
        env.write('tor: 'test',        const jsContente: 'Test Cmp',stCmp {}TestCmp};
        `);        const jsConte      <iframe src="http://angular.io"   \`
 })jsCo     src="http://angular.isContents = env.getContents('test.js'); sure that the `sandbox` has an extra validation fn,
the check is case-insensitive (since the `setAttribute` DOM API   standalone: true,
   sert {Directive} from '@angula   '[sand   'srk if an underlying host element is an <iframe>..toContjsContents).toContain('ɵɵattribute("allow", "", i0.ɵɵvalidateIframeAttribute)');      it('should generate a validator fn for attribute host bindings on a directive ' +
ing sure the check is case-insensitive)',te('test.ts', `
rt {Directive} from '@angular/core';ective({sContents = env.getContents('test.js'); sure that we generate a validation fn for the `sandbox` attribute,
 when it was declared as `SANDBOX`.
jsConteiders: [NotAService] class SomeModule {}iags = env.drivediags[0NgModule, Injectable, NgZone} from '@angular/core';ble({providedIn: 'root'})
rvice {ers: [{provide: Servic        `);        const diags = env.driveDiagnostics();
             });      it('should error when an undecorated class is provided to a directive', () => {
        env.write('test.ts', `
NgModul        `);        const diags = env.driveDiag        expect(diags[0].messageText).toContain('cannot oviders: [NotAService]meCNgModule, Pipe} from '@angular/core';'some-pipe'mePipe {}e({
ations:      }Injectable, NgModule} uctor(d        `);        const diags = env.driveDiagnostics();
        expect(diags.len        env.write('node_modules/@angular/        env.write('test.ts', `
NgModul      // with a body, whitructor(ngZone: NgZone);ite('test.ts', iders: [{provide: TestingService, useClass: Testability}] class SomeModule {}diags = env.driveDiagnostics();
(diags.length).toBe(1); * as i0 from '@angular/core'; declare class NgZone {} declare class Testability {
ic {NgMTestingdiags.length).to               it(        });        it('should use a single character span for an unexpected EOF parsing error', () => {
e('test.ts', `ponent({iags.length).toBe(1);
etDiagne('test.ts', `
rt {Com template: \`<input (click)="x = 'invalid'"/> {{x = 2}}\`,
 select        i {Component, ctor: 'my-Comp',etDiagnonent({
late: '',
ctor: '123-comp',iags[0]        });        it('should emit a diagnostic when a selector starts with a hyphen', () => {
e('test.ts', `
 {Compoe('test.ts', `      });      describe('i18n errors', () => {
        it('reports a diagnostics on nested i18n sections' {Componenciags[0].messageTiags[0].fqual('<div i18n>Content</div>');
          'Cannot mark an element as transiags[0].file?.fileNaqual('<div i18n>Content</div>');
        });        it('reports a diagnostic on nested {Component} from '@angular/core';ctor: 'test-component',iags[0].file?.fileName).toqual('<ng-c('test.ts', `   @Component({
     se   }) `);gs          });    it('reports a COMPONENT_RESOURCE_NOT_FOUND for a component with a style url ' +
d in    }) `);gs = envags[0].messageText)
ual(`Could not find styl           });        impo: 'standalone-component',        })
        class Standal      `          import {Comp        class BootstrapModule {}
      `lass Stodule,
oduleWithProviders(),
Y_WITH_MWP,lass Module {}Directive({transform: toNumber}        expect(jsContents)
tain('features: [i0.ɵɵInputTransformsFeat      });      it('should compile an input with a transform function that contains a generic parameter',te('/types.ts', `
 interf class Dir {
ut({transform:    'static ngAcceptInputType_value: boolean | string | i1.GenericWrapper<string>;');      it('should compile an input with a transform function that contains nested generic parameters',te('/types.ts', `
rt interface GenericWrapper<T> {rt lass D  oolean;ype ExternalToNumberType = string | boolean | ExternalObj;
 Ext({tDirectiv      it('should handle deferred blocks', () => {
            `);        env.driveMain();        const js // This line retains dalone: tlate: \`
 {#defer}tructor() {
 // Thi {#defeenced elsewhere, so we generate dynamic imports and drop a regular one.
sContents)   'import("./cmp-a").then(m => m.CmpB)]');dalone: true,late: 'Cmp {Cctor: 'test-cmp',rts: [CmpA, LocalDep], {#defer}
   <c {/defer} class TestCm import {Component} from '@angu   {/defe constructor() {   console.log(CmpA);t(jsCo    // blocks. Eventually they should happen as a part of template type checking
        });      it('should not allow usages of loop context variables inside the tracking expression', () => {
        envor: 'test-cmp',
lo               exp seldiags[0].messageText) { Co <input #rctor: 'test-cmp',late: \`
 <input #r </ng-template> cdalonete: '{#fo        expect(dia      sf: ts.SourceFile, pos: number, guard: (node: ts.Node) => node is T): T {
    // getTokenAtPosition is part of Typ  }