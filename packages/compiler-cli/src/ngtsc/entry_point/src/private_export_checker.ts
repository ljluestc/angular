/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    }    if (decl !== undefi    }
  });  // Next, go through each exported class an  // an error if it isn't. `checkedSet` ensures o    // Loop through each class made Visibl      // Skip classes which have already been checked.
      if (checkedSet.has(transitiveReference)) {      }
      checkedSet.add(transitiveReference);      // Verify that the Visible class is also Exported.
      if (!topLevelExports.has(transitiveReference)) {
             // give to the user explaining the situation.        const descriptor = getDescriptorOfDeclaration(transitiveReference);
        const name = getNameOfDeclaration(transitiveReference);        // Construct the path of visibility, from `mainExport` to `transitiveReference`.
        let visibleVia = 'NgModule exports';        }        const diagnostic: ts.Diagnostic = {
: ts.DiagnosticCategory.Error,
ErrorCode(ErrorCode.SYMBOL_NOT_EXPORTED),sOfDeclaration(transitiveReference),
ext: `Unsupported private ${descriptor} ${name}. ThisbleVia}, but is not exported from the top-level library entrypoint.`,
        };        diagnostics.push(diagnos    });
  });  return diagnostics;
}func  return {    length: node.getEnd() + 1 - node.getStart(),
  };  if ((ts.isClassDeclaration(decl) || ts.isVariableDeclaration(decl) ||
       ts.isFunctionDeclaration(decl)) &&    retur}function getNameOfDeclaration(decl: DeclarationNode): string {
  const id = getIdentifierOfDeclaration(decl);
  return id !== null ? id.text : '(unnamed  switch (decl.kind) {
    case ts.SyntaxKind.ClassDeclaration:    case ts.SyntaxKind.FunctionDeclaration:
      retu      return 'variable';      return 'enum';
    d  }
}