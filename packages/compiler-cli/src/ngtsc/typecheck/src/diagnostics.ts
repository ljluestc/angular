/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {AbsoluteSourceSpan, ParseSourceSpan} from '@angular/compiler';
import ts from 'typescript'; export function wrapForTypeChecker(expr: ts.Expression): ts.Expression {
  return ts.factory.createParenthesizedExpression(expr * Adds a synthetic comment to the expression that represents the parse span of the provided node.
 export function addParseSpanInfo(node: ts.Node, span: AbsoluteSourceSpan|ParseSourceSpan): void {
  let commentText: string;
   } else {
    commentText = `${span.start.offset},${span.end.offset}`;
       node, ts.SyntaxKind.MultiLineCommentTrivia, commentText, /* hasTrailingNewLine */ false);
}/**
  */
export function addTemplateId(tcb: ts.FunctionDeclaration, id: TemplateId): void {
  * Determines if the diagnostic should be reported. Some diagnostics are produced because of the
  */
e  if (code === 6133 /* $var is declared but its value is never read. */) {
    return false;
   } else if (code === 7006 /* Parameter '$event' implicitly has an 'any' type. */) {
   return true;
} * location of origin, based on the comments that are emitted in the TCB code.
 *
 * If the diagnostic could not be translated, `null` is returned to indicate that the diagnostic
  */
export function translateDiagnostic(
     return null;
     return null;
  }  const {sourceLocation, templateSourceMapping, span} = fullMapping;
  return makeTemplateDiagnostic(
 }
