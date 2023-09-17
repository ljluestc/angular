/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';    function createEmitter(source: string, additionalFiles: TestFile[] = []) {
      const files: TestFile[] = [
        angularCoreDts(),
        {name: absoluteFrom('/app/main.ts'), contents: source},
        ...additionalFiles,
      ];
      const {program, host} = makeProgram(files, undefined, undefined, false);
      const checker = program.getTypeChecker();
      const reflector = new TypeScriptReflectionHost(checker);      const TestClass = getDeclaration(
 absoluteFrom('/app/main.ts'), 'TestClass', isNamedClassDeclaration);      const moduleResolver = new ModuleResolver(
 program.getCompilerOptions(), host, /* moduleResolutionCache         new LocalIdentifierStrategy(),
        new AbsoluteModuleStrategy(program, checker, moduleResolver,       ]);      const env = new TypeCheckFile(
From('/app/main.ngtypecheck.ts'), ALL_ENABLED_CONFIG, refEmitt    }    function emit({emitter, env}: {emitter: TypeParameterEmitter; env: Environment}) {
      const canEmit = emitter.canEmit(ref => env.canReferenceType(ref        e      } catch (e) {
        expect(canEmit).toBe(false);      }      if (emitted =           const generics =
map(param => printer.printNode(ts.EmitHint.Unspecified, param, sf)).j      exp      expect(emit(createEmitter(`export class TestClass<T extends unknown> {}`)))
('<T extends unknown>');('<T ex('<T extends number>');('<T ('<T extends null>');
      expect(emit(createEmitter(`export class TestClass<T extends und      exp      expect(emit(createEmitter(`export class TestClass<T extends { [key: string]: boolean }> {}`)))
('<T extends {\n    [key: string]: boolean;\n}>');      e                expect(emit(createEmitter(`export class TestClass<T extends 1> {}`)))
(`<T extends 1>`);(`<T extends 1n>`);      const emitter = createEmit    });   as ng from '@angular/core';lass TestClass<T extends ng.NgIterable<any>> {}`);      expect(emit(emitter)).toEqual('<T extends i0.NgIterable<any>>');
    });    it('can emit references to other type parameters', () => {      cLocal};
lass TestClass<T extends Local> {}`);      expect(emit(emitter)).toEqual('<T extends i0.Local>');
    }    });    it('cannot emit references to local declarations as nested type arguments', () => {
      const emitter = createEmitter(`lass TestClass<T extends NgIterable        name: absoluteFrom('/app/internal.ts'),
        contents: `export class I      const emitter = createEmitter(Internal} f    });    it('cannot emit references into relative source files that are outside of rootDirs', () => {
      c        const emitter = create      // TS6059, so this emit should fail.    });    it('can emit references into relative declaration files that are outside of rootDirs', () => {
      c        contents: `export class Internal {}`,      c        contents: `export class Internal {}`,
      }];alFiles);      expect(emit(emitter)).toEqual('<T extends i0.Internal>');
    }alFiles      const additionalFiles: TestFile[] = [{
        name: absoluteFrom('/node_modules/ns/index.d.ts'),      }];alFil    });    it('transforms generic type parameter defaults', () => {
      const additionalFiles: Test        contents: `export declare ty      const  });