/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ExternalExpr, ExternalReference} from '@angular/compiler';
import ts from 'typescript';    const res = MODULE_FROM_NODE_MODULES_PATH.exec(imported)!;  } * Simple metadata types are added to the top of each testing file, for convenience.
 */
const PROLOG = `export declare type ComponentMeta<A, B, C, D, E, F> = never; * Construct the testing environment with a given set of absolute modules and their contents.
 *
 * This returns both the `MetadataDtsModuleScopeResolver` and a ` */  // Map the modules object to an array of files for `makeProgram`.
  const files = Object.keys(modules).map(moduleName => {
    return {      contents: PROLOG + (modules as any)[moduleName],  const resolver =
      new MetadataDtsModuleScopeResolver(new DtsMetadataReader(checker, reflector), aliasGenerator);  // Resolver for the refs object.
  const get = (target: {}, name: string): Reference<ts.ClassDecla      const symbol = checker.getSymbolAtLocation(sf)!;    }
    throw new Error('Class not found: ' + name);    resolver,
    refs: new Proxy({}, {get}),
  };
}runInEachFileSystem(() => {
            export declare class Dir {
dir: DirectiveMeta<Dir, '[dir]', ['exportAs'], {'input': 'input2'},
ut': 'output2'}, ['query']>;      `
      });
      const {Dir, Module} = refs;
     });    it('should produce an accurate scope when a module is exported', () => {
      const {resolver, refs} = makeTestEnv({
        'test': `
          }        export declare class ModuleA {
mod: ModuleMeta<ModuleA, [typeof Dir], never, [typeof Dir]>;
        }        export declare class ModuleB {      const scope = resolver.resolve(ModuleB)!;
      expect(scopeToRefs(scope)).toEqual([Dir]);
    });    it('should resolve correctly across modules', () => {
 eclare  ɵmod: ModuleMeta<ModuleA, [typeof Dir], never, [typeof Dir]>;        `,
        'exported': `
 as d from 'declaration';eclare class ModuleB {
 ɵmod: ModuleMeta<ModuleB, never, never, [typeof d.ModuleA]>;        `
      });
      con      expect(scopeToRefs(scope).map(ref => ref.node)).toEqual([Dir.node]);      // Explicitly verify that the directive has the correct owning module.
      expect(scope.exported.dependencies[0].ref.bestGuessOwningModule).toEqual({
        s      });e': `
 * as deep from 'deep'; declare class MiddleDir {
ic ɵdirow': `
 ic ɵmod      const scope = resolver.resolve(ShallowModule)!;      expect(getAlias(DeepDir)).toEqual({
        moduleName: 'root/shallow',
        name: 'ɵng$root$d      expect(getAlias(MiddleDir)).toEqual({
        moduleName: 'root/shallow',      });
      expect(getAlias(ShallowDir)).toBeNull();
    });   declare class DeepDir {ic ɵmod: ModuleMeta<DeepModule, [typeof DeepDir], never, [typeof DeepDir]>;    `,
e': `
 * as deeic ɵmod: ModuleMeta<MiddleModule, [typeof MiddleDir], [typeof deep.DeepModule], [typeof Mid      expect(getAlias(MiddleDir)).toEqual({
        moduleName: 'ro      });
      e export declare class DeepDir {
    stat       });    return scope.exported.dependencies.map(dep => dep.ref)
        .sort((a, b) => a.debugName!.localeCompare(b.debugName!));
  }  function getAlias(re      return null;
    } else {    }
  }
});