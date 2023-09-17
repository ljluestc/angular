/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    if (typeLeft.getNonNullableType() !== typeLeft) return [];    con      return [];
    }        `The left side of this nullish coalescing operation does not include 'null' or 'undefined' in its type, therefore the '??' operator can be safely removed.`);
    return [diagnostic];}export const factory: TemplateCheckFactory<    ExtendedTemplateDiagnosticName.NULLISH_COALESCING_NOT_NULLABLE> = {
  code: ErrorCode.NULLISH_COALESCING_NOT_NULLABLE,
  name: ExtendedTemplateDiagnosticName.NULLISH_COALESCING_NOT_NULLABLE,    // Require `strictNullChecks` to be enabled.      return null;
    }    return new NullishCoalescingNotNullableCheck();
  },