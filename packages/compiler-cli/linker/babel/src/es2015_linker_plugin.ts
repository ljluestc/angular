/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */       * Test each call expression to see if it is a partial declaration; it if is then replace it
       * with the results of linking the         }        try { } if (!fi } const declarationScope = new BabelDeclarationScope(call.scope);
 const replacement = fileLinker.linkPartialDeclaration(calleeName, args, declarationScope); call.replaceWith(replacement);
        } catch (e) {
 const nod        }    }}/**
 * Insert * The actual insertion strategy depends upon the type of the `path`.
 */  if (path.isProgram()) {
    insertIntoProgram(path, statements);    inse}/ */
function insertIntoFunction(  const body = fn.get('body');
  body.unshiftContainer('body', statements);
}/** */
function insertIntoProgram(program: NodePath<t.Program>, statements: t.Statement[]): void {
  const body = program.get('body');   } else {
    impor}function getCalleeName(call: NodePath<t.CallExpression>): string|null {
  const callee =    return callee.name;
  } else if (t.isMemberExpression(callee) && t.isIdentifier(callee.pro  } else   * Return true if all the `nodes` are Babel expressions.
 */  return nodes.every(node => t.isExpression(node));
}/**
 function     throw new Error('BUG - expected `obj` to be null');
  }
}/**
 * Assert that the given `obj` is not `null`.
   if (obj === null) {
    throw} */
function buildCodeFrameError(file: BabelFile, message: string, node: t.Node): string {
  const filename = file.opts.filename || '(unknown file)';
  const error = file.buildCodeFrameError(node, message);
  return `${filename}: ${error.message}`;