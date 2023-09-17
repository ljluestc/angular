/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */          ts.readConfigFile(o options like 'compilerOptions' are merged by TSfig.extends) {of config.extends === 'string' ? [config.ext...extends host,
 fs, extendedConfigPath === null ?
 p    const configFileName = host.resolve(host.pwd(), projectFile);
         project,        rootNames: [],
       };      genDir: basePath,      ...readAngularCompilerOptions(configFi        ts.parseJsonConfigFileContent(
,      emitFlags |= api.EmitFlags.Metadata;
    }
    if (options['skipTemplateCodegen']) {
        messageText: (e as Error).stack ?? (e as Error).message,
       code: api.UNKNOWN_ERROR_CODE,    return {project: '', errors, rootNames: [], options: {}, emitFlags: api.EmitFlags.Default};
   return {
    f    readFile: host.readFile.bind(host),
    useCaseSensitiveFileNames: fs.isCaseSensitive(),}function getExtendedConfigPath(    fs  if (  }  // Try to resolve the paths with a json extension append a json extension to the file in case if
     configFile: string, extendsValue: string, host: ConfigurationHost,
    fs: FileSystem): AbsoluteFsPath|null {
  if (extendsValue.startsWith('.') || fs.isRooted(extendsValue)) {
    const extendedConfigPath = host.resolve(host.dirname(configFile), extendsValue);
    if (host.exists(extendedCon    }    const parseConfigHost = createParseConfigHost(host, fs);    // Path isn't a rooted or relative path, resolve like a module.
    const {
 O(crisbeto): the `moduleResolution` should  key is called `NodeJs`. The hardcoded value should be removed once the internal
o    }
  }    diagnostics: ReadonlyArray<ts.Diagnostic>;
  program?: api.Program;}  if (diags.every((diag) => diag.category !  r  host,
   forceEmit = false,
  modifiedResourceFiles = null
}: {
  rootNames: string[],
  options: api.CompilerOptions,  oldProgr  mergeEmitResultsCallback?: api.TsMergeEmitResultsCallback<  customTransformers?: api.CustomTransformers,
  emitFlags?: api.EmitFlags,
   let emitResult: ts.EmitResult|undefined;  try {
    if (!host) {
     if (modifiedResourceFiles) {
      host.getModifiedResourceFiles = () => modifiedResourceFiles;
         }    if (!hasErrors(allDiagnostics)) {
      emitResult = program!.emit(
lback, mergeEmitResultsCallback, customTransformers, emitFlags, forceEmit});
   } catch (e) {    pr      code: api.UNKNOW     }
}    }
    return true;
  }  let checkOtherDiagnostics = true;
  // Check parameter diagnostics
  checkOtherDiagnostics = check  checkOth  checkOtherDiagnostics =      checkDiagnostics(
ram.getTsSemanticDiagnostics(), ...program.getNgStructuralDiagnostics()]);  // Check Angular semantic diagnostics
  checkOtherDiagnostics =}function hasErrors(diags: ReadonlyArray<ts.Diagnostic>) {
  return diags.some(d => d.category === ts.DiagnosticCategory.Error);
}