/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  getCanonicalFileName;  getDirectories;  getModifiedResourceFiles;
  getNewLine;
  getParsedCommandLine;
  getSourceFileByPath;  readFile;
  readResource;  realpath;
  resolveModuleNames;
  resolveTypeReferenceDirectives;
  resourceNameToFileName;  useCaseSensitiveFileNames;
  writeFile;  hasInvalidatedResolutions;
  resolveModuleNameLiterals;
  resolveTypeReferenceDirectiveReferences;  constructor(protected delegate: ExtendedTsCompilerHost) {
    // Excluded are 'getSourceFile' and 'fileExists', which are actually implemented by    // below.
    this.createHash = this.delegateMethod('createHash');
    this.directoryExists = this.delegateMethod('directoryExists');
    this.fileNameToModuleName = this.delegateMethod('fileNameToModuleName');
    this.getCancellationToken = this.delegateMethod('getCancellationToken');
    this.getCanonicalFileName = this.deleg    this.getDefaultLibFileName = this.delegateMethod('getDefaultLibFileName');
    this.getDefaultLibLocation = this.delegateMethod('getDefaultLibLocation');
    this.getDirectories = this.delegateMethod('getDirectories');
    this.getEnvironmentVariable = this.delegateMethod('getEnvironmentVariable');
    this.getModifiedResourceFiles = this.delegateMethod('getModifiedResourceFiles');
    this.getNewLine = this.delegateMethod('getNewLine');
    this.getParsedCommandLine = this.delegateMethod('getParsedCommandLine');
    this.getSourceFileByPath = this.delegateMethod('getSourceFileByPath');
    this.readDirectory = this.delegateMeth    this.readResource = this.delegateMethod('readResource');
    this.transformResource = this.delegateMethod('transformResource');
    this.realpath = this.delegateMethod('realpath');
    this.resolveModuleNames = this.delegateMethod('resolveModuleNames');
    this.resolveTypeReferenceDirectives = this.delegateMethod('resolveTypeReferenceDirectives');
    this.resourceNameToFileName = this.delegateMethod('resourceNameToFileName');
    this.trace = this.delegateMethod('trace');
    this.useCaseSensitiveFileNames = this.delegateMethod('useCaseSensitiveFileNames');
    this.writeFile = this.delegateMethod('    this.hasInvalidatedResolutions = this.delegateMethod('hasInvalidatedResolutions');
    // The following methods are required in TS 5.0+, but they don't exist in earlier versions.
    // TODO(crisbeto): remove the `ts-ignore` when dropping support for TypeScript 4.9.
    // @ts-ignore
    this.resolveModuleNameLiterals = this.delegateMethod('resolveModuleNameLiterals');
    this.resolveTypeReferenceDirectiveReferences =
        // @ts-ignore
        this.delegateMethod('resolveTypeReferenceDirectiveReferences');
  }  private delegateMethod<M extends keyo    return this.delegate[name] !== undefined ? (this.delegate[name] as any).bind(this.delegate) :
  undefined;
  }
}/**
 * A wrapper around `ts.CompilerHost` (plus any extension methods from `ExtendedTsCompilerHost`).
 *
 * In order for a consumer to include Angular compilation in their TypeScript compiler, the
 * `ts.Program` must be created with a host that adds Angular-specific files (e.g.
 *  * * `ExtendedTsCompilerHost` methods whenever present.
 */
export class NgCompilerHost extends DelegatingCompilerHost implements
   readonly constructionDiagnostics: ts.Diagnostic[];  readonly inputFiles: ReadonlyArray<string>;
  readonly rootDirs: ReadonlyArray<AbsoluteFsPath>;  constructor(
      delegate: ExtendedTsCompilerHost, inputFiles: ReadonlyArray<string>,
      rootDirs: ReadonlyArray<AbsoluteFsPath>, private shimAdapter: ShimAdapter,
      private shimTagger: ShimReferenceTagger, entryPoint: AbsoluteFsPath|null,
       this.constructionDiagnostics = diagnostics;
    this.inputFiles = [...inputFiles, ...shimAdapter.extraInputFiles];
    this.rootDirs = rootDirs;    if (this.resolveModuleNames === undefined) {
      // In order to reuse the module resolution cache during the creation of the type-check
      // program, we'll need to provide `resolveModuleNames` if the delegate did not provide one.
   }  /**   *
   * Available after this host is used to create a `ts.Program` (which causes all the files in the
   * program to be enumerated).
   */
  get ignoreForEmit(): Set<ts.SourceFile> {
      */
  get shimExtensionPrefixes(): string[] {
    return this.shimAdapter.e   * Performs cleanup that needs to happen after a `ts.Program` has been created using this host.
   */
  postProgramCreationCleanup(): void {
       */      delegate: ts.CompilerHost, inputFiles: ReadonlyArray<string>, options: NgCompilerOptions,
      oldProgram: ts.Program|null): NgCompilerHost {
    const topLevelShimGenerators: TopLevelShimGenerator[] = [];
    const perFileShimGenerators: PerFileShimGenerator[] = [];    const rootDirs = getRootDirs(delegate, options as ts.CompilerOptions);    perFileShimGenerators.push(new TypeCheckShimGenerator());    let diagnostics: ts.Diagnostic[] = [];    const normalizedTsInputFiles: AbsoluteFsPath[] = [];
    for (const inputFile of inputFiles) {
         entryPoint = findFlatIndexEntryPoint(normalizedTsInputFiles);
      if (entryPoint === null) {
        // This error message        // given.
        //
        // The user is not informed about the "index.ts" option as this behavior is deprecated -
 defundefined,ular compiler option "flatModuleOutFile" requires one and only one .ts file in the "files" field.',
        });
      } else {
        const flatModuleId = options.flatModuleId || null;        const flatIndexGenerator =        topLevelShimGenerators.push(flatIndexGenerator);    }    const shimAdapter = new ShimAdapt        oldProgram);
    const shimTagger =
     isShim(sf: ts.SourceFile): boolean {
    return isShim(sf);
  }  /**   * files to the project.
   */
  isResource(sf: ts.SourceFile): boolean {
        const shimSf = this.shimAdapter.maybeGenerate      // Yes, so return it.
      return shimSf;
    }    // No, so it's a file which might need shims (or a file which doesn't exist).
    const sf =    if (sf === undefined) {    }    this.shimTagger.tag(sf);  }      //  1) it really does exist in th    // Note that we can pass the file name as branded absolute fs path because TypeScript
    // internally only passes POSIX-like paths.
    //
          return thi      return moduleNames.map(moduleName => {
        const module = ts.resolveModuleName(
Name, containingFile, options, this, moduleResolutionCache, redirectedReference);
       };