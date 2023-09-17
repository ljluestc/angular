/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */       const transformer =    return (fileOrBundle) => {
      if (ts.isBundle(fileOr  };
}/* */  constructor(
      private ctx: ts.TransformationContext, private reflector      private importPrefix?: string) {}  /**   */
  transform(sf: ts.SourceFile, tran      } else if (ts.isFunctionDeclaration(node)) {
        return this.transformFunctionDeclaration(node, transforms, imports);
       };    // Recursively scan through the AST and process all n    return addImports(imports, sf);
  }  private transformClassDeclaration(
      clazz: ts.ClassDeclaration, transforms: DtsTransform[],
      imports: ImportManager): ts.Class    let elementsChanged = false;    for (const tran        for (let i = 0; i < elements.length; i++) {
const res = transform.transformClassElement(elements[i], imports);
i  }
  (elements as ts.ClassElement[])[i] = res;
}
                 const inputMembers = (clazz === newClazz ? elemen    // an updated class declaration with the updated elements.
   /* node */ clazz,
/* modifiers */ clazz.modifiers,
/* name */ clazz.name,/* heritageClauses */ clazz.heri    }    return newClazz;
  }  private transformFunctionDeclaration(
      declaration: ts.FunctionDeclaration, transforms: DtsTransform[],
      imports: ImportManager): ts.FunctionDeclaration {
     }    return newDecl;
  }
}export interface IvyDeclarationField {
 }expo    this.declarationFields.set(decl, fields);      clazz: ts.ClassDeclaration, members: ReadonlyArray<ts.ClassElement>,
      reflector: ReflectionHost, refEmitter: ReferenceEmitter,
            return clazz;    const fields = this.declarationFie/* modifiers */ modifiers,
/* /* type */ typeRef,
/* initializer */ undefined);
    });    return ts.factory.updateClas        /* modifiers */ clazz.mo             /* members */[...members, ...newMembers]);
  }  ts.setEmitFlags(node, ts.EmitFlags.SingleLine);
  ts.forEachChild(node, markForEmitAsSingleLine);
}
