/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      addParseSpanInfo(res, ast.source    }    // First attempt to let any custom resolution logic provide a translation for the given node.
       return resolved;    const node = wrapForDiagnostics(ts.fac       const op = BINARY_OPS.get(ast.operation);
    if (op === undefined) {    }    addParseSpanInfo(node, ast.sourceSpan);
     const elements = ast.expressions.map(expr => this.translate(expr));
    c    return node;       // is immediately before it:
    // `conditional /*1,2*/ ? trueExpr /*3,4*/ : falseExpr /*5,6*/`
    // This should be instead be `conditional /*1,2*/ ? trueExpr /*3,4*/ : (falseExpr /*5,6*/)`
       throw new Error('Method not implemented.');
  }  visitThisReceiver(ast: ThisReceiver): never {
    throw new Error('Method not implemented.');
  }      // interpolation's expressions. The chain is started using an actual string literal to ensure
         ts.factory.createStringLiteral(''));
  }      const key = this.translate(ast.key);
       const receiver = wrapForDiagnostics(this.translate(ast.receiver));
       const node = wrapForDiagnostics(
        ts.factory.createBinaryExpression(left, ts.SyntaxKind.EqualsToken, right));
    addParseSpanInfo(node, ast.sourceSpan);
    r    // If strictLiteralTypes is disabled, array literals are cast to `any`.
       return node;
  }  visitLiteralMap(ast: LiteralMap): ts.Expression {
         return ts.factory.createPropertyAssignment(ts.factory.createStringLiteral(key), value);
    });
         return node;
     } else if (ast.value === null) {
           node = ts.factory.createNumericLiteral(ast.value);
       return node;
  }    return node;
  }  visitPipe(ast: BindingPipe): never {
    throw new Error('Method not implemented.');
  }      // This is a normal property read - convert the receiver to an expression and emit the correct
       const name = ts.factory.createPropertyAccessExpression(receiver, ast.name);
       addParseSpanInfo(node, ast.sourceSpan);
       const receiver = wrapForDiagnostics(this.translate(ast.receiver));
    const left = ts.factory.createPropertyAccessExpression(receiver, ast.name);
         // a.b.c = 1
     // It could refer to either the whole binary expression or just the RHS.
         addParseSpanInfo(node, ast.sourceSpan);
         // Basically, the return here is either the type of the complete expression with a null-safe
         // The type of this expression is (ts.factory.createNonNullExpression(receiver), ast.name);
      addParseSpanInfo(expr, ast.nameSpan);
      node = ts.factory.createParenthesizedExpression(ts.factory.createConditionalExpression(
NUL      // Emulate a View Engine bug where 'any' is inferred for the left-hand side of the safe
      // navigation operation. With this bug, the type of the left-hand side is regarded as any.
           addParseSpanInfo(expr, ast.nameSpan);
       addParseSpanInfo(node, ast.sourceSpan);
       const receiver = wrapForDiagnostics(this.translate(ast.receiver));
         const expr = ts.factory.createElementAccessExpression(
ts.factory.createNonNullExpression(receiver), key);
   NU      // "a?.[...]" becomes (a as any)[...]
         // "a?.[...]" becomes (a!.[...] as any)
         addParseSpanInfo(expr, ast.sourceSpan);
      node = tsCastToAny(expr);
         const args = ast.args.map(expr => this.translate(expr));    let expr: ts.Expression;
           const propertyReceiver = wrapForDiagnostics(this.translate(receiver.receiver));
         }
    } else {
      expr = this.translate(receiver);
    }    let node: ts.Expression;    // Safe property/keyed reads will produce a ternary whose value is nullable.
    // We have to generate a similar ternary around the call.
       } else {
      node = ts.factory.createCallExpression(expr, undefined, args);
     }  visitSafeCall(ast: SafeCall): ts.Expression {
            ts.Expression {
    if (this.config.strictSafeNavigationTypes) {
   ts.factory.createNonNullExpression(expr), undefined, args);
         return ts.factory.createCallExpression(tsCastToAny(expr), undefined, args);
    * operation.
 *
 *  * of the receiver and use it more than once in the expression. This temporary variable has type
 * 'any'. In practice, this means certain receivers cause View Engine to not check the full
 * expression, and other receivers will receive more complete checking.
 * * Ivy checker can emulate this bug when needed.
 */  private static SINGLETON = new VeSafeLhsInferenceBugDetector();  static veWillInferAnyFor(ast: Call|SafeCall|SafePropertyRead|SafeKeyedRead) {
    const visitor = VeSafeLhsInferenceBugDetector.SINGLETON;
       return ast.expr.visit(this);
  }    return ast.left.visit(this) || ast.right.visit(this);
  }    return false;
  }  }
  v  }
  visitImplicitReceiver(ast: ImplicitReceiver): boolean {
     visitThisReceiver(ast: ThisReceiver): boolean {
    return false;
  }
  vis  }    return false;
  }
  v  }
  visitLiteralArray(ast: LiteralArray): boolean {
     }    return false;
  }    return true;
  }
  v    return ast.expression.visit(this);
  }
  v  }
  v  visitSafeKeyedRead(ast: SafeKeyedRead): boolean {
   