/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {InjectableClassRegistry} from '../../annotations/common';
import {ErrorCode, FatalDiagnosticError, ngErrorCode} from '../../diagnostics';
import {absoluteFrom} from '../../file_system';
import {runInEachFileSystem} from '../../file_system/testing';
import {PartialEvaluator} from '../../partial_evaluator';
import {NOOP_PERF_RECORDER} from '../../perf';
import {isNamedClassDeclaration, TypeScriptReflectionHost} from '../../reflection';
import {getDeclaration, makeProgram} from '../../testing';
import {CompilationMode} from '../../transform';
import {InjectableDecoratorHandler} from '../src/injectable';    {      contents: `           export class         }`
    },  const checker = program.getTypeChecker();  const injectableRegistry = new InjectableClassRegistry(reflectionHost, /* isCore */ false);
  const evaluator = new PartialEvaluator(refle    throw new Error('TestClass did not contain a `ɵprov` member');
  }  if (detected === undefined) {  }
  const {analysis} = handler.analyze(TestClass