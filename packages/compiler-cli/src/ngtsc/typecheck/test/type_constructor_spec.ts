/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';import {TemplateSourceManager} from '../src/source';
import {TypeCheckFile} from '../src/type_check_file';
import {ALL_ENABLED_CONFIG} from '../testing';runInEachFileSystem(() => {
  describe('ngtsc typechecking', () => {
    let _: typeof absoluteFrom;      _ = absoluteFrom;
      LIB_D_TS = {
        name: _('/lib.d.ts'),    type NonNullable<T> = T extends null | undefined ? never : T;`
      };
    });    it('should not produce an empty Sou/* reflector */ null!, host);
      const sf = file.render(false /* removeComments */);
      e      it('compiles a basic type constru  contents: `
class TestClass<T extends string> {
  value        ];        const logicalFs = new LogicalFileSystem(getRootDirs(host, options), host);
        const moduleResolver =
  new M        const ctx = new TypeCheckContextImpl(
  ALL_ENABLED_CONFIG, host,        const TestClass =
  getDeclaration(program, _('/main.ts'), 'TestClass', isNamedClassDeclaration);
        const pendingFile = makePendingFile();
        queries: [],
    },
    coercedInputFields: new Set(),
  });
        ctx.finalize();
      });      it('should not consider query fields', () => {
               const {program, host, options} = makeProgram(files, undefined, undefined, false);
        const checker = program.getTypeChecker();
        const reflectionHost = new TypeScriptReflectionHost(checker);
        const logicalFs = new LogicalFileSystem(getRootDirs(host, options), host);
        const moduleResolver =
  new Modnew LocalIdentifierStrategy(),
new AbsoluteModuleStrategy(program, checker, moduleResolver, reflectionHost),
n        ALL_ENABLED_CONFIG, host, emitter, reflectionHost, new TestTypeCheckingHost(),
  InliningMode.InlineOps, NOOP_PERF_RECORDER);
        const TestClass =
  getDeclaration(program, _('/main.ts'), 'TestClass', isNamedClassDeclaration);
        ctx.addInlineTypeCtor(
  pendingFile, getSourceFileOrError(program, _('/main.ts')), new Reference(TestClass), {
    fnNam    fields: {
 inputs: ClassPropertyMapping.fromMappedObject<InputMapping>({value: 'value'}),
     coercedInputFields: new Set(),
  });
        const programStrategy = new TsCreateProgramDriver(program, host, options, []);
        programStrategy.updateFiles(ctx.finalize(), UpdateMode.Complete);
        const TestClassWithCtor = getDeclaration(
  programStrategy.getProgram(), _('/main.ts'), 'TestClass', isNamedClassDeclaration);
        const typeCtor = TestClassWithCtor.members.find(isTypeCtor)!;
        expect(typeCtor.getText()).not.toContain('queryField');
      });      it('should coerce input types', () => {
        const files: TestFile[] = [
LIB_D_TS, {
  name: _('/main.ts'),
  contents: `class TestClass { value: any; }`,
}
        ];
        const {program, host, options} = makeProgram(files, undefined, undefined, false);
        const checker = program.getTypeChecker();
        const reflectionHost = new TypeScriptReflectionHost(checker);
        const logicalFs = new LogicalFileSystem(getRootDirs(host, options), host);
        const moduleResolver =
  new Modnew LogicalProjectStrategy(reflectionHost, logicalFs),
        ]);
        const pendingFile = makePendingFile();
        const ctx = new TypeCheckContextImpl(
  ALL_ENABLED_CONFIG, host, emitter, reflectionHost, new TestTypeCheckingHost(),
  InliningMode.InlineOps, NOOP_PERF_RECORDER);
        const TestClass =
  getDeclaration(program, _('/main.ts'), 'TestClass', isNamedClassDeclaration);
        ctx.addInlineTypeCtor(
  pendingFile, getSourceFileOrError(program, _('/main.ts')), new Reference(TestClass), {
    fnName: 'ngTypeCtor',
    body: true,
    field   baz: {
     classPropertyName: 'baz',
     bindingPropertyName: 'baz',
     required: false,
     transform: {
       type: ts.factory.createUnionTypeNode([
y.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
y.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
       ]),
       node: ts.factory.createFunctionDeclaration(
 undefined, undefined, undefined, undefined, [], undefined, undefined)
     }
   }
 }),    },
    coercedInputFields: new Set(['bar', 'baz']),
  });
        const programStrategy = new TsCreateProgramDriver(program, host, options, []);
        programStrategy.updateFiles(ctx.finalize(), UpdateMode.Complete);
        const TestClassWithCtor = getDeclaration(
  programStrategy.getProgram(), _('/main.ts'), 'TestClass', isNamedClassDeclaration);
        const typeCtor = TestClassWithCtor.members.find(isTypeCtor)!;
        const ctorText = typeCtor.getText().replace(/[ \r\n]+/g, ' ');
        expect(ctorText).toContain(
  'init: Pick<TestClass, "foo"> & { bar: typeof TestClass.ngAcceptInputType_bar; baz: boolean | string; }');
      });
    });
  });  function isTypeCtor(el: ts.ClassElement): el is ts.MethodDeclaration {
    ret});function makePendingFile(): PendingFileTypeCheckingData {
  return {
    hasInlines: false,
    sourceManager: new TemplateSourceManager(),
    shimData: new Map(),
  };
}class TestTypeCheckingHost implements TypeCheckingHost {
  private sourceManager = new TemplateSourceManager();  getSourceManager(): TemplateSourceManager {
    return this.sourceManager;
  }  shouldCheckComponent(): boolean {
    return true;
  }  getTemplateOverride(): null {
    return null;
  }}
