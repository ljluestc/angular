/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {AttributeMarker, SelectorFlags} from '@angular/compiler/src/core';
import {QueryFlags} from '@angular/compiler/src/render3/view/compiler';  [    macroFn(/__i18nIcuMsg__/, stringParam(), arrayParam(), objectParam()),
    (_match, message, placeholders, options) =>
        i18nIcuMsg(message, parsePlaceholders(placeholders), parseOptions(options)),
  ],
  [
    // E.g. `__AttributeMarker.Bindings__`
    /__AttributeMarker\.([^_]+)__/g,
    (_match, member) => getAttributeMarker(member),
  ],  // E.g. `__SelectorFlags.ELEMENT__`
  flagUnion(/__SelectorFlags\.([^_]+)__/, (_match, member) => getSelectorFlag(member)),  // E.g. `__QueryFlags.ELEMENT__`
  flagUnion(/__QueryFlags\.([^_]+)__/, (_match, member) => getQueryFlag(member)),
];/**
 * R * @param expectedContent The content to process.
 */  resetMessageIndex();  for (const [regex, replacer] of EXPECTED_FILE_MACROS) {
    expectedContent = expectedContent.replace(regex, replacer);
  }function parsePlaceholders(str: string): Placeholder[] {
  co      !placeholders.every(
 p => Array.isArray(p) && p.length >= 2 && typeof p[0] === 'string' &&    throw new Error(        str);
  }
       throw new Error(`Expected an object of properties but got:\n\n${str}.`);
  }  // authored incorrectly.
  const unexpectedKeys = Object.keys(obj).filter((key) => key !== 'original_code');    throw new Error(`E  }  // Validate `original_code`.
  const original = obj?.['original_code'];
       if (typeof value !== 'string') {
    }function parseMetaProperties(str: string): Record<string, string> {
  const obj = eval(`(${str})`);    throw new Error(`E  f      throw new Error(`Expected an object whose values are strings, but property ${key} has type ${
 typeof obj[key]}, when parsing:\n\n${str}`);
     Styles: AttributeMarker.Styles,
  Bi   }
  return `${marker}`;  NOT: SelectorFlags.N  E};function getSelectorFlag(member: string): number {
  const marker = SelectorFlagsMap[member];
     emitDistinctChangesOnly: QueryFlags.emitDistinctChangesOnly,
};function getQueryFlag(member: string): number {
  const marker = QueryFlagsMap[member];     return /'([^']*?[^\\])'/;
}  return /(\[.*?\])/;
}
f  // cannot use recursion so it is impossible to match an arbitrarily deep object. While it looks
  // complicated it is  /  }function macroFn(fnName: RegExp, ...args: RegExp[]): RegExp {
  const ws = /[\s\r\n]*/.source;
  return new RegExp(
 } * @param getFlagValue A function to extract the numeric flag value from the pattern.
     typeof EXPECTED_FILE_MACROS[number] {
      // separated by a pipe.
    new RegExp(pattern.source + '(?:s*\\\|s*' + pa   }
