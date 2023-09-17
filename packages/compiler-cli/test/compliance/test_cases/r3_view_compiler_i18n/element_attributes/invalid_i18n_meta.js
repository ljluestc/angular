// NOTE: Keeping raw content (avoiding `__i18nMsg__` macro) to illustrate message id sanitization.
let $I18N_0$;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
  /**
   * @suppress {msgDescriptions}
   */
  const $MSG_EXTERNAL_ID_WITH_INVALID_CHARS$$APP_SPEC_TS_1$ = goog.getMsg("Element title");
  $I18N_0$ = $MSG_EXTERNAL_ID_WITH_INVALID_CHARS$$APP_SPEC_TS_1$;
} else {
  $I18N_0$ = $localize`:@@ID.WITH.INVALID.CHARS:Element title`;
}