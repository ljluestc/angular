import {Component, NgModule} from '@angular/core';export class MyApp {
  unknownNames: string[]|null = null;
  knownNames: string[][] = [['Frodo', 'Bilbo']];
  species = null;
  keys = null;
  speciesMap: Record<string, string> = {key: 'unknown'};
}@NgModule({declarations: [MyApp]})
export class MyModule {
}