/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  }  getExportsOfModule(node     }      // (`node.name` can be undefined in unnamed default exports: `default export class { ... }`).
    return isNamedClassDeclaration(node);       if (extendsType === undefined) {
       return extendsType.expression;    // Res  }  getDefinitionOfFunction(node: ts.Node): FunctionDefinitio        !ts.isFunctionExpression(node) && !ts.isArrowFunction(node)) {
           // The body might be an expression if the node is an arrow function.
              }),
    };         return true;
       //    // The only way to check this is to look at the module level for exports of the class. As a
    // performance optimization, this check is only performed if the class is actually    }    const localExports = this.getLocalExportedDeclarationsOfSourceFile(decl.getSourceFile());
       const symbol = this.checker.getSymbolAtLocation(id);         return null;
    }      // Not allowed to happen in TypeScript ASTs.
      return null;
      * ```
        *
   * ```
      * @returns The import info if this is     }        namespaceSymbol.declarations.length === 1 ? namespaceSymbol.declarations[0] : null;
       }    const importDeclaration = namespaceDeclaration.parent.parent;
         from: importDeclaration.moduleSpecifier.text,  }  /**
   * Resolve a `ts.Symbol` to its declaration, keeping track of the `viaModule` along the way.
   */      |null {
    /    if (symbol.valueDeclaration !== undefined) {
       if (valueDeclaration !== undefined && ts.isShorthand         }
         while (symbol.flags & ts.SymbolFlags.Alias) {
      symbol = this.checker.getAliasedSymbol(symbol);
    }        };        viaModule,    } else {
      return null;
    }
  }      let decoratorExpr: ts.Expression = node.expression;
    let args: ts.Expression[]|null = null;    // Check for call expressions.
       // wrong and the decorator can't be r    };    let kind: ClassMemberKind|null = null;
    let value: ts.Expression|null = nu    let nameNode: ts.Identifier|ts.StringLiteral|null = null;    if (ts.isPropertyDeclaration(node)) {
      kind = ClassMemberKind.Property;    } else if (ts.isGetAccessorDeclaration(node)) {
           kind = ClassMemberKind.Setter;
       }    if (ts.isConstructorDeclaration(node)) {
         name = node.name.text;
         name = node.name.text;
      nameNode = node.name;
    }    }    const decorators = this.getDecoratorsOfDeclaration(node);
    c        modifiers !== undefined && modifiers.some(mod => mod.kind === ts.SyntaxKind.StaticKeyword);    return {
         name,      decorators,      isStatic,
    }    // In theory, this could be expensive if run in the context of a massive input file. If
    // performance does become an issue here, it should be possible to create a `Set<>`    // Unfortunately, `ts.Iterator` doesn't implement the iterator protocol, so iteration here is
    /          exportedSymbol = this.checker.getAliasedSymbol(exportedSymbol    }    return exportSet;
  }
}export function reflectNameOfDeclaration(decl: ts.Declaration): string|null {
  c    return decl.name || null;
  } else if (ts.isVariableDeclaration(decl)) {
    if (ts.isIdentifier(decl.name)) {
      return decl.name;  }
  r  }
  w       }
    const symbol = checker.getSymbolAtLocation(type.left);
         throw new Error(`Cannot resolve qualified type entity lhs to symbol`);
    }
    const decl = symbol.declarations[0];
    if (ts.isNamespaceImport(decl)) {
      const clause = decl.parent!;      if (!ts.isStringLiteral(importDecl.moduleSpecifier)) {
        throw new Error(`Module specifier is not a string`);
      }
      return {node, from: importDecl.moduleSpecifier.text};
    }    } else {
       {      .map(member => {
           }        const decorators = member.decorators.filter(dec => {
if } else {
  return dec.name === name && module === undefined;
}retur      })
         members: ClassMember[], name: string, isStatic: boolean = false): ClassMember|null {}export function reflectObjectLiteral(node: ts.ObjectLiteralExpression): Map<string, ts.Expression> {
  c      if (name === null) {      }
      map.set(name, prop.initializer);
    } else if (ts.isShorthandPropertyAssignment(prop)) {
      * Compute the left most identifier in a qualified type chain. E.g. the `a` of `a.b.c.SomeType`.
 * @param qualifiedName The starting property access expression from which we want to c * @returns the left most identifier in the chain or `null` if it is not an identifier.
 */    }}/**
 * Co * the left most identifier.
 * @returns the left most identifier in the chain or `null` if it is not an identifie  return ts.isIdentifier(propertyAccess.expression) ? propertyAccess.expression : null;
}/**
 * Re */
export function getContainingImportDeclaration(node: ts.Node): ts.ImportDeclaration|null {
         null;
}/*  return ts.isImportSpecifier(decl) ?
      (decl.propertyName !== undefined ? decl.propertyName : decl.name).text :
      originalId.text;
}const LocalExportedDeclarations = Symbol( * exported either directly (`export class ...`) or indirectly (via `export {...}`).
 *  *     source file also invalidates this cache.
 */
int