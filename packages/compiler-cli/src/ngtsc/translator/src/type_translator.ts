/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      throw new Error( essionType with type arguments cannot have multiple levels of type arguments`);
     }  visitArrayType(type:  }  visitMapType(type: o.MapType, context: Context): ts.TypeLiteralNode {         const typeArgs = type.valueType !== null ?
        this.translateType(type.valueType, conte   }  visitTransplantedType(ast: o.TransplantedType<ts.Node>, context: any) {
          }
    return ts.factory.createTypeQueryNode(ts.factory.createIdentifier(ast.name));
  }  }  visitWriteKeyExpr(expr: o.WriteKeyExpr, context: Context): never {  }    }  visitInvokeFunctionExpr(ast: o.InvokeFunctionExpr, context: Context): never {
    throw new Error('Method not implemented.');
  }  visitTaggedTemplateExpr(ast: o.TaggedTemplateExpr, context: Context): never {
        if (ast.value === null) {
          }
  }  visitLocalizedString(ast: o.LocalizedString, context: Context): never {
              this.imports.generateNamedImport(ast.value.moduleName, ast.value.na       }  }  visitDynamicImportExpr(ast: o.outputAst.DynamicImportExpr, context: any) {
    throw new Error('Method not implemented.');
  }  }  visitFunctionExpr(ast: o.FunctionExpr, context: Context) {
    throw new Error('Method not implemented.');
  }  }  visitUnaryOperatorExpr(ast: o.UnaryOperatorExpr, context: Context) {
       throw new Error('Method not implemented.');
  }   iers */ undefined,
*/ */ type);
          } else if (ts.isTypeNode(node)) {
      return node;      return ts.factory.createLiteralTypeNode(node);
               const typeNode = type.visitType(this, context);
    if (!ts.isTypeNode(typeNode)) {
     }    if (!ts.isTypeNode(typeNode)) {
      throw new Error(
ess      */
  pFlags.AllowRelativeDtsImports);    assertSuccessfulReferenceEmit(emittedType, node, 'type');    const result = emittedType.expression.visitExpression(this, context);    if (!ts.isTypeReferenceNode(result)) {
              if (ts.isTypeReferenceNode(node) && ts.isIdentifier(node.typeName)) {
ans typeName: ts.Identifier;
ont