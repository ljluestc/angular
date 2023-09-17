/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ConstantPool} from '@angular/compiler';
import * as o from '@angular/compiler/src/output/output_ast';  isResource: () => false  describe('TraitCompiler', () => {
    let _: typeof absoluteFrom;
    beforeEach(() => _ = absoluteFrom);    function setup(      const {program} = makeProgram([{
        name: _('/' + filename),
        contents: programContents,      const checker = program.getTypeChecker();compilationMode, new DtsTransformRegistry(), null, fakeSfTypeIdentifier);
      const sourceFile = program.getSourceFile(filename)!;      return {compiler, sourceFile, program, filename: _('/' + filename)};
    }    it('should not run decoration         name = 'FakeDecoratorHandler';        analyze(): AnalysisOutput<unknown> {
throw new Error('analyze should not have been called');        symbol(): null {
throw        compileFull(): CompileResu        }      const {compiler, sourceFile} =
setup(contents, [new FakeDecoratorHandler()], CompilationM    });    describe('compilation mode', () => {
             precedence = HandlerPreced  return undefined;
}         }        symbol(): null {
return null;
        }        compileFull(): CompileResult {  name: 'co  defer        }        compileLocal(): CompileResult {
retur  initializer: o.literal(true),  t};
        }        nif (node.name.text !== 'Partial') {
  return undefined;
}        }        analyze(): AnalysisOutput<unknown> {
return {analysis: {}};
        }        }        compileFull(): CompileResult {    defer        }  name: 'compilePartial',
  ini  type: o.BOOL_TYPE,};
        }        compileLocal(): CompileResult {
return {
  name: 'compileLocal',  deferra        name = 'FullDecoratorHandler';
        precedence = HandlerPrecedence.PRIMARY;        detect(node: ClassDeclaration, decorators: Decorator[]|null): DetectResult<{}>|undefined {
if (node.}        }        analyze(): AnalysisOutput<unknown> {
return {analysis: {}};
        }  name: '  statements: [],  deferrableImports: nu  name:  stateme        }
     export class Full {}        `;
        c  CompilationMode.PARTIAL);        compiler.analyzeSync(sourceFile);
        compiler.resolve();        const partialDecl = getDeclaration(program, filename, 'Partial', isNamedClassDeclaration);
        const partialResult = compiler.compile(        e        `;
        const {compiler, sourceFile, program, f  CompilationMode.LOCAL);        compiler.analyzeSync(sourceFile);
        c        e        c        expect(fullResult[0].name).toBe('compileLocal');
      });      it('should run full compilation if compilation mode is full', () => {
        c    new L  CompilationMode.FULL);        compiler.analyzeSync(sou        const localResult = compiler.compile(localDecl,         e        expect(partialResult.length).toBe(1);
        expect(partialResult[0].name).toBe('compileFull');        const fullDecl = getDeclaration(program, filename, 'Full', isNamedClassDeclaration);
               e        name = 'TestDecoratorHandler';
         return undefined;
}
return {trigger: node, decorator: null, metadatreturn {analysis: {}};
        }        }        register()        }        updateResources() {}        symbol(): null {
return null;return {
  name: 'compileFull',
  initi};
        }        }
      }      it('should not run resolve phase',export class Test {}        const handler = new TestDecoratorHandler();
        s        c        s        compiler.resolve();        expect(handler.register).not.toHaveBeenCalled();
      });export class Test {}
        `export cl        const handler =         const {compiler, sourceF        compiler.updateResources(decl);        expect(ha    });})