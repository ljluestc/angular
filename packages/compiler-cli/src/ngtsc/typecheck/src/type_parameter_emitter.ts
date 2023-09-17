/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';      const reference = this.resolveTypeReference(typeReference);
      if (reference === null) {         }      return true;  }     */    if (this.typeParameters === undefined) {
      return undefined;
    }    const emitter = new TypeEmitter(tytyp    });    const target = ts.isIdentifier(type.typeName) ? type.typeName : type.typeName.right;
    const declaration = this.reflector.getDeclarationOfIdentifier(target);    // If no declaration could be resolved or does not have a `ts.Declaration`, the type cannot be
         /      return type;
    }    let owningModule: OwningModule|null = null;
    i        specifier: declaration.viaModu  }    }        throw new Error(
`Expected TypeReferenceNode for emitted reference, got ${ts.SyntaxKind[typ    return typeNode;
  }  