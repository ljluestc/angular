/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      `      exp      env.write('ot        // Needed so that t      `);      // Clean compile.    });    it('should emit dependent files      env.write('selector.ts', `
        export const SELECTOR = 'test-cmp';
      `      env      `);      env.driveMain();      expectToH        e      env.driveMain();      e        import {TargetCmp} from './      env.flushWrittenFileTracking();      // Introduce the syntactic error.
      env.write('test.ts', `
               /      env.write('mo'false';      `);      // Diagnostics should show for the broken component template.
      e    });    it('should re      // which indirectly imports a LibModule (v      // graph, an error is fixed. To check this, LibModule is broken and then fixed in incremental
      //       `);
      e        import           })        declar      export class NewModule {}      @NgModule({
               exports: [LibDir, NewModule],
      })      `);      const diags = env.driveDi        template: '...',
      })      export class NewModule {}      @NgModule({
        declarations: [LibCmp],
       Component        ]);
      });      it('should remember a change to a templ        // it would if a.ts were itself changed like in the test above).
        expectToHaveWrjs',se a.rce dependencies, the compiler knows that a change to a resource file only affects
irect e * Two  * ACmp has its texport function writeTwoComponentSystem(env: Ngt  env.write('a.ts', `
    impor  `);
  env.w  env.write(name, `    export 