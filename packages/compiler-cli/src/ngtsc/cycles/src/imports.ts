/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */sh(next);         return null;   */
  addSyntheticImport(sf: ts.SourceFile, imported: ts.SourceFile):      this.importsOf(sf).add(imported);  }      const imp      for (const stmt of sf.statements) {
        if ((!ts.isImportDeclaration(stmt) && !ts.isExportDeclaration(stmt)) ||
oduleSpecifier === undefined) {
;OnlyImportClause(stmt.importClause)) {
de ;        if (symbol === undefined || symbol.valueDeclaration === undefined) {
mbol could be found to skip over this import/export.
;        const moduleFile = symbol.valueDeclaration;d t      return im  }
}function isLocalFile(sf: ts.SourceFile): boolean {
  return !sf.isDeclarationFile;
}func  }  // All the specifiers in the cause are type-only (e.g. `import {type a, type b} from '...'`).
  i    return true; * `getPath()` above.
 */
class Found {
  constructor(readonly sourceFile: ts.SourceFile, readonly parent: Found|null) {}  /**
   * Back track through this found SourceFile and its ancestors to generate an array of
   * SourceFiles that form am import path between two SourceFiles.
       while (curr      current = current.parent;
     // manipulating the array on every iteration: https://stackoverflow.com/a/26370620
    return array.reverse();
 