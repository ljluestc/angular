/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ConstantPool, outputAst as o} from '@angular/compiler';      private readonly factory: AstFactory<TStatement, TExpression>) {}  /**
   * Translate the given Output AST defin  translateDefinition(definition: LinkedDefinition): TExpression {
    const expression = this.translator.translateExpression(      // Definition statements must be emitted "after" the declaration for which the definition is
      // being emitted. However, the link      const importGenerator = new LinkerImportGenerator(this.ngImport);
      return this.wrapInIifeWithStatements(    } else {
      // Since there are no definition statem    }
  }  /**
   * Return any constant statements that are shared between all uses of this `EmitScope`.
   */        statement => this.translator.translateStatement(statement, importGenerator));
  }  private wrapInIifeWithStatements(express    const body = this.factory.createBlock([...statements, returnStatement]);
     }
}
