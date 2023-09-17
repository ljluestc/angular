/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * @param schemas any active schemas for the template, which might affect the validity of the
   * property. * Checks non-  }  constructor(private resolver: TemplateSourceResolver) {}  checkElement(
      id: TemplateId, element: TmplAstElement, schemas: SchemaMetadata[],
      hostIsStandalone: boolean): void {hostIsStandalone ? 'included in the \'@Component.i      if (name.indexOf('-') > -1) {
        errorMsg += `2. If '${name}' i  `2. To allow any element add 'NO_ERRORS_SCHEMA' to the ${schemas} of this component.`;
   ngErrorCode(ErrorCode.SCHEMA_INVALID_ELEMENT), errorMsg);    }
  }  checkProperty(
      id: TemplateId, element: TmplAstElement, name: string, span: ParseSourceSpan,
      schemas: SchemaMetadata[], hostIsStandalone: boolean      const mapping = this.resolver.get of this component.`;
      } else if (element.name.indexOf('-') > -1) {
        errorMsg +=
  `\n1. If '${element.name}' is an Angular component and it has '${
 name}' input, then verify that it is ${
 hostIsStandalone ? 'included in the \'@Component.  `\n2. If '${
 element.name}' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the ${
 scid, mapping, span, ts.DiagnosticCategory.Error,      this._diagnostics.push(diag);
   }
