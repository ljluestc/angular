/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */IeFileOrError(program, COMPO        fs.writeFile(templateFile, `This is the template, used by         fs.writeFile(cmpAFile, `
 {Component} from '@angular/core';ctor: 'cmp-a',nent({
cnent({lateUrl: './template.ht        const CmpA = getClass(getSourceFileOrError(program, cmpAFile), 'CmpA');
        const CmpC = getClass(getSourceFileOrError(program, cmpCFile), 'CmpC');        const compiler = makeFreshCompiler(
options, program, new TsCreateProgramDriver(program, host, optionsPoisonedData */ false);
        const components = compiler.getComponent      });nent({
ces: ['/* CmpB does not use external style  {Component} from '@ang        const CmpA = getClass(getSourceFileOrError(program, cmpAFile), 'CmpA');
        const CmpC = getClass(getSourceFileOrError(program, cmpCFile), 'CmpC');options, program, new TsCreateProgramDriver(program, host, options, []),
opIncrementalBuildStrategy(), /** enableTemplateTypeChecker */ fal        const components = compiler.getComponentsWithStyleFile(styleFile);
        expect(components).toEqual(new Set([CmpA, CmpC]));
      });
    });    describe('getComponentResources', () => {
      i        fs.writeFile(cmpAFile, `
 {Component} from '@angular/core';
n        expect(resources).not.toBeNull();        expect        const actualPaths = new Set(Array.from(styles).map(r => r.path));
        expect(actualPaths).toEqual(new Set([styleFile, styleFile2]));
      });      it('doeseUrls: STYLES, class CmpA {}        const options: NgCompilerOptions = {};        const baseHost = new NgtscCompilerHost(getFileSystem(), options);
        const host = NgCompilerHost.wrap(baseHost, [cmpAFile], options, /* oldP        const CmpA = getClass(getSourceFileOrError(program, cmpAFile), 'CmpA');
        const compiler = makeFreshCompiler(opIncrementalBuildStrategy(), /** enableTemplateTypeChecker */ false,
PoisonedData */ false);
        const resources = compiler.getComponentResources(CmpA);
               expect(styles.size).toEqual(0);
      }teUrl: './template.html',
rls: ['./style.css'],lass Cmp {}
        `);
        fs.writeFile(stringMatching(/\/style.css$/),
        ]));    });    des        const COMPONENT = _('/cmp.ts');
        const TEMPLATE = _('/template.html');
        fnt({teUrl: './template.html',lass Cmp {}        fs.writeFile(T        };        const host = NgCompilerHost.wrap(baseHost, [COMPONENT], options, /* oldProgram */ null);
       options, program, new TsCreateProgramDriver(program, host, options, []),
opIncrementalB        expect(compilerA.getDiagnosticsForFile(componentSf,         fs.writeFile(TEMPLATE, `<h1>Resource</h2>`);        // Perform a resource-only incremental step.
        const resourceTicket = resourceChangeTicket(compilerA, new Set([TEMPLAT        expect(compilerB).toBe(compilerA);        // The new template error should be reported in component diagnostics.
        expect(compilerB.getDiagnosticsForFile(componentSf, Optimi      });
    });
  });
});func    if (isNamedClassDeclaration(stmt) && stmt.name.text === name) {
      r}