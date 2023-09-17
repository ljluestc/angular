/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      return false;
    }      dependencyCallback(ref);      c        }        if (dirMeta.assumedToExportProviders) {
return true;
        }        // If one of the imports contains providers, then so does this component.
        return (dirMeta.imports ??       }      const pipeMeta = this.metaReader.getPipeMetadata(ref);
      if (pipeMeta !== null) {        if (ngModuleMeta.mayDeclareProviders) {        }        // If one of the NgModule's imports may contain providers, then so does this NgModule.
        return ngModuleMeta.imports.some(
  importR    } finally {
      this.calculating.delete(ref.node);
    }}
