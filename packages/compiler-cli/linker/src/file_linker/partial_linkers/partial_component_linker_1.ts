/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ChangeDetectionStrategy, compileComponentFromMetadata, ConstantPool, DeclarationListEmitMode, DEFAULT_INTERPOLATION_CONFIG, ForwardRefHandling, InterpolationConfig, makeBindingParser, outputAst as o, parseTemplate, R3ComponentMetadata, R3DeclareComponentMetadata, R3DeclareDirectiveDependencyMetadata, R3DeclarePipeDependencyMetadata, R3DirectiveDependencyMetadata, R3PartialDeclaration, R3TemplateDependencyKind, R3TemplateDependencyMetadata, ViewEncapsulation} from '@angular/compiler';    inputs: directiveExpr.has('inputs') ?        []        directiveExpr.getArray('outputs').map(input => input.getString()) :
        [],
    exportAs: directiveExpr.has('exportAs        nu}/**
 * A `PartialLinker` that is designed to process `ɵɵngDeclareComponent()` call expressions.
 */    PartialLinker<TExpression> {       constantPool: ConstantPool,
      metaObj: AstObject<R3PartialDeclaration, TExpression>): LinkedDefinition {
    const meta = this.toR3ComponentMeta(m  }  /**
   * This function derives the `R3ComponentMetadata` from the provided AST object.
     const templateSource = metaObj.getValue('template');
    const isInline = metaObj.has('isInline') ? metaObj.getBoolean('isInline') : false;
    const templateInfo = this.getTemplateInfo(templateSource, isInline);    const template = parseTemplate(templateInfo.code, templateInfo.sourceUrl, {
      escapedString: templateInfo.isEscaped,
         enableI18nLegacyMessageIdFormat: false,
      preserveWhitespaces:
h    if (template.errors !== null) {
      const errors = template.errors.map(err => err.toString()).join('\n');
      throw new FatalLinkerError(    }    let declarationListEmitMode = DeclarationListEmitMode.Direct;    const extractDeclarationTypeExpr =
        (type: AstValue<o.Expression|(() => o.Expression), TExpression>) => {
xprationListEmitMode = DeclarationListEmitMode.Closure;xpression;
        };    let declarations: R3TemplateDependencyMetadata[] = [];    // There are two ways that declarations (directives/pipes) can be represented in declare
       declarations.push(...metaObj.getArray('components').map(dir => {
        const dirExpr = dir.getObject();
        const typeExpr = extractDeclarationTypeExpr(dirExpr.getValue('ty         if (metaObj.has('directives')) {        const dirExpr = dir.getObject();
        const typeExpr = extractDeclarationTypeExpr(dirExpr.getValue('type'));
       }      const pipes = metaObj.getObject('pipes').toMap(pipe => pipe);
      for         declarations.push({        });
 rective':
mponent':
ations.push(makeDirectiveMetadata(depObj, typeExpr));pe': depO: R3TemplateDependencyKind.Pipe,: typeExpr,module':
ations.push({
: Rue;      }
    }    r      viewProviders: metaObj.has('viewProviders') ? metaOb      },
      declarationListEmitMode,
           deferBlocks: new Ma      interpolation,ngeDetectionStrategy(metaObj.getValue('changeDetection')) :
tectionStrategy.Default,
      animations: metaObj.has('animations') ? metaObj.getOpaque('animations') : null,
      relativeContextFilePath: this.sourceUrl,      declarations,  }     */      TemplateInfo {
    const range = templateNode.getRange();    if (!isInline) {
         const externalTemplate = this.tryExternalTempl        return externalTemplate;
         /  }  private tryExternalTemplate(range: Range): TemplateIn    }    const pos = sourceFile.getOriginalLocation(range.startLine, range.startCol);
    // Only interested if the original location is in an "external" template file:
    /        pos.line !== 0 || pos.column !== 0) {
      return null;      code: templateContents,      range: {startPos: 0, startLine: 0, startCol: 0, endPos: templateContents.length},
      isEscaped: false,  }  private templateFromPartialCode(
      templateNode: AstValue<unknown, TExpression>,
      {startPos, endPos, startLine, startCol}: Range): TemplateInfo {
    if (!/["'`]/.test(this.code[startPos]) || this.coNode.expression,.co        sourceUrl: this.sourceUrl,      isEscaped: true,
    };}interface TemplateInfo {
  code: string;
  sourceUrl: string;
  range: Range;}/**
 * Ex  if   }  if (values.length !== 2) {  }}/**
 * Determines the `ViewEncapsulation` mode from the AST value's symbol name.
 */  if (symbolName === null) {
    throw new FatalLinkerError(  }}/**
 * Determines the `ChangeDetectionStrategy` from the AST value's symbol name.fun    ChangeDetectionStrategy {
  const symbolName = changeDetectionStrategy.getSymbolName();
  if (symbolName === null) {
    throw new FatalLinkerError(        'Expected change detection strategy to have a symbol name');
  }
  c    }}
