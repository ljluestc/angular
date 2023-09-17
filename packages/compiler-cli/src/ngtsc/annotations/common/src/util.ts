/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  } else {
    let importExpr: Expressi    if (valueRef.nestedPath !== null) {        importExpr = new ReadPropExpr(importExpr, property);
      }
    }
    return importExpr;
  }    origin: ts.Node, ref: Reference, context: ts.SourceFile,
    refEmitter: ReferenceEmitter): R3Reference {
  const emittedValueRef = refEmitter.emit(ref, context);
  assertSuccessfulReferenceEmit(emittedValueRef, origin, 'class');  const emittedTypeRef =
      refEmitter.emit(ref, context, ImportFlags.ForceNewImport | ImportFlags.AllowTypeImports);
     type: emittedTypeRef.expression,
  };
}export function isAngularCore(decorator: Decorator): decorator is Decorator&{import: Import} {
  return decorator.import !== null && decorator.import.from === '@angular/core';
}export function isAngularCoreReference(reference: Reference, symb}export function findAngularDecorator(
    decorators: Decorator[], name: string, isCore: boolean): Decorator|undefined {
   } else if (isAngularCore(decorator)) {
    return decorator.import.name === name;
 }/**
 * Unwrap a `ts.Expression`, removing outer type-casts or parentheses until the expression is in its
  * For example, the expression "(foo as Type)" unwraps to "foo".e    node = node.expression;
  }
   // Either the body is a ts.Expression directly, or a block with a single return statement.
  if (ts.isBlock(body)) {
      const stmt = body.statements[0];
    if (!ts.isReturnStatement(stmt) || stmt.expression === undefined) {
     return stmt.expression;   }
}/**
   node = unwrapExpression(node);
  if (!ts.isCallExpression(node) || node.arguments.length !== 1) {
      return null;
  }  const expr = expandForwardRef(node.arguments[0]);
   }  const imp = reflector.getImportOfIdentifier(fn); }/**
 * A foreign function resolver for `staticallyResolve` which unwraps forwardRef() expressions.
       }
      const expanded = expandForwardRef(callExpr.arguments[0]);
   * Combines an array of resolver functions into a one.
 * export function combineResolvers(resolvers: ForeignFunctionResolver[]): ForeignFunctionResolver {
            return resolved;      const node = ts.getOriginalNode(expr.node);
    return node.getSourceFile() === contextSource && context.pos < node.pos;
  } else {    node: ClassDeclaration, reflector: ReflectionHost,
     if (baseExpression !== null) {
    const baseClass = evaluator.evaluate(baseExpression);
    if (baseClass instanceof Reference && reflector.isClass(baseClass.node)) {
          const visited = ts.visitEachChild(node, visitor, context);
           }
     * Wraps all functions in a given expression in parentheses. This is needed to avoid problems
 * where Tsickle annotations added between analyse and transform phases in Angular may trigger
    return ts.transform(expression, [parensWrapperTransformerFactory]).transformed[0];
}/**
 * Resolves the given `rawProviders` into `ClassDeclarations` and returns
      return providers;
  }  resolvedProviders.forEach(function processProviders(provider) {
         provider.forEach(processProviders);
    } else if (provider instanceof Reference) {
      tokenClass = provider;
    } else if (provider instanceof Map && provider.has('useClass') && !provider.has('deps')) {
           tokenClass = useExisting;
       const constructorParameters = reflector.getConstructorParameters(tokenClass.node);      // Note that we only want to capture providers with a non-trivial constructor,
           providers.add(tokenClass as Reference<ClassDeclaration>);
      }
    }
  } * The `value` is the exported declaration of the class from its source file.
 * The `type` is an expression that would be used in the typings (.d.ts) files.
 */
exp }/** Creates a ParseSourceSpan for a TypeScript node. */
e  const [startOffset, endOffset] = [node.getStart(), node.getEnd()];
   const parseSf = new ParseSourceFile(sf.getFullText(), sf.fileName);  // +1 because values are zero-indexed.
  return new ParseSourceSpan(
 } */
export function compileResults(
   if (metadataStmt !== null) {
       fac,
         type: def.type,
      deferrableImports,
    },
  ];  if (additionalFields !== null) {
   }export function toFactoryMetadata(
       typeArgumentCount: meta.typeArgumentCount,
   };    moduleResolver: ModuleResolver, importedFile: ImportedFile, expr: Expression,
    origin: ts.SourceFile): ts.SourceFile|null {  // being imported.
  i  }  // Otherwise `expr` has to be inspected to determine the file that is being imported. If `expr`
  // is not an `ExternalExpr` then it does not correspond with an import, so return null in that
  // case.
  i */
export function getOriginNodeForDiagnostics(
    expr: ts.Expression, container: ts.Expression): ts.Expression {
  c      return container;
   return ts.canHaveModifiers(clazz) && clazz.modifiers !== undefined ?
 }