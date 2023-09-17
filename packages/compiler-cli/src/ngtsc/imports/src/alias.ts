/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  /**   *
   * This is not always nece   * Determine a name by which `decl` should be re-exported from `context`, depending on the
   * particular set of aliasing rules in place.   * `maybeAliasSymbolAs` can return `null`, in which case no alias export should be generated.
   *
   * @param ref a `Reference` to the direc   * @param ngModuleName the declared    * @param isReExport whether the directive/pipe under consideration is re-exported from another
   * NgModule (as opposed to being declared by it directly).
   */
  maybeAliasSymbolAs(
      ref: Reference<ClassDeclaration>, context: ts.SourceFile, ngModuleName: string,
      isReExport: boolean): string|null;  /**
   * Determine an `Expression` by which `decl` should be imported from `via` using an alias export
   * (which should have been previously created when compiling `via`).
   *   * (and the normal import rules should be used).
   *
   * @param decl the declaration of the directive/pipe which is being imported, and which might be
   * aliased.
   * @param via the `ts.SourceFile` which might contain an alias to the
   */}/**
 * An `AliasingHost` which generates and consumes alias re-exports when module names for each file
 * are determined by a `UnifiedModulesHost`.
 * * README.md for more details.
 */
export class UnifiedModulesAliasingHost implements AliasingHost {
  constructor(private unifiedModulesHost: UnifiedModulesHost) {}  /**
   * With a `UnifiedModulesHost`, aliases are chosen automatically without the need to look through
   * the exports present in a .d.ts file       isReExport: boolean): string|null {
    if (!isReExport) {
      // Aliasing is used with a UnifiedModulesHost to prevent transitive dependencies. Thus,
      // aliases      // NgModule which exports them.
      return null;
    }
    return this.aliasName(ref.node, context);   * Generates an `Expression` to import `decl` from `via`, assuming an export was added when `via`
   * was compiled per `maybeAliasSymbolAs` above.
   */     }
    // viaModule is the module it'll actually be imported from.
    const moduleName = this.unifiedModulesHost.fileNameToModuleName(via.fileName, via.fileName);
    return new ExternalExpr({moduleNam   * Generates an alias name based on the full module name of the file which declares the aliased
   * directive/pipe.
   */
  private aliasName(decl: ClassDeclaration, context: ts.SourceFi    return 'ɵng$' + replaced + '$$' + decl.name.text;
  }
}/**  * import any matched directives/pipes from the same path (to the NgModule file). See README.md for
 * more details.
 */
export class PrivateExportAliasingHost implements AliasingHost {
  c   * will select aliased exports that it finds in the .d.ts file for an NgModule's file. Thus,
   * emitting these exports in .d.ts is a requirement for the `PrivateExportAliasingHost` to
   * function correctly.
   */
  readonly aliasExportsInDts = true;  maybeAliasSymbolAs(    }
    // Look for a user-provided export of `decl` in `context`. If one exists, then an alias export
     // through the entire list of expor     }
    let found: boolean = false;
    exports.forEach(value => {
      if (value.node === ref.node) {
         // The module exports the declared class directly, no alias is necessary.
      return null;
    }
    return `ɵngExportɵ${ngModuleName}ɵ${ref.node.name.text}`;
  }  /**   * directly consume the aliases it creates.   * Thus, `getAliasIn` always returns `null`.
   */
   }
}/**
   emit(ref: Reference, context: ts.SourceFile, importMode: ImportFlags): EmittedReference|null {
    if (importMode & ImportFlags.NoAliasing || ref.alias === null) {
      return null;
    }    return {
     }
}
