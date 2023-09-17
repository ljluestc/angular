import {Component, NgModule} from '@angular/core';  <div i18n-title="@@idF" title="Title F">Content F</div>
  <div i18n-title="[BACKUP_$\{MESSAGE}_ID:idH]\`desc@@idG" title="Title G">Content G</div>
  <div i18n="Some text \\' [BACKUP_MESSAGE_ID: xxx]">Content H</div>
`
})
export class MyComponent {
}@NgModule({declarations: [MyComponent]})
export class MyModule {
}