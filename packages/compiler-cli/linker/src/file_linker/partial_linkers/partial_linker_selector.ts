/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import semver from 'semver';export const ɵɵngDeclarePipe = 'ɵɵngDeclarePipe';
export const declarationFunctions = [  ɵɵngDeclareInjectable, ɵɵngDeclareInjector, ɵɵngDeclareNgModule,  range: semver.Range;
  linker: PartialLinker<TExpression>;
}/** * *
 * Versions should be sorted in ascending order. The most recent partial-linker will be used as the
  * ```
 * {range: getRange('<=', '13.0.0'), linker PartialDirectiveLinkerVersion2(...) },
 * {range: getRange('<=', '13.1.0'), linker PartialDirectiveLinker *
 * If the `LATEST_VERSION_RANGE` is `<=15.0.0` then the fallback linker would be
  * When there is a change to a declaration interface that requires a new partial-linker, the
 * `minVersion` of the partial-declaration should be updated, the new linker implementation should
 * be added to the end of the collection, and the version of the p    code: string): Map<string, LinkerRange<TExpression>[]> {
  const linkers = new Map<string, LinkerRange<TExpression>[]>();
   ]);
  linkers.set(ɵɵngDeclareClassMetadata, [
    {range: LATEST_VERSION_RANGE, linker: new PartialClassMetadataLinkerVersion1()},
      {
      range: LATEST_VERSION_RANGE,
      linker: new PartialComponentLinkerVersion1(
t    {range: LATEST_VERSION_RANGE, linker: new PartialFactoryLinkerVersion1()},
  ]);
  linkers.set(ɵɵngDeclareInjectable, [
    linkers.set(ɵɵngDeclareInjector, [
    {range: LATEST_VERSION_RANGE, linker: new PartialInjectorLinkerVersion1()},
  ]);
     },
  ]);
  linkers.set(ɵɵngDeclarePipe, [
    {range: LATEST_VERSION_RANGE, linker: new PartialPipeLinkerVersion1()},
  ]);  return linkers;
}/**
 * A helper that selects the appropriate `PartialLinker` for a given declaration.
 *
 * The selection is made from a database of linker instances, chose *
 * Note that the ranges are checked in order, and the first matching range will be selected. So
 * ranges should be most restrictive first. In practice, since ranges are always `<=X.Y.Z` this
 * means that ranges should be in ascending order.
 *
 * Note that any "pre-release" versions are stripped from ranges. Therefore if a `minVersion` is
 * `1 * boundaries.)
   constructor(
      private readonly linkers: Map<string, LinkerRange<TExpression>[]>,
      private readonly logger: Logger,
      private readonly unknownDeclarationVersionHandling: 'ignore'|   */
  supportsDeclaration(functionName: string): boolean {
    return this.linkers.has(functionName);
  }  /**
   * Returns the `PartialLinker` that can handle functions with the given name and version.
   * Throws an error if there is none.
   */    if (!this.linkers.has(functionName)) {
     const linkerRanges = this.linkers.get(functionName)!;    if (version === '0.0.0-PLACEHOLDER') {
      // Special case if the `version` is the same as the current compiler version.
      // This helps with compliance tests where the version placeholders have not been replaced.
      return linkerRanges[linkerRanges.length - 1].linker;    for (        return linker;
      }
    }    const message =
           `Consider upgrading your application to use a more recent version of Angular.`;    if (this.unknownDeclarationVersionHandling === 'error') {
      throw new Error(message);
    } else if (this.unknownDeclarationVersionHandling === 'warn') {
         return linkerRanges[linkerRanges.length - 1].linker;
  * Compute a semver Range from the `version` and comparat * The range is computed as any version greater/less than or equal to the given `versionStr`
 * depending upon the `comparator` (ignoring any prerelease versions).
 *
 * @param comparator a string that determines whether the version specifies a minimum */
function getRange(comparator: '<='|'>=', versionStr: string): semver.Range {
  const version = new semver.SemVer(versionStr);
  // Wipe out any prerelease versions
  ver}
