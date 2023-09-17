/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  canPreload = false;  load(v: string): string {
    return '';  preload(): Promise<void>|undefined {
    throw new Error('Not implemented');  preprocessInline(_data: string, _context: ResourceLoaderContext): Promise<string> {
    throw new Error('Not implemented');
  }
}function setup(
    program: ts.Program, options: ts.CompilerOptions, hos      compilationMode: CompilationMode.FULL
    }) {
  const {compilationMode, usePoisonedData} = opts;
   const evaluator = new PartialEvaluator(reflectionHost, checker, /* dependencyTracker */ null);
  const moduleResolver =  const importGraph = new ImportGraph(checker, NOOP_PERF_RECORDER);
  const cycleAnalyzer = new CycleAnalyzer(importGraph);
  const metaRegistry = new LocalMetadataRegistry();
   const metaReader = new CompoundMetadataReader([metaRegistry, dtsReader]);
  const scopeRegistry = new LocalModuleScopeRegistry(  const refEmitter = new ReferenceEmitter([]);
  const referencesRegistry = new NoopReferencesRegistry();
  const injectableRegistry = new InjectableClassRegistry(reflectionHost, /* isCore */ false);
   const typeCheckScopeRegistry =
      new TypeCheckScopeRegistry(scopeRegistry, metaReader, hostDirectivesResolver);
  const resourceLoader = new StubResourceLoader();  const handler = new ComponentDecoratorHandler(
      reflectionHost,
      evaluator,
      metaRegistry,
       dtsResolver,
      scopeRegistry,
      typeCheckScopeRegistry,      /* isCore */ false,
      /* strictCtorDeps */ false,
      resourceLoader,
      /* rootDirs */['/'],
       /* enableI18nLegacyMessageIdFormat */ false,
      !!usePoisonedData,
      /* i18nNormalizeLineEndingsInICUs */ false,      moduleResolver,
      cycleAnalyzer,
      CycleHandlingStrategy.UseRemoteScoping,
      refEmitter,
      referencesRegistry,
      /* depTracker */ null,
      injectableRegistry,
      /* semanticDepGraphUpdater */ null,
      /* annotateForClosureCompiler */ false,      hostDirectivesResolver,
      true,
      compilationMode,
      new DeferredSymbolTracker(checker),
  );
  return {reflectionHost, handler, resourceLoader, metaRegistry};
}runInEachFileSystem(() => {
  describe('ComponentDecoratorHandler', () => {
    let _: typeof absoluteFrom;      const {program, options, host} = makeProgram([
        {
'/node_modules/@angular/core/index.d.ts'),
: 'export const Component: any;',
        },
        {
'Component} from '@angular/core';ST = '';
nt(TEST) class TestCmp {}
      `      const TestCmp = getDeclaration(program, _('/entry.ts'), 'TestCmp', isNamedClassDeclaration);
      const detected = handler.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
      if (detected === undefined) {
        return fail('Failed to recognize @Component');
      }
      try {
       } catch (err) {ail('Error should be a FatalDiagnosticError');
        }
        const diag = err.toDiagnostic();
        expect(diag.code).toEqual(ivyCo        expect(diag.start).toBe(detected.metadata.args![0].getStart());
      }
    });    it('should keep track of inline template', () => {
      const template = '<span>inline</span>';
      const {program, options, host} = makeProgram([
        {
'/node_modules/@angular/core/index.d.ts'),
:        {: `
Component} from '@angular/core';nt({
te: '${template}',
 TestCmp {}        },
      ]);
      c      const detected = handler.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
      if (detected === undefined) {
        return fail('Failed to recognize @Component');
      }
      const {analysis} = handler.analyze(TestCmp, detected.metadata);
     });    it('should keep track      const {program, options, host} = makeProgram([
        {: 'export const Component: any;',
        },
        {: '<div>hello world</div>',
        },
       : `
Component} from '@angular/core';nt({
teUrl: '${templateUrl}',
 TestCmp {}
      `
       c      const detected = ha        return fail('Failed to recognize @Component');
      }      expect(analysis?.resources.template.path).toContain(templateUrl);
      expect(analysis?.resources.template.expression.getText()).toContain(`'${templateUrl}'`);
    });    it('should keep track of int        {
'/node_modules/@angular/core/index.d.ts'),
: 'expo        {
'/myStyle.css'),        },
        {
'/entry.ts'),
: `
Component} from '@angular/core'; are ignored because we only attempt to store string literals
noredStyleUrl = 'asdlfkj';
noredStte: '',: ['a { color: red; }', 'b { color: blue; }', ignoredStyle, ...[ignoredStyle]],
 TestCmp {}        },
      ]);
      c      const detected = handler.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
      if (detected === undefined) {
        return fail('Failed to recognize @Component');
      }
      c    });    it('should use an empty source map URL for an indirect template', () => {
      const template = '<span>in        {
'/node_modules/@angular/core/index.d.ts'),
: 'export const Component: any;',
        },
        {: `
Component} from '@angular/core';MPLATE = '${template}';nt({
te: TEM      `
        },
      ]);
      const {reflectionHost, han      const detected = handler.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
      if (detected === undefined) {
             const {analysis} = handler.analyze(TestCmp, detected.metadata);
      expect(analysis?.template.file?.url).toEqual('');
    });    it('does not emit a program with template parse errors', () => {
      const template = '{{x ? y }}';
      c'/node_        },
        {: `
Component} from '@angular/core';
nt({
te: '${template}',
 TestCmp {}        },
      ]);      const {reflection      const detected =         return fail('Failed to recognize @Component');
      }      const symbol = handler.symbol(TestCmp, analysis!);
      const resolution = handler.resolve(TestCmp, analysis!, symbol);      const compileResult =
compileFull(TestCmp, analysis!, resolution.data!, new ConstantPool());
      expect(compileResult).toEq      const {program, options, host} = makeProgram([
        {
'/node_        },
        {
'/entryComponent} from '@angular/core';nt({
te: '',
: ['.abc {}']
 TestCmp {}
      `      ]);
      const {reflectionHost, han      resourceLoader.canPreprocess = true;
      resourceLoader.preprocessInline = async function(data, context) {
        expect(data).toBe('.abc {}');
        expect(context.containingFile).toBe(_('/entry.ts').toLowerCase());
        expect(context.type).toB      const detected = handler.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
      if       }      await hand    });    it('should e        {
'/node_        },
        {: `
Component} from '@angular/core';nt({
te: '',
: ['.ab      `
        },
      ]);
      c      resourceLoader.canPreprocess = true;      const TestCmp = getDeclaration(program, _('/entry.ts'), 'TestCmp', isNamedClassDeclaration);
      const detected = handler.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
      i      }      expect(() => handle    });    it('should not error if component has no inline styles and canPreprocess is true', async () => {
      const {program, options, host} = makeProgram([
        {
'/node_modules/@angular/core/index.d.ts'),
: 'expo        {
'/entry.ts'),Component} from '@angular/core';nt({
te: '',
 TestCmp {}
      `
        },      const {reflectio        fail('preprocessInline should not have been called.');
        r      c        return f       : 'export const         {
'/node_modules/@angular/animations/index.d.ts'),
: 'export declare function trigger(name: any): any',
        },
        {: `
Component} from '@angular/core';te: '',
ions: [
ger('an      `
        },
      ]);
      c      const detected = handler.detect(Test        return fail('Failed to recognize @Component');
      }
      c      c        'animationName',       e      const {program, options, host} = makeProgram([
        {
'/node_modules/@angular/core/index.d.ts'),
: 'export const Component: any;',
       '/node_modules/@angular/animations/index.d.ts'),
: 'export declare function trigger(name: any): any',
        },
        {: `
Component} from '@angular/core';
trigger} from '@angular/animations'; buildComplexAnimations() {
name = 'complex';
 [trigger(name)];nt({ions: [        },
      ]);      i      }    });  : 'expo        {: 'export declare function trigger(name: any): any',
        },
        {
'/entry.ts'),
: `trigger} from '@angular/animations'; buildComplexAnimations() {
name = 'complex';      `
        },
      ]      const TestCmp = getDeclaration(program, _('/entry.ts'), 'TestCmp', isNamedClassDeclaration);
      const detected = handler.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
      if (detected === undefined) {
        return fail('Failed to recognize @Component');
      }
      const {analysis} = handler.analyze(T      const meta = metaRegistry.getDirectiveMetadata(new Reference(TestCmp));
      expect(meta?.animationTriggerNames?.includesDynamicAnimations).toBeTrue();
      e      i contents: 'export const  {Compolate: '<span>Hi!</span>',
rts: [SomeModule],
ss TestCmp {}
        `ned, undefined, false);
               const TestCmp = getDeclaration(program, _('/entry.ts'), 'TestCmp', isNamedClassDeclaration);        const detected =
r.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
        if (detected === undefined) {
ail('Failed to recognize @Compon        const {diagnostics} = handler.analyze(TestCmp, detected.metadata);        expect(diagnostics).toBeUndefined();
      });      it('should produce diagnostic for imports in non-standalone component', () => {
        const {program, options, hos contents: `
 {Component} from '@angular/core';
 {SomeModule} frolate: '<span>Hi!</span>',ss TestCmp {}
        program, options, host, {compilationMode: CompilationMode.LOCAL});
        const TestCmp = getDeclaration(program, _('/entry.ts'), 'TestCmp', isNamedClassDeclaration);        const detected =
r.detect(       ext: jasmine.strss Test        const {r        const TestCmp = getDeclaration(program, _('/entry.ts'), 'TestCmp', isNamedClassDeclaration);        const detected =
r.detect(TestCmp, reflectionHost.getDecoratorsOfDeclaration(TestCmp));
        if (detected === undefined) {
ail('Failed to recognize @Component');
        }        const {diagnostics} = handler.analyze(TestCmp, detec        const {program, options, hos contents: `
 {Component, CUSTOM_ELEMENTS_SCHprogram, options, host, {compilationMode: CompilationMode.LOCAL});
        const TestCmp = getDeclaration(program, _('/entry.ts'), 'TestCmp', isNamedClassDeclaration);        const detected =
r.detecail('Failed to recognize @Component');
        }        const {diagnostics} = handler.analyze(TestCmp, detected.metadata);        expect(diagnostics).toContain(jasmine.objectContaining({
ErrorCode(ErrorCode.COMPONENT_NOT_STANDALONE),
ext: jasmine.stringContaining(`'schemas' is only valid`),
        }));
      });  });  function ivyCode(code: ErrorCode): number {
    return Number('-99' + code.valueOf());
  }