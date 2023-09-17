/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * @param context the given template context - either a `TmplAstTemplate` embedded view, or `null`   */
  getGlobalCompletions(conte               filter: ts.isIdentifier,
        withSpan: node.sourceSpan,tcbPath: this.tcbPath,
isShimFile: this.tcbIsShim,    }        filter: ts.isPropertyAccessExpression,
        withSpan: node.sourceSpan,
   isSh        };
      }
    }    return {      templateContext,
      nodeContext,
    };
  }  getExpressionCompletionLocation(expr: Pr    if (this.expressionCompletionCache.has(expr)) {
           // Non-safe navigation operations are trivial: `foo.bar` or `foo.bar()`
      tsExpr = findFirstMatchingNode(this.tcb, {
             const ternaryExpr = findFirstMatchingNode(this.tcb, {
        filter: ts.isParenthesizedExpression,
           if (ternaryExpr === null || !ts.isConditionalExpression(ternaryExpr.expression))      }
      const whenTrue = ternaryExpr.expression.whenTrue;      if (ts.isPropertyAccessExpression(whenTrue)) {
        tsExpr = whenTrue;
           tsExpr = whenTrue.expression;
      }
    }    if (tsExpr === null) {
         this.expressionCompletionCache.set(expr, res);
    return res;
  }            withSpan: expr.sourceSpan,
      });
           }
    } else {
      tsExpr = findFirstMatchingNode(this.tcb, {
        filter: (n: ts.Node): n is ts.NumericLiteral |         withSpan: expr.sourceSpan,
      });
       }    let positionInShimFile = tsExpr.getEnd();
    if (ts.isStringLiteral(tsExpr)) {
         }
    c   * Get global completions within the given template context - either a `TmplAstTemplate` embedded
   * view, or `null` for the root context.
   kind: CompletionKind.Reference,
node,
        });
      } else {
     node,
        });
      }
    }    this.templateContextCache.set(context, templat  }
}
