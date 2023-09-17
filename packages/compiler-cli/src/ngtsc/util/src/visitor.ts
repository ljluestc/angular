/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   */         VisitListEntryResult<ts.Statement, ts.ClassDeclar    const result = visitor(node);
    if (result.before !== undefined) {
      // Record that some nodes should be inserted before the given declaration. The declaration's
      // parent's _visit call is responsible for perfo    }
       return result.node;   * Visit types of nodes which   visitOtherNode<T extends ts.Node>(node: T): T {
    return node;
  }  /**
   * @internal  _visit<T extends ts.Node>(node: T, context: ts.TransformationContext): T {
   sitListEntryNode(    }    // If the visited node has a     if (visitedNode && (ts.isBlock(visitedNode) || ts.isSourceFile(visitedNode))) {
      visitedNode = this._maybeProcessStatements(visitedNode);
       // Shortcut - if every statement doesn't require nodes to be prepended or appended,
    // this is a no-op.      return node;
    }    // Build a new list of statements and patch it onto the clone.
    const newStatements: ts.Statement[] = [];
       if (this._after.has(stmt)) {    }      return ts.      return ts.factory.updateSourceFile(
  node, statementsArray, node.isDeclarationFile, node.referencedFiles,
  n