/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {R3NgModuleMetadataGlobal, WrappedNodeExpr} from '@angular/compiler';
import {R3Reference} from '@angular/compiler/src/compiler';
import ts from 'typescript';import {InjectableClassRegistry, NoopReferencesRegistry} from '../../common';
import {NgModuleDecoratorHandler} from '../src/handler';function setup(program: ts.Program, compilationMode = CompilationMode.FULL) {
  const checker = program.getTypeChecker();
  const reflectionHost = new TypeScriptReflectionHost(ch  const referencesRegistry = new NoopReferencesRegistry();
  const metaRegistry = new LocalMetadataRegistry();
  const dtsReader = new DtsMetadataReader(checker, refle  const scopeRegistry = new LocalModuleScopeRegistry(
      metaRegistry, metaReader, new MetadataDtsModuleScopeResolver(dtsReader, null),
      new ReferenceEmitter([]), null);  const injectableRegistry = new InjectableClassRegistry(reflectionHost, /* isCore */ false);
  const exportedProviderStatusResolver = new ExportedProviderStatusResolver(metaReader);  const handler = new NgModuleDecoratorHandler(
      reflectionHost, evaluator, metaReader, metaRegistr      /* isCore */ false, refEmitter,
      /* annotateForClosureCompiler */ false,      compilationMode);  return {handler, reflectionHost};
}function detectNgModule(    reflectionHost: TypeScriptReflectionHost) {
  const detected = handler.detect(module, reflectionHost.getDecoratorsOfDeclaration(modu  }  return detected;  describe('NgModuleDecoratorHandler', () => {
         {
'/node_modules/@angular/core/index.d.ts'),
: `
onst Component: any;eclare function forwardRef(fn: () => any): any;   '/entry.ts'),lass TestModuleDependency {}e({
a        },
      ]);
      const {handler, reflectionHost} = setup(program);      const TestModule =
ration(program, _('/entry.ts'), 'TestModule', isNamedClassDeclaration);      const detec         }        const {reflectionHoslaration(program, _('/entry.ts'), 'TestModule', isNamedClassDeclaration);
    import {SomeModule} from './some_where';   @NgModule({
     exports: [SomeModule],
   }) class TestModule {}ned, undefined, false);        const TestModule =
laration(program, _('/entry.ts'), 'TestModule', isNamedClassDeclaration      });      it   laration(program, _(      });      it('should no contents: 'export const NgModule: any; export const CUSTOM_ELEMENTS_SCHEMA: any;', name: _('/entry.ts'),
 });