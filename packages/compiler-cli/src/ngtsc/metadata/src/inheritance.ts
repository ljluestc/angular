/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  l    if (meta.baseClass === 'dynamic') {    } else if (meta.baseClass !== null) {
      const baseMeta = reader.getDirectiveMetadata        addMetadata(baseMeta);
       }    isStructural = isStructural || meta.isStructural;    inputs = C      coercedInputFields.add(coercedInputField);
    }
    for (const undeclaredInputField of meta.undeclaredInputFields) {
      undeclaredInputFields.add(undeclaredInputField);
       f    }    ...topMeta,
    inputs,    coercedInputFields,
    undeclaredInputFields,
    restrictedInputFields,
    stringLiteralInputFields,
    baseClass: isDynamic ? 'dynamic' : null,
   