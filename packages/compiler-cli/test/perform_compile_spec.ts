/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      `,
    });    const {optio        "target": "es2020"      annotateForClosureCompiler: false,      debug: false,
    });    expect(options).toEqual(jasmine.objectContaining({
      d      annotateFo "angularCompilerOptions": {
   "debug": false
 }
         "angul }
        }
      `,
      'node_modules/@angular-ru/tsconfig/package.json': `{
               "main": "./tsconfig.json"
      }    });    const {options} = readConfiguration(path.resolve(basePath, 'tsconfig-level-1.json'));
    e     () => {
       support.writeFiles({
'tsconfig-level-1.json': `{
   "extends": "@1stg/tsconfig/angular",
   "a   }
 }`,
'no     "s   "angularCompilerOptions": {
     "skipMetadataEmit": true
   }
 }`,
'node_m   "version": "0.0.0"
 }`,       skipMetadataEmit: true,
debug     "debug": false
   }
 }`,
'tsconfig.app.json': `{
   "c   },
   "angularCompilerOptions": {
    }`,       expect(options).toEqual(jasmine.objectContaining({
strict: true,
skipMetadataEmit: true,
debug: false,
           support.writeFiles({
      '        "target": "es2020"
             },
        "angularCompilerOptions": {
 "skipMetadataEmit": true,
 "annotationsAs": "decorators"
           'tsconfig-level-3.json': `{
        "compilerOptions": {
 "target": "esnext",
 "module": "esnext"
               }
      }`,
    });    const {options} = readConfiguration(path.resolve(basePath, 'tsconfig-level-1.json'));
    expect(options).toEqual(jasmine.objectContaining({
      t      annotateForClosureCompiler: false,
      s      ' "compilerOptions": {
   "paths": {
      "tex   }
 }
        }
      `,
      'tsconfig-level-2.json': `{
 "compilerOptions": {
   "strict": false,
   "paths": {
     "@angular/common": ["/*"]
   }
 },
 "angul "nullishCoalescingNotNullable": "suppress"
     }
   }        }
      `,
    });      extendedDiagnostics: {checks: {textAttributeNotBinding: 'suppress'}},
      paths: {'@angular/core': ['/*']}
    }));