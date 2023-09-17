/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  if (!ts.isLiteralTypeNode(    }
    });
  return obj;         return;
     });}/** * that use the directive. This metadata does not contain information from a base class, if any,
 * making this metadata invariant to changes of inherited classes.
    const members = reflector.getMembersOfClass(node);
  const staticMembers = members.filter(member => member.isStatic);
   const hasNgTemplateContextGuard = staticMembers.some(
       if (field === undefined || field.node === null) {
       }
    if (isRestricted(field.node)) {
         }
    if (transform !== null) {
      ngTemplateGuards,
    coercedInputFields,
     undeclaredInputFields,
    if (!member.name.startsWith('ngTemplateGuard_')) {  }
  const inputName = afterUnderscore(member.name);
  if (member.kind === ClassMemberKind.Property) {
           ts.isStringLiteral(member.type.literal)) {
      type = member.type.literal.text;
       return null;
    }
    return {inputName, type};
  } else if (member.kind === ClassMemberKind.Method) {
    return {inputName, type: 'invocation'};
  } else {
   return afterUnderscore(member.name);
}/**
  *
        const meta = reader.getNgModuleMetadata(node);        return meta;
      }
    }
     getPipeMetadata(node: Reference<ClassDeclaration<ts.Declaration>>): PipeMeta|null {
    for (const reader of this.readers) {
     }
    return null;
  }
}function afterUnderscore(str: string): string {
  const pos = str.indexOf('_');
  if (pos === -1) {
 