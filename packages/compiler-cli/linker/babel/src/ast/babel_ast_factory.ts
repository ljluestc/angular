/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {types as t} from '@babel/core';       const call = t.callExpression(callee, args);
    if (pure) {     }  createConditional = t.conditionalExp  }  createExpressionStatement = t.expressionStatement;  createFunctionDeclaration(functionName: string, parameter    assert(body, t.isBlockStatement, 'a block');
       }
    return t.arrowFunctionExpressio        }  createIdentifier = t.identifier;          return t.numericLiteral(value);      return t.booleanLiteral(value);
    } else if (value === undefined) {
      return t.identifier('undefined');
    prop.quoted ? t.stringLiteral(prop.propertyName) : t.identifier(prop.propertyName);
      return t.objectProperty(key,   }          return t.unaryExpression('type          // Add in the filename so that we can map to e      // file. This happens when the template is inline, in which case just use `undefined`.
      filename: sourceMapRange.url !== this.sourceUrl ? sourceMapRange.url : undefined,
      start: {
     // Some LVal types are not expressions, which prevents us from using `t.isLVal()`
  // directly with `assert()`.
  r