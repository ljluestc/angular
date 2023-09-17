/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */};/** * TypeScript code.export class NgtscTestEnvironment {
  private multiCompileHostExt: MultiCompileHostExt|null = null;
    private commandLineArgs   static setup(files?: Folder, workingDir: AbsoluteFsPath = absoluteFrom('/')):
      NgtscTestEnvironment {
        fs.init(files);    setWrapHostForTest(makeWrapHost(host));    co        "experimentalDecorators": true,
        "skipLibCheck": true,
        "noImplicitAny": true,
        "noEmitOnError": true,
          "rootDir": ".",        "target": "es2015",        "module": "e        "built"
      ]
    }`);    return env;
  }  assertExists(fileName: string) {
      }    }    this.assertExists(fileName);    setWrapHostForTest(makeWrapHost(this.multiCompileHostExt));
  }  /**
   * Ins   * synchronous compilations do not use the asynchronous resource loader.
       setWrapHostForTest(makeWrapHost(new ResourceLoadingCompileHost(this.fs)));
    }  flushWrittenFileTracking(): void {  }  getTsProgram(): ts.Program {    return this.oldProgram.getTsProgram();
  }  getReuseTsProgram():       return (this.oldProgram as NgtscProgram).getReuseTsProgram();   * Older versions of the CLI do not provide the `CompilerHost.getModifiedResourceFiles()` method.
   * This results in the `changedResources` set being `null`.
       this.changedResources = null;
  }  get      throw new Error(`Not tracking written files - call enableMultipleCompilations()`);
       this.multiCompileHostExt.getFilesWrittenSinceLastFlush().forEach(rawFile => {
         }
    });
       const absFilePath = this.fs.resolve(this.ba       this.fs.writeFile(absFilePath, conte      throw new Error(`Not caching files - call enableMultipleCompilations()`);
       if (!fileName.ends       const tsconfig: {[key: string]: any} = {    if (files !== undefined) {
      tsconfig['files'] = files;
         tsconfig['compilerOptions'] = {
       }      setWrapHostForTest(makeWrapHost(new FileNameToModuleNameHost(this.fs)));
      * Run the compiler to completion, and assert that no errors occurred.
       const errorSpy = jasmine.createSpy('consoleError').and.callFake(console.error);
    let reuseProgram: {program: Program|undefined}|undefined = undefined;
       }
         expect(exitCode).toBe(0);
       }    let reuseProgram: {program: Program|undefined}|undefined = undefined;
           program: this.   text(`Expected program to exit with code ${
cte    }    if (this.multiCompileHostExt !== null) {
      this.oldProgram = reuseProgram!.program!;
    }    // In ngtsc, only `ts.Diagnostic`s are produced.
       const {rootNames, options} = readNgcCommandLineAndConfiguration(this.commandLineArgs);
       a    const host = createCompilerHost({options});
         checker,
       const {rootNames, options} = readNgcCommandLineAndConfiguration(this.commandLineArgs);
    const host = createCompilerHost({options});
       const args = [
         `--outFile=${outputFileName}`,
    ];
    if (locale !== null) {
       const exitCode = mainXi18n(args, errorSpy);
     fileNameToModuleName(importedFilePath: string): string {
    const relativeFilePath =
       return rootedPath.replace(/(\.d)?.ts$/, '');
  }  resolveModuleNames(
           moduleName = '/' + moduleName.slice(ROOT_PREFIX.length);
   leNam    });
  }
}clas  private writtenFiles = new Set<string>();  override getSourceFile(
       }
              sourceFiles?: ReadonlyArray<ts.SourceFile>): void {
     }  invalidate(fileName: string): void {
       const resource = this.readFile(fileName);
    if (resource === undefined) {
       wrapped.delegate = delegate;
           if ((wrapped as any)[name] !== undefined) {
wrapped as any)[name]!.bind(wrapped);
        }
       });
  }