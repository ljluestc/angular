function MyApp_For_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
$r3$.ɵɵtext(0);
  }
  if (rf & 2) {
const subitem_r5 = ctx.$implicit;
const item_r1 = $r3$.ɵɵnextContext().$implicit;
$r3$.ɵɵtextInterpolate2("", subitem_r5, " from ", item_r1.name, "");
  }
}$r3$.ɵɵrepeater(1, item_r1.subItems);
  }
}
…
function MyApp_Template(rf, ctx) {
  if (rf & 1) {
$r3$.ɵɵelementStart(0, "div");
$r3$.ɵɵtext(1);
$r3$.ɵɵrepeaterCreate(2, MyApp_For_3_Template, 3, 2, $r3$.ɵɵrepeaterTrackByIdentity);
$r3$.ɵɵelementEnd();
  }
  if (rf & 2) {
$r3$.ɵɵadvance(1);
$r3$.ɵɵtextInterpolate1(" ", ctx.message, " ");
$r3$.ɵɵrepeater(2, ctx.items);
  }
}
