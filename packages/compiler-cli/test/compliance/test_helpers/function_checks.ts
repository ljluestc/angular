/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  const allTemplateFunctionsNames = (output.match(/function ([^\s(]+)/g) || [])
 .map(match => match.slice(9))
 .filter(name => !pattern || pattern.test(name));
  const uniqueTemplateFunctionNames = new Set(allTemplateFunctionsNames);
  const lengthMatches = allTemplateFunctionsNames.length === uniqueTemplateFunctionNames.size;
  const expectedCountMatches =
      (expectedCount == null ? allTemplateFunctionsNames.length > 0 :
 allTemplateFunctionsNames.length === expectedCount);
  return lengthMatches && expectedCountMatches &&
      allTemplateFunctionsNames.every(name => uniqueTemplateFunctionNames.has(name));
}
