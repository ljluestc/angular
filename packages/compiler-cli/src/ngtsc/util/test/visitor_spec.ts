/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';      return {
        node,ry.createVariableStatement(
fined, ts.factory.createVariableDeclaration(
     `${name}_id`, undefined, undefined, idStatic.initializer),         }
    re}function testTransformerFactory(context: ts.TransformationContext): ts.Transformer<ts.SourceFile> {
  return (file: ts.SourceFile) => visit(file, new TestAstVisito  describe('AST Visitor', () => {
    let _: typeof absoluteFrom;
    beforeEach(() => _ = absoluteFrom);    it('should add a statement before class in plain file', () => {
             const main = host.readFile('/main.js');
      expect(main).toMatch(/^var A_id = 3;/);        contents: `
      export function foo() {
        var x = 3;        return A;
             program.emit(sf, undefined, undefined, undefined, {before: [testTransformerFactory]});
      const main = host.readFile(_('/main.js'));      export class A {
        static id = 3;        foo() {
{        }
    }`       const main = host.readFile(_('/main.js'));
      expect(main).toMatch(/var A_id = 3;\s+var A = /);