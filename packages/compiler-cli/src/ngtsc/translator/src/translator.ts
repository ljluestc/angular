/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from '@angular/compiler';  [o.BinaryOperator.Or, '||'],  downlevelTaggedTemplates?: boolean;
  downlevelVariableDeclarations?: boolean;
  recordWrappedNode?: RecordWrappe      private imports: ImportGenerator<TExpression>, options: TranslatorOptions<TExpression>) {
    this.downlevelTaggedTemplates = options.downlevelTaggedTemplates === true;
    this.downlevelVariableDeclarations = options.downlevelVariableDeclarations === true;
              stmt.leadingComments);ame, stmt.params.map(param => param.name),
actory.createBlock(
 this.visitStatements(stmt.statements, context.withStatementMode))),
        stmt.leadingComments);
  }  visitExpressionStmt(stmt: o.ExpressionStatement, context: Context): TStatement {
   }  visitReturnStmt(stmt: o.ReturnStatement, co        this.factory.createReturnStatement(
alu  }  visitIfStmt(stmt: o.IfStmt, context: Context): TStatement {alseCase.length > 0 ? this.factory.createBlock(this.visitStatements(
.falseCase, context.withStatementMode)) :        stmt.leadingComments);
  }  visitReadVarExpr(ast: o.ReadVarExpr, _context: Context): TExpression {
    const identifier = this.factory.createIdentifier(ast.name!);
     }  visitWriteVarExpr(expr: o.WriteVarExpr, context: Context): TExpression {
      }  visitWriteKeyExpr(expr: o.WriteKeyExpr,     const target = this.factory.createElementAccess(
              this.factory.createAssignment(target, expr.value.visitExpression(this, exprContext)    return this.factory.createAssignment(target, expr.value.visitExpression(this, context));
  }  visitInvokeFunctionExpr(ast: o.Invok        this.factory.createCallExpression(
.vi        ast.sourceSpan);
  }  visitTaggedTemplateExpr(ast: o.TaggedTemplateExpr, context: Context): TExpression {
   : a   raw: e.rawText,
               ast.args.map(arg => arg.visitExpre    return this.setSourceMapRange(this.factory.createLiteral(ast.value), ast.sourceSpan);
  }       //    // The first message part (i.e. `ast.messageParts[0]`) is used to initialize `messageParts`
       const expressions: TExpression[] =      const placeholder = this.setSourceMapRange(
ess      elements.push(createTemplateElement(ast.serializeI18nTemplatePart(i + 1)));
           this.createTaggedTemplateExpression(localizeTag, {elements, expressions}), ast.sourceSpan);
  }     }  /**
               this.factory.createPropertyAccess(      cooked.push(this.factory.setSourceMapRange(
tortory.setSourceMapRange(this.factory.createLiteral(element.raw), element.range));
    }    // Generate the helper call in the form: `__makeTemplateObject([cooked], [raw]);`
           [this.factory.createArrayLiteral(cooked), this.factory.createArrayLiteral(raw)],
              /* pure */ false);    if (ast.value.name === null) {
      if (ast.value.moduleName === null) {
         return this.imports.generateName    // If a moduleName is specified, this is a normal import. If there's no module name, it's a
         // This is a normal import. Find the imported module.
           return this.factory.createIdentifier(symbol);
             let cond: TExpression = ast.condition.visitExpression(this, context);    // Ordinarily the ternary operator is right-associative. The following are equivalent:
       // However, occasionally Angular needs to produce a left-associative conditional, such as in
    // the case of a null-safe navigation production: `{{a?.b ? c : d}}`. This template produces
          //    //   `(a == null ? null : a.b) ?    // conditional expression is directly used as the condition of another.
       if (ast.condition instanceof o.ConditionalExpr) {
           cond = this.factory.createParenthesizedExpression(cond);
           ast.falseCase!.visitExpression(this, context));
  }  }        ast.name ?? null, ast.params.map(param => param.name),
       return this.factory.createArrowFunctionExpression(
        ast.params.map(param => param.name),
        Array.isArray(ast.body) ?
act  }  visitBinaryOperatorExpr(ast: o.Bi      throw new Error(`Unknown binary operator: ${o.BinaryOperator[ast.operator]}`);
           ast.lhs.visitExpression(this, context),
       return this.factory.createPropertyAccess(ast.receiver.visitExpression(this, context), ast.name);
  }     }        quoted: entry.quoted,      };
    });
    return this.setSourceMapRange(this.factory.createObjectLiteral(properties), ast.sourceSpan);
  }  visitCommaExpr(ast: o.CommaExpr, context: Context): never {
    throw new Error('Method not implemented.');
  }       if (!UNARY_OPERATORS.has(ast.operator)) {    }
     }  private visitStatements(statements: o.Statement[], context: Context): TStatement[] {
    return statements.map(stmt => stmt.visitStatement(this, context))
         T {
    r      TStatement {
     }
}/* */     return {cooked, raw, range: createRange(range)};
}/**
 *     return null;
  }    return null;
  }
  return {
        };