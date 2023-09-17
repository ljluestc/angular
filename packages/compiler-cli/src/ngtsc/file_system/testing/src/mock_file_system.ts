/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  }    const {entity} = this.findFromPath(folderPath);
   , path, `Unable to write file "${path}". The containing folder does not exist.`);    entity[basename] = data;
  }      throw new MockFileSystemError(
, p    if (isFolder(entity[basename])) {
     }  symlink(target: AbsoluteFsPath, path: AbsoluteFsPath): void {
    const [folderPath, basename] = this.splitIntoFolderAndFile(path);
       entity[basename] = new SymLink(target);
  }    if (entity === null) {
          }
    return Object.keys(entity) as PathSegment[];
  }  }  stat(path: AbsoluteFsPath): FileStats {
       return new MockFileStats(entity);
  }  }  moveFile(from: AbsoluteFsPath, to: AbsoluteFsPath): void {
    this.writeFile(to, this.readFile(from));
       const name = basename(from);
    delete folder[name];
  }    }    let current: Folder = this._fileTree;
    for (const segment of segments) {
         }
       }
       const [folderPath, basename] = this.splitIntoFolderAndFile(path);
    const {entity} = this.findFromPath(folderPath);
   , path,
to remove folder "${path}". The containing folder does not exist.`);
     }  isRoot(path: AbsoluteFsPath): boolean {
    return this.dirname(path) === path;
  }    }    return this._cwd;
  }  chdir(path: AbsoluteFsPath): void {
       // Mimic the node module resolution algorithm and start in the current directory, then look
       // /foo/node_modules, then /node_modules.    let path = 'node_modules/typescript/lib';
    let resolvedPath = this.resolve(path);    // Construct a path for the top-level node_modules to identify the stopping point.
    const topLevelNodeModules = this.resolve('/' + path);    while (resolvedPath !== topLevelNodeModules) {
         resolvedPath = this.resolve(path);
    }    // The loop exits before checking the existence of /node_modules/typescript at the top level.
       // within this directory. It might be okay, though, if TS never checks for one.
    return topLevelNodeModules;
  }  a  abstract basename(filePath: string, extension?: string): PathSegment;
  abstract isRooted(path: string): boolean;
  a    const mountFolder = this.ensureDir(path);    this.copyInto(folder, mountFolder);
  }  private cloneFolder(folder: Folder): Folder {
    c    for (const path in from) {
         if (isSymLink(item)) {
           to[canonicalPath] = from[path];
     }  protected findFromPath(path: AbsoluteFsP    const segments = this.splitPath(path);
    if (segments.length > 1 && segments[se      segments.pop();
    }    segments[0] = '';
         if (segments.length > 0) {
     not actually exist.
= nmediate directories that are themselves symlinks should always be followed
dless of `followSymLinks`, as otherwise the remaining segments would not be found.
his         if (isSymLink(current)) {
        if (followSymLinks) {
hisexport interface Folder {
  [pathSegments: string]: Entity;
}export class SymLink {
  c  constructor(private entity: Entity) {}
  isF  isSymbolicLink(): boolean {
   }class MockFileSystemError extends Error {
  c  return Buffer.isBuffer(item) || typeof item === 'string';
}ex}export function isFolder(item: Entity|null):}
