// #docplaster
// #docregion
// #docregion first-config
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroListComponent} from './hero-list/hero-list.component';
// #enddocregion first-config
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// #docregion first-config

const appRoutes: Routes = [
  {path: 'crisis-center', component: CrisisListComponent},
  {path: 'heroes', component: HeroListComponent},
  // #enddocregion first-config

  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  // #docregion wildcard
  {path: '**', component: PageNotFoundComponent}  // #enddocregion wildcard
     // #docregion first-config
];

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(
        appRoutes, {enableTracing: true}  // <-- debugging purposes only
        )
  ],
  declarations: [
    AppComponent, HeroListComponent, CrisisListComponent,
    // #enddocregion first-config
    PageNotFoundComponent
    // #docregion first-config
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
// #enddocregion
