/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */getSourceFileOrError(program, file1), OptimizeFor.Singl      const ttcSf2Before = getSourceFileOrError(ttcProgram1, absoluteFrom('/file2.ngtypecheck.ts'));
      e        expect(ttcSf2After.t      const file1 = absoluteFrom('/file1.ts');      con        {fileName: file2, templates: {'Cmp2': '<span></span>'}}
      ]);      const cmp1 = getClass(getSourceFileOrErr      expect(block!.getText()).toContain(`value`);
    });          type: 'directive',templates: {'CmpA': '<div dir></div>'},        }fileName: file2,
templates        }, // A non-exported interface used as a type bound for a generic directive causes
 // an         // Prime the TemplateTypeChecker by asking       // file1.
      e      const prevTtcProgram = programStrategy.getProgram();
      expect(templateTypeChecker.getTypeCheckBlock(cmpA)).not.toBeNull();
      expect(programStrategy.getProgram()).not.toBe(prevTtcProgram);
    });          const fileName = absoluteFrom('/main.ts');
        c  [ templates: {'Cmp': '<div dir></div>'},
 declar   templates: {},        const sf = getSourceFileOrError(program, fileName);
               const {program, templateTypeChecker} = setup(
  [{
    fileName,
    sou          const sf = getSourceFileOrError(program, fileName);
        c        expect(diags[0].code).toBe(ngErrorCode        const fileName = absoluteFrom('/main.ts');
               const cmp = getClass(getSourceFileOrError(progr        expect(nodes[0].sourceSpan.start.file.content).toBe('<div>Template</div>');
      });
    });