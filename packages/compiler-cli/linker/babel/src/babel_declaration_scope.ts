/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {types as t} from '@babel/core';
import {NodePath, Scope} from '@babel/traverse';    }    // The binding of the expression is wher    const binding = this.declarationScope.getBinding(bindingExpression.name);
    if (binding === undefined) {    }    // We only support shared constant state    if (!path.isFunctionDeclaration() && !path.isFunctionExpression() &&
         }    return path;
  }
}
