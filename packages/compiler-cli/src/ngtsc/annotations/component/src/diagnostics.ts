/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  // won't catch cases like   if (selector.includes('.') || (selector.includes('[') && selector.includes(']'))) {
    return null;
  }  if (!(/^[a-z]/.test(selector))) {
    return 'Selector of a ShadowDom-encapsulated component must start with a lower case letter.';
  }  if (/[A-Z]/.test(selector)) {
    return 'Selector of a ShadowDom-encapsulated component must all be in lower case.';
  }  }  return null;
}
