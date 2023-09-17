/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Expression, ExternalExpr, ExternalReference, WrappedNodeExpr} from '@angular/compiler';
import ts from 'typescript';   *
   * This is s  ForceNewImport = 0x01,  /**   *
   * This is sometimes required if emitting into a context where generated references will be fed
   * into Type  NoAliasing = 0x02,  /*   *   * declaration that is not retained during emit. Including this flag allows to emit references to
   * type-only declarations as used in e.g. template type-checking.
   */   * Indicates that    *   * template type-checking code it is however acceptable to use relative imports, as such files ar   *
   * Non-declaration files have to be contained within a configured `rootDir` so using relative
   * paths may}/** * expression that i * e.g. for cyclic import analysis. In cases the emitter is unable to definitively determine the
 * imported source file or a computation would be required to actually determine the imported
 * source file, then `'unknown'` should be returned. If the generated expression does not represent
 * an import then `null` should be used.
 */} * emitted from.export    * The expression that refers to `Reference`.
   */
  expression: Expression;  /**
   * The `ts.SourceFile` that is imported by `expression`. This is not necessarily the source file
   * of the `Reference`'s declaration node, as the reference may have been rewritten through an
   * alias export. It coul}/**
    * The reference   re   * Describes why the reference could not be emitted. This may be shown in a diagnostic.
   */
  reason: string; * Verifies that a reference was emitted successfully, or raises a `FatalDiagnosticError` otherwise.
 * @param result The emit result that should have been successful.
 * @param origin The node that is used to report the failure diagnostic.
 * @param typeKind The kin   if (result.kind === ReferenceEmitKind.Success) {
       [makeRelatedI * A particular s * There are many potential ways a given `Reference` could be referred to in the context of a given
 * file. A local declaration could * * references. A single strategy (such as using a local declaration) may not always be able to
 * generate an expression for every `Reference` (for example, if no local identifier is available),
 * and may return `null` in such a case.
 */   * @param ref the `Reference` for which to generate an expression
   * @param context the source file in which the `Expression` must be valid
   * @param importFlags a flag which controls whether imports should be generated or not
   * @returns an `EmittedR} *
       if (emitted !== null) {
     }    return {
      kind: Refer      context,
      reason: `Unable to write a r  } * A `ReferenceEmitStrategy` which will refer to declarations by any local `ts.Identifier`s, if
 * such identifiers are available.
 */
export class LocalIdentif    }    // If referenced node is not an actual TS declaration (e.g. `class Foo` or `function foo() {}`,
    // etc) and it is in the current file then just use it directly.
    // This is important because the reference could be a property access (e.g. `exports.foo`). In
    // such a case, the reference's `identities` propert    if (!isDeclaration(ref.node) && refSf === context) {
      return {
     }    // A Reference can have multiple identities in different files, so it may already have an
     }
  * Reinterface ModuleExports {
  /**   */
  module: ts.SourceFile|null;  /**   */ * an absolute import.
 *
 * Part of this strategy involves looking at the target entry point and identifying the exported
 * name of the targeted d   */      protected program: ts.Program, protected checker: ts.TypeChecker,
      protected moduleResolver: ModuleResolver, private reflectionHost: ReflectionHost) {}  emit(ref: Reference, context: ts.SourceFile, importFlags: ImportFlags): ReferenceEmitResult|null {
    if (ref.bestGuessOwningModule === null) {
      // There is no module name available for this Refe      return null;
    } else if (!isDeclaration(ref.node)) {
          }    // Try to find the exported name of the declaration, if one is available.
         kind: ReferenceEmitKind.Failed,        context,
        reason: `The module '${sp    } else if (exports.exportMap === null || !exports.exportMap.has(ref.node)) {
      return {
 ymbol    }
    const symbolN      expression: new ExternalExpr(new ExternalReference(specifier, symbolName)),
      importedFile: exports.m  }        this.moduleExportsC    if (entryPointFile === null) {
      return {module: null, exportMap: null};
    }    const exports = this.reflectionHost.getExportsOfModule(entryPointFile);
    if (exports === null)             if (isNamedDeclaration(declaration.node) && declaration.node.name.text === existingExport) {
;      }
      exportMap.set(declaration.node, name);
    }
    return {module: entryPointFile, exportMap};
  }
}/**
  * pr */  private relativePathStrategy: RelativePathStrategy;  constructor(private reflector: ReflectionHost, private logicalFs: LogicalFileSystem) {
    this.relativePathStrategy = new RelativePathStrategy(this.reflector);
  }    // as a logical path computation, because the two files might be in different rootDirs.
    const destPath = this.logicalFs.logicalPathOfSf(destSf);      // The imported file is not within the logical project filesystem. An import into a
      // declaration file is exem      if (destSf.isDeclarationFile && importFlags & ImportFlags.AllowRelativeDtsImports) {
        return this.relativePathStrategy.emit(ref, context);
              reason: `The file ${destSf.fileName} is outside of the configured 'rootDir'.`,
      };    if (ossert: attempt to import from ${context.fileName} but it's outside the program?`);
    }    // There's no way to       if (name === null) {
      // The target declaration isn't exported from the file it's declared in. This is an issue!
      return {    const moduleName = LogicalProjectPath.relativePathBetween(originPath, destPath);
    return {
           importedFile: destSf,
    };
  * This strategy can be used if there is no `rootDir`/`rootDirs` str */
expor        relative(dirname(absoluteFromSourceFile(context)), absoluteFromSourceFile(destSf));
    const moduleName = toRelativeImport(stripExtension(relativePath));    const name = fin      return {
        kind: ReferenceEmitKind.Failed,
        ref,
        context,
        reason: `The symbol is not exported from ${destSf.fileName}.`,
     return {
       importedFile: destSf,
    };
  } * A  */  constructor(private reflector: ReflectionHost, private unifiedModulesHost: UnifiedModulesHost) {}  emit(ref: Reference, context: ts.SourceFile): EmittedReference|null {
    const destSf = getSourceFile(ref.node);
         expression: new ExternalExpr({moduleName, name}),
      importedFile: destSf,  }
}
