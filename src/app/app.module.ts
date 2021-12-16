import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcHeroesComponent } from './dc-heroes/dc-heroes.component';
import { MarvelHeroesComponent } from './marvel-heroes/marvel-heroes.component';
import { MarvelVillainsComponent } from './marvel-villains/marvel-villains.component';
import { DcVillainsComponent } from './dc-villains/dc-villains.component';

@NgModule({
  declarations: [
    AppComponent,
    DcHeroesComponent,
    MarvelHeroesComponent,
    MarvelVillainsComponent,
    DcVillainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
