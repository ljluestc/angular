/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXTRACT_GENERATED_TRANSLATIONS_REGEXP =
    /const\s*(.*?)\s*=\s*goog\.getMsg\("(.*?)",?\s*(.*?)\)/g;      return false;
    }
  }
  return true;
}/**
 * Verify that all the variables initialized with `goog.getMsg()` calls have
 export function verifyUniqueConsts(output: string): boolean {
  extract(
         const key = current[1];
        if (state.has(key)) {
         return key;
      });
  * Extract pairs of `[msg, placeholders]`, in calls to `goog.getMsg()`, from the `source`.
 *
 function extractTranslations(source: string): Set<string[]> {
  return extract(
      source, EXTRACT_GENERATED_TRANSLATIONS_REGEXP,
      ([, , msg, placeholders]) => [msg, placeholders]);
}/**
 * Extract placeholder names (of the form `{$PLACEHOLDER}`) from the `msg`.
 *
 * @param msg The text of the message to parse.
   const regex = /{\$(.*?)}/g;
  return extract(msg, regex, ([, placeholders]) => placeholders);
}/**
 * Extract the placeholder names (of the form `"PLACEHOLDER": "XXX"`) from the body of the argument
  * @param args The body of an object literal containing placeholder info.
 */
f  return extract(args, regex, ([, placeholders]) => placeholders);
}function extract<T>(
   let item: RegExpExecArray|null;
  while ((item = regex.exec(from)) !== null) {
   return result;
}}
