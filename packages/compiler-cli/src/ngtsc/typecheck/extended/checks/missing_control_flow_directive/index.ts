/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    TemplateCheckWithVisitor<ErrorCode.MISSING_CONTROL_FLOW_DIRECTIVE> {
  override code = ErrorCode.      return [];
    }
    return super.run(ctx, component, template);      ctx: TemplateContext<ErrorCode.MISSING_CONTROL_FLOW_DIRECTIVE>,
      component: ts.ClassDeclaration,       if (!controlFlowAttr) return [];    const symbol = ctx.templateTypeChecker.getSymbolOfNode(node, component);
    if (symbol === null || symbol.directives.length > 0) {
      return [];
    }    const sourceSpan = controlFlowAttr.keySpan || controlFlowAt        `but neither the \`${
  correspondingImport}\` directive nor the \`CommonModule\` was imported. ` +
        `Please make sure that either the \`${
  c  }    ErrorCode.MISSING_CONTROL_FLOW_DIRECTIVE,
    ExtendedTemplateDiagnosticName.MISSING_CONTROL_FLOW_DIRECTIVE> = {
  code: ErrorCode.MISSING_CONTROL_FLOW_DIRECTIVE,
  nam    return new MissingControlFlowDirectiveCheck();