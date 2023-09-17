/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {CssSelector, DirectiveMeta as T2DirectiveMeta, parseTemplate, R3TargetBinder, SelectorMatcher, TmplAstElement} from '@angular/compiler';
import ts from 'typescript';import {InjectableClassRegistry, NoopReferencesRegistry} from '../../common';
import {DirectiveDecoratorHandler} from '../index';runInEachFileSystem(() => {
  let _: typeof absoluteFrom;
  beforeEach(() => _ = absoluteFrom);  describe('Di      const {program} = makeProgram([
        {
'/node_modules/@angular/core/index.d.        },'/entry.ts'),
: `
Directive} from '@angular/core';ve({slass TestDir2         },
      ]);      const analysis1 = analyzeDirective(program, 'TestDir1', /*hasBaseClass*/ false);
      expect(analysis1.meta.uses    }      `;        {
'/node_mo        },
        {: src,      ]      expect(sp        exporte: string;
        }      const {program} = makeProgram([
        {: 'export const Directi             animationTriggerNames: null,
      };
      matcher.addSelectables(CssSelector.parse('[dir]'), [dirMeta]);      const {nodes} = parseTemplate('<div dir [propName]="expr"></div>', 'unimportant.html');
      con      const propBindingConsumer = binder.getConsumerOfBinding(propBinding);      // Assert that the consumer of the binding is the directive, which means that the metadata
      // fed into the SelectorMa      c        }      const {program} = makeProgram([
        {: src,      ]);      const analysis = analyzeDirective(program, 'TestDir');
      expect(analysis.isStructural).toBeTrue();
    });
  });  // Helpers    class TestReflectionHost extends TypeScriptReflectionHost {
      con      }      override hasBaseClass(_class: ClassDeclaration): boolean {      }
    }    const checker = program    con        r        /*isCore*/ false,
        /*strict    }    const {analysis} = handler.analyze(DirNode, de      thr  }
});
