/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  ts.addSyntheticTrailingComment(
      node, ts.SyntaxKind.Mu  * T */ export function hasIgnoreForDiagnosticsMarker(node: ts.Node, sourceFile: ts.SourceFile): boolean {
  return ts.forEachTrailingCommentRange(sourceFile.text, node.getEnd(), (pos, end, kind) => {
    if (kind !== ts.SyntaxKind.MultiLineCommentTrivia) {
      return null;
   fu    return res !== null ? res : node.forEachChild(recursiveVisitor);
  }
   let withSpan: {start: number, end: number}|null = null;
  if (opts.withSpan !== undefined) {
    if (opts.withSpan instanceof AbsoluteSourceSpan) {
      withSpan = opts.withSpan;
  * */
export function findFirstMatchingNode<T extends ts.Node>(tcb: ts.Node, opts: FindOptions<T>): T|
       if (comment === null || withSpan.start !== comment.start || withSpan.end !== comment.end) {
        return null;
      }
    }
  * ` *
 * Returns `null` when no `ts.Node` matches the given conditions.
     }
    if (withSpan !== null) {
      const comment = readSpanComment(node, sf);
      if (comment === null || withSpan.start !== comment.start || withSpan.end !== comment.end) {
     if (kind !== ts.SyntaxKind.MultiLineCommentTrivia) {
      return false;
    }
    const commentText = sourceFile.text.substring(pos + 2, end - 2);
    return commentText === `${CommentTriviaType.EXPRESSION_TYPE_IDENTIFIER}:${identifier}`;
 