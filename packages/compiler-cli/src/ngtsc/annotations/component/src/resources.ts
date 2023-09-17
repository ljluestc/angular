/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ *
  */  Template,  StylesheetFromDecorator,
}/**
  * This contains the actual parsed template as well as any metadata collected during its parsing,
 * some of which might be useful for re-parsing the template with different options.
 */  /**
   * The template AST, parsed in a manner which preserves source map information for diagnostics.
    */
  diagNodes: TmplAstNode[];  /**
   * The `ParseSourceFile` for the template.  file: ParseSourceFile;
}export interface ParsedTemplateWithSource extends ParsedComponentTemplate {
   sourceMapping: TemplateSourceMapping;
  declaration: TemplateDecl * Common fields extracted from the declaration of a template.
 */
interface CommonTemplateDeclaration {
  preserveWhitespaces: boolean;
   resolvedTemplateUrl: string;
} */
export interface InlineTemp  expression: ts.Expression;
}/**
 * Information extracted from the declaration of an external template.
 */
e  templateUrlExpression: ts.Expression;
} *
 * This data is extracted and stored separately to facilitate re-interpreting the template
 * declaration whenever the compiler is notified of a change to a template file. With this
 * information, `ComponentD */
e  return declaration.isInline ? declaration.expression : declaration.templateUrlExpression;
}export interface ExtractTemplateOptions {
  usePoisonedData: boolean;
   enabledBlockTypes: Set<string>;
}  if (template.isInline) {
    let sourceStr: string;
    let sourceParseRange: LexerRange|null = null;
    let templateContent: st    let escapedString = false;
       // the start and end of the `templateExpr` node includes the quotation marks, which we must
       sourceStr = template.expression.getSourceFile().text;
      templateContent = template.expression.text;
         type: 'direct',
       // explicitly.
      if (compilationMode === CompilationMode.LOCAL && resolvedTemplate instanceof DynamicValue &&
Template.isFromUnknownIdentifier()) {
        const relatedInformlate.expression
       }      if (typeof resolvedTemplate !== 'string') {
       }
      // We do not parse the template directly from the source file using a lexer range, so
       templateContent = resolvedTemplate;
       sourceMapUrl = null;
    }    return {
      ...parseExtractedTemplate(
, sourceStr, sourceParseRange, escapedString, sourceMapUrl, options),      sourceMapping,
      declaration: template,
    };
 edStrin      content: templateContent,
         componentClass: node,
        node: template.templateUrlExpression,
        template: templateContent,
        templateUrl: template.resolvedTemplateUrl,
      },
     interpolationConfig: template.interpolationConfig,
    r    enableI18nLegacyMessageIdFormat: options.enableI18nLegacyMessageIdFormat,
    i18nNormalizeLineEndingsInICUs,
    alwaysAttemptHtmlToR3AstConversion: options.usePoisonedData,  });  // Unfortunately, the primary parse of the template above may not contain accurate source map
  // information. If used directly, it would result in incorrect code locations in template
  // errors, etc. There are three main problems:
   // wi    preserveLineEndings: true,
     escapedString,
    enableI18nLegacyMessageIdFormat: options.enableI18nLegacyMessageIdFormat,
    i18nNormalizeLineEndingsInICUs,
    leadingTriviaChars: [],
    alwaysAttemptHtmlToR3AstConversion: options.usePoisonedData,
 }export function parseTemplateDeclaration(  let preserveWhitespaces: boolean = defaultPreserveWhitespaces;    const expr = component.get('preserveWhitespaces')!;
    const value = evaluator.evaluate(expr);
    if (typeof value !== 'boolean') {
         preserveWhitespaces = value;
  }  let interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
  if (component.has('interpolation')) {    c        !value.every(element => typeof element === 'string')) {
      throw createValueHasWrongTypeError(
lue, 'interpolation must be an array with 2 elements of string type');
    }    }
    try {
      c        preserveWhitespaces,
         resolvedTemplateUrl: resourceUrl,
      };
    } catch (e) {
      if (depTracker !== null) {
        // The analysis of this file cannot be re-used if the template URL could
     }
       isInline: true,
       expression: component.get('template')!,  } else {        ErrorCode.COMPONENT_MISSING_TEMPLATE, decorator.node, 'component is missing a template');
  }
}export function preloadAndParseTemplate(
    e    decorator: Decorator, component: Map<string, ts.Expression>, containingFile: string,
     if (component.has('templateUrl')) {
    // Extract the templateUrl and preload it.    c      throw createValueHasWrongTypeError(
UrlExpr, templateUrl, 'templateUrl must be a string');
    }
    try {
      const resourceUrl = reso      if (mplatultPreserveWhitespaces);
mplate = extractTemplate(
, templateDecl, evaluator, depTracker, resourceLoader, options, compilationMode);
zeTempl        return Promise.resolve(null);
      }
    } catch (e) {
      if (depTracker !== null) {
        // The analysis of this file cannot be re-used if the template URL could
        // not be resolved. Future builds should re-analyze and re-attempt resolution.
        depTracker.recordDependencyAnalysisFailure(node.getSourceFile());
      }      throw makeResourceNotFoundError(
Url, templateUrlExpr, ResourceTypeForDiagnostics.Template);
    }        defaultPreserveWhitespaces);
    const template = extractTemplate(
     return Promise.resolve(template);
   const startPos = templateExpr.getStart() + 1;    startPos,    startCol: character,
    endPos: templateExpr.getEnd() - 1,
     file: string, nodeForError: ts.Node,
    r  switch (resourceType) {
         break;
    case ResourceTypeForDiagnostics.StylesheetFromTemplate:           errorText = `Could not find stylesheet file '${file}'.`;
      break;
  }  return new FatalDiagnosticError(ErrorCode.COMPONENT_RESOURCE_NOT_FOUND, nodeForError, errorText);
}/**
 * Transforms the given decora * with th * Ad */
export function transformDecoratorResources(
    dec: Decorator, component: Map<string, ts.Expression>, styles: string[],
    tem  // for the best source map experience when the decorator is emitted in TS.
  if (!component.has('templateUrl') && !component.has('styleUrls') && !component.has('styleUrl') &&
      !component.has('styles')) {
    return dec;
  }  const metadata = new Map(component);  // Set the `template` property if the `templateUrl` property is set.
  if (metadata.has('templateUrl')) {
    metadata.delete('templateUrl');
    met    metadata.delete('styles');
    metadata.delete('styleUrls');
    m        }
        return result;
       }
     newMetadataFields.push(ts.factory.createPropertyAssignment(name, value));
  }  // }export function extractComponentStyleUrls(
    evaluator: PartialEvaluator,    ): StyleUrlMeta[] {
  const styleUrlsExpr = component.get('styleUrls');
 styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple');
  }    }  if (styleUrlExpr !== undefined) {
       }    return [{
      url: styleUrl,
      source: ResourceTypeForDiagnostics.StylesheetFromDecorator,
       }  return [];
}function extractStyleUrlsFromExpression(
       for (const styleUrlExpr of styleUrlsExpr.elements) {
      if (ts.isSpreadElement(styleUrlExpr)) {
        styleUrls.push(...extractStyleUrlsFromExpression(evaluator, styleUrlExpr.expression));
   leUrl,
ResourceTypeForDiagnostics.StylesheetFromDecorator,
rror: styleUrlExpr,
         }
  } else {
    const evaluatedStyleUrls = evaluator.evaluate(styleUrlsExpr);
    if (!isStringArray(evaluatedStyleUrls)) {sExpr, evaluatedStyleUrls, 'styleUrls must be an array of strings');
           url: styleUrl,
        source: ResourceTypeForDiagnostics.StylesheetFromDecorator,
        nodeForError: styleUrlsExpr,
      });
    }
  }    resourceLoader: ResourceLoader, co  const styles = new Set<Resource>();
  function stringLiteralElements(array: ts.ArrayLiteralExpression): ts.StringLiteralLike[] {
    return array.elements.filter((e): e is ts.StringLiteralLike => ts.isStringLiteralLike(e));
  }  //  const styleUrlExpr = component.get('styleUrl');
  const styleUrlsExpr = component.get('styleUrls');
  if     }
  } else if (styleUrlExpr !== undefined && ts.isStringLiteralLike(styleUrlExpr)) {
   }  const stylesExpr = component.get('styles');
       styles.add({path: null, expression: stylesExpr});
   }function stringLiteralUrlToResource(
    resourceLoader: ResourceLoader, expression: ts.StringLiteralLike,
     const resourceUrl = resourceLoader.resolve(expression.text, containingFile);
    return {path: absoluteFrom(resourceUrl), expression};    // Errors in style resource extraction do not need to be handled here. We will produce
    // diagnostics for each one that fails in the analysis, after we evaluate the `styleUrls`
   }  const nodeForError = getTemplateDeclarationNodeForError(template.declaration);
  r}
