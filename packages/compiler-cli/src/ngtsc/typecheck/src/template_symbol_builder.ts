/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  getSymbol(node: AST|TmplAstNode): Symbol|null {
    if (this.symbolCache.has      // TODO(atscott): input and output bind      symbol = this.getSymbolOfElement(node);
    } else if (node instanceof TmplAstTemplate) {
      symbol = this.getSymbolOfAstTemplate(node);           symbol = this.getSymbolOfReference(node);
    } else if (node instanceof BindingPipe) {
      symbol = this.getSymbolOfPipe(node);    return symbol;
  }  private getSymbolOfAstTemplate(template: TmplAstTemplate): TemplateSymbol|null {
    const directives = this.getDirectivesOfNode(template);  }          this.typeCheckBlock, {withSpan: elementSourceSpan, filter: ts.isVariableDeclaration});
    if (node === null) {
      return null;    return {
         directives,
      templateNode: element,
    };
  }      const isDirectiveDeclaration = (node: ts.Node): node is ts.TypeNode|ts.Identifier =>
        (ts.isTypeNode(node) || ts.isIdentifier(node)) && ts.isVariableDeclaration(node.parent) &&
        hasExpressionIdentifier(tcbSourceFile, node, ExpressionIdentifier.DIRECTIVE);    const nodes = findAllMatchingNodes(
           const symbol = this.getSymbolOfTsNode(node.parent);this....symbol,
ref,
tsSisComponent: meta.isComponent,
ngModule: this.getDirectiveModule(symbol.tsSymbol.valueDeclaration),
kind: SymbolKind.Directive,
isS        symbols: DirectiveSymbol[]): void {
    for (const current of hostDirectives) {
      if (!ts.isClassDeclaration(current.directive.node)) {      }      const symbol = this.getSymbolOfTsNode(current.directive.node);
     ...symbol,
isHosttsSymkind: SymbolKind.Directive,isInScope: true,
           host: TmplAstTemplate|TmplAstElement,
      directiveDeclaration: ts.Declaration): TypeCheckableDirectiveMeta|null {
       // the `dir` will be skipped, but it's needed in language service.
    const firstChild = host.children[0];
    if (firstChild instanceof TmplAstElement) {
       }  private getDirectiveModule(declaration: ts.ClassDeclaration): ClassDeclaration|null {
    const scope = this.componentScopeReader.getScopeForComponent(declaration as ClassDeclaration);
    if (scope === null || scope.kind !== ComponentScopeKind.NgModule) {    }  }  private getSymbolOfBoundEvent(eventBinding: TmplAstBoundEvent): OutputBindingSymbol|null {
    c    let expectedAccess: string;
    if (consumer instanceof TmplAstTemplate || consumer instanceof TmplAstElement) {
      expectedAccess = 'addEventListener';
    }      // there are multiple consumers (not supported in the `boundTarget` API) and one of the      expectedAccess = bindingPropertyNames[0].classPropertyName;
    }      }
    }
           if (!ts.isPropertyAccessExpression(outputFieldAccess)) {
continue;
        }        const addEventListener = outputFieldAccess.name;
   kind: SymbolKind.Binding,
tsSymtarget,  pos        });
   continue;
        }
        const tsSymbol =          continue;
       positionInFile,
},
        });
         TmplAstTextAttribute): InputBindingSymbol|DomBindingSymbol|null {    if (consumer === null) {
             continue;
      }      const target = this.getDirectiveSymbolForAccessExpression(node.left, consumer);
           kind: SymbolKind.Binding,
        target,
      });    if (bindings.length === 0) {
         return null;
    }        !hasExpressionIdentifier(  Exp    }    const symbol = this.getSymbolOfTsNode(declaration);
         return null;
    }    const ref: Reference<ClassDeclaration> = new Reference(symbol.tsSymbol.valueDeclaration as any);
    const ngModule = this.getDirectiveModule(symbol.tsSymbol.valueDeclaration);      r         tcbLocation: symbol.tcbLocation,
         }    const expressionSymbol = this.getSymbolOfTsNode(node.initializer);
    if (expressionSymbol === null) {
      return null;
    }      }  }  private getSymbolOfReference(ref: TmplAstReference): ReferenceSymbol|null {
    c    i    }    // TODO(atscott): Consider adding an `ExpressionIdentifier` to tag variable declaration
    //          const symbol = this.getSymbolOfTsNode(originalDeclaration.valueDeclaration);
    if (symbol === null || symbol.tsSymbol === null) {
      r      tcbPath: this.tcbPath,
      isShimFile: this.tcbIsShim,      return {
        kind: SymbolKind.Reference,
        tsSymbol: symbol.tsSymbol,
        tsType: symbol.tsType,
        t        targetLocation: symbol.tcbLocation,
              kind: SymbolKind.Reference,
        ts        t      };
    }
  }      if (methodAccess === null) {
       const pipeDeclaration = this.getTypeChecker().getSymbolAtLocation(pipeVariableNode);
    i    }    // is because the node used to look for the `pipeInstance` symbol info is a value
         return null;
    }      return null;
    }    return {      .         },
    };      |ExpressionSymbol|null {      expression = expression.ast;
    }       // AST so there is no way to r      wit    // (e.g. `ctx.foo`) so try looking for one first.
    ithis.typeCheckBlock, {withSpan, filter: ts.isPropertyAccessExpression});
    }    // Otherwise fall back to searching for any AST node.
    if (node === null) {
           return null;
    }      // - If our expression is a pipe binding ("a | test:b:c"), we want the Symbol fo         const whenTrueSymbol = this.getSymbolOfTsNode(node.whenTrue);
      if (whenTrueSymbol === null) {           kind: SymbolKind.Expression,
         }           node = node.expression;
    }           const type = this.getTypeChecker().getTypeAtLocation(node);
    return {
      /      tsType: type,
      tcbLocation: {      },
    };
  }  private getTcbPositionForNode(node: ts.Node): number {
    if (ts.isTypeReferenceNode(node)) {
      ret      return node.right.getStart();
    } else if (ts.isPropertyAccessExpression(node)) {
           return node.argumentExpression.getStart();
   }/** Filter predicate function that matches any AST node. */
function a}