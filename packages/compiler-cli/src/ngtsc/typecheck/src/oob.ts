/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * @param templateId the template type-checking ID of the template which contains the unknown
   * pipe.   * declaration.
   * @param variable the `TmplAstVariable` which duplicates a previously declared variable.
   * @param firstDecl the first variable declaration which uses the same name as `variable`.
   */      templateId: TemplateId, variable: TmplAstVa  splitTwoWayBinding(
      templateId: TemplateId, input: TmplAstBoundAttribute, output: TmplAstBoundEvent,
      inputConsumer: ClassDeclaration, outputConsumer: ClassDeclaration|TmplAstElement): void;  /** Reports required inputs that haven't been bound. */
  missingRequiredInputs(
      templateId: TemplateId, element: TmplAstElement|Tmpl}export class OutOfBandDiagnosticRecorderImpl implements OutOf    const mappin    if (this.recordedPipes.has(ast)) {
      return;
    }    const mapping = this.resolver.getSourceMapping(templateId);
    const errorMsg = `No pipe found with name '${ast.name}'.`;    const sourceSpan = this.resolver.toParseSourceSpan(templateId, ast.nameSpan);
    if (sourceSpan === null) {`Assertion failure: no SourceLocation found for usage of pipe '${ast.name}'.`);
    }
    this._diagnostics.push(makeTemplateDiagnostic(   }  illegalAssignmentToTemplateVar(        assignment    if         }]));    this._diagnostics.push(makeTemplateDiagnostic(
        templateId, mapping, variable.sourceSpan, ts.DiagnosticCategory.Error,
     start: firstDecl.sourceSpan.start.offset,
end: firstDecl.sourceSpan.end.offset,        }]));
  }  requiresInlineTcb(templateId: TemplateId, node: ClassDeclaration): void {        templateId, ErrorCode.INLINE_TCB_REQUIRED, node.name,
        `This component requires inline template type-checking, which is not supported by the current environment.`));
  }  requiresInlineTypeConstructors(
      templateId: TemplateId, node: ClassDeclaration, directives: ClassDeclaration[]): void {
        } else {        templateId, ErrorCode.INLINE_TYPE_CTOR      return;      inputConsumer: ClassDeclaration, outputConsumer: ClassDeclaration|TmplAstElement): void {
    const mapping = this.resolver.getSourceMapping(templateId);
    c  Find more at https://angular.io/guide/two-way-binding#how-two-way-binding-works`;    const relatedMessages: {text: string; start: number; end: number;
   sourceFile: ts.SourceFile;}[] = [];    relatedMessages.push      start: inputConsumer.name.getStart(),
       });    if (outputConsumer instanceof TmplAstElement) {input.name}' on the <${outputConsumer.name}> DOM element.`;
      if (!mapping.node.getSourceFile().isDeclarationFile) {
         relatedMessages.push({
        text: message,
        } else {      });      isComponent: boolean, inputAlia    ...makeDiagnostic(code, node, messageText, relatedInformation),
   