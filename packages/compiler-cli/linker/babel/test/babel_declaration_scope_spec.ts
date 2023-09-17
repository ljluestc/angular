/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */'}',             const scope = new BabelDeclarationS      expect(constantScope).not.toBe(null);    });    it('should return null if the file is not an ES module', () => {
      const ast = parser.parse(
       ['functi'}',       {sourceType: 'script'}) as t.File;      c      expect(constantScope).toBe(null);
    });    it('should return the IIFE factory function where the expression is a parameter', () => {
      const ast = parser.parse('var co'  var BLOCK = \'block\';',
'  function foo() {',
'    var TEST = core;',
'  }',
'})(cor       {sourceType: 'script'}) as t.File;
      c      const scope = new BabelDeclarationScope(nodePath.scope);
      const constantScope = scope.getConstantScopeRef(nodePath.get('init').node);
      expect(constantScope).not.toBe(null);
      e    });
  });
});/**
 * The type of a variable declarator that is known to have an initializer.
 * * TypeScript type checker.
 */    file: t.File, varName: string): NodePath<InitializedVariableDeclarator> {
  let varDecl: NodePath<t.VariableDeclarator>|undefined = undefined;
  traverse(file, {
    Var      if (id.isIdentifier() && id.node.name === varName && path.get('init') !== null) {
        varDecl = path;
       }
  });
  if (v  }
  retur    Function: (path) => {
      fn = path;
      path.stop();
    }
  });
  if (fn === undefined) {
    throw new Error(`TEST BUG: expected to find a function.`);
  }}
