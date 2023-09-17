/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   }
}export function getSourc}export function identifierOfNode(decl: ts.Node&{name?: ts.Node}): ts.Identifier|null {
   } else {
 }export function isDeclaration(node: ts.Node): n}e}export function isNamedDeclaration(node: ts.Node): node is ts.Declaration&{name: ts.Identifier} {
 }export function isExported(node: DeclarationNode): boolean {
     topLevel = node.parent.parent;
   return modifiers !== undefined &&
    const rootDirs: string[] = [];
  const cwd = host.getCurrentDirectory();
  }  const {line, character} = ts.getLineAndCharacterOfPosition(sf, node.pos);
   * This helper will attempt to use the `CompilerHost.resolveModuleNames()` method if available.
 export function resolveModuleName(
     moduleResolutionCache: ts.ModuleResolutionCache|null): ts.ResolvedModule|undefined {
    } else {
    return ts
 ResolutionCache !== null ? moduleResolutionCache : undefined)
 } * ones) into required fields (which may be `undefined`, if the method was optional).
  * Source files may become redirects to other source files when their package name and version are
   * Obtains the non-redirected source file for `sf`.
   const redirectInfo = (sf as RedirectedSourceFile).redirectInfo;
   }
 