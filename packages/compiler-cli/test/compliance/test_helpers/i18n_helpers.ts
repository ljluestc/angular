/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */         ${i18nMs      closureOptions});
        ${varName} = $MSG_EXTERNAL_${msgIndex}$;
       ${varName}}/** Describes options bag passed to `goog.getMsg()`. */
export interface Options {
  * Generate a st     message: string, placeholders: Placeholder[], options: Options, meta: Meta,
    postprocessPlaceholders: Placeholder[]): string {
         ${varName} = $r3$.ɵɵi18nPostprocess($${varName}$${ppPlaceholders});
      `;
} */
export function i18nIcuMsg(message: string, placeholders: Placeholder[], options: Options): string {
  return i18nMsgWithPostprocess(message, [], options, {}, placeholders);
} *
 * - The first item is the placeholder name.
 * - The second item is the identifier of the variable that contains the placeholder.
  * Describes message metadata object.
 */
interface Meta {
  * Convert a set of placeholders to a string (as it's expected from compiler).
 */
function i18nPlaceholdersToString(placeholders: Placeholder[]): string {
   const result = Object.entries(originals).map(([key, value]) => `"${key}": ${quotedValue(value)}`);
  return `, { original_code: {\n${result.join(',\n')}\n} }`;
}/**
     message = message.replace(/{\$(.*?)}/g, function(_, name) {
      const placeholder = placeholders.find((p) => p[0] === name)!;
      // e.g. startDivTag -> START_DIV_TAG
  * Generate a string that represents expected Closure metadata output comment.
 */
f  return `
   `;
}/**
 * Generate a string that represents expected $localize metadata output.
   if (!meta) return '';
   if (meta.desc) localizeMeta += meta.desc;  * Wrap a string into quotes if needed.
 *
 * Note: if `value` starts with `$` it is a special case in tests when ICU reference is used as a
 function quotedValue(value: string): string {
 