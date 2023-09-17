/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    // happens at runtime, we need to invoke change detection to trigger elementProperty call   /B    // happens at runtime, we need to invoke change detection to trigger elementProperty call
    it('should disallow binding to on* with NO_ERRORS_SCHEMA', () => {
      const template = `<div [onclick]="ctxProp"></div>`;           let cmp: ComponentFixture<SecuredComponent> = undefined!;
      expect(() => cmp = TestBed.createComponent(SecuredComponent)).not.toThrow();      // must bind to the directive not to the property of the div
      const value = cmp.componentInstance.ctxProp = {};
       c      const ci = fixture.componentInstance;
           TestBed.overrideComponent(SecuredComponent, {set: {template}});
      const fixture = TestBed.createComponent(SecuredComponent);      const ci = fixture.componentInstance;
      ci.ctxProp = trusted;
            expect(e.href).toMatch(/SafeValue(%20| )must(%20| )use/);
    });
  });        ci.ctxProp = 'hello';
         });    it('should escape unsafe attributes', () => {
      const template = `<a [attr.href]="ctxProp">Link Title</a>`;      @Directive({selector: '[dirHref]'})
      class HrefDirective {
        @HostBinding('href') @Input() dirHref: string|undefined;
      }      TestBed.overrideComponent(SecuredComponent, {set: {template}});
           const template = `<svg:circle [xlink:href]="ctxProp">Text</svg:circle>`;
      TestBed.overrideComponent(SecuredComponent, {set: {template}});      const spy = spyOn(console, 'error');
             const fixture = TestBed.createComponent(SecuredComponent);      const e = fixture.debugElement.children[0].nativeElement;
           c.toThrowError(/Translating attribute 'srcdoc' is disallowed for security reasons./);
    });    it('should throw error on security-sensitive attributes with interpolat    });
  });
});
