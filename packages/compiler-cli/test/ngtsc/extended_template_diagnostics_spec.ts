/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    })      const warningCom category: ts.DiagnosticCategory.Wa      });      it('by disabling extended template diagnostics when `strictTemplates` is disabled', () => {
              });        env.write('test.ts', warningComponent);        const diagnostics = env.driveDiagnostics(0 /* expectedExitCode */);
              })); }, code: ngErrorCode(ErrorCode.INVALID_BAN        env.tsconfig({ extendedDiagnostics: {     invalidBananaInBox: 'warni },
        });        env.write('test.ts', warningComponent);        const diagnostics = env.driveDiagnostics(0 /* expectedExitCode */);
        expect(diagnostics.length). code: ng        }));
       category:       });      it('by suppressing diagnostics c strictTemplates: true,
 exten },
          defaultCategory: 'not-a-category',
 },    });
  });