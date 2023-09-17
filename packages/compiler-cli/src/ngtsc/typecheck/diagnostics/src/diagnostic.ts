/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */length: relatedMessage.end - relatedMessage.start,        });
      }    // For direct mappings, the error is shown inline as ngtsc was able to pinpoint a string
    // constant within the `@Component` decorator for the template. This allows us to map the error    return {
      source: 'ngtsc',
      code,
      category,
      messageText,
      file: mapping.node.getSourceFile(),
      componentFile: mapping.node.getSourceFile(),
      templateId,
      start: span.start.offset,
      length: span.end.offset - span.start.offset,
      relatedInformation,
    };
  } else if (mapping.type === 'indirect' || mapping.type === 'external') {
    // For indirect mappings (template was declared inline, but ngtsc couldn't map it directly
    // to a string constant in the decorator), the component's file name is given with a suffix
    // indicating it's not the TS file being displayed, but a template.
    // For external temoplates, the HTML filename is used.
    const componentSf = mapping.componentClass.getSourceFile();
    const componentName = mapping.componentClass.name.text;
    const fileName = mapping.type === 'indirect' ?
        `${componentSf.fileName} (${componentName} template)` :
        mapping.templateUrl;    let relatedInformation: ts.DiagnosticRelatedInformation[] = [];
    if (relatedMessages !== undefined) {
      for (const relatedMessage of relatedMessages) {
        relatedInformation.push({
category: ts.DiagnosticCategory.Message,
code: 0,
file: relatedMessage.sourceFlength: relatedMessage.end - relatedMessage.start,
messageText: relatedMessage.text,
        });
      }
    }    let sf: ts.SourceFile;
    try {
      sf = getParsedTemplate      const failureChain = makeDiagnosticChain(
`Failed to report an error in '${fileName}' at ${span.start.line + 1}:${
    span.start.col + 1}`,
[
  mak      return {
        source: 'ngtsc',
        category,        messageText: addDiagnosticChain(messageText, [failureChain]),
        file: componentSf,
        componentFile: componentSf,
        templateId,
             start: mapping.node.getStart(),
        length: mapping.node.getEnd() - mapping.node.getStart(),
        relatedInformation,    }    relatedInformation.push({
      category: ts.DiagnosticCategory.Message,
      code: 0,
      file: componentSf,
           start: mapping.node.getStart(),
      length: mapping.node.getEnd() - mapping.node.getStart(),
      messageText: `Error oc           code,
      messageText,
      file: sf,
      componentFile: componentSf,
           length: span.end.offset - span.start.offset,
      // Show a secondary message indicating the component whose template contains the error.
      relatedInformation,
    };    throw new Error(`Unexpected source mapping type: ${(mapping as {type: string}).type}`);
  }    (ExternalTemplateSourceMapping|IndirectTemplateSourceMapping)&{
  [TemplateSourceFile]?: ts.SourceFile;
};function getParsedTemplateSourceFile(
    fileName: string, mapping: TemplateSourceMappingWithSourceFile): ts.SourceFile {
  if   }  return mapping[TemplateSourceFile];
}let parseTemplateAsSourceFileForTest: typeof parseTemplateAsSourceFile|null = null;export function setParseTemplateAsSourceFileForTest(fn: typeof parseTemplateAsSourceFile): void {
  parseTemplateAsSourceFileForTest = fn;
}export}function parseTemplateAsSourceFile(fileName: string, template: string): ts.SourceFile {
  if }export function isTemplateDiagnostic(diagnostic: ts.Diagnostic): diagnostic is TemplateDiagnostic {
  return diagnostic.hasOwnProperty('componentFile') &&
  