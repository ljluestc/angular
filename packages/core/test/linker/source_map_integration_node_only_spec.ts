/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    jitEvaluator = new MockJitEvaluator();      providers: [
        {        {
provide: JitEvaluator,        }
      ]    afterEach(() => restoreCompilerFacade());    describe('inline templates', () => {
      const ngUrl = 'ng:///MyComp/template.html';        return {template};
      }        resourceLoader.expect(templateUrl, te      }      declareTests({ngUrl, templateDecorator});
    });    function declareTests({ngUrl, templateDecorator}: TestConfig)        const template = '<div>\n  </error>';
        @Component({...templateDecorator(template)})        expect(sourceMap.sources).toEqual([ge      }        class MyComp {
       constructor() {        let error: any;
        try {
await resolveCompileAndCreateComponen        c        class SomeDir { if (someDir === 'throw') {
   throw new Error('Test');}await resolveCompileAndCreateComponent(MyComp, template);
               expect(await jitEvaluator.getSourcePositionForStack(error.stack, generatedUrl)).toEqual({
line: 1,source: n      });      it('should report source location for binding errors', async () => {
        const template = `<div>\n    <span   [title]="createError()"></span></div>`;        @Component({...templateDecorator(template)})
        class MyComp {
createError() {
 throsource: ngUrl,      });      it('should report source location for event errors', async () => {
        c}        const errorHandler = TestBed.inject(ErrorHandler);
        spyOn(errorHandler, 'handleError').ancomp.de        expect(await jitEvaluator.getSourcePositionForStack(error.stack, generatedUrl)).toEqual({
line: 2      });
    }    TestB    }        return (_url: string) => Promise.resolve(contents);
  }  async function resolveCompileAndCreateComponent(comType: any, template: string)    return await compileAndCreateComponent(comType);
  }  let ɵcompilerFacade: CompilerFacade;
  function overrideCompilerFacade() {
    c  }  interface SourcePos {    line:  }  /**
   * A he      // Then execute it anyway.    getSourceMap(genFile: string): SourceMap {
      return this.sources.map(source => extra    }     file: match![1],
   line      if (!pos) {
        throw new Error(`${genFile} was not m    }});