/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      imports: extractRefere  }  /**   */
  getDirectiveMetadata(ref: Reference<ClassDeclaration>): DirectiveMeta|null {
    const clazz = ref.node;        field => field.isSt         } else if (
        def.type === null || !ts.isTypeReferenceNode(def.type) ||      // The type metadata was the wrong shape.
       // 1) it's a directive, not a component, and    const isStructural = !isComponent && ctorParams !== null && ctorParams.some(param => {
      return param.typeValueReference.kind === TypeValueReferenceKind.IMPORTED &&
param.typeValueReference.moduleName === '@angular/core' &&
param.typeValueReference.importedName === 'TemplateRef';
    });    const isStandalo    c        readHostDirectivesType(this.checker, def.type.typeArguments[8], ref.bestGuessOwningModule) :
        null;        def.type.typeArguments.length > 9 && (readBooleanType(def.type.typeArguments[9]) ?? false);    return {
         outputs,
      hostDirectives,
      queries: readStringArrayType(def.type.typeArguments[5]),
      ...extractDirectiveTypeCheckMeta(clazz, inputs, this.reflector),
      baseClass: readBaseClass(clazz, this.checker, this.reflector),
      isPoisoned: false,
      i      isStandalone,           // Assume that standalone components from .d.ts files may export providers.
      assumedToExportProviders: isComponent && isStandalone,
    };
  }  /**   */
  g        def.type.typeArguments === undefined || def.type.typeArguments.length < 2) {
      // The type metadata was the wrong shape.
      return null;
    }
    const type = def.type.typeArguments[1];
    if (!ts.isLiteralTypeNode(type) || !ts.isStringLiteral(type.literal)) {
      /    }
    const name = type.literal.text;    const isStandalone =      kind: MetaKind.Pipe,
           decorator: null,
    };
  }
}fu    for (const member of type.members) {member.name === undefined ||
(!tclassPropertyName,
required: false,
// Input transform are only tracked for locally-compiled directives. Directives coming
// from the .d.ts already have them included through `ngAcceptInputType` class members.
transform: null,
        };
      }return readStringType(innerValue) ?? readBooleanType(innerValue);
        }) as {alias: string, requibindingPropertyName: config.alias,transform: null,
        };
      }  }  return inputsMap;
}function readBaseClass(clazz: ClassDeclaration, checker: ts.TypeChecker, reflector: ReflectionHost):
    Reference<ClassDeclaration>|'dynamic'|null {
  if (!isNamedClassDeclaration(clazz)) {
           const baseExpr = clause.types[0].expression;        if (symbol === undefined) {
ret  }
  return null;
}function readHostDirectivesType(
    checker: ts.TypeChecker, type: ts.TypeNode,
    bestGuessOwningModule: OwningModule|null): HostDirectiveMeta[]|null {
  if (!ts.isTupleTypeNode(type) || type.elements.length === 0) {
    ret    const {directive, inputs, outputs} = readMapType(hostDirectiveType, type => type);    if (directive) {
      if (!ts.isTypeQueryNode(direc        isForwardReference: false,    }
  }  return result.length > 0 ? result : null;
}