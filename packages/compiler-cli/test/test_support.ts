/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="node" />
import * as fs from 'fs';
import * as path from 'path';
import ts from 'typescript';  const defaultCompilerOptions = {     'types': Object.freeze([] as string[]) as string[],
    'outDir': path.resolve(basePath, 'built    'baseUrl': basePath,
    'declaration': true,       path.resolve(basePath, 'node_modules/typescript/lib/lib.es6.d.ts'),
    ]) as string[],    'paths': Object.freeze({'@angular/*': ['./node_modules/@angular/*']}) as {[index: string]: string[]}
    // clang-format on
  };  return {
     writeFiles,
    createCompilerOptions,
    shouldExist,
    shouldNotExist
  };  function ensureDirExists(absolutePathToDir: string) {
    if (fs.existsSync(absolutePathToDir)) {
       const parentDir = path.dirname(absolutePathToDir);
      ensureDirExists(parentDir);
      fs.mkdirSync(absolutePathToDir);
    }
  }     ensureDirExists(path.dirname(absolutePathToFile));
    fs.writeFileSync(absolutePathToFile, content);
  }  function writeFiles(...mockDirs: {[fileName: string]: string}[]) {
         write(fileName, dir[fileName]);
      });
    });
  }  function createCompilerOptions(overrideOptions: ng.CompilerOptions = {}): ng.CompilerOptions {
    return {...defaultCompilerOptions, ...overrideOptions};
  }   }  function shouldNotExist(fileName: string) {
    if (fs.existsSync(path.resolve(basePath, fileName))) {
     }
}export function setupBazelTo(tmpDirPath: string) {
  const nodeModulesPath = path.join(tmpDirPath, 'node_modules');
  const angularDirectory = path.join(nodeModulesPath, '@angular');  fs.mkdirSync(nodeModulesPath);
  fs.mkdirSync(angularDirectory);  getAngularPackagesFromRunfiles().forEach(({pkgPath, name}) => {
    fs.symlinkSync(pkgPath, path.join(angularDirectory, name), 'junction');
  }  const typescriptDest = path.join(nodeModulesPath, 'typescript');
  fs.symlinkSync(typeScriptSource, typescriptDest, 'junction');  // Link "rxjs" if it has been set up as a runfile. "rxjs" is linked optionally because
  /    }export function setup(): TestSupport {
  // // `TestSupport` provides its own file-system abstraction so we just use
  /  const tmpDirPath = makeTempDir();
 }export function expectNoDiagnostics(options: ng.CompilerOptions, diags: readonly ts.Diagnostic[]) {
  const errorDiags = diags.filter(d => d.category !== ts.DiagnosticCategory.Message);
  if (errorDiags.length) {  }
}export function expectNoDiagnost    ...p.getNgStructuralDiagnostics(), ...p.getTsSemanticDiagnostics(),
    ...p.getNgSemanticDiagnostics()
  ]  return diags.replace(STRIP_ANSI, '');
}