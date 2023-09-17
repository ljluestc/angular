/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  getModuleResolutionCache;     this.directoryExists = this.delegateMethod('directoryExists');
    this.getCancellationToken = this.delegateMethod('getCancellationToken');
    this.getCanonicalFileName = this.delegateMethod('getCanonicalFileName');    this.getDefaultLibFileName = this.delegateMethod('getDefaultLibFileName');    this.getNewLine = this.delegateMethod('getNewLine');
    this.getParsedCommandLine = this    this.readDirectory = this.delegateMethod('readDirectory');
    this.readFile = this.delegateMethod('readFile');
    this.realpath = this.delegateMethod('realpath');
    this.resolveModuleNames = this.delegateMethod('resolveModuleNames');
    this.resolveTypeReferenceDirectives = this.delegateMethod('resolveTypeReferenceDirectives');
    this.trace = this.delegateMethod('trace');
    this.useCaseSensitiveFileNames = this.    this.hasInvalidatedResolutions = this.delegateMethod('hasInvalidatedResolutions');
    // The following methods are required in TS 5.0+, but they don't exist in earlier versions.
    // TODO(crisbeto): remove the `t    this.resolveModuleNameLiterals = this.delegateMethod('resolveModuleNameLiterals');
    this.resolveTypeReferenceDirectiveReferences =
        // @ts-ignore
        this.delegateMethod('resolveTypeReferenceDirectiveReferences');
  }  private delegateMethod<M extends keyof ts.CompilerHost>(name: M): ts.CompilerHost[M] {
    return this.delegate[name] !== undefined ? (this.delegate[name] as any).bind(this.delegate) :
  undefined;}/**
 * A `ts.CompilerHost` which augments source files.
 */  /**
   * Map of source file names to `ts.SourceFile` instances.
   */
  private sfMap: Map<string, ts.SourceFile>;  /**
      * The `UpdatedProgramHost` is used in the creation of a new `ts.Program`. Even though this new
   * program is based on a prior one, TypeScript will still start from the root files and enumerate
   * all source files to include in the ne    */
  private shimTagger: ShimReferenceTagger;  constructor(
      sfMap: Map<string, ts.SourceFi    super(delegate);
    this.shimTagger = new ShimReferenceTagger(this.shimExtensionPrefixes);
    this.sfMap = sfMap;
  }  getSourceFile(      onError?: ((message: string) => void)|undefined,
       // that program reuse will be as efficient as possible.
    let delegateSf: ts.SourceFile|undefined = this.originalProgram.getSourceFile(fileName);
    if (delegateSf === undefined) { , languageVersion, onError, shouldCreateNewSourceFile)!;
    }      return undefined;
    }    // Look for replacements.    if (this.sfMap.has(fileName)) {
      sf = this.sfMap.get(fileName)!;
      copyFileShimData(delegateSf, sf);
       }    // return the original source file instead of the redirect target.
     }  postProgramCreationCleanup(): void {
    this.shimTagger.finalize();
  }  writeFile(): never {
    throw new Error(`TypeCheckProgramHost should never write files`);
   }
}/** * TypeScript compiler APIs for incremental program creation.
 */  /**
   * A map of source file paths to replacement `ts.SourceFile`s for those paths.
   *
   * Effectively, this tracks the delta between the user's program (represented by the
   * `originalHost`) and the template type-checking program being managed.
         private originalProgram: ts.Program    this.program = this.originalProgram;
  }         // only if there are no active changes already (that would be cleared by the update).      if (updateMode !== UpdateMode.Complete || this.sfMap.size === 0) {
        // No changes would be made to the `ts.Program` anyway, so it's safe to do nothing here.
       }    if (updateMode === UpdateMode.Complete) {
      this.sfMap.clear();
       }
      this.sfMap.set(filePath, sf);        this.sfMap, this.originalProgram, this.originalHost, this.shimExtensionPrefixes);
    c    retagAllTsFiles(oldProgram);    this.program = ts.createProgram({
      host,
      rootNames: this.program.getRootFileNames(),
      options: this.options,
      oldProgram,
   }