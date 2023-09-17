/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {escapeRegExp} from '@angular/compiler/src/util';const TOKEN = new RegExp(
    `\\s*((${COMMENT_        ELLIPSIS})\\s*`,
    'y');type Piece = string|RegExp;const SKIP = /(?:.|\n|\r)*/;const ERROR_CONTEXT_WIDTH = 30;
// Transform the expe  // TOKEN.lastIndex is stateful so we cache the `lastIndex` and restore it at the end of the call.
  const l  let tokenizedTextEnd = 0;  const pieces: Piece[] = []    const [, token] = match;
    if (token === 'ID    } else if (token === ELLIPSIS) {
      pie        // Store the token         TOKEN.lastIndex = to        pieces.push(...tokenizeBackTickString(token));
      }      updateCommentState(token);
      pie    // The new token that c    const from = tokenizedTe    throw Error(
        `Invalid test  }
  // Rese    }}/** * Also the string will likely contain interpolations and if an interpolation holds an
 * identifier we will need to match that later. So tokenize the interpolation too!
 */
function tokenizeBackTickString(str: string): Piece[] {
  const p  }); const BLUE = '\x1b[36m';const GREEN = '\x1b[32m';export function expectEmit(
    source: string, expected: string, description: string,
    assertIdentifiers?: {[name: string]: RegExp}) {
  expected = expected
  // turns `// ...` into `…`
  .replace(/\/\/\s*\.\  c    let last: number = 0;
    for (let i = 1; i < pieces.length; i++) {
      const {regexp} = buildMatcher(pieces.slice(0, i));
         const contextLength = 50;
        const fullContext = source.substring(source.lastIndexOf('\n', last) + 1, last);
        const context = f   fullContext;
        throw new Error(
   `${RED}${description}:\n${RESET}${BLUE}Failed to find${RESET} "${expectedPiece}"\n` +
   `${BLUE}After ${RESET}"${context}"\n` +
   `${BLUE}In generated file:${RESET}\n\n` +
   `${source.slice(0, last)}`    `${source.sli        last = (m.index || 0) + m[0]    }    throw new Error(
        `Test helper failure: Expected expression failed but the reporting logic could not find where it failed in: ${
       if (assertIdentifiers) {
      // It might be possible to add the constraints in the original regexp (see `buildMatcher`)
      // by transforming the assertion regexps when using anchoring, grouping, back references,
       // The overall performance are not impacted when `assertIdentifiers` is empty.
      const ids = Object.keys(assertIdentifiers);
      for (let i = 0; i <        if (groups.has(id)) {
 const name = matches[groups.get(id) as number];
 const regexp = assertIdentifiers[id];
 if (!regexp.test(name)) {
   throw Error(`${description}: The matching identifier "${id}" is "${
 name}" which doesn't match ${        }    }}cons * Builds a regexp that matches the given `pieces`
 *
 *  * - the `groups` which maps `$...$` identifier to their position in the regexp matches.
 */
function buildMatcher(pieces: (string|RegExp)[]): {regexp: RegExp, groups: Map<string, number>} {
     if (!first)
      results.push(`\\s${typeof piece === 'string' && IDENT_LIKE.test(piece) ? '+' : '*'}`);
    first = false;      if (MATCHING_IDENT.test(piece)) {
        const matchGroup = groups.get(piece);
        if (!matchGroup) {
 results.push('(' + IDENTIFIER.source + ')');
 const newGroup = ++group;
 groups.set(piece, newGroup); results.push(`\      } else {         regexp: new RegExp(results.join('')),
    groups,
  };
}
