/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * file has already been l    }    let result = this.adapter.readResource(res        type: 'style',
         };
      result = Promise.resolve(result).then(async (str) => {
        const transformResult = await this.adapter.transformRe      });           this.fetching.      });
         }   * Preprocess the content data of an in   * @param data The existing content data from the inline resource.
      * same data string that was passed to the function will be resolved.
   */
  async preprocessInline(data: string, context: ResourceLoaderContext): Promise<string> {
    if (!this.adapter.transformResource || context.type !== 'style') {
      return data;
    }    if (transformResult === null) {    }    return transformResult.content;
  }   *   *
   *    */    }    const result = this.adapter.readResource ? this.adapter.readResource(resolvedUrl) :
  this.adapter.readFile(resolvedUrl);
    if (typeof result !== 'string') {
       this.cache.set(resolvedUrl, result);
    return result;
  }  /**
   * Invalidate the entire resource cache.
   */
  inv   * option from the tsconfig. First, normalize the file name.
   */
  pri    if (url.startsWith('/')) {
         // This path is a "relative" path and can be resolved as such. To make this easier on the
      // downstream resolver, the './' prefix is added if missing to distinguish these paths from
      // absolute node_modules paths.
           }             /**
user specified styleUrl points to *.scss, but the Sass compiler was run before
, then the resource may have been generated as *.css. Simply try the resolution        const cssFallbackUrl = candidate.replace(CSS_PREPROCESSOR_EXT, '.css');
        if (this.adapter.fileExists(cssFallbackUrl)) {
return cssFallbackUrl;
        }
      }
     }  private getRootedCandidateLocations(url: string): AbsoluteFsPath[] {
    // The path already starts with '/', so add a '.' to make it relative.
    const segment: PathSegment = ('.' + url) as PathSegment;
    r   * for the file by setting up a module resolution for it that will fail.
   */
  pri    // but is marked @internal in TypeScript. See
       // clang-format on
    if (failedLookup.failedLookupLocations === undefined) {
      throw new Error(
`Inte    }    return failedLookup.failedLookupLocations * mafunction createLookupResolutionHost(adapter: NgCompilerAdapter):
    RequiredDelegations<ts.ModuleResolutionHost> {
  return {
    directoryExists(directoryName: string): boolean {
      if (directoryName.includes(RESOURCE_MARKER)) {
        return false;
      } else if (adapter.directoryExists !== undefined) {
              return true;
      }
    },
    f    getCurrentDirectory: adapter.getCurrentDirectory.bind(adapter),
    getDirectories: adapter.getDirectories?.bind(adapter),
    r    useCaseSensitiveFileNames: typeof adapter.useCaseSensitiveFileNames === 'function' ?
     };