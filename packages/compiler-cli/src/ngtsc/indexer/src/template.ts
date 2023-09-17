/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {AST, ASTWithSource, BoundTarget, ImplicitReceiver, ParseSourceSpan, PropertyRead, PropertyWrite, RecursiveAstVisitor, TmplAstBoundAttribute, TmplAstBoundDeferredTrigger, TmplAstBoundEvent, TmplAstBoundText, TmplAstDeferredBlock, TmplAstDeferredBlockError, TmplAstDeferredBlockLoading, TmplAstDeferredBlockPlaceholder, TmplAstDeferredTrigger, TmplAstElement, TmplAstForLoopBlock, TmplAstForLoopBlockEmpty, TmplAstIfBlock, TmplAstIfBlockBranch, TmplAstNode, TmplAstRecursiveVisitor, TmplAstReference, TmplAstSwitchBlock, TmplAstSwitchBlockCase, TmplAstTemplate, TmplAstVariable} from '@angular/compiler';   static getIdentifiers(    const visitor =
        new ExpressionVisitor(source, ab    this.visitIdentifier(ast, IdentifierKind.Property);
     this.visitIdentifier(ast, IdentifierKind.Property);
      * Visits an identifier, adding it to the identifier store if it is useful for indexing.
   *
   * @param ast expression AST the identifier is in   */
  p    // The definition of a no       if (!(ast.receiver instanceof ImplicitReceiver)) {
      return;
       identifierStart = ast.nameSpan.start - this.absoluteOffset;
       }    // Join the relative position of the expression within a node with the absolute position
    // of the node to get the absolute position of the expression in the source code.
    const absoluteStart = this.absoluteOffset + identifierSta    const target = targetAst ? this.targetToIdentifier(targetAst) : null;
         span,     }
}/**
 * Vi */
cla  private readonly targetIdentifierCache: TargetIdentifierMap = new Map();  // Map of elements and templates to their identifiers.
  private readonly elementAndTemplateIdentifierCache =
     con  }  /**
   * Visits a node in the template.
   *
   * @param node node to visit  visit(node: HTMLNode) {
    node.visit(this);
  }  }  /**       const elementIdentifier = this.elementOrTemplateToIdentifier(element);
     }    this.visitAll(element.references);
    t    this.visitAll(element.children);
       this.visitAll(template.templateAttrs);    this.visitAll(template.references);
  }  override visitBoundAttribute(attribute: TmplAstBoundAttribute) {
     }     override visitBoundText(text: TmplAstBoundText) {
    this.visitExpression(text.value);
  }
  override visitReference(reference: TmplAstReference) {    if (referenceIdentifier === null) {
      return;
          }    this.identifiers.add(variableIdentifier);
  }  override visitDeferredBlock(deferred: TmplAstDeferredBlock) {
       this.visitAll(block.children);
   }  override visitDeferredTrigger(trigger: TmplAstDeferredTrigger) {
    i    }
  }  }  override visitIfBlock(block: TmplAstIfBlock): void {  }  override visitIfBlockBranch(block: TmplAstIfBlockBranch): void {
     }  /** Creates an identifier for a template element or template node. */
  pri    let kind: IdentifierKind.Element|IdentifierKind.Template;
         kind = IdentifierKind.Template;
    }       // Namespaced elements have a particular format for `node.name` that needs to be handled.
    // For example, an `<svg>` element has a `node.name` of `':svg:svg'`.
    // TODO(alxhub): properly handle namespaced elements
    if (name.startsWith(':')) {    }    const sourceSpan = node.startSourceSpan;
    // An element's or template's source span can be of the form `<element>`, `<element />`, or
          c        name,
         };
   node: dir.ref.node,
s       return identifier;
  }      // If this node has already been seen, return the cached result.
   nod        }        if (node === null) {   node,
dir           span,
           };
     }  /** Gets the start location of a string in a SourceSpan */
  pri         return null;
    }
    return context.start.offset + localStr.indexOf(name);
  }  /**   *    * @param node node whose expression to visit
   */
  p      const targetToIdentifier = this.targetToIdentifier.bind(this);
      const absoluteOffset = ast.sourceSpan.start;
       }}/**
 *  * @param boundTemplate bound template target, which can be used for querying expression targets.
 * @return identifiers in template
 */  if (boundTemplate.target.  }}
