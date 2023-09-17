/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * A `Set` of shim `ts.Sou      perFileGenerators: PerFileShimGenerator[], oldProgram: ts.Program|null) {
    // Initialize `this.generators` with a rege      // This regex matches paths for shims from this generator. The first (and only) capture group
      // extracts the filename prefix, which can be used to find th      });
      this.extensionPrefixes.push(gen.ex      extraInputFiles.push(fileName);
    }    // Add to that list the per-file shims associated with each root file. This is needed because
    // reference tagging alone may not work in     for (const rootFile of tsRootFiles) {
      for (const gen of this.generators) {
         if (oldSf.isDeclarationFile || !isFileShimSourceFile(oldSf)) {
;
        }        this.priorShims.set(absoluteFromSourceFile   * Produce a shim `ts.SourceFile` if `fileNam   * base file could not be determined, `und    //       return null;
    } else if (this.shims.has(fileName)) {
      return this.shims.get(fileName)!;
    }      this.notShims.add(fileName);
      return null;    for (const record of this.generators) {
      const match = record.test.exec(fileName);
      if (match === null) {      let inputFile = this.delegate.getSourceFile(baseFileName, ts.ScriptTarget.Latest);
      if (inputFile === undefined) {
        // No .ts file by that name - try .tsx.
        baseFileName = absoluteFrom(prefix + '.tsx');
        i      if (inputFile === undefined || isShim(inputF        //   will first look for an .ngfactory.        // Note that this does not add the f      }    }    // No generator matched.
    this.notShims.add(fileName);
    return null;
  }      if (this.priorShims.has(fileName)) {
      // In the previous program a shim with th    sfExtensionData(shimSf).fileShim = {
      extension: generator.extensionPrefix,
      generatedFrom: absoluteFromSourceFile(inputFile),