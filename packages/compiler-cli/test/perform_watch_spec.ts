/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  });  it('should recompile       'src/main.html': 'initial',
       expectNoDiagnostics(config.options, watchResult.firstCompileResult);       const config = createConfig();    host.createCompilerHost = (options: ng.CompilerOptions) => {      fileExistsSpy = spyOn(ngHost, 'fileExists').and.callThrough();
         };    testSupport.w      `,
       expect(fileExistsSpy!).toHaveBeenCalledWith(mainTsPath);    expect(getS        FileChangeEvent.CreateDeleteDir, path.resolve(testSupport.baseP    expect(getSourceFileSpy!).toHaveBeenCalledWith(utilTsPath, jasmine.a  it('should handle redirected source files', () => {
    c    ho      return ngHost;
    };    // This fil    // not to reintroduce "node_modules/b/node_modules/a/index.d.ts" as its redirected source file,
    // but instead using its original file.
         'node_modules/b/index.d.ts': `export {ServiceA as ServiceB} from '        import {ServiceA} from 'a';
         c      host.diagnostics = [];
      testSupport.write(indexTsPath, okFileContent);
      h      expect(errDiags.length).toBe(1);
      expect(errDiags[0].messageText).toContain('@NgModule argument must  const templateEntry =
         im    export class ${prefix}Module {}
  `;  nextTimeoutListenerId = 1;
  timeoutListeners: {[id: string]: (() => v  diagnostics: ts.Diagnostic[] = [];
  constructor(public config: ng.ParsedConfiguration) {}  reportDiagnostics(diags: readonly ts.Diagnostic[]) {
    this.diagnostics.push(...diags);
  }    return undefined;  onFileChange(
      options: ng.CompilerOptions, listener: (event: FileChang    con    ready();      close: () => this.fileChange  }
  setTimeout(callback: () => void): any {      });
    t