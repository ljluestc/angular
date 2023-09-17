/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  [ts.SyntaxKind.GreaterThan  [ts.SyntaxKind.LessThanLessThanToken, literalBinaryOp(  [ts.SyntaxKind.AmpersandAmpersandToken, referenceBinaryOp((a, b) => a && b)],
   [ts.SyntaxKind.TildeToken, a => ~a], [ts.SyntaxKind.MinusToken, a => -a],
  [ts.SyntaxKind.PlusToken, a => +a], [ts.SyntaxKind.Excl   * The module name (if any) which was used to reach the currently resolving symbols.
   */
  absoluteModuleName: string|null;  /**  resolutionContext: string;
   constructor(
      private host: ReflectionHost, private checker: ts.T      return true;
    } else if (node.kind === ts.SyntaxKind.FalseKeyword) {
      return false;      return null;
     } else if (ts.isNoSubstitutionTemplateLiteral(node)) {
      return node.text;
     } else if (ts.isObjectLiteralExpression(node)) {
      result = this.visitObjectLiteralExpression(node, co      result = this.visitPrefixUnaryExpression(node, context);
    } else if (ts.isBinaryExpression(node)) {
      result = this.visitBinaryExp      result = this.visitArrayLiteralExpression(node, context);
     } else if (ts.isElementAccessExpression(node)) {
      result = this.visitElementAccessExpression(node, context);
     } else if (this.host.isClass(node)) {
      result = this.visitDeclaration(node, context);
       ResolvedValue {
    const array: ResolvedValueArray = [];
    for (let i = 0; i < node.elements.length; i++) {
      const element = node.element        array.push(...this.visitSpreadElement(element, context));
      } else {
        array.push(this.visitExpression(element, context));
      }
    }
    return array;
  }    const map: ResolvedValueMap = new Map<string, ResolvedValue>();
    for (let i = 0; i < node.properties.length; i++) {
      const property = node.properties[i];
   yna        map.set(name, this.visitExpression(property.initializer, context));
           if (symbol === undefined || symbol.valueDeclaration === undefined) {
property.name.text, DynamicValue.fromUnknown(property));
        } else {
property.name.text, this.visitDeclaration(symbol.valueDeclaration, context));
        }        const spread = this.visitExpression(property.expression, context);
        if (spread instanceof DynamicValue) {
ynamicValue.fromDynamicInput(node, spread);
        } else if (spread instanceof Map) {
orEach((value, key) => map.set(key, value));
        } else if (spread instanceof ResolvedModule) {
etE        }
      } else {
        return DynamicValue.fromUnknown(node);
            const span = node.templateSpans[i];
   namicValue.fromDynamicString(span.expression));
      if (value instanceof DynamicValue) {
        return DynamicValue.fromDynamicInput(node, value);
      }
      pieces.push(`${value}`, span    return pieces.join('');
  }  private visitIdentifier(node: ts.Identifier, context: Context): ResolvedValue {
    const decl = this.host.getDeclarationOfIdentifier(node);
    if (decl === null) {
      if (getOriginalKeywordKind(node) === ts.SyntaxKind.UndefinedKeyword) {
        return undefined;
           if (this.dependencyTracker !== null && this.host.getImportOfIdentifier(node) !== null) {
s, but no declaration for the node could be found. This means that the dependency
 for the current file cannot be properly updated to account for this (broken)
t. Instead, the originating file is reported as failing dependency analysis,
ing that future compilations will always attempt to re-resolve the previously
n identifier.        }
       }
       if (result instanceof Reference) {
         // identifier here.
      if (!result.synthetic) {
        result.addIdentifier(node);
      }
    } else if (result instanceof DynamicValue) {
      return DynamicValue.fromDynamicInput(node, result);
    }
       if (this.dependencyTracker !== null) {
      this.dependencyTracker.addDependency(context.originatingFile, node.getSourceFile());
    }
    if (this.host.isClass(node)) {
      return this.getReference(node, context);
       } else if (ts.isParameter(node) && context.scope.has(node)) {
      return context.scope.get(node)!;
    } else if (ts.isExportAssignment(node)) {
      return this.visitExpression(node.expression, context);
    } else if (ts.isEnumDeclaration(node)) {
      return this.visitEnumDeclaration(node, context);
    } else if (ts.isSourceFile(node)) {
      return this.visitSourceFile(node, context);
       } else {
      return this.getReference(node, context);
    }
  }
  p    if (value !== null) {
      return this.visitExpression(value, context);
    } else if (isVariableDeclarationDeclared(node)) {
      // If the declaration has a literal type that can be statically reduced to a value, resolve to
      // that value. If not, the historical behavior for variable declarations is to return a
      // `Reference` to the variable, as the consumer could use it in a context where knowing its
      // static value is not necessary.
         //
      // TODO(zarend): investigate switching to a `DynamicValue` and verify this won't break any
      // use cases, especially in ngcc
      if (node.type !== undefined) {
        const evaluatedType = this.visitType(node.type, context);
           }
      }
      return this.getReference(node, context);
    } else {
      return undefined;
    }
  }  private visitEnumDeclaration(node: ts.EnumDeclaration, context: Context): ResolvedValue {
    const enumRef = this.getReference(node, context);
         const name = this.stringNameFromPropertyName(member.name, context);
      if (name !== undefined) {
        const resolved = member.initializer && this.visit(member.initializer, context);
        map.set(name, new EnumValue(enumRef, name, resolved));
       return map;
  }  private visitElementAccessExpression(node: ts.ElementAccessExpression, context: Context):
      ResolvedValue {
    const lhs = this.visitExpression(node.expression, context);
    if (lhs instanceof DynamicValue) {
      return DynamicValue.fromDynamicInput(node, lhs);
    }
       if (typeof rhs !== 'string' && typeof rhs !== 'number') {
      return DynamicValue.fromInvalidExpressionType(node, rhs);
    }    return this.accessHelper(node, lhs, rhs, context);
  }  private visitPropertyAccessExpression(node: ts.PropertyAccessExpression, context: Context):
      ResolvedValue {
       // TODO: handle reference to class declaration.
    if (lhs instanceof DynamicValue) {
      return DynamicValue.fromDynamicInput(node, lhs);
    }
    return this.accessHelper(node, lhs, rhs, context);
  }  private visitSourceFile(node: ts.SourceFile, context: Context): ResolvedValue {
         return DynamicValue.fromUnknown(node);
    }    return new ResolvedModule(declarations, decl => {
           ...joinModuleContext(context, node, decl),
      };      // Visit both concrete and inline declarations.
      return this.visitDeclaration(decl.node, declContext);
    });
  }  private accessHelper(node: ts.Node, lhs: ResolvedValue, rhs: string|number, context: Context):
      ResolvedValue {
    const strIndex = `${rhs}`;
           return lhs.get(strIndex)!;
      } else {
        return undefined;
      }
    } else if (lhs instanceof ResolvedModule) {
      return lhs.getExport(strIndex);
           return new ArraySliceBuiltinFn(lhs);
      } else if (rhs === 'concat') {
           if (typeof rhs !== 'number' || !Number.isInteger(rhs)) {
         return lhs[rhs];
    } else if (typeof lhs === 'string' && rhs === 'concat') {
      return new StringConcatBuiltinFn(lhs);
    } else if (lhs instanceof Reference) {
      const ref = lhs.node;
      if (this.host.isClass(ref)) {
        const module = owningModule(context, lhs.bestGuessOwningModule);
        let value: ResolvedValue = undefined;
        const member = this.host.getMembersOfClass(ref).find(
 =>er.value !== null) {
= t= new Reference(member.implementation, module);
f (me        return value;
   DynamicValue.fromExternalReference(ref, lhs as Reference<ts.Declaration>));
      }      return DynamicValue.fromDynamicInput(node, lhs);
    } else if (lhs instanceof SyntheticValue) {
      return DynamicValue.fromSyntheticInput(node, lhs);
       const lhs = this.visitExpression(node.expression, context);
    if (lhs instanceof DynamicValue) {
      return DynamicValue.fromDynamicInput(node, lhs);
         return lhs.evaluate(node, this.evaluateFunctionArguments(node, context));
    }    if (!(lhs instanceof Reference)) {
      return DynamicValue.fromInvalidExpressionType(node.expression, lhs);
    }    const fn = this.host.getDefinitionOfFunction(lhs.node);
    if (fn === null) {
      return DynamicValue.fromInvalidExpressionType(node.expression, lhs);
           absoluteModuleName?: string|null,
        resolutionContext?: string,
           // redesigned as a refactoring with no behavior changes so that should be done as a follow-up.
           contextExtension = {
ModuleName: lhs.bestGuessOwningModule.specifier,
onContext: lhs.bestGuessOwningModule.resolutionContext,
        };
      }      return this.visitFfrExpression(expr, {...context, ...contextExtension});
    };    // If the function is foreign (declared through a d.ts file), attempt to resolve it with the
    // foreignFunctionResolver, if one is specified.
    if (fn.body === null && context.foreignFunctionResolver !== undefined) {
      const unresolvable = DynamicValue.fromDynamicInput(
nam    }    const res: ResolvedValue = this.visitFunctionBody(node, fn, context);    // If the result of attempting to resolve the function body was a DynamicValue, attempt to use
       if (res instanceof DynamicValue && context.foreignFunctionResolver !== undefined) {
        * Visit an expression which was extracted from a foreign-function resolver.
   *
   * This will process the result and ensure it's correct for FFR-resolved values, including marking
   * `Reference`s as synthetic.
   */    const res = this.visitExpression(expr, context);
    if (res instanceof Reference) {
      // This Reference was created synthetically, via a foreign function resolver. The real
         ResolvedValue {
    if (fn.body === null) {
      return DynamicValue.fromUnknown(node);
       const newScope: Scope = new Map<ts.ParameterDeclaration, ResolvedValue>();
    c      let arg = args[index];
      if (param.node.dotDotDotToken !== undefined) {
           if (arg === undefined && param.initializer !== null) {
        arg = this.visitExpression(param.initializer, calleeContext);
      }
     ned;
  }      return DynamicValue.fromDynamicInput(node, condition);
    }    if (condition) {
      return this.visitExpression(node.whenTrue, context);
    }      ResolvedValue {
         return DynamicValue.fromUnsupportedSyntax(node);
    }    const op = UNARY_OPERATORS.get(operatorKind)!;
    const value = this.visitExpression(node.operand, context);
    if (value instanceof DynamicValue) {
      r      return op(value);
    }    const tokenKind = node.operatorToken.kind;
    if (!BINARY_OPERATORS.has(tokenKind)) {
      return DynamicValue.fromUnsupportedSyntax(node);
    }    const opRecord = BINARY_OPERATORS.get(tokenKind)!;
         DynamicValue.fromInvalidExpressionType(node.left, value));itExpression(node.right, context),
 Dy      lhs = this.visitExpression(node.left, context);
         }
  }  private visitParenthesizedExpression(node: ts.ParenthesizedExpression, context: Context):
      ResolvedValue {
    return this.visitExpression(node.expression, context);
  }  pri    for (const arg of node.arguments) {
      if (ts.isSpreadElement(arg)) {
        args.push(...this.visitSpreadElement(arg, context));
         return [DynamicValue.fromDynamicInput(node, spread)];
    } else if (!Array.isArray(spread)) {
      return [DynamicValue.fromInvalidExpressionType(node, spread)];
   rayBindingPattern(closestDeclaration) ||
jectB        path.unshift(closestDeclaration);
      }      closestDeclaration = closestDeclaration.parent;
    }      return DynamicValue.fromUnknown(node);
    }    let value = this.visit(closestDeclaration.initializer, context);
    for (const element of path) {
             const name = element.propertyName || element.name;
           } else {
ynami      }
      value = this.accessHelper(element, value, key, context);
           }
    }    return value;
  }      } else {
     }  private getReference<T extends DeclarationNode>(node: T, context: Context): Reference<T> {
    r    if (ts.isLiteralTypeNode(node)) {
      return this.visitExpression(node.literal, context);
    } else if (ts.isTupleTypeNode(node)) {
      r      return this.visitType(node.type, context);
    }     }    return DynamicValue.fromDynamicType(node);
  }  private visitTupleType(node: ts.TupleTypeNode, context: Context): ResolvedValueArray {
    const res: ResolvedValueArray = [];    for (const elem of node.elements) {
       }  private visitTypeQuery(node: ts.TypeQueryNode, context: Context): ResolvedValue {
       }      return DynamicValue.fromUnknownIdentifier(node.exprName);    return this.visitDeclaration(decl.node, declContext);
  }    ref is Reference<ts.FunctionDeclaration|ts.MethodDeclaration|ts.FunctionExpression> {
  ret      typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
     return reject(value);
}function isVariableDeclarationDeclared(node: ts.VariableDeclaration): boolean {
  if (node.parent === undefined || !ts.isVariableDeclarationList(node.parent)) {
     con    return false;
  }
  const varStmt = declList.parent;
  c      resolutionContext: node.getSourceFile().fileName,
    };
  } else {
         resolutionContext: context.resolutionContext,
    }    return null;
  } * Gets the original keyword kind of an identifier. This is a compatibility
 * la  return typeof (ts as any).identifierToKeywordKind === 'function' ?
     }
