/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   *    which is eventually    * P(n) = the physically changed files from build n - 1 to build n.
         previous: FileDependencyGraph<T>         const sfPath = absoluteFromSourceFile(sf);
      const node = previous.nodeFor(sf);
         } else if (!deletedTsPaths.has(saly      }
    }    return logicallyChanged;
  }      this.nodes.set(sf, {
        dependsOn: new Set<AbsoluteFsPath>(),
       return this.nodes.get(sf)!;
  }
}/* * changed files and resources.     // A file is assumed to have logically changed if its dependencies could not be determined
  //     return true;
  }  for (const dep of node.dependsOn) {
    if (changedTsPaths.has(dep) || deletedTsPaths.has(dep)) {
       if (changedResources.has(dep)) {
      return true;
     dependsOn: Set<AbsoluteFsPath>;