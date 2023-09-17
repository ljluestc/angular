/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}export function mainDiagnosticsForTest(
    args: string[], config       return {
     };
  }  let oldProgram: api.Program|undefined    rootNames,
    options,
       modifiedResourceFiles,
   }  return {
     };
}ex}ex  const parsedArgs =
      yargs(args)
onfiguration({'strip-aliased': true})
'i1'locale', {type: 'string'})
'  i  if (parsedArgs.missingTranslation)
         args, options, ['i18nFile', 'i18nFormat', 'locale', 'missingTranslation', 'watch']);
            const msg = e.messageText;
      return !ngCmdLineOptions.some(o => msg.indexOf(o) >= 0);
    }
     if (cmdErrors.length) {
      const config = readConfiguration(project, cmdConfig.options);
  c  return {
   }      // We need to normalize the path separators here because by default, TypeScript
    // compiler hosts use posix canonical paths. In order to print consistent diagnostics,
    // we also normalize the paths.
    getCanonicalFileName: fileName => fileName.replace(/\\/g, '/'),
    getNewLine: () => {
      // Manually determine the proper new line string based on the passed compiler
    }function reportErrorsAndExit(
     printDiagnostics(errorsAndWarnings, options, consoleError);
     printDiagnostics(diagnostics, options, consoleError);
  }, options, undefined));
}    const formatHost = getFormatDiagnosticsHost(options);
  consoleError(formatDiagnostics(diagnostics, formatHost));
}
