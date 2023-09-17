/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   Code extends ErrorCode,
  Name extends ExtendedTemple  abstract code: Code;  /**
       template: TmplAstNode[]): NgTemplateDiagnostic<Code>[] {
    const visitor = new TemplateVisitor<Code>(ctx, component, this);  }  /**   * method to implement the check and retu      node: TmplAstNode|AST): NgTemplateDiagnostic<Code>[];
}/**
 class TemplateVisitor<  diagnostics: NgTemplateDiagnostic<Code>[] = [];  constructor(
     this.diagnostics.push(...this.check.visitNode(this.ctx, this.component, node));
    node.visit(this);
  }  visitAllNodes(nodes: TmplAstNode[]) {
       }    if (ast instanceof ASTWithSource) {  }  visitElement(element: TmplAstElement) {
     this.visitAllNodes(element.outputs);
   }  visitTemplate(tem    if (template.tagName === 'ng-template') {      // generated for a structural directive (like `<div *ngIf></div>`). These nodes
     this.visitAllNodes(template.references);
    this.visitAllNodes(template.children);
  }  visitVariable(variable: TmplAstVariable): void {}
  v  visitBoundAttribute(attribute: TmplAstBoundAttribute): void {
     visitBoundEvent(attribute: TmplAstBoundEvent): void {
    this.visitAst(attribute.handler);     visitIcu(icu: TmplAstIcu): void {}  visitDeferredBlock(deferred: TmplAstDeferredBlock): void {
     if (trigger instanceof TmplAstBoundDeferredTrigger) {
   }  }  visitDeferredB  }  visitDeferredBlockLoading(block: TmplAstDefe  }  visitSwitchBlock(block: TmplAstSwitchBlock): void {
    this.visitAst(block.expression);
    this.visitAllNodes(block.c     }  visitForLoopBlock(block: TmplAstForLoopBlock): void {
    this.visitAst(block.expression);
    this.visitAllNodes(block.children);
       this.visitAllNodes(block.children);
  }  }  visitIfBlockBranch(block: TmplAstIfBlockBranch): void {
     }  getDiagnostics(template: TmplAstNode[]): NgTemplateDiagnostic<Code>[] {
    this.diagnostics = [];
   }
}