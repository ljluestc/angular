function MyComponent_li_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
$r3$.ɵɵelementStart(0, "li");
$r3$.ɵɵtext(1);
$r3$.ɵɵelementEnd();
  }
  if (rf & 2) {
const $info$ = ctx.$implicit;
const $item$ = $r3$.ɵɵnextContext().$implicit;
$r3$.ɵɵadvance(1);
$r3$.ɵɵtextInterpolate2(" ", $item$.name, ": ", $info$.description, " ");
  }
}  }
  if (rf & 2) {
const $item$ = ctx.$implicit;
$r3$.ɵɵadvance(2);
$r3$.ɵɵtextInterpolate(IDENT.name);
$r3$.ɵɵadvance(2);
$r3$.ɵɵproperty("forOf", IDENT.infos);
  }
}// ...
MyComponent.ɵcmp = /*@__PURE__*/ $r3$.ɵɵdefineComponent({
   decls: 2,
  vars: 1,
 if (rf & 1) {
  $r3$.ɵɵelementStart(0, "ul");
 }
if (rf & 2) {
 }
  },
  dependencies: function () { return [ForOfDirective]; },
  encapsulation: 2
});
