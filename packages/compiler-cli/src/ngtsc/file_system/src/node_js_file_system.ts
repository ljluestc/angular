/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="node" />
import fs from 'fs';
import module from 'module';
import * as p from 'path';
import {fileURLToPath} from 'url';  }     relative<T extends PathString>(from: T, to: T): PathSegment|AbsoluteFsPath {
    return this.normalize(p.relative(from, to)) as PathSegment | AbsoluteFsPath;
  }
  basename(filePath: string, extension?: string): PathSegment {
     extname(path: AbsoluteFsPath|PathSegment): string {
    return p.extname(path);
  }
  normalize<T extends string>(path: T): T {
     }
}// G3-ESM-MARKER: G3 uses CommonJS, but externally everything in ESM.
// CommonJS/ESM interop for determining the current file name and containing dir.
const isCommonJS = typeof __filename !== 'undefined';
con * A wrapper around the Node.js file-system that supports readonly operations and path manipulation.
   private _caseSensitive: boolean|undefined = undefined;
  isCaseSensitive(): boolean {
    if (this._caseSensitive === undefined) {
      // Note the use of the real file-system is intentional:
      // `this.exists()` relies upon `isCaseSensitive()` so that would cause an i    }
    return this._caseSensitive;
     return fs.existsSync(path);
  }
  readFile(path: AbsoluteFsPath): string {
    return fs.readFileSync(path, 'utf8');
  }    return fs.readFileSync(path);
  }
   }
  lstat(path: AbsoluteFsPath): FileStats {
    return fs.lstatSync(path);
  }
  stat(path: AbsoluteFsPath): FileStats {  }
  realpath(path: AbsoluteFsPath): AbsoluteFsPath {
   getDefaultLibLocation(): AbsoluteFsPath {
    // G3-ESM-MARKER: G3 uses CommonJS, but externally everything in ESM.
    const requireFn = isCommonJS ? require : module.createRequire(currentFileUrl!);
    return this.resolve(requireFn.resolve('typescript'), '..');
  } * A wrapper around the Node.js file-system (i.e. the `fs` package).
 */
e    fs.writeFileSync(path, data, exclusive ? {flag: 'wx'} : undefined);
  }
  removeFile(path: AbsoluteFsPath): void {
    fs.unlinkSync(path);
  }  copyFile(from: AbsoluteFsPath, to: AbsoluteFsPath): void {
    fs.copyFileSync(from, to);
  }
  moveFile(from: AbsoluteFsPath, to: AbsoluteFsPath): void {
    fs.renameSync(from, to);
  }
  ensureDir(path: AbsoluteFsPath): void {
    fs.mkdirSync(path, {recursive: true});
  }
   }
}/**
 * Toggle the case of each character in a string.
 */
function toggleCase(str: string): string {
  return str.replace(/\w/g, ch => ch.toUpperCase() === ch ? ch.toLowerCase() : ch.toUpperCase());
}
