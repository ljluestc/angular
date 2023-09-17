/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    return value.debugName ?    }  } else if (value instanceof DynamicValue) {
    return '(not statically analyzable)';
  } else if (value instanceof KnownFn) {  } else {
    return 'unknown';
  }  if (/^[a-z0-9_]+$/i.test(key)) {
    return key;
  } else {
    return `'${key.replace(/'/g, '\\\'')}'`;
  }
}/**
 * Creates an array of related information diagnostics for a `DynamicValue` that describe the trace
  * @param node The node for which a `ts.Diagnostic` is to be created with the trace.
 * @param value The dynamic value for which a trace should be created.
 */
export function traceDynamicValue(
    node: ts.Node, value: DynamicValue): ts.DiagnosticRelatedInformation[] {
  return value.accept(new TraceDynamicValueVisitor(node));
}    const trace = value.reason.accept(this);
    if (this.shouldTrace(value.node)) {
       trace.unshift(info);
    }
    return trace;
  }  visitSyntheticInput(value: DynamicValue<SyntheticValue<unknown>>):
      ts.DiagnosticRelatedInformation[] {
    return [makeRelatedInformation(value.node, 'Unable to evaluate this expression further.')];
         value.node,
        `A value for ${
p      ts.DiagnosticRelatedInformation[] {
    return [
      makeRelatedInformation(
de,      makeRelatedInformation(value.reason.node, 'Function is declared here.')
    ];
  }  visitInvalidExpressionType(value: DynamicValue): ts.DiagnosticRelatedInformation[] {
    */
  private shouldTrace(node: ts.Node): boolean {
     }    const container = getContainerNode(node);
    if (container === this.currentContainerNode) {
      // The node is part of the same container as the previous trace entry, so this dynamic value
       }    this.currentContainerNode = container;
    return true;
  } * Determines the closest parent node that is to be considered as container, which is used to reduce
         return currentNode;
    }    currentNode = currentNode.parent;
 