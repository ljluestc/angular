/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}/** */  };export function isFileShimSourceFile(sf: ts.SourceFile): sf is NgFileShimSourceFile {
 }/**
 export function copyFileShimDat    return;
 }/**    untagTsFile(sf);}/**
 * For those `ts.SourceFile`s in the `program` which have previously been tagged by a
  *  for (const sf of program.getSourceFiles()) {
    retagTsFile(sf);
    }
} * tagged.export function retagTsFile(sf: ts.SourceFile): void {
      sf.referencedFiles = ext.taggedReferenceFiles as Array<ts.FileReference>;
 