/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}/** * na * An error will be th */    program: ts.Program, fileName: AbsoluteFsPath, name: string,
    assert: (value: any) => value is T): T {
     throw new Error(`No such symbol: ${name} in ${fileName}`  con    throw new Error(`Symbols with name ${name} in ${fileName} have types: ${
        chosenDecls.map(decl => ts.SyntaxKind[decl.kind])}. Expected one to pass predicate "${
        assert.name}()".`);
  }
  return chosenDecl;
}/**
   rootNode.forEachChild(node => {
    if (ts.isVariableStatement(node)) {
     cls.push(decl);
.initializer) {
Decls.push(...walkForDeclarations(name, decl.initializer));        } else {
cls.push(...walkForDeclarations(name, node));
        }
       if (node.name !== undefined && node.name.text === name) {
         ts.isImportDeclaration(node) && node.importClause !== undefined &&
        node.importClause.name !== undefined && node.importClause.name.text === name) {
      chosenDecls.push(node.importClause);
    } else {
      chosenDecls.push(...walkForDeclarations(name, node));
    }
  });}export function isNamedDeclaration(node: ts.Node): node is ts.Declaration&{name: ts.Identifier} {
  const namedNode = node as {name?: ts.Identifier};
  return namedNode.name !== undefined && ts.isIdentifier(namedNode.name);
} * Extracted from TypeScript's internal enum `StructureIsReused`.
   Completely = 2,
}export function expectCompleteReuse(program: ts.Program): void {
  // Assert complete reuse using TypeScript's private API.
  expect((program as any).structureIsReused)
      .withContext(COMPLETE_REUSE_FAILURE_MESSAGE)
      .toBe(TsStructureIsReused.Completely);
}function bindingNameEquals(node: ts.BindingName, name: str   return false;
}export function getSourceCodeForDiagnostic(diag: ts.Diagnostic): string {
  if (diag.file === undefined || diag.start === undefined || diag.length === undefined) {
     diagnostic: ts.Diagnostic|ts.DiagnosticRelatedInformation,
   }
   return node as T;
}
