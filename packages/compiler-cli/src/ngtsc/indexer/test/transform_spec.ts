/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {BoundTarget, ParseSourceFile} from '@angular/compiler';  });  describe('generateAnalysis',       const context = new IndexingContext();
      const decl = util.getComponentDeclaration('class C {}', 'C');
      const template = '<div>{{foo}}</div>';        name: 'C',        file: new ParseSourceFile('class C {}', decl.getSourceFile().fileName),
        template: {
identifiers:    });    it('should give inli      const decl = util.getComponentDeclaration('class C {}', 'C');
      const template = '<div>{{foo}}</div>';
      populateContext(
c    });    it('should give external templates their own source file', () => {
      c      const template = '<div>{{foo}}</div>';
      populateContext(context, decl, 'c-selector', template, util.getBoundTemplate(template));
      const analysis = generateAnalysis(context);      expect(analysis.size).toBe(1);      const info = analysis.get(decl);
      expect(info).toBeDefined();
      expect(info!.template.file)
.      e      expect(infoB!.template.usedComponents).toEqual(new Set([declA]));
    });});
