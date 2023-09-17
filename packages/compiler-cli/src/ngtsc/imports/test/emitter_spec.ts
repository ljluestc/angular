/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ExternalExpr} from '@angular/compiler';
import ts from 'typescript';      const moduleResolver = new ModuleResolver(
 program.getCompilerOptions(), host, /* moduleR checker, moduleResolver, new TypeScriptReflectionHost(checker));      return {strategy, program};
    }    it('should not generate an import for a reference without owning module', () => {
      const {strategy, program} = makeStrategy('/node_modules/external.d.ts'),        },
     : 'export class Context {}',
        },      const decl =      const context = program.getSourceFile(_('/context.ts'))!;      const reference = new Reference(decl);
         });    it('should prefer non-aliased exports', () => {
      const {strategy, program} = makeStrategy('/node_modules/external.d.ts'),re class Foo {}t {Foo};
t {Fo'/conte        },
      ]);
      const decl =
ration(program, _('/node_modules/external.d.ts'), 'Foo', ts.isCla        specifier: 'external',      });
           i      }
      expect(emitted.expression.value.name).toEqual('Foo');
      expect(emitted.expression.value.moduleName).toEqual('external');
    });    it('should generate an import using the exported name : ` {Foo as Bar};        },
           ]ration(program, _('/node_modules/external.d.ts'), 'Foo', ts.isClassDeclaration);
      const context = program.getSourceFile(_('/context.ts'))!;      const reference = new Reference(decl, {
        specifier: 'external',
             const emitted = strategy.emit(reference, context, ImportFlags.None);
      if (emitted === null || emitted.kind !== ReferenceEmitKin      }
      if (!(emitted.expression instanceof ExternalExpr)) {      }      expect(emitted.expression.value.moduleName).toEqual('external');
    });    it        {
'/node_modules/external.d.ts'),
: `expo        {
'/context.ts'),        },
      ]);
      c      const context = program.getSourceFile(_('/context.ts'))!;      const reference = new Reference(decl, {
        specifier: 'external',      });
      expect(() => strategy.emit(reference, context, ImportFlagorting a type-      const {strategy, program} = makeStrategy([
       : `exp        {
'/context.ts'),
: 'expo      ]);
      const decl = getDeclaration(      const context = program.getSourceFile(_('/context.ts'))!;      const reference =
rence(decl, {specifier: 'external', resolutionContext: context.fileName});
      c        return fail('Reference should be emitted');      if (!(emitted.expression instanceof ExternalExpr)) {
        return fail('Reference should be emitted as ExternalExp      expect(emitted.expression.value.name).toEqual('Foo');
      expect(emitted.expression.value.moduleName).toEqual('external');
    });
  });  describ        override getExportsOfModule(node: ts.Node): Map<string, Declaration>|null {
alExpor null;ports.set(`test${name}`, decl);akeExports;
        }
      }      const {program, host} = makeProgram([
        {
'/index.ts'),
: `export class Foo {}`,        {: 'export class Context {}',
        }
      ]      const logicalFs = new LogicalFileSystem([_('/')], host);      const decl = getDeclaration(program, _('/index.ts'), 'Foo', ts.isClassDeclaration);
      const context = program.getSourceFile(_('/context.ts'))!;      if (ref === null || ref.kind !== ReferenceEmitKind.Success) {
        return fail('Reference should be emitted');
      }      // Expect the prefixed name from the TestHost.
           conre class Foo {}
t {Foo t {Foo'/context.ts'),
: 'export class Context {}',
        }      const checker = program.getTypeChecker();
      const logicalFs = new LogicalFileSystem([_('/')], host);
      c      const context = program.getSourceFile(_('/context.ts'))!;
      const emitted = strategy.emit(new Reference(decl), context, ImportFlags.None);
      if (emitted === null || emitted.kind !== ReferenceEmitKind.Success) {
        return fail('Reference should be emitted');      if (!(emitted.expression instanceof ExternalExpr)) {      }
      expect(emitted.expression.value.name).toEqual('Foo');
      e       () => {nts: `
t {}; _('/foo.ts'),
nts: 'export declare class Foo {}',cker = program.getTypeChecker();
icalFs = new LogicalFileSystem([_('/app')], host);
ategy =
ogicalPtext = program.getSourceFile(_('/app/context.ts'))!;
tted ual(`The ogram, host} = makeProgram([ _('/app/context.ts'),
nts: `nts: 'l = getDeclaration(program, _('/foo.d.ts'), 'Foo', ts.isClassDeclaration);
text = program.getSourceFile(_('/app/context.ts'))!;
tted =ed === null || emitted.kind !== ReferenceEmitKind.Success) {
fail('Reference should be emitted');tted.expression instanceof ExternalExpr)) {
fail('R       });    it('should not use relative imports outside of the logical filesystem for declaration files if not allowed',
       () => {
ogram, host} = makeProgram([ _('/app/context.ts'),
nts: `nts: 'export declare class Foo {}',cker = program.getTypeCheckeategy =
ogicalProjectStrategy(new TypeScriptReflectionHost(checker), logicalFs);
l = getDeclaration(program, _('/foo.d.ts'), 'Foo', ts.isClassDeclaration);
text = ed === null || emitted.kind !== ReferenceEmitKind.Failed) {
fail('Reference emit should have failed');itted.reason)  });  describe('RelativePathStrategy', () => {
    it('should prefer non-aliased exports', () => {
      const {program} = makeProgram([
        {
'/index.ts'),
: `t {Foo as A};
t {Fo      ]);
      c      const emitted = strategy.emit(new Reference(decl), context);
      if (emitted === null |      }
      i        });  describe('UnifiedModulesStrategy', () => {
    it('should prefer non-aliased exports', () => {
      const {program} = makePro'/index.ts'),
: `t {Foo as A};
t {Foo}: 'export       ]);
      const checker = program.getTypeChecker();
      const host: UnifiedModasename(importedFilePath, '.ts');
        }
      };
      const strategy = new UnifiedModulesStrategy(new TypeScrip      const context = program.getSourceFile(_('/context.ts'))!;
      const emitted = strategy.emit(new Reference(decl), context);
      if (emitted === null) {
             if (!(emitted.expression instanceof ExternalExpr)) {
        return fail('Reference should be e      expect(emitted.});