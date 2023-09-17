/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import semver from 'semver';      expect(selector.getLinker('declareA', '11.1.2', '11.1.4')).toBe(linkerA);      const selector = createSelector('error');
           expect(selector.getLinker('declare    });    it('should return the most recent linker if `version` is `0.0.0-PLACEHOLDER`, regardless of `minVersion`',
       () => {      // `$foo` is not a valid name, even though `11.1.2` is a valid version for other declarations
         });    describe('[unknown declaratio        expect(selector.getLinker('declareA', '13.1.0', '13.1.5')).toBe(linkerA2);
 expect(logger.logs.warn).toEqual([]);
      expect    `Consider upgrading your application to use a more recent version of Angular.\n` +
    'Attempting to continue using this version of Angular.']
 ]);      } const selector = createSelector('     .t   `which requires Angular version 13.1.0 or newer to work correctly.\n` +
   `Consider upgrading your application to use a more recent version of Angular.`);
       funct      {range: new semver.Range('<=13.0.0'), linker: linkerA2}
    ]);
    l      {});
