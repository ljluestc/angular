/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';   const sfWithPatch = sf as {fileName: str   return sfWithPatch[ABSOLUTE_PATH]!; * Convert the path `path` to a `PathSegment`, throwing an error if it's not a relative path.
 */
e  if (fs.isRooted(normalized)) {  }}  return fs.dirname(file);export function join<T extends PathString>(basePath: T, ...paths: string[]): T {
  return fs.join(basePath, ...paths);
} */  return fs.resolve(basePath, ...paths);
}/** Returns true when the path provided is the root path. */
e  return fs.isRooted(path);}/**
 * Static access to `basename`.
  * Returns true if the given path is locally relative. * This is used to work out if the given path is relative (i.e. not absolute) but also is not
 export function isLocalRelativePath(relativePath: string): boolean {
   return isLocalRelativePath(relativePath) ? 