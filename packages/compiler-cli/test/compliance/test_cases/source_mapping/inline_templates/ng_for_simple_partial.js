.ɵɵelementStart(0, "div");\n // SOURCE: "/ng_for_simple.ts" "<div *ngFor="let item "
…
.ɵɵtext(1);\n // SOURCE: "/ng_for_simple.ts" "{{ item }}"
…
// TODO: Work out how to fix the broken segment for the last item in a template
.ɵɵelem // SOURCE: "/ng_for_simple.ts" "</div>'"
…
.ɵɵadvance(1);\n // SOURCE: "/ng_for_simple.ts" "{{ item }}"
…
.ɵɵtextInterpolate(item_r1);\n  }\n}\n\nclass  // SOURCE: "/ng_for_simple.ts" "{{ item }}"
…
.ɵɵtemplate(0, TestCmp_div_0_Template, 2, 1, "div", 0) // SOURCE: "/ng_for_simple.ts" "<div *ngFor="let item "
…
// TODO: Work out if we can split these two calls
.ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByFn) // SOURCE: "/ng_for_simple.ts" "of items; index as i; trackBy: trackByFn\">"