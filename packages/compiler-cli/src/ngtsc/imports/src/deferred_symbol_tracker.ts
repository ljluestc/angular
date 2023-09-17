/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  markAsDeferrableCandidate(provi      // We process this symbol for the first time, populate references.er.    // (it's used as a dependency in one of the `{#defer}` blocks).
    identifiers.delete(identifier);   * Whether all symbols from a given import declaration have no references
   * in a source file, thus it's safe to use dynamic imports.  canDefer(importDecl: ts.ImportDeclaration): boolean {      }
    }    return true;
  }    getDeferrableImportDecls(): Set<ts.ImportDeclaration> {
    const deferrableDecls = new Set<ts.ImportDeclaration>();
     }  private lookupIdentifiersInSourceFile(name: string, importDecl: ts.ImportDeclaration):
      Set<ts.Identifier> {
         if (node === importDecl) {
        // Don't record references from the declaration itself.
        return;        // Is `node` actually a reference to this symbol?    };    visit(importDecl.getSourceFile());
    r}
