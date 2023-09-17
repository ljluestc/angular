/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript'; * into a different location.
 * */
export function canEmitType(
    type: ts.TypeNode, canEmit: (type: ts.TypeReferenceNode) => boolean): boolean {  // If an unsupported type node is found at any position within the type, then the `INELIGIBLE`
  // constant is returned to stop the recursive walk as the type as a whole cannot be emitted in
  // that case. Otherwise, the result of visiting all child nodes determines the result. If no    }    // Emitting a type reference node in a different context requires that an import for the type
    // can be created. If a type reference node cannot be emitted, `INELIGIBLE` is returned to stop
    // the walk.
    if (ts.isTypeReferenceNode(no    } else {       if (!canEmit(type)) {
         // emitted.
    return type.typeArguments === undefined || type.typeArguments.every(canEmitTypeWorker);
  }
}/** * a different context. *  *
 * cl * type reference to `NgIterable` originates from an absolute module import so that it can be
 * emitted anywhere, using that same module import. The process of emitting translates the
 * `NgIterable` type reference to a type reference that is valid in the context in which it is
  * ``` * import * as i1 from '@angular/common';
 *
 *  * Notice how the type reference for `NgIterable` has been translated into a qualified name,
 * re    const typeReferenceTransformer: ts.TransformerFactory<ts.TypeNode> = context => {
      const visitNode = (node: ts.Node): ts.Node => {
        if (ts.isImportTypeNode(node)) {
treturn this.emitTypeReference(no// TypeScript would typically take the emit text for a literal expression from the source
// file itself. As the type node is being emitted into a different file, however,
// let clone: ts.LiteralExpression;if (ts.isStringLiteral(node)) {
  clo  clone = ts.factory.createNoSubstitutionTemplateLiteral(node.text, node.rawText);
} else if (ts.isRegularExpressionLiteral(node)) {
  clone = ts.factory.createRegularExpressionLiteral(node.text);
}        } else {
return ts.visitEachChild(node, visitNode, context);
        }
      };
      return node => ts.visitNode(node, visitNode, ts.isTypeNode);
     }  private emitTypeReference(type: ts.TypeReferenceNode): ts.TypeNode {
    // Determine the reference t    if (translatedType === null) {
         }    return ts.factory.updateTypeReferenceNode(type, translatedType.typeName, typeArguments);
  }
}
