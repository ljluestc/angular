function MyApp_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
$r3$.ɵɵtext(0);
  }
  if (rf & 2) {
const $inner_r3$ = $r3$.ɵɵnextContext();
const $root_r1$ = $r3$.ɵɵnextContext();
const $ctx_r4$ = $r3$.ɵɵnextContext();
$r3$.ɵɵtextInterpolate4(" Innermost: ", $ctx_r4$.value(), "/", $root_r1$, "/", $inner_r3$, "/", ctx, " ");
  }
}let MyApp_Conditional_0_Conditional_1_contFlowTmp;
$r3$.ɵɵtextInterpolate3(" Inner: ", $ctx_r2$.value(), "/", $root_r1$, "/", ctx, " ");
$r3$.ɵɵadvance(1);
$r3$.ɵɵconditional(1, (MyApp_Conditional_0_Conditional_1_contFlowTmp = $ctx_r2$.value()) ? 1 : -1, MyApp_Conditional_0_Conditional_1_contFlowTmp);
  }
}function MyApp_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
$  }
  if (rf & 2) {
c$r3$.ɵɵtextInterpolate2(" Root: ", $ctx_r0$.value(), "/", ctx, " ");
$r3$.ɵɵadvance(1);
$}
…
f$r3$.ɵɵtemplate(0, MyApp_Conditional_0_Template, 2, 3);
  }
  if (rf & 2) {
let MyApp_contFlowTmp;
$r3$.ɵɵconditional(0, (MyApp_contFlowTmp = ctx.value()) ? 0 : -1, MyApp_contFlowTmp);
  }
}